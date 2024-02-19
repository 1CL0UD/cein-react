import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import SkinCarePage from './pages/shop/skin-care/SkinCarePage.tsx';
import ProductPage from './pages/products/ProductPage.tsx';
import CartPage from './pages/cart/CartPage.tsx';

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
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
