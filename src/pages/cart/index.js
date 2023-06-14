import { useSession } from 'next-auth/react'
import React, { useEffect } from 'react'

function index() {
    const { data: session, status } = useSession()

    useEffect(() => {
        if(!session){
            window.location.href = '/signIn'
        }
    },[])
    
  return (
    <div>cart</div>
  )
}

export default index