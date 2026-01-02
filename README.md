# Onsite-4 E-Commerce Application

A modern e-commerce web application built with React, Vite, and Tailwind CSS. This application demonstrates a fully functional frontend with product browsing, category filtering, and product details. It also includes dark mode support and responsive design.

## Features

-   **Product Catalog**: Browse a wide range of products fetched from a fake store API.
-   **Category Filtering**: Filter products by categories like Electronics, Jewelery, Men's Clothing, and Women's Clothing.
-   **Product Details**: View detailed information about each product.
-   **Dark Mode**: Seamlessly switch between light and dark themes.
-   **Responsive Design**: Optimized for all device sizes using Tailwind CSS.
-   **State Management**: Efficient state handling using React Context API.

## Tech Stack

-   **Frontend Framework**: [React](https://react.dev/)
-   **Build Tool**: [Vite](https://vitejs.dev/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Routing**: [React Router](https://reactrouter.com/)
-   **HTTP Client**: [Axios](https://axios-http.com/)
-   **API**: [Fake Store API](https://fakestoreapi.com/)

## Getting Started

### Prerequisites

Ensure you have Node.js installed on your machine.

### Installation

1.  Clone the repository.
2.  Navigate to the project directory:
    ```bash
    cd "Yousef Amr Onsite-4 - Copy"
    ```
3.  Install dependencies:
    ```bash
    npm install
    ```

### Running the Application

Start the development server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

## Project Structure

-   `src/components`: Reusable UI components (Header, ProductCard, ThemeToggle).
-   `src/context`: Global state management (ProductsContext).
-   `src/pages`: Application views (ProductDetails, Home, etc.).
