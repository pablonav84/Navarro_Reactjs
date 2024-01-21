import axios from "axios";

/**
 * @name getProducts
 * @description Traer productos de dummyjson API
 * @param {number} limit
 * @returns {Promise}
 */


export async function getProductByCategory (category){
    return await axios.get (`https://dummyjson.com/products/category/${category}`) ;
 }