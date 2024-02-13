import Main from '@/components/WishList/Main'
import Header from '@/components/Nav/Header/Header';
import { getSession } from 'next-auth/react';
import React, { useEffect } from 'react'

function index() {


  return (
    <>
        <Header/>
        <Main/>

    </>
  )
}


export default index

