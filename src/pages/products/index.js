import React from 'react'
import Header from '@/components/Nav/Header/Header'
import ShopBanner from '@/components/Shop/ShopBanner/ShopBanner'
import Filters from '@/components/Shop/Filters/Filters'
import Products from '@/components/AllProducts/Products'
import products from '@/constants/constants'

function index() {

  console.log("products, ", products)
  return (
    <>
        <Header/>
        <ShopBanner/>
        <Filters/>
        <Products products={products}/>
    </>
  )
}

export default index