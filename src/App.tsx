import React, { useEffect, useState } from 'react';
import './index.css';
import './scss/sidebar.scss';
import Sidebar from './components/Sidebar';
import CartView from './components/Cart/CartView';
import Content from './components/Layout/Content';
import { productList } from './utils/products.utils';

function App() {
  return (
    <div className="container justify-between flex">
      <Sidebar />
      <Content />
      <CartView products={productList} />
    </div>
  );
}

export default App;
