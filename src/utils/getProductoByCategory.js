import { collection, query, where, getDocs } from "firebase/firestore";

import { db } from "../firebase/firebaseConfig";

export const getProductoByCategory = async (categoryId) => {
  try {
    const querySnapshot = await getDocs(
      query(collection(db, "productos"), where("id", "==", categoryId ))
    );
    const productoByCategory = querySnapshot.docs.map((documento) => {
      return {
        id: documento.id,
        ...documento.data(),
      };
    });
    return productoByCategory

  } catch (error) {
    console.log(error);
  }
};