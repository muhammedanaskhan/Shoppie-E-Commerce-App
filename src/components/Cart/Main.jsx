import { CartState } from '@/context/CartContext'
import React, { createContext } from 'react'


const Main = () => {

    const {state : {products}} = CartState();
    console.log(products)
  return (
    <div>Main</div>
  )
}

export default Main