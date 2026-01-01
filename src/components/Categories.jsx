import React, { useContext } from 'react'
import { ProductsContext } from '../context/ProductsContext';

export default function Categories() {
  const { categories, selectedCategory, setSelectedCategory } = useContext(ProductsContext);

  const allCategories = ["all", ...categories];

  return (
    <div className="flex flex-wrap items-center justify-center gap-3 py-8">
      {allCategories.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`
                        px-6 py-2.5 rounded-full text-sm font-semibold capitalize transition-all duration-300 transform hover:-translate-y-0.5
                        ${selectedCategory === category
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 ring-2 ring-offset-2 ring-blue-600'
              : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 hover:shadow-md hover:text-blue-600'
            }
                    `}
        >
          {category}
        </button>
      ))}
    </div>
  )
}
