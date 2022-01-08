// FireBase
import { collection, getDocs, query } from "firebase/firestore";

import { db } from "../firebase/firebaseConfig";

export const getProductos = async () => {
  try {
    const productosSnapshot = await getDocs(query(collection(db, "productos")));

    const productosList = productosSnapshot.docs.map((documento) => {
      return {
        id: documento.id,
        ...documento.data(),
      };
    });
    return productosList;
    
  } catch (error) {
    console.log(error);
  }
};
