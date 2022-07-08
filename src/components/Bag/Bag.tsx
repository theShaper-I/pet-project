import React from 'react';
import firstItem from '../img/items/item-1.png';
import secondItem from '../img/items/item-2.png';
import thirdItem from '../img/items/item-3.png';
import viewBagIcon from '../img/view-bag-icon.svg'
import Button from "../Button";

const Bag = () => {
    return (
        <div className="bag mt-12 w-[22rem]">
            <div className="divider border-l-4 h-[821px] border-gray-500 absolute" ></div>

            <h2 className="text-4xl text-[#1A1F16] text-center mt-6">Bag</h2>

            <div className="bag-items w-[18rem] h-[18rem] flex justify-between items-baseline gap-4 grid-cols-4 grid-rows-3 flex-wrap items-center ml-8 mt-[18px] justify-between">
                <div className="bag-item h-20 w-20 bg-white rounded-xl">
                    <img className="pl-2 pt-1" src={firstItem} />
                </div><div className="bag-item h-20 w-20 bg-white rounded-xl">
                    <img className="pl-2 pt-1" src={firstItem} />
                </div><div className="bag-item h-20 w-20 bg-white rounded-xl">
                    <img className="pl-2 pt-1" src={firstItem} />
                </div><div className="bag-item h-20 w-20 bg-white rounded-xl">
                    <img className="pl-2 pt-1" src={firstItem} />
                </div><div className="bag-item h-20 w-20 bg-white rounded-xl">
                    <img className="pl-2 pt-1" src={firstItem} />
                </div><div className="bag-item h-20 w-20 bg-white rounded-xl">
                    <img className="pl-2 pt-1" src={firstItem} />
                </div><div className="bag-item h-20 w-20 bg-white rounded-xl">
                    <img className="pl-2 pt-1" src={firstItem} />
                </div><div className="bag-item h-20 w-20 bg-white rounded-xl">
                    <img className="pl-2 pt-1" src={firstItem} />
                </div><div className="bag-item h-20 w-20 bg-white rounded-xl">
                    <img className="pl-2 pt-1" src={firstItem} />
                </div>
            </div>
            <Button
                image={viewBagIcon}
                children="Checkout"
                onClick={() => console.log("You clicked on the orange circle!")}
            />
        </div>
    );
};

export default Bag;
