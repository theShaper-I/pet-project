import React, { useEffect, useState } from 'react';
import viewBagIcon from '../../assets/view-bag-icon.svg';
import Button from '../UI/Button';
import { Product } from '../../types/product.types';
import CartItem from './CartItem';
import CART from '../../utils/CART';
import clsx from "clsx";

type CartProps = {
  products: Product[];
} & React.ComponentProps<'div'>;

function CartView({ className, products }: CartProps) {

  useEffect(() => {
    CART.init();
  }, [CART.items]);

  return (
    <div className={clsx("bag mt-12 w-[22rem]", className)}>
      <div className="divider border-l-4 h-[821px] border-gray-500 absolute" />

      <h2 className="text-4xl text-[#1A1F16] text-center mt-6">Bag</h2>

      <div className="bag-items w-[18rem] h-[18rem] flex justify-between items-baseline gap-4 grid-cols-4 grid-rows-3 flex-wrap items-center ml-8 mt-[18px] justify-between">
        {CART.items.map((product) => (
          <CartItem key={product.productId} photoPath={product.photoPath} quantity={product.quantity} />
        ))}
      </div>
      <div className={'text-[20px] block mx-auto'}>Bag Total: </div>
      <Button
        image={viewBagIcon}
        buttonText="View Bag"
        onClick={() => console.log('You clicked on the orange circle!')}
      />
    </div>
  );
};

export default CartView;
