import React, { useEffect, useState } from 'react';
import CART from '../../utils/CART';
import { Product } from '../../types/product.types';
import viewBagIcon from '../../assets/view-bag-icon.svg';
import Button from '../UI/Button';
import CartItem from './CartItem';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';

type CartProps = {
  products: Product[];
} & React.ComponentProps<'div'>;

function CartView({ className, products }: CartProps) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    CART.init();
    console.log(CART.items);
  }, [CART.items]);

  return (
    <div className={clsx('bag mt-12 w-1/5', className)}>
      <div className="divider border-l-4 h-[821px] border-gray-500 absolute rounded-2xl" />

      <h2 className="text-4xl text-[#1A1F16] text-center mt-6">Bag</h2>

      <div className="bag-items w-[18rem] min-h-[18rem] flex justify-between items-baseline gap-4 grid-cols-4 grid-rows-3 flex-wrap items-center ml-8 mt-[18px] justify-between">
        {CART.items.map((product) => (
          <CartItem key={product.productId} photoPath={product.photoPath} quantity={product.quantity} />
        ))}
      </div>
      {/*<div className={'text-[20px] block text-center'}>Bag Total: </div>*/}
      <Button image={viewBagIcon} buttonText="View Bag" onClick={() => ''} />
    </div>
  );
}

export default CartView;
