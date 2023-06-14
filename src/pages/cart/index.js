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

// The Problem with just this client side code is that 
// it visit Cart Route and checks for session, which takes 
// a fraction of a second of stay at cart page and then again
// redirects to signIn page

// we don't want that two reloads -- bad ux