import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import masterCardIconGrey from '../../assets/master-card-icon-grey.svg';
import masterCardIconWhite from '../../assets/mastercard-icon-white.svg'
import dateIcon from '../../assets/date-icon-grey.svg';
import greenLock from '../../assets/green-lock.svg'
import clsx from 'clsx';


type AddPaymentPropsClass = {} & React.ComponentProps<'div'>;

type AddPaymentProps = {
  cardHolderName: string,
  cardNumber?: string,
  expiryDate?: string,
  cvc?: string,
}

function AddPayment({ className }: AddPaymentPropsClass) {

  const { register: addPayment, handleSubmit } = useForm<AddPaymentProps>();


  return (
    <form
      className={clsx(
        'add-payment fixed w-full h-full z-20 flex mx-auto justify-center items-center bg-[#0000004e]',
        className
      )}
      onSubmit={handleSubmit((data) => {
        console.log(data)
      })}
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
                {...addPayment('cardHolderName', {required: 'Cardholder name is required.'})}
                placeholder={'John maker'}
            />
          </div>
          <div className={'input-wrap w-[612px] h-28 mt-4'}>
            <div className={'card-number text-base mt-2 pl-2 font-normal text-[#1A1F1680]'}>Card Number</div>
            <input
                className={
                  'card-number-input text-xl p-4 pl-[58px] pr-6 w-[596px] shadow-[0_4px_16px_-5px_rgba(0,0,0,0.3)] mt-2 rounded-[13px]'
                }
                type="text"
                {...addPayment('cardNumber',{required: true})}
                placeholder={'5126-5987-2214-7621'}
            />
          </div>
          <div className={'input-wrap w-[612px] h-28 mt-4'}>

            <div className={'date-cvc-wrap flex'}>
              <div className={'block'}>
                <div className={'card-number text-base mt-2 pl-2 font-normal text-[#1A1F1680]'}>Card Number</div>
                <input
                    className={
                      'card-number-input text-xl p-4 pl-[58px] pr-6 w-[186px] shadow-[0_4px_16px_-5px_rgba(0,0,0,0.3)] mt-2 rounded-[13px]'
                    }
                    type="text"
                    {...addPayment('expiryDate')}
                    placeholder={'MM/YYYY'}
                />
              </div>
              <div className={'block ml-8'}>
                <div className={'cvc text-base mt-2 pl-2 font-normal text-[#1A1F1680]'}>CVC</div>
                <input
                    className={
                      'cvc-input text-xl p-4 pl-6 pr-6 w-[141px] shadow-[0_4px_16px_-5px_rgba(0,0,0,0.3)] mt-2 rounded-[13px]'
                    }
                    type="text"
                    {...addPayment('cvc', {required:true, maxLength: 3 })}
                    placeholder={'123'}
                />
              </div>
            </div>
          </div>
        </div>

        <div className={'block button wrapper relative mt-8'}>
          <img className={'absolute top-3 left-44'} src={masterCardIconWhite} />
          <input className={'block text-xl w-[580px] h-[40px] bg-[#1A1F16] text-white rounded-[10px] mx-auto'} type={"submit"} value={'Add Payment Method'} />
        </div>

        <div className={'flex mt-10 justify-between'}>
          <button className={'text-base underline ml-4'}>Back</button>
          <div className={'secure-connection flex'}>
            <img src={greenLock}/>
            <div className={'text-base text-[#02D693] ml-2 mr-2'}>Secure Connection</div>
          </div>
        </div>

      </div>
    </form>
  );
}

export default AddPayment;
