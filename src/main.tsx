import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import SkinCarePage from './pages/shop/skin-care/SkinCarePage.tsx';
import ProductPage from './pages/products/ProductPage.tsx';
import CartPage from './pages/cart/CartPage.tsx';
import Login from './pages/authentication/Login.tsx';
import Register from './pages/authentication/Register.tsx';
import AboutPage from './pages/about/AboutPage.tsx';
import BlogListing from './pages/blog/BlogListing.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/shop/skin-care',
    element: <SkinCarePage />,
  },
  {
    path: '/products/product-1',
    element: <ProductPage />,
  },
  {
    path: '/cart',
    element: <CartPage />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/blog',
    element: <BlogListing />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
