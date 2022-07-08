import React from 'react';

import firstItem from './img/items/item-1.png';
import secondItem from './img/items/item-2.png';
import thirdItem from './img/items/item-3.png';
import Button from "./Button";

import viewBagIcon from './img/view-bag-icon.svg'

const Bag = () => {
    return (
        <div className="bag border-l-4 border-gray-500 mt-12 w-[22rem]">
            <h2 className="text-4xl text-[#1A1F16] text-center mt-6">Bag</h2>

            <div className="bag-items w-[18rem] h-[18rem] grid grid-rows-3 grid-flow-col items-center ml-8 mt-[134px] items-center justify-between">
                <div className="bag-item h-20 w-20 bg-white rounded-xl">
                    <img className="pl-2 pt-1" src={firstItem} />
                </div>
                <div className="bag-item h-20 w-20 bg-white rounded-xl">
                    <img className="pl-2 pt-1" src={secondItem} />
                </div>
                <div className="bag-item h-20 w-20 bg-white rounded-xl">
                    <img className="pl-2 pt-1" src={thirdItem} />
                </div>
                <div className="bag-item h-20 w-20 bg-white rounded-xl">
                    <img className="pl-2 pt-1" src={thirdItem} />
                </div>
                <div className="bag-item h-20 w-20 bg-white rounded-xl">
                    <img className="pl-2 pt-1" src={thirdItem} />
                </div>
                <div className="bag-item h-20 w-20 bg-white rounded-xl">
                    <img className="pl-2 pt-1" src={thirdItem} />
                </div>
                <div className="bag-item h-20 w-20 bg-white rounded-xl">
                    <img className="pl-2 pt-1" src={thirdItem} />
                </div>
                <div className="bag-item h-20 w-20 bg-white rounded-xl">
                    <img className="pl-2 pt-1" src={thirdItem} />
                </div>
                <div className="bag-item h-20 w-20 bg-white rounded-xl">
                    <img className="pl-2 pt-1" src={thirdItem} />
                </div>
            </div>

                <Button
                    bgColor="#1A1F16"
                    textColor="#FFFFFF"
                    image={viewBagIcon}
                    onClick={() => console.log("You clicked on the orange circle!")}
                    width="160px"
                    height="40px"
                    radius="14px"
                    children="Checkout"
                />
        </div>
    );
};

export default Bag;
