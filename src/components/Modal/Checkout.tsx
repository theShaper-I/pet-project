import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import masterCardIcon from '../../assets/mastercard-icon.svg'
import giftIcon from '../../assets/gift-icon.svg'
import arrowLeft from '../../assets/arrow-left.svg'
import { useNavigate } from 'react-router-dom'

type CheckoutProps = {} & React.ComponentProps<'div'>

function Checkout({ className }: CheckoutProps) {
  const navigate = useNavigate()

  return (
    <div
      className={clsx(
        'checkout pt-[56px] fixed w-full h-full z-10 flex bg-[#E5E5E5] mx-auto justify-center',
        className,
      )}
    >
      <div className={'shipping display block'}>
        <div className={'shipping-address w-[871px] h-[230px] relative bg-white rounded-xl p-4'}>
          <div className={'wrapper'}>
            <div className={'title text-[32px]'}>SHIPPING ADDRESS</div>
            <div className={'name-surname text-xl pt-2'}>John Maker</div>
            <div className={'street-name text-xl pt-2'}>123 Plae Grond Stret</div>
            <div className={'city-state text-xl pt-2'}>Vermont, California</div>
            <div className={'country text-xl pt-2'}>United States of America</div>
          </div>
          <button
            className={
              'change-btn absolute right-[24px] top-[86px] p-2 border-2 border-[#1A1F16] rounded-[11px] w-[98px] text-[#1A1F16] text-base'
            }
          >
            Change
          </button>
        </div>

        <div className={'payment-method w-[871px] h-[214px] relative bg-white rounded-xl p-4 mt-6'}>
          <div className={'wrapper'}>
            <div className={'title text-[32px]'}>PAYMENT METHOD</div>

            <div className={'mastercard flex mt-4'}>
              <img className={'mr-2'} src={masterCardIcon} alt={'mastercard-icon'} />
              <div className={'mastercard text-xl mr-1'}>Mastercard</div>{' '}
              <div className={'mastercard-ending text-xl text-[#60695C]'}>ending in {'1252'}</div>
            </div>

            <div className={'gift-card-balance flex mt-2'}>
              <img className={'mr-2'} src={giftIcon} alt={'gift-card-icon'} />
              <div className={'balance text-xl mr-1'}>$ {'53.21'}</div>{' '}
              <div className={'gift-card-balance text-xl text-[#60695C]'}>gift card balance</div>
            </div>

            <div className={'billing-address-wrapper mt-2 flex items-center'}>
              <input type='checkbox' className='indeterminate:bg-gray-300 w-4 h-4 mr-2' />
              <div className={'billing-address text-xl'}>
                Billing address same as Shipping Address
              </div>
            </div>
          </div>
          <button
            className={
              'change-btn absolute right-[24px] top-[86px] p-2 border-2 border-[#1A1F16] rounded-[11px] w-[98px] text-[#1A1F16] text-base '
            }
          >
            Change
          </button>
        </div>
      </div>

      <div className={'order-wrapper'}>
        <div className={'order-sum w-60 h-[360px] bg-white ml-[102px] rounded-xl p-4'}>
          <div className={'order-title text-xl'}>Order Summary</div>
          <div className={'text-wrapper flex mt-4 justify-between'}>
            <div className={'items text-[#60695C] text-base'}>Items:</div>
            <div className={'items-price text-[#60695C] text-base'}>${'5849.37'}</div>
          </div>

          <div className={'text-wrapper flex mt-4 justify-between'}>
            <div className={'shipping text-[#60695C] text-base'}>Shipping:</div>
            <div className={'shipping-price text-[#60695C] text-base'}>${'6.99'}</div>
          </div>

          <div className={'text-wrapper flex mt-4 justify-between'}>
            <div className={'estimated-gst text-[#60695C] text-base'}>Estimated GST:</div>
            <div className={'estimated-gst-price text-[#60695C] text-base'}>${'760.41'}</div>
          </div>

          <div className={'text-wrapper flex mt-4 justify-between'}>
            <div className={'gift-card text-[#60695C] text-base'}>Gift Card:</div>
            <div className={'gift-card-price text-[#60695C] text-base'}>${'0.00'}</div>
          </div>

          <div className={'divider w-52 border-[1px] mt-4'} />
          <div className={'order-total-wrapper flex mt-4 justify-between'}>
            <div className={'order-total text-[#E5252C] text-xl'}>Order Total:</div>
            <div className={'order-total-price text-[#E5252C] text-xl'}>${'6609.78'}</div>
          </div>
          <div className={'divider w-52 border-[1px] mt-4'} />

          <button className={'order-btn w-52 h-9 rounded-[11px] bg-[#1A1F16] text-white mt-4'}>
            Place your order
          </button>
        </div>

        <div className={'flex justify-end'}>
          <button
            onClick={() => navigate('/')}
            className='p-2 border-2 w-[111px] border-[#1A1F16] rounded-[11px] text-[#1A1F16] text-base relative pl-[38px] mt-[35px]'
          >
            Back
            <img
              className={'absolute top-3 w-[10px] left-[32px]'}
              src={arrowLeft}
              alt={'arrow-left'}
            />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Checkout
