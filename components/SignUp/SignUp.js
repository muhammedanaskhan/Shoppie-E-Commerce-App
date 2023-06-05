import React, { useRef } from 'react'
import styles from "/components/SignUp/SignUp.module.css"

function SignUp(props) {

  
  const emailRef = useRef();
  const passwordRef = useRef();
    var {toggleSignInUp} = props;

    const toggleSignIn = () => {
        toggleSignInUp()
    }
    async function authHandler(e) {
      // setLoading(true);
      // e.preventDefault();
    }

    async function demoUserSignIn(e) {
      setLoading(true);
      e.preventDefault();
      //logIn("test@test.com", "123456789");
  }
  return (
    <div  className={styles.main}>
      <div className={styles.formContainer}>
          <div className={styles.auth_heading}>
            <h3>Create Your Account</h3>
          </div>
          <form onSubmit={authHandler}>
            <div className={styles.form_input_group}>
                <input type="email" placeholder="Email" ref={emailRef} />
            </div>
            <div className={styles.form_input_group}>
                <input type="password" placeholder="Password" ref={passwordRef} min="6" />
            </div>
            <div className={styles.form_input_group}>
                <button className={styles.btn}>CREATE ACCOUNT</button>
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