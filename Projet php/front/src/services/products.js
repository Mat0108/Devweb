import axios from "axios";
export const getProductByCateroyByName = async (categoryId) => {
    const res = await axios.get(`http://localhost:5000/api/products-category/${categoryId}`);
    return res.data;
}

export const getCategoryName = async (categoryId) => {
    const res = await axios.get(`http://localhost:5000/api/products-category/name/${categoryId}`);
    return res.data;
}
export const getProduct = async (productId) => {
    const res = await axios.get(`http://localhost:5000/api/products/${productId}`);
    return res.data;
}
export const getProducts = async (categoryId) => {
    const res = await axios.get(`http://localhost:5000/api/products/`);
    return res.data;
}
export const SearchProduct = async(texte) => {
    const res = await axios.get(`http://localhost:5000/api/products/search/${texte}`);
    return res.data;
}
