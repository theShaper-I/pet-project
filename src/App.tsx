import React from 'react'

import Sidebar from './components/Sidebar'
import Content from './components/Layout/Content'
import CartView from './components/Cart/CartView'

import './index.css'
import './scss/sidebar.scss'

import { ShoppingCartProvider } from './context/ShoppingCartContext'

function App() {
  return (
    <ShoppingCartProvider>
      <div className={'flex'}>
        <Sidebar className='' />
        <Content />
        <CartView />
      </div>
    </ShoppingCartProvider>
  )
}

export default App
