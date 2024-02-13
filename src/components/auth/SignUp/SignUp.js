import React, { useRef, useState } from 'react'
import styles from "./SignUp.module.css"


import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import Spinner from '@/components/Spinner/spinner';

function SignUp(props) {

  const [loader, setLoader] = useState(false)
  
  const router = useRouter()

  const emailRef = useRef();
  const passwordRef = useRef();

  var {toggleSignInUp} = props;

  const toggleSignIn = () => {
      toggleSignInUp()
  }

  async function createUser(email, password) {
    setLoader(true);
    try{
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        body: JSON.stringify({email,password}),
        headers:{
          'Content-Type': 'application/json'
        } 
      })
  
      const data = await response.json();
      if(response.status === 201){ //created account

        const result = await signIn('credentials',{  //signin with created acc
          redirect: false,
          email: email,
          password: password,
        })
        setLoader(false)
        if(!result.error){
          router.replace('/')
        }

      }

      if(response.status === 422){
        setLoader(false);
        console.log("user already exists")
      }
  
      if(!response.ok){
        throw new Error(data.message || 'Something went wrong')
      }
  
      return data;
    }catch(error){
      console.log(error)
    }
  }

  async function submitHandler(e){
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try{
      const result = await createUser(email,password)
    }catch(error){
      console.log(error)
    }
  }

    async function demoUserSignIn(e) {
      setLoader(true);
      e.preventDefault();
      
      const result = await signIn('credentials',{ 
        redirect: false,
        email: 'test@test.com',
        password: '1110210226',
      })
      
      setLoader(false)
      if(!result.error){
        router.replace('/')
      }
  }

  
  return (
    <div  className={styles.main}>
      {loader && <Spinner/>}
      <div className={styles.formContainer}>
          <div className={styles.auth_heading}>
            <h3>Create Your Account</h3>
          </div>
          <form onSubmit={submitHandler}>
            <div className={styles.form_input_group}>
                <input type="email" placeholder="Email" required ref={emailRef} />
            </div>
            <div className={styles.form_input_group}>
                <input type="password" placeholder="Password" required ref={passwordRef} min="6" />
            </div>
            <div className={styles.form_input_group}>
                <button className={styles.btn} onClick={submitHandler}>CREATE ACCOUNT</button>
            </div>
            <div className={styles.form_input_group}>
                <button onClick={demoUserSignIn} className={styles.btn}>DEMO USER</button>
            </div>
          </form>
      </div>
      <div className={styles.auth_change}>  
        <p>Already have an account? <span onClick={toggleSignIn}>Sign In</span></p>
      </div>
   
    </div>
  )
}

export default SignUp