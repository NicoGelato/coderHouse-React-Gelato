// FireBase
import { collection, getDocs, query } from "firebase/firestore";

import { db } from "../firebase/firebaseConfig";

export const getProductos = async () => {
  try {
    const productosColection = query(collection(db, "productos"));
    const productosSnapshot = await getDocs(productosColection);

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
