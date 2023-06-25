import React from 'react'

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import styles from "./Filters.module.css";
import { useFilter } from '@/context/FilterContext';

const SortFilter = () => {

  const { sortBy, sort } = useFilter();

  const handleChange = (e) => {
    const value = e.target.value;
    sort(value);
  };

  return (
    <div className={styles.sortFilter}>
        <FormGroup className={styles.checkboxContainer}>
            <FormControlLabel
            control={
                <Checkbox
                onChange={handleChange}
                value={"price-low-to-high"}
                inputProps={{ "aria-label": "controlled" }}
                sx={{'& .MuiSvgIcon-root': { fontSize: 28 } }}
                />
            }
            label="Price: Low to High"
            />
            <FormControlLabel
            control={
                <Checkbox
                onChange={handleChange}
                value={"price-high-to-low"}
                inputProps={{ "aria-label": "controlled" }}
                sx={{'& .MuiSvgIcon-root': { fontSize: 28 } }}
                />
            }
            label="Price: High to Low"
            />
      </FormGroup>
    </div>
  )
}

export default SortFilter