import React, { FC } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import ProductsList from '../../pages/ProductsList';
import KartProductsPage from '../../pages/KartProductsPage';
import ProductPage from '../../pages/ProductPage';
import { productList } from '../../utils/products.utils';

const Content: FC = () => (
  <div className="content">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductsList products={productList} />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/bag" element={<KartProductsPage />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default Content;
