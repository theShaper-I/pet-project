import React, {FC} from 'react';

interface Props {
    width: string;
    bgColor: string;
    image: string;
    onClick: () => void;
    children?: string;
    radius: string;
    textColor: string;
}

const Button: FC<Props> = ({
    width,
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
