import React, { FC } from 'react';

interface CartItemProps {
  photoPath: string;
  quantity: number;
}

const CartItem: FC<CartItemProps> = ({ photoPath, quantity }) => {
  return (
    <div className="bag-item h-20 w-20 bg-white rounded-xl">
      <img className="pt-1 w-9/12 mx-auto relative" src={photoPath}>
        <div className="absolute">{quantity}</div>
      </img>
    </div>
  );
};

export default CartItem;
