import React, { FC, useEffect, useState } from 'react';
import { useShoppingCart } from "../context/ShoppingCartContext";
import { useNavigate, useParams } from 'react-router-dom';
import { productList } from '../utils/products.utils';
import { Product } from '../types/product.types';

import Button from '../components/UI/Button';


import arrowLeft from '../assets/arrow-left.svg';
import buyIcon from '../assets/buy-icon.svg';

const ProductPage: FC = () => {
  const [item, setItem] = useState<Product | null>();
  const { increaseCartQuantity } = useShoppingCart()
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const item = productList.find((e) => e.productId === Number(id));
    setItem(item);
  }, []);

  return (
    <div className="item-page mt-8 ml-14 mr-14 w-[60rem]">
      <div onClick={() => navigate('/')} className="back flex w-[88px] cursor-pointer">
        <img className="mt-1" src={arrowLeft} alt="arrow-left" />
        <button className="ml-4 text-xl">Back</button>
      </div>
      <div className="flex mt-[24px]">
        <div className="image-bg  flex w-[258px] h-[318px] bg-white rounded-3xl ml-[44px]">
          <img className={'block mx-auto p-4 object-contain'} src={item?.photoPath} alt="item-card-image" />
        </div>
        <div className="ml-10 block">
          <div className="text-6xl text-[#1A1F16]">{item?.productTitle}</div>
          <div className="text-[32px] text-[#60695C] mt-2">{item?.productSubTitle}</div>
          <div className="text-[28px] text-[#1A1F16] font-medium mt-8">{`$ ${item?.price}`}</div>
          <div className="w-[540px] text-[20px] font-normal mt-2">{item?.shortDescription}</div>
          <div className="btn-wrap relative">
            <Button image={buyIcon} onClick={() => increaseCartQuantity(item?.productId as number)} buttonText="Add to bag" />
          </div>
        </div>
      </div>
      <div className="divider border-b-4 w-[920px] mx-auto border-gray-500 mt-[40px] rounded-2xl" />
      <div className="mt-8 text-[32px] text-[#1A1F16]">Description</div>
      <div className="text-[#60695C] text-[20px] mt-2">{item?.fullDescription}</div>
    </div>
  );
};

export default ProductPage;
