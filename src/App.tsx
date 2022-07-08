import React from 'react';
import { Routes, Route } from "react-router-dom";
import './scss/sidebar.scss'
import './index.css'
import Sidebar from "./components/Sidebar";
import ItemList from "./components/ItemList";
import Bag from "./components/Bag";
import {Product, ProductType} from "./components/ProductItem/product.types";

function App() {
    const productList: Product[] = [
        { productId: 1, type: ProductType.Watch, productTitle: "Apple Watch", productSubTitle: "Series 5 SE",
            fullDescription: "lorem lorem", shortDescription: "lorem", price: 529, quantity: 1,
            photoPath: "https://i.ibb.co/cwvkb0z/Name-Watch.png"
        },
        { productId: 2, type: ProductType.Headphones, productTitle: "Sony ZX330BT", productSubTitle: "Light Grey",
            fullDescription: "lorem lorem", shortDescription: "lorem", price: 39, quantity: 1,
            photoPath: "https://i.ibb.co/t850R8j/Name-Headphones.png"
        },
        { productId: 3, type: ProductType.Phone, productTitle: "Iphone 11", productSubTitle: "Serious Black",
            fullDescription: "lorem lorem", shortDescription: "lorem", price: 619, quantity: 1,
            photoPath: "https://i.ibb.co/Y3593Wh/Name-Iphone-12-01.png"
        },
        { productId: 4, type: ProductType.Phone, productTitle: "Iphone 11", productSubTitle: "Subway Blue",
            fullDescription: "lorem lorem", shortDescription: "lorem", price: 619, quantity: 1,
            photoPath: "https://i.ibb.co/fvbpYGw/Name-Iphone-12-02.png"
        },
        { productId: 4, type: ProductType.Phone, productTitle: "Macbook Pro 16”", productSubTitle: "Silver - M1 Pro",
            fullDescription: "lorem lorem", shortDescription: "lorem", price: 3249, quantity: 1,
            photoPath: "https://i.ibb.co/fvbpYGw/Name-Iphone-12-02.png"
        }
    ];

  return (
    <div className="container mx-auto flex">
        <Sidebar />
        <ItemList products={productList} />
        <Bag />
    </div>
  );
}

export default App;
