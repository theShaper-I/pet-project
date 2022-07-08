import React, {FC, useEffect, useState} from 'react';
import {Product, ProductType} from "./ProductItem/product.types";
import arrowLeft from './img/arrow-left.svg';
import {useNavigate} from "react-router-dom";
import Button from "./Button";
import buyIcon from './img/buy-icon.svg'

const ItemPage:FC = () => {
    const [item, setItem] = useState<Product | null>();
    const navigate = useNavigate()

    useEffect(() => {
        let productList: Product[] = [
            { productId: 1, type: ProductType.Watch, productTitle: "Apple Watch", productSubTitle: "Series 5 SE",
                fullDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim odio faucibus nec malesuada purus volutpat vel sed viverra. Id sagittis, phasellus dui in arcu. Nec arcu, sit nunc, nibh purus pellentesque sagittis. Felis rhoncus facilisis massa eget purus in purus. Etiam at cras nulla nunc. Malesuada in pretium diam scelerisque sit mattis in egestas neque. Eu porta tempor sodales nisl integer turpis porttitor sed sed. Ut senectus odio dictum enim velit tempor diam quisque suspendisse.\n" +
                    "Orci vel ridiculus diam viverra. Libero malesuada orci, quis placerat suscipit augue imperdiet. Et praesent augue dictum mauris eget lacus malesuada. Aenean nisi, sodales natoque massa magna dignissim mi. Mattis tellus, justo, lorem sed tempor diam sit viverra enim. Id id placerat eu etiam nulla laoreet.\n" +
                    "Dignissim leo fames turpis quis suspendisse vulputate laoreet vulputate ac. Aliquam justo lectus eu dui porttitor. Cras a aliquam phasellus sollicitudin ornare. Tristique volutpat facilisis in ut proin. Est vitae facilisi sollicitudin id lorem mattis nibh ipsum, nec. Consectetur consectetur morbi morbi aliquet mi risus, velit, sit at. Integer morbi viverra hendrerit risus.\n" +
                    "Odio phasellus nibh senectus nec id enim quam sed. At potenti sollicitudin sollicitudin lobortis morbi. Nunc molestie et adipiscing aliquam. Sit vel mi dolor suscipit. In eget ut ac at facilisi leo viverra. Arcu ac ut fermentum, viverra et, vitae etiam cras. Eu purus non ut turpis fusce. Mi vitae nibh mi ut feugiat varius risus eros.\n",
                shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pellentesque tellus imperdiet mattis. Proin in quis ipsum non amet imperdiet. Dignissim nisi leo a at. Sit nec lacus, nunc volutpat, tincidunt lorem mi duis. Vitae elementum libero.", price: 529, quantity: 1,
                photoPath: "https://i.ibb.co/cwvkb0z/Name-Watch.png"
            },
            { productId: 2, type: ProductType.Headphones, productTitle: "Sony ZX330BT", productSubTitle: "Light Grey",
                fullDescription: "lorem lorem", shortDescription: "lorem", price: 39, quantity: 1,
                photoPath: "https://i.ibb.co/t850R8j/Name-Headphones.png"
            },
            { productId: 3, type: ProductType.Phone, productTitle: "Iphone 11", productSubTitle: "Serious Black",
                fullDescription: "lorem lorem", shortDescription: "lorem", price: 619, quantity: 1,
                photoPath: "https://i.ibb.co/Y3593Wh/Name-Iphone-12-01.png"
            },
            { productId: 4, type: ProductType.Phone, productTitle: "Iphone 11", productSubTitle: "Subway Blue",
                fullDescription: "lorem lorem", shortDescription: "lorem", price: 619, quantity: 1,
                photoPath: "https://i.ibb.co/fvbpYGw/Name-Iphone-12-02.png"
            },
            { productId: 5, type: ProductType.Laptop, productTitle: "Macbook Pro 16”", productSubTitle: "Silver - M1 Pro",
                fullDescription: "lorem lorem", shortDescription: "lorem", price: 3249, quantity: 1,
                photoPath: "https://i.ibb.co/QXrJy4d/Name-Macbook.png"
            },
            { productId: 6, type: ProductType.Phone, productTitle: "Iphone 11", productSubTitle: "Product RED",
                fullDescription: "lorem lorem", shortDescription: "lorem", price: 619, quantity: 1,
                photoPath: "https://i.ibb.co/5KpXr7p/Name-Iphone-12-03.png"
            },
            { productId: 7, type: ProductType.Phone, productTitle: "Iphone 11", productSubTitle: "Milky White",
                fullDescription: "lorem lorem", shortDescription: "lorem", price: 619, quantity: 1,
                photoPath: "https://i.ibb.co/fQdyFV5/Name-Iphone-12-04.png"
            },
        ];
        let item = productList.find((e) => e.productId == 1);
        setItem(item);
    }, [])


    return (
        <div className="item-page mt-8 ml-14 mr-14 w-[60rem]">
            <div onClick={() => navigate('/')} className="back flex w-[88px] cursor-pointer">
                <img className="mt-1" src={arrowLeft}  alt={"arrow-left"}/>
                <button className="ml-4 text-xl">Back</button>
            </div>
            <div className="flex mt-[24px]">
                <div className={`image-bg w-[258px] h-[318px] bg-white rounded-3xl ml-[74px]`}>
                    <img className="block mx-auto p-4 mt-6" src={item?.photoPath} alt="item-card-image"/>
                </div>
                <div className="ml-10 block">
                    <div className="text-6xl text-[#1A1F16]">{item?.productTitle}</div>
                    <div className="text-[32px] text-[#60695C] mt-2">{item?.productSubTitle}</div>
                    <div className="text-[28px] text-[#1A1F16] font-medium mt-8">{`$ ` + item?.price + `.99`}</div>
                    <div className="w-[540px] text-[20px] font-normal mt-2">{item?.shortDescription}</div>
                    <div>
                        <Button image={buyIcon} onClick={() => console.log('click')} children="Add to bag" />
                    </div>
                </div>
            </div>
            <div className="divider border-b-4 w-[920px] mx-auto border-gray-500 mt-[40px]"></div>
            <div className="mt-8 text-[32px] text-[#1A1F16]">Description</div>
            <div className="text-[#60695C] text-[20px] mt-2">{item?.fullDescription}</div>
        </div>
    );
};

export default ItemPage;
