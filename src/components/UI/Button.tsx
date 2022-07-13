import React, { FC } from 'react';
import clsx from 'clsx';

enum ButtonType {
  Small = 'Small',
  Medium = 'Medium',
  Large = 'Large',
}

interface Props {
  image?: string;
  onClick: () => void;
  buttonText?: string;
  buttonType?: ButtonType;
}

const Button: FC<Props> = ({ image, onClick, buttonText, buttonType = ButtonType.Medium }) => (
  <button
    onClick={onClick}
    className={clsx(
      'text-xl text-white pl-4 block mx-auto mt-6 w-[160px] h-[40px] relative bg-[#1A1F16] rounded-[14px]',
      buttonType === ButtonType.Small && '',
      buttonType === ButtonType.Medium && 'w-[160px]',
      buttonType === ButtonType.Large && ''
    )}
  >
    <img className="top-2 w-[20px] h-[21px] left-4" src={image} style={{ position: 'absolute' }} alt="checkout-btn" />
    {buttonText}
  </button>
);

export default Button;
