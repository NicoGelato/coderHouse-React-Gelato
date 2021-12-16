import { collection, query, where, getDocs } from "firebase/firestore";

import { db } from "../firebase/firebaseConfig";

export const getProductosByCategory = async (categoryId) => {
  try {
    const querySnapshot = await getDocs(
      query(collection(db, "productos"), where("categoryId", "==", categoryId))
    );

    const productosByCategory = querySnapshot.docs.map((documento) => {
      return {
        id: documento.id,
        ...documento.data(),
      };
    });
    return productosByCategory;
  } catch (error) {
    console.log(error);
  }
};