import React from 'react'

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import styles from "./Filters.module.css";

const SortFilter = () => {
  return (
    <div className={styles.sortFilter}>
        <FormGroup className={styles.checkboxContainer}>
            <FormControlLabel
            control={
                <Checkbox
                //   checked={category.includes("Men")}
                //   onChange={handleChange}
                value={"low to high"}
                inputProps={{ "aria-label": "controlled" }}
                sx={{'& .MuiSvgIcon-root': { fontSize: 28 } }}
                />
            }
            label="Price: Low to High"
            />
            <FormControlLabel
            control={
                <Checkbox
                //   checked={category.includes("Women")}
                //   onChange={handleChange}
                value={"high to low"}
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