import React from 'react';
import clsx from 'clsx';

interface Props {
    width: string;
    height: string;
    bgColor: string;
    image: string;
    onClick: () => void;
    children?: string;
    radius: string;
    textColor: string;
}

const Button: React.FC<Props> = ({
    width,
    height,
    bgColor,
    image,
    onClick,
    children,
    radius,
}) => {
    return (
        <button
        onClick={onClick}
        className={`text-xl text-white pl-4 block mx-auto mt-6 w-[${width}] h-[40px] relative bg-[${bgColor}] rounded-[${radius}]`}
        >
            <img className="top-2" src={image} style={{position: "absolute"}} alt="checkout-btn" />
            {children}
        </button>
    );
};

export default Button;
