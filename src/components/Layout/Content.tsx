import React, { FC } from 'react'
import { productList } from '../../utils/products.utils'

import { Route, Routes } from 'react-router-dom'

import ProductsList from '../../pages/ProductsList'
import ProductPage from '../../pages/ProductPage'
import CartProductsPage from '../../pages/CartProductsPage'

const Content: FC = ({}) => (
  <div className='content mx-auto'>
    <Routes>
      <Route path='/' element={<ProductsList products={productList} />} />
      <Route path='/product/:id' element={<ProductPage />} />
      <Route path='/bag' element={<CartProductsPage />} />
    </Routes>
  </div>
)

export default Content
