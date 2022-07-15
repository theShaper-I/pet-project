import React, { useEffect, useState } from 'react';
import './index.css';
import './scss/sidebar.scss';
import Sidebar from './components/Sidebar';
import CartView from './components/Cart/CartView';
import Content from './components/Layout/Content';
import { productList } from './utils/products.utils';

function App() {
  return (
    <div className="container mx-auto justify-center flex">
      <Sidebar />
      <Content />
      <CartView product={productList} />
    </div>
  );
}

export default App;
