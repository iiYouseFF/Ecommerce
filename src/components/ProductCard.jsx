import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard({ product }) {
  return (
    <div className="group bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 flex flex-col h-full hover:-translate-y-1">
      <div className="relative p-6 bg-white dark:bg-gray-800 h-64 flex items-center justify-center overflow-hidden transition-colors duration-200">
        <img
          className="max-h-52 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
          src={product.image}
          alt={product.title}
        />
        <div className="absolute top-3 right-3 bg-white/90 dark:bg-gray-700/90 backdrop-blur rounded-full px-2 py-1 text-xs font-bold text-gray-700 dark:text-gray-200 shadow-sm border border-gray-100 dark:border-gray-600">
          {product.category}
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col pt-0">
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2 mt-4">
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-xs font-medium text-gray-500 dark:text-gray-400">{product.rating?.rate} ({product.rating?.count})</span>
            </div>
          </div>
          <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100 leading-tight mb-2 line-clamp-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {product.title}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed h-10">
            {product.description}
          </p>
        </div>

        <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-50 dark:border-gray-700">
          <p className="text-xl font-bold text-gray-900 dark:text-white">
            ${product.price ? product.price.toFixed(2) : '0.00'}
          </p>
          <Link to={`/product/${product.id}`} className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md focus:ring-4 focus:ring-blue-100 dark:focus:ring-blue-900 active:scale-95">
            See Details
          </Link>
        </div>
      </div>
    </div>
  )
}
