import React from 'react'
import styles from "/components/SignIn/SignIn.module.css"

function SignIn(props) {

    var {toggleSignInUp} = props;

    const toggleSignUp = () => {
        toggleSignInUp()
    }
  return (
    <div  className={styles.main}>
        <button onClick={toggleSignUp} color='black'>Sign Up</button>
    </div>
  )
}

export default SignIn