import React, { useRef, useState } from 'react'
import styles from "./SignIn.module.css"
import {signIn} from 'next-auth/react'
import Spinner from '@/components/Spinner/spinner';
import { useRouter } from 'next/router';

function SignIn(props) {

  const [loader, setLoader] = useState(false);
  const router = useRouter()
  const emailRef = useRef();
  const passwordRef = useRef();

  var {toggleSignInUp} = props;

  const toggleSignUp = () => {
      toggleSignInUp()
  }

  async function authHandler(e) {
    e.preventDefault();

    setLoader(true)

    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    const result = await signIn('credentials',{ 
      redirect: false,
      email: enteredEmail,
      password: enteredPassword,
    })
    
    setLoader(false)
    if(!result.error){
      router.replace('/')
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
            <h3>Log In</h3>
          </div>
          <form onSubmit={authHandler}>
            <div className={styles.form_input_group}>
                <input type="email" placeholder="Email" ref={emailRef} />
            </div>
            <div className={styles.form_input_group}>
                <input type="password" placeholder="Password" ref={passwordRef} min="6" />
            </div>
            <div className={styles.form_input_group}>
                <button className={styles.btn}>LOG IN</button>
            </div>
            <div className={styles.form_input_group}>
                <button onClick={demoUserSignIn} className={styles.btn}>DEMO USER</button>
            </div>
          </form>
      </div>
      <div className={styles.auth_change}>  
        <p>Don&apos;t have an account? <span onClick={toggleSignUp}>Sign Up</span></p>
      </div>
    </div>
  )
}

export default SignIn