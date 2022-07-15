import React, { FC } from 'react';
import clsx from 'clsx';
import buyIcon from '../assets/buy-icon.svg';
import { Product, ProductType } from '../types/product.types';

interface ProductItemProps {
  product: Product;
  handleOpenProductPage: (product: Product) => void;
  handleAddToCart: (product: Product) => void;
}

const ProductItem: FC<ProductItemProps> = ({ product, handleOpenProductPage, handleAddToCart }) => (
  <div
    className={clsx(
      product.type === ProductType.Phone && 'item-card w-[190px] h-[365px] mb-4',
      product.type === ProductType.Watch && 'item-card w-[190px] h-[365px] mb-4',
      product.type === ProductType.Headphones && 'item-card w-[190px] h-[365px] mb-4',
      product.type === ProductType.Laptop && 'item-card w-[427px] h-[365px]'
    )}
  >
    <div
      onClick={() => handleOpenProductPage(product)}
      className={clsx(
        product.type === ProductType.Phone && 'image-bg w-[190px] h-[232px] bg-white rounded-3xl cursor-pointer',
        product.type === ProductType.Watch && 'image-bg w-[190px] h-[232px] bg-white rounded-3xl cursor-pointer',
        product.type === ProductType.Headphones && 'image-bg w-[190px] h-[232px] bg-white rounded-3xl cursor-pointer',
        product.type === ProductType.Laptop && 'image-bg w-[427px] h-[232px] bg-white rounded-3xl cursor-pointer'
      )}
    >
      <img className="block mx-auto p-4 hover:p-0 duration-500 w-full" src={product.photoPath} alt="item-card-image" />
    </div>
    <div className="title pl-2 pt-4 text-[#1A1F16] text-xl font-medium">{product.productTitle}</div>
    <div className="subTitle pl-2 pt-2 text-[#60695C] text-base">{product.productSubTitle}</div>
    <div className="wrap flex justify-between p-2">
      <div className="pl-2 text-xl font-medium mt-1">$ {product.price}</div>
      <button
        onClick={() => handleAddToCart(product)}
        className="pr-4 w-[32px] h-[32px] rounded-lg bg-[#1A1F16] hover:opacity-70 duration-500"
      >
        <img className="m-2" src={buyIcon} alt="buy-icon" />
      </button>
    </div>
  </div>
);

export default ProductItem;
