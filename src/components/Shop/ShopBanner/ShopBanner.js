import classes from './ShopBanner.module.css'

import React from 'react'

function ShopBanner() {


  return (
    <div className={classes.banner}>
        <h1 className={classes.slogan}>Walk in for the Fashion, <br/>Stay in for the Style.</h1>
    </div>
  )
}

export default ShopBanner