import axios from "axios";

/**
 * @name getProducts
 * @description Traer productos de dummyjson API
 * @param {number} limit
 * @returns {Promise}
 */
export async function getProducts(limit = 10) {
    return await axios.get(`https://dummyjson.com/products?limit=${limit}`)
}

export async function getProductById(id) {
    return await axios.get(`https://dummyjson.com/products/${id}`)
}

export async function getCategories() {
    return await axios.get(`https://dummyjson.com/products/categories`)
}

export async function getProductsByCategory(id) {
    return await axios.get(`https://dummyjson.com/products/category/${id}`)
}