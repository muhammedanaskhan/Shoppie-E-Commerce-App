import React, { useState } from 'react'

import Header from '@/components/Nav/Header/Header'
import SignIn from '@/components/auth/SignIn/SignIn'
import SignUp from '@/components/auth/SignUp/SignUp'


function Index() {

    var [signIn, setSignIn] = useState(true) 

    const toggleSignInUp = () => {
        setSignIn(!signIn)
    }

  return (
    <>
        <Header/>
        {signIn && <SignIn toggleSignInUp={toggleSignInUp}/>}
        {!signIn && <SignUp toggleSignInUp={toggleSignInUp}/>}   
       
    </>
  )
}

export default Index