import React from 'react';
import viewBagIcon from '../../assets/view-bag-icon.svg';
import Button from '../UI/Button';
import CartItem from './CartItem';
import clsx from 'clsx';
import {useShoppingCart} from "../../context/ShoppingCartContext";

type CartProps = {
} & React.ComponentProps<'div'>;

function CartView({ className }: CartProps) {
  const { cartItems } = useShoppingCart()

  return (
    <div className={clsx('bag mt-12 w-1/5', className)}>
      <div className="divider border-l-4 h-[821px] border-gray-500 absolute rounded-2xl" />

      <h2 className="text-4xl text-[#1A1F16] text-center mt-6">Bag</h2>

      <div className="bag-items w-[18rem] min-h-[18rem] flex justify-between items-baseline gap-4 grid-cols-4 grid-rows-3 flex-wrap items-center ml-8 mt-[18px] justify-between">
        {cartItems.map((product) => (
          <CartItem key={product.id} quantity={product.quantity}  id={product.id}/>
        ))}
      </div>
      {/*<div className={'text-[20px] block text-center'}>Bag Total: </div>*/}
      <Button image={viewBagIcon} buttonText="View Bag" onClick={() => ''} />
    </div>
  );
}

export default CartView;
