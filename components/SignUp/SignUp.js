import React, { useRef, useState } from 'react'
import styles from "/components/SignUp/SignUp.module.css"
import Spinner from '../Spinner/spinner';

function SignUp(props) {

  const [loader, setLoader] = useState(false)
  
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
      if(response.status === 201){
        setLoader(false)
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
      console.log("result",result)
    }catch(error){
      console.log(error)
    }
  }

    async function demoUserSignIn(e) {
      setLoader(true);
      e.preventDefault();
      //logIn("test@test.com", "123456789");
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