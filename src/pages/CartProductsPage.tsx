import React from 'react'
import { useShoppingCart } from '../context/ShoppingCartContext'

import CartProductItem from '../components/Cart/CartProductItem'

type CartProductsPageProps = {} & React.ComponentProps<'div'>

function CartProductsPage({ className }: CartProductsPageProps) {
  const { cartItems } = useShoppingCart()

  return (
    <div className='cart-product-page mt-[56px]'>
      <div className={'cart-products-page-title text-[#1A1F16] text-[48px] mb-[34px]'}>
        Check your Bag Items
      </div>
      {cartItems.map((product) => (
        <CartProductItem key={product.id} quantity={product.quantity} id={product.id} />
      ))}
    </div>
  )
}

export default CartProductsPage
