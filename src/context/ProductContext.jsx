import { createContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const ProductContext = createContext();

const id = useParams("id")
export const ProductProvider = ({ children }) => {
    const [product, setProduct] = useState([]);
    const fetchProduct = async (id) => {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
        setProduct(response.data)   
    }

    useEffect(() => {
        fetchProduct(id)
    }, [id])

    return (
        <ProductContext.Provider value={{ product }}>
            {children}
        </ProductContext.Provider>
    )
}