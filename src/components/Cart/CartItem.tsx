import React, { FC } from 'react';
import { Product } from '../../types/product.types';
import firstItem from '../../assets/items/item-1.png';

interface CartItemProps {
  product: Product;
}

const CartItem: FC<CartItemProps> = ({ product }) => {
  return (
    <div className="bag-item h-20 w-20 bg-white rounded-xl">
      <img className="pt-1 w-9/12 mx-auto" src={product.photoPath} />
    </div>
  );
};

export default CartItem;
