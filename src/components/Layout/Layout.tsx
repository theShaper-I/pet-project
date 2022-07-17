import React from 'react';
import Sidebar from '../Sidebar';
import Content from './Content';
import {productList} from "../../utils/products.utils";
import CartView from "../Cart/CartView";
import Checkout from "../../pages/Checkout";

function Layout() {
  return (
    <div className="flex">
      <Sidebar className="" />
      <Content />
      <CartView products={productList} />
      <Checkout />
    </div>
  );
}

export default Layout;
