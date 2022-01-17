import { query, getDoc, doc } from "firebase/firestore";

import { db } from "../../firebase/firebaseConfig";

export const getProductosById = async (id) => {
  try {
    const OneProductSnapshot = await getDoc(query(doc(db, "productos", id)));
    const productoById = {
      id: OneProductSnapshot.id,
      ...OneProductSnapshot.data(),
    };
    return productoById;
  } catch (error) {
    console.log(error);
  }
};
