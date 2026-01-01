import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <>
      <div className="bg-gray-50 min-h-[calc(100vh-64px)] flex items-center justify-center px-4">
        <div className="flex flex-col items-center text-center max-w-lg mx-auto">
          {/* 404 Text */}
          <div className="relative">
            <h1 className="text-9xl font-black text-gray-200 select-none">404</h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-bold text-gray-800 bg-gray-50 px-4">Oops!</span>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-4 mb-3">Page not found</h2>

          <p className="text-gray-600 mb-8 leading-relaxed max-w-md">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>

          <Link
            to="/"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-0.5 focus:ring-4 focus:ring-blue-100 group"
          >
            <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </>
  )
}
