import React from 'react'
import styles from "/components/SignUp/SignUp.module.css"

function SignUp(props) {
    var {toggleSignInUp} = props;

    const toggleSignIn = () => {
        toggleSignInUp()
    }

  return (
    <div className={styles.main}>
        <button onClick={toggleSignIn} color='black'>SignIn</button>
    </div>
  )
}

export default SignUp