import React from 'react'
import Header from '../../../components/Nav/Header/Header'
import ShopBanner from '../../../components/Shop/ShopBanner/ShopBanner'
import Filters from '../../../components/Shop/Filters/Filters'

function index() {
  return (
    <>
        <Header/>
        <ShopBanner/>
        <Filters/>
    </>
  )
}

export default index