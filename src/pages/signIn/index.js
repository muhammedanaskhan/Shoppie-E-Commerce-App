import React, { useState } from 'react'
import Header from '../../../components/Header/Header'
import SignIn from '../../../components/SignIn/SignIn'
import SignUp from '../../../components/SignUp/SignUp'


function index() {

    var [signIn, setSignIn] = useState(true) 

    const toggleSignInUp = () => {
        setSignIn(!signIn)
    }

  return (
    <>
        <Header/>
        {!signIn && <SignIn toggleSignInUp={toggleSignInUp}/>}
        {signIn && <SignUp toggleSignInUp={toggleSignInUp}/>}
        
    </>
  )
}

export default index