import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

export default function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    const getProduct = async () => {
        try {
            setLoading(true)
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
            setProduct(response.data)
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getProduct()
    }, [id])


    if (loading) {
        return (
            <>
                <div className="flex justify-center items-center min-h-[60vh]">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
                </div>
            </>
        )
    }

    if (!product) {
        return (
            <>
                <div className="container mx-auto px-4 py-16 text-center">
                    <h2 className="text-2xl font-semibold text-gray-800">Product not found</h2>
                    <p className="text-gray-500 mt-2">The product you are looking for does not exist.</p>
                </div>
            </>
        )
    }

    return (
        <>
            <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-12 transition-colors duration-200">
                <div className="container mx-auto px-4 md:px-6">
                    {/* Breadcrumb */}
                    <nav className="flex mb-8 text-sm text-gray-500 dark:text-gray-400" aria-label="Breadcrumb">
                        <ol className="inline-flex items-center space-x-1 md:space-x-3">
                            <li className="inline-flex items-center">
                                <Link to="/" className="inline-flex items-center hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                                    </svg>
                                    Home
                                </Link>
                            </li>
                            {product.category && (
                                <li>
                                    <div className="flex items-center">
                                        <svg className="w-6 h-6 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                                        </svg>
                                        <span className="ml-1 md:ml-2 font-medium text-gray-700 dark:text-gray-300 capitalize">
                                            {product.category}
                                        </span>
                                    </div>
                                </li>
                            )}
                            <li aria-current="page">
                                <div className="flex items-center">
                                    <svg className="w-6 h-6 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                                    </svg>
                                    <span className="ml-1 md:ml-2 font-medium text-gray-400 dark:text-gray-500 truncate max-w-[150px] md:max-w-xs">
                                        {product.title}
                                    </span>
                                </div>
                            </li>
                        </ol>
                    </nav>

                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden transition-colors duration-200">
                        <div className="grid md:grid-cols-2 gap-0">
                            {/* Product Image Section */}
                            <div className="p-8 md:p-12 lg:p-16 flex items-center justify-center bg-white dark:bg-gray-800 transition-colors duration-200">
                                <div className="relative group w-full max-w-md mx-auto">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-full h-auto object-contain max-h-[500px] transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                            </div>

                            {/* Product Info Section */}
                            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-gray-50/50 dark:bg-gray-700/30">
                                <div className="mb-2">
                                    <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase bg-blue-50 dark:bg-blue-900/20 rounded-full">
                                        {product.category}
                                    </span>
                                </div>

                                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                                    {product.title}
                                </h1>

                                {/* Rating */}
                                <div className="flex items-center gap-2 mb-6">
                                    <div className="flex text-yellow-400">
                                        {[...Array(5)].map((_, i) => (
                                            <svg
                                                key={i}
                                                className={`w-5 h-5 ${i < Math.round(product.rating?.rate || 0) ? 'fill-current' : 'text-gray-300 dark:text-gray-600 fill-current'}`}
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                        {product.rating?.rate} ({product.rating?.count} reviews)
                                    </span>
                                </div>

                                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                                    ${product.price ? product.price.toFixed(2) : '0.00'}
                                </div>

                                <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-lg text-justify">
                                    {product.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
