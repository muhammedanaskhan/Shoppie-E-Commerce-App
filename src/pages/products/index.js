import React from 'react'
import Header from '@/components/Nav/Header/Header'
import ShopBanner from '@/components/Shop/ShopBanner/ShopBanner'
import Filters from '@/components/Shop/Filters/Filters'
import Products from '@/components/AllProducts/Products'
import products from '@/constants/constants'
import { FilterProvider, useFilter } from '@/context/FilterContext'
import ProductsComponent from '@/components/Shop/ProductsComponent'

function index() {

  return (
    <>
        <Header/>
        <ShopBanner/>
        
        <FilterProvider>
          <Filters/>
          <ProductsComponent/>
        </FilterProvider> 
    </>
  )
}

export default index