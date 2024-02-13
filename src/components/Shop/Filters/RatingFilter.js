import React from 'react'

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import styles from "./Filters.module.css";
import { useFilter } from '@/context/FilterContext';

const RatingFilter = () => {

  const { rating, filterByRating } = useFilter();

  const handleChange = (event) => {
    const value = event.target.value;
    filterByRating(value);
  };

  return (
    <div className={styles.ratingFilter}>
    <FormGroup className={styles.ratingCheckboxContainer}>
        
        <FormControlLabel
        control={
            <Checkbox
            onChange={handleChange}
            value="4"
            inputProps={{ "aria-label": "controlled" }}
            sx={{'& .MuiSvgIcon-root': { fontSize: 28 } }}
            />
        }
        label="★★★★ "
        />
        <FormControlLabel
        control={
            <Checkbox
            onChange={handleChange}
            value="3"
            inputProps={{ "aria-label": "controlled" }}
            sx={{'& .MuiSvgIcon-root': { fontSize: 28 } }}
            />
        }
        label="★★★"
        />
        <FormControlLabel
        control={
            <Checkbox
            onChange={handleChange}
            value="2"
            inputProps={{ "aria-label": "controlled" }}
            sx={{'& .MuiSvgIcon-root': { fontSize: 28 } }}
            />
        }
        label="★★"
        />
        <FormControlLabel
        control={
            <Checkbox
            onChange={handleChange}
            value="1"
            inputProps={{ "aria-label": "controlled" }}
            sx={{'& .MuiSvgIcon-root': { fontSize: 28 } }}
            />
        }
        label="★"
        />
        
        
  </FormGroup>
</div>
  )
}

export default RatingFilter