import React, { FC } from 'react'
import { productList } from '../../utils/products.utils'

interface CartItemProps {
  id: number
  quantity: number
}

const CartItem: FC<CartItemProps> = ({ id, quantity }) => {
  const item = productList.find((i) => i.productId === id)
  if (item == null) return null

  return (
    <div className='bag-item h-20 w-20 bg-white rounded-xl relative'>
      <img
        className='pt-1 w-9/12 block mx-auto h-full relative object-contain'
        src={item.photoPath}
        alt={'cart-item-img'}
      />
      <div className='absolute bg-amber-400 w-[25px] text-center rounded-[13px] top-16'>
        {quantity}
      </div>
    </div>
  )
}

export default CartItem
