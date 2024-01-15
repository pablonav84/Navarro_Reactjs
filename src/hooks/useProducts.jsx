//Creo este hooks para aislar a todos los productos que quiero usar en mi app
//A través de esta llamada voy a traer todos los productos al dom

import {useState, useEffect} from "react";
import {getCategories, getProducts, getProductById, getProductsByCategory} from "../services";
import { collection, getDocs, getFirestore } from "firebase/firestore";

/**
 * @description Custom Hooks para obtener productos
 * @returns {Array}
 */
export const useGetProducts = (C) => {
    const [productsData, setProductsData] = useState([]);

    useEffect(() => {
      const db = getFirestore();

      const productCollection = collection(db, "products");

      getDocs(productCollection).then((snapshot) => {
        setProductsData(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      });
    }, []);

        
        return {productsData}
}

export const useGetProductById = (id) => {

  const [productData, setProductData] = useState({});

  useEffect(() => {
    getProductById(id)
    .then((response) => {
      setProductData(response.data)
    })
    .catch((error) => {
      console.log(error);
    });
    }, []);

    //Devuelve un objeto
    return {productData}
}

export const useGetCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
      getCategories()
      .then((response) => {
        setCategories(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
      }, []);

      //Devuelve un objeto
      return {categories}
}

export const useGetProductsByCategory = (id) => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
      getProductsByCategory(id)
      .then((response) => {
        setProductsData(response.data.products)
      })
      .catch((error) => {
        console.log(error);
      });
      }, [id]);

      //Devuelve un objeto
      return {productsData}
}