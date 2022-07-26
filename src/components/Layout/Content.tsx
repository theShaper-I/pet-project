import React, { useEffect, useState } from 'react'
import { productList } from '../../utils/products.utils'

import ClipLoader from 'react-spinners/ClipLoader'

import { Route, Routes } from 'react-router-dom'

import ProductsList from '../../pages/ProductsList'
import ProductPage from '../../pages/ProductPage'
import CartProductsPage from '../../pages/CartProductsPage'
import clsx from 'clsx'

type ContentProps = {} & React.ComponentProps<'div'>

function Content({ className }: ContentProps) {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  return (
    <div className={clsx('content mx-auto', className)}>
      {loading ? (
        <ClipLoader color={'#000000'} loading={loading} size={150} className={'mt-96'} />
      ) : (
        <Routes>
          <Route path='/' element={<ProductsList products={productList} />} />
          <Route path='/product/:id' element={<ProductPage />} />
          <Route path='/bag' element={<CartProductsPage />} />
        </Routes>
      )}
    </div>
  )
}

export default Content
