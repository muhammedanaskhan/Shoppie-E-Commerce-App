import Main from '@/components/Cart/Main'
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

export async function getServerSideProps(context) {
    const session = await getSession(context);
    console.log("sesion",session)
    if (!session) {
      return {
        redirect: {
          destination: '/signIn',
          permanent: false,
        },
      };
    }
  
    return {
      props: {},
    };
  }

export default index

