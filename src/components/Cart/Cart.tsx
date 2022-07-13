import React, {FC, useEffect, useState} from 'react';
import firstItem from '../../assets/items/item-1.png';
import secondItem from '../../assets/items/item-2.png';
import thirdItem from '../../assets/items/item-3.png';
import viewBagIcon from '../../assets/view-bag-icon.svg';
import Button from '../UI/Button';
import { Product } from '../../types/product.types';
import CartItem from './CartItem';
import {productList} from "../../utils/products.utils";

interface CartProps {
  product: Product[];
}

const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]')

const Cart: FC<CartProps> = ({ product }) => {
  const [cart, setCart] = useState(cartFromLocalStorage);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log(localStorage)
  }, [cart]);

  const getCartTotal = () => {
    // return cart.reduce((sum, { product. }) => sum + quantity, 0);
  }

  return (
    <div className="bag mt-12 w-[22rem] ">
      <div className="divider border-l-4 h-[821px] border-gray-500 absolute" />

      <h2 className="text-4xl text-[#1A1F16] text-center mt-6">Bag</h2>

      <div className="bag-items w-[18rem] h-[18rem] flex justify-between items-baseline gap-4 grid-cols-4 grid-rows-3 flex-wrap items-center ml-8 mt-[18px] justify-between">
        {/*{cartItems.length === 0 ? <p>No items in cart.</p> : null}*/}
        {productList.map(product => (
            <CartItem
                key={product.productId}
                product={product}
            />
        ))}
      </div>
      <Button
        image={viewBagIcon}
        buttonText="Checkout"
        onClick={() => console.log('You clicked on the orange circle!')}
      />
    </div>
  );
};

export default Cart;
