import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductsList from '../../pages/ProductsList';
import CartProductsPage from '../../pages/CartProductsPage';
import ProductPage from '../../pages/ProductPage';
import { productList } from '../../utils/products.utils';

const Content: FC = () => (
  <div className="content mx-auto">
    <Routes>
      <Route path="/" element={<ProductsList products={productList} />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/bag" element={<CartProductsPage products={productList} />} />
    </Routes>
  </div>
);

export default Content;
