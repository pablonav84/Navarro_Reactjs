//Creo este hooks para aislar a todos los productos que quiero usar en mi app
//A través de esta llamada voy a traer todos los productos al dom

import {useState, useEffect} from "react";
import {getProducts, getProductById, getProductByCategory} from "../services";

/**
 * @description Custom Hooks para obtener productos
 * @returns {Array}
 */
export const useGetProducts = (limit = 10) => {
    const [productsData, setProductsData] = useState([]);

    useEffect(() => {
        getProducts(limit)
        .then((response) => {
          setProductsData(response.data.products)
        })
        .catch((error) => {
          console.log(error);
        });
        }, []);

        //Devuelve un objeto
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


export const useGetProductByCategory = (category) => {

  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    getProductByCategory(category)
    .then((response) => {
      setProductsData(response.data.products)
    })
    .catch((error) => {
      console.log(error);
    });
    }, [category]);

    //Devuelve un objeto
    return {productsData}
}