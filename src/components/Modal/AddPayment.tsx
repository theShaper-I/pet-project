import React from 'react';
import clsx from 'clsx';
import masterCardIconGrey from '../../assets/master-card-icon-grey.svg';
import dateIcon from '../../assets/date-icon-grey.svg';

type AddPaymentProps = {} & React.ComponentProps<'div'>;

function AddPayment({ className }: AddPaymentProps) {
  return (
    <div
      className={clsx(
        'add-payment fixed w-full h-full z-20 flex mx-auto justify-center items-center bg-[#0000004e]',
        className
      )}
    >
      <div className={'shipping-address w-[676px] h-[658px] relative bg-white rounded-xl p-8'}>
        <div className={'wrapper'}>
          <div className={'title text-[32px] pt-2'}>ADD A NEW CARD</div>
          <div className={'input-wrap w-[612px] h-28 mt-6'}>
            <div className={'card-holder-name text-base mt-2 pl-2 font-normal text-[#1A1F1680]'}>Cardholder Name</div>
            <input
                className={
                  'card-holder-name-input text-xl p-4 pl-6 pr-6 w-[596px] shadow-[0_4px_16px_-5px_rgba(0,0,0,0.3)] mt-2 rounded-[13px]'
                }
                type="text"
                placeholder={'John maker'}
            />
          </div>
          <div className={'input-wrap w-[612px] h-28 mt-4'}>
            <div className={'card-holder-name text-base mt-2 pl-2 font-normal text-[#1A1F1680]'}>Card Number</div>
            <input
                className={
                  'card-holder-name-input text-xl p-4 pl-[58px] pr-6 w-[596px] shadow-[0_4px_16px_-5px_rgba(0,0,0,0.3)] mt-2 rounded-[13px]'
                }
                type="text"
                placeholder={'5126-5987-2214-7621'}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPayment;
