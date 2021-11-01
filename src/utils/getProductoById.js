import { collection, query, where, getDocs } from "firebase/firestore";

import { db } from "../firebase/firebaseConfig";

export const getProductoById = async () => {
  try {
    const querySnapshot = await getDocs(query(collection(db, "productos")));

    
    
    console.log("Hola soy el querySnapshot", querySnapshot.docs);
    const productoByCategory = querySnapshot.docs.map((documento) => {
      return {
        id: documento.id,
        ...documento.data(),
      };
    });

    return productoByCategory;
  } catch (error) {
    console.log(error);
  }
};
