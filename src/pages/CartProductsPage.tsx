import React from 'react';
import CartProductItem from '../components/Cart/CartProductItem';
import { Product } from '../types/product.types';

type CartProductsPageProps = {
  products: Product[];
} & React.ComponentProps<'div'>;

function CartProductsPage({ className, products }: CartProductsPageProps) {
  return (
    <div className="cart-product-page mt-[56px]">
      <div className={'cart-products-page-title text-[#1A1F16] text-[48px] mb-[34px]'}>Check your Bag Items</div>
      {products.map((product) => (
        <CartProductItem key={product.productId} product={product} />
      ))}
    </div>
  );
}

export default CartProductsPage;
