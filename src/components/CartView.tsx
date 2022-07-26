import React from 'react'
import { useShoppingCart } from '../context/ShoppingCartContext'

import Button from './UI/Button'
import CartItem from './CartItem'

import clsx from 'clsx'

import viewBagIcon from '../assets/view-bag-icon.svg'
import { useNavigate } from 'react-router-dom'
import { formatCurrency } from '../utils/formatCurrency'
import { productList } from '../utils/products.utils'

type CartProps = {} & React.ComponentProps<'div'>

function CartView({ className }: CartProps) {
  const { cartItems } = useShoppingCart()
  const navigate = useNavigate()

  return (
    <div className={clsx('bag mt-12 w-1/5', className)}>
      <div className='divider border-l-4 h-[821px] border-gray-500 absolute rounded-2xl' />

      <h2 className='text-4xl text-[#1A1F16] text-center mt-6'>Bag</h2>

      <div className='bag-items w-[18rem] min-h-[18rem] flex justify-between items-baseline gap-4 grid-cols-4 grid-rows-3 flex-wrap items-center ml-8 mt-[18px] justify-between'>
        {cartItems.map((product) => (
          <CartItem key={product.id} quantity={product.quantity} id={product.id} />
        ))}
      </div>
      <div className={'text-[20px] block text-center mt-8'}>
        Bag Total: {'$ '}
        {formatCurrency(
          cartItems.reduce((total, cartItem) => {
            const item = productList.find((i) => i.productId === cartItem.id)
            return total + (item?.price || 0) * cartItem.quantity
          }, 0),
        )}
      </div>
      <Button image={viewBagIcon} buttonText='View Bag' onClick={() => navigate('/bag')} />
    </div>
  )
}

export default CartView
