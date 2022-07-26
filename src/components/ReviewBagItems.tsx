import React from 'react'
import { useShoppingCart } from '../context/ShoppingCartContext'

import { productList } from '../utils/products.utils'

import clsx from 'clsx'

import increaseIcon from '../assets/increase-icon.svg'
import decreaseIcon from '../assets/decrease-icon.svg'
import { formatCurrency } from '../utils/formatCurrency'

type CartProductItemProps = {
  id: number
  quantity: number
}

function ReviewBagItems({ id, quantity }: CartProductItemProps) {
  const { increaseCartQuantity, decreaseCartQuantity } = useShoppingCart()

  const item = productList.find((i) => i.productId === id)
  if (item == null) return null

  return (
    <div
      className={clsx('cart-product-item-wrapper min-h-[288px] bg-white rounded-3xl p-6 mb-[10px]')}
    >
      <div className='wrapper flex'>
        <img
          src={item.photoPath}
          alt={'product-item-img'}
          className={'w-[203px] h[254px] object-contain'}
        />

        <div className='wrapper block w-[598px] min-h-[240px] ml-4'>
          <div className='product-item-title text-[32px]'>{item.productTitle}</div>
          <div className='product-item-sub-title text-[18px] text-[#60695C] mt-2'>
            {item.productSubTitle}
          </div>
          <div className='product-item-descr text-[18px] mt-2'>{item.shortDescription}</div>
          <div className='h-[40px] mt-2'>rating</div>
          <div className='quantity-wrapper flex mt-2 relative min-w-[570px]'>
            <div className='product-item-sub-title text-[20px]'>
              $ {formatCurrency(item.price * quantity)} x {quantity}
            </div>
            <div className='product-item-quantity flex text-[20px] absolute right-0 w-28 justify-around'>
              <button onClick={() => decreaseCartQuantity(id)} className={'btn-decrease'}>
                <img src={decreaseIcon} alt={'decrease-btn-icon'} />
              </button>
              {quantity}
              <button onClick={() => increaseCartQuantity(id)} className={'btn-increase'}>
                <img src={increaseIcon} alt={'increase-btn-icon'} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={'divider border-[1px] border-[#1A1F1680] mt-4'}></div>
    </div>
  )
}

export default ReviewBagItems
