import Link from 'next/link';
import React from 'react';

const styles = {
  body: {
    textAlign: 'center',
    padding: '40px 0',
    background: '#EBF0F5',
    maxWidth: '600px',
    position: 'absolute',
    top: '25%',
    left: '0',
    right: '0',
    margin: 'auto',
  },
  h1: {
    color: '#88B04B',
    fontFamily: '"Nunito Sans", "Helvetica Neue", sans-serif',
    fontWeight: 900,
    fontSize: '40px',
    marginBottom: '10px',
  },
  button: {
    margin: '0 auto',

    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
    width: '250px',
    height: '65px',
    fontSize: '2rem',
    letterSpacing: '2px',
    lineHeight: '2',
    border: '2px solid hsla(0, 0%, 7%, 1)',
    boxShadow: '4px 4px 0px hsla(0, 0%, 7%, 1)',
    fontWeight: '400',
    transition: '250ms ease',
    marginTop: '20px',
  },

  
  p: {
    color: '#404F5E',
    fontFamily: '"Nunito Sans", "Helvetica Neue", sans-serif',
    fontSize: '20px',
    margin: 0,
  },
  i: {
    color: '#9ABC66',
    fontSize: '100px',
    lineHeight: '200px',
    marginLeft: '-15px',
  },
  card: {
    background: 'white',
    padding: '60px',
    borderRadius: '4px',
    boxShadow: '0 2px 3px #C8D0D8',
    display: 'inline-block',
    margin: '0 auto',
  },
  circle: {
    borderRadius: '200px',
    height: '200px',
    width: '200px',
    background: '#F8FAF5',
    margin: '0 auto',
  },
};

function SuccessMessage() {
  return (
    <div style={styles.body}>
      <div style={styles.circle}>
        <i style={styles.i}>✓</i>
      </div>
      <h1 style={styles.h1}>Success</h1>
      <p style={styles.p}>We received your purchase request<br /> we&apos;ll be in touch shortly!</p>
      <Link href="/products">
        <button style={styles.button} >Shop more</button>
      </Link>
      
    </div>
  );
}

export default SuccessMessage;
