import React, { FC } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import ProductsList from '../../pages/ProductsList';
import CartProductsPage from '../../pages/CartProductsPage';
import ProductPage from '../../pages/ProductPage';
import { productList } from '../../utils/products.utils';

const Content: FC = () => (
  <div className="content mx-auto">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductsList products={productList} />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/bag" element={<CartProductsPage  products={productList}/>} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default Content;
