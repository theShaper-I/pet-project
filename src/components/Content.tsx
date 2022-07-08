import React, {FC} from 'react';
import ItemList from "./ItemList";
import {Product, ProductType} from "./ProductItem/product.types";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import BagItems from "./Bag/BagItems";
import ItemPage from "./ItemPage";

const Content:FC = () => {
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
        { productId: 5, type: ProductType.Laptop, productTitle: "Macbook Pro 16”", productSubTitle: "Silver - M1 Pro",
            fullDescription: "lorem lorem", shortDescription: "lorem", price: 3249, quantity: 1,
            photoPath: "https://i.ibb.co/QXrJy4d/Name-Macbook.png"
        },
        { productId: 6, type: ProductType.Phone, productTitle: "Iphone 11", productSubTitle: "Product RED",
            fullDescription: "lorem lorem", shortDescription: "lorem", price: 619, quantity: 1,
            photoPath: "https://i.ibb.co/5KpXr7p/Name-Iphone-12-03.png"
        },
        { productId: 7, type: ProductType.Phone, productTitle: "Iphone 11", productSubTitle: "Milky White",
            fullDescription: "lorem lorem", shortDescription: "lorem", price: 619, quantity: 1,
            photoPath: "https://i.ibb.co/fQdyFV5/Name-Iphone-12-04.png"
        },
    ];

    return (
        <div className='content'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<ItemList products={productList} />}/>
                    <Route path='/product/:id' element={<ItemPage />} />
                    <Route path='/bag' element={<BagItems />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Content;
