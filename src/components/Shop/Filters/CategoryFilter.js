import React from 'react'

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import styles from "./Filters.module.css";
import { useFilter } from '@/context/FilterContext';

const CategoryFilter = () => {

  const { category, filterByCategory } = useFilter();

  const handleChange = (event) => {
    const value = event.target.value;
    filterByCategory(value);
  };

  return (
    <div className={styles.categoryFilter}>
        <FormGroup className={styles.checkboxContainer}>
            <FormControlLabel
            control={
                <Checkbox
                 checked={category.includes("Men")}
               onChange={handleChange}
                value={"Men"}
                inputProps={{ "aria-label": "controlled" }}
                sx={{'& .MuiSvgIcon-root': { fontSize: 28 } }}
                />
            }
            label="For Him"
            />
            <FormControlLabel
            control={
                <Checkbox
                  checked={category.includes("Women")}
                  onChange={handleChange}
                value={"Women"}
                inputProps={{ "aria-label": "controlled" }}
                sx={{'& .MuiSvgIcon-root': { fontSize: 28 } }}
                />
            }
            label="For Her"
            />
            <FormControlLabel
            control={
                <Checkbox
                  checked={category.includes("Accessories")}
                  onChange={handleChange}
                value={"Accessories"}
                inputProps={{ "aria-label": "controlled" }}
                sx={{'& .MuiSvgIcon-root': { fontSize: 28 } }}
                />
            }
            label="Accessories"
            />
      </FormGroup>
    </div>
  )
}

export default CategoryFilter