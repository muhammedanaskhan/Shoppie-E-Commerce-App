import React from 'react'
import styles from "./Filters.module.css";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
    return `Rs. ${value}`;
  }

const PriceFilter = () => {
  return (
    <div className={styles.priceFilter}>
            <p className={styles.price}>0</p>
            <Box sx={{
                width: '300px',
                '@media (max-width: 612px)': {
                width: '150px',
                },
            }}>
                <Slider
                className={styles.priceSlider}
                getAriaLabel={() => "Price range"}
                // value={[minPrice, maxPrice]}
                min={0}
                max={5000}
                step={100}
                // onChange={handleChange}
                getAriaValueText={valuetext}
                />
            </Box>
            <p className={styles.price}>5000</p>
    </div>
  )
}

export default PriceFilter