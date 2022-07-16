import React from 'react';
import clsx from "clsx";
import {Product} from "../../types/product.types";

type CartProductItemProps = {
  product: Product;
} & React.ComponentProps<'div'>;

function CartProductItem({ className, product }: CartProductItemProps) {
  return (
      <div className={clsx(
          'cart-product-item-wrapper min-w-[877px] min-h-[288px] bg-white rounded-3xl p-6 mb-[10px]', className
      )}>
        <div className='wrapper flex'>
          <img src={product.photoPath} className={'w-[203px] h[254px] object-contain'} />

          <div className='wrapper block w-[598px] min-h-[240px] ml-4'>
            <div className='product-item-title text-[32px]'>{product.productTitle}</div>
            <div className='product-item-sub-title text-[18px] text-[#60695C] mt-2'>{product.productSubTitle}</div>
            <div className='product-item-descr text-[18px] mt-2'>{product.shortDescription}</div>
            <div className='h-[40px] mt-2'>rating</div>
            <div className='quantity-wrapper flex mt-2 relative min-w-[570px]'>
              <div className='product-item-sub-title text-[20px]'>$ {product.price} x {product.quantity}</div>
              <div className='product-item-quantity flex text-[20px] absolute right-0'>
                <div className={'text-[#E5252C] mr-[20px]'}>-</div>
                {product.quantity}
                <div className={'text-[#02D693] ml-[20px]'}>+</div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default CartProductItem;
