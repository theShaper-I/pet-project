import React, {useEffect, useState} from 'react';
import './index.css';
import './scss/sidebar.scss';
import Sidebar from './components/Sidebar';
import Cart from './components/Cart/Cart';
import Content from './components/Layout/Content';
import {productList} from "./utils/products.utils";

function App() {
  return (
    <div className="container mx-auto justify-center flex">
      <Sidebar />
      <Content />
      <Cart product={productList} />
    </div>
  );
}

export default App;
