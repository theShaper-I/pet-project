import React, {FC} from 'react';
import appleWatch from './img/apple-watch.png'
import buyIcon from './img/buy-icon.svg'
import {Product} from "../types/product.types";

const ItemCard: FC<Product> = () => {
    return (
        <div className="item-card w-[190px] h-[365px]">
            <div className="image-bg w-[190px] h-[232px] bg-white rounded-3xl">
                <img className="block mx-auto p-4" src={appleWatch} alt="item-card-image"/>
                <div className="title pl-2 pt-4 text-[#1A1F16] text-xl font-medium">Apple Watch</div>
                <div className="subTitle pl-2 pt-2 text-[#60695C] text-base">Series 5 SE</div>
                <div className="wrap flex justify-between p-2">
                    <div className="pl-2 text-xl font-medium mt-1">
                        $ 529.99
                    </div>
                    <button className="pr-4 w-[34px] h-[34px] rounded-lg bg-[#1A1F16]">
                        <img className="m-2" src={buyIcon} alt={"buy-icon"}/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ItemCard;
