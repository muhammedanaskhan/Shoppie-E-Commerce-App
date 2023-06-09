import React, { useRef } from 'react'
import styles from "/components/SignIn/SignIn.module.css"

function SignIn(props) {

  const emailRef = useRef();
  const passwordRef = useRef();

    var {toggleSignInUp} = props;

    const toggleSignUp = () => {
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