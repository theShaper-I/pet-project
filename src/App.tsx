import React from 'react';
import './index.css'
import './scss/sidebar.scss'
import Sidebar from "./components/Sidebar";
import ItemList from "./components/ItemList";
import Bag from "./components/Bag/Bag";
import {Product, ProductType} from "./components/ProductItem/product.types";
import Content from "./components/Content";

function App() {

  return (
    <div className="container mx-auto flex">
        <Sidebar />
        <Content />
        <Bag />
    </div>
  );
}

export default App;
