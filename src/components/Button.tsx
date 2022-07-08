import React, {FC} from 'react';

interface Props {
    image?: string;
    onClick: () => void;
    children?: string;
}

const Button: FC<Props> = ({
    image,
    onClick,
    children,
}) => {
    return (
        <button
        onClick={onClick}
        className={`text-xl text-white pl-4 block mx-auto mt-6 w-[160px] h-[40px] relative bg-[#1A1F16] rounded-[14px]`}
        >
            <img className="top-2 w-[20px] h-[21px] left-4" src={image} style={{position: "absolute"}} alt="checkout-btn" />
            {children}
        </button>
    );
};

export default Button;
