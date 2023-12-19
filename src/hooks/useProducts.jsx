//Creo este hooks para aislar a todos los productos que quiero usar en mi app
//A través de esta llamada voy a traer todos los productos al dom

import {useState, useEffect} from "react";
import {getProducts} from "../services";

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