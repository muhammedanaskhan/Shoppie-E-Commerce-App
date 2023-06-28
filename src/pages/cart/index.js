import Main from '@/components/Cart/Main'
import { getSession, useSession } from 'next-auth/react'
import React, { useEffect } from 'react'

function index() {


  return (
    <>
        <Main/>
    </>
  )
}

export async function getServerSideProps(context){
    const session = await getSession({
        req: context.req
    })
    if(!session){
        return{
            redirect: {
                destination: '/signIn',
                permanent: false        //redirect once
            }
        }
    }
    return{
        props: { session },
    }
}

export default index

