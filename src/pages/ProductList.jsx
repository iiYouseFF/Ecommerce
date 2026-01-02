import React, { useContext } from 'react';
import ProductCard from '../components/ProductCard';
import { ProductsContext } from '../context/ProductsContext';
import Categories from '../components/Categories';

export default function ProductList() {
    const { filteredProducts, loading } = useContext(ProductsContext);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[50vh]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 pb-12">
            <Categories />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            {filteredProducts.length === 0 && (
                <div className="text-center py-20">
                    <p className="text-gray-500 dark:text-gray-400 text-lg">No products found in this category.</p>
                </div>
            )}
        </div>
    );
}
