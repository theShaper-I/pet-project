import React from 'react';
import Sidebar from '../Sidebar';
import Content from './Content';
import { productList } from '../../utils/products.utils';
import CartView from '../Cart/CartView';
import Checkout from '../Modal/Checkout';
import AddPayment from '../Modal/AddPayment';

function Layout() {
  return (
    <div className="flex">
      <Checkout />
      <AddPayment />
      <Sidebar className="" />
      <Content />
      <CartView products={productList} />
    </div>
  );
}

export default Layout;
