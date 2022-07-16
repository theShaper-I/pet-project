import React, { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductItem from '../components/ProductItem';
import { Product } from '../types/product.types';
import CART from '../utils/CART';

interface ProductListProps {
  products: Product[];
}

const ProductsList: FC<ProductListProps> = ({ products }) => {
  const navigate = useNavigate();

  return (
    <div className="item-list mt-8 ml-14 mr-14 w-[60rem]">
      <div className="search-bar grid justify-center items-center">
        <div className="text-[#60695C] text-base ml-4">Search item</div>
        <input
          className="text-[#1A1F1680] w-[32rem] text-xl p-4 rounded-[13px] mt-2 pl-6 pr-6 shadow-lg"
          type="text"
          placeholder="Apple Watch, Samsung S21, Macbook Pro, ..."
        />
      </div>
      <div className="items-list mt-12 flex justify-between gap-4 grid-cols-4 grid-rows-3 flex-wrap">
        {products.map((product) => (
          <ProductItem
            handleOpenProductPage={(product) => navigate(`/product/${product.productId}`)}
            handleAddToCart={(product) => CART.addItem(products, product.productId)}
            key={product.productId}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
