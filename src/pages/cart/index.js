import { getSession, useSession } from 'next-auth/react'
import React, { useEffect } from 'react'

function index() {


  return (
    <div>cart</div>
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

