import React from 'react'

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import styles from "./Filters.module.css";

const RatingFilter = () => {
  return (
    <div className={styles.ratingFilter}>
    <FormGroup className={styles.ratingCheckboxContainer}>
        
        <FormControlLabel
          control={
              <Checkbox
              //   checked={category.includes("Accessories")}
              //   onChange={handleChange}
              value={"5 stars"}
              inputProps={{ "aria-label": "controlled" }}
              sx={{'& .MuiSvgIcon-root': { fontSize: 28 } }}
              />
        }
        label="★★★★★"
        />
        <FormControlLabel
        control={
            <Checkbox
            //   checked={category.includes("Men")}
            //   onChange={handleChange}
            value={"4 stars & above"}
            inputProps={{ "aria-label": "controlled" }}
            sx={{'& .MuiSvgIcon-root': { fontSize: 28 } }}
            />
        }
        label="★★★★ "
        />
        <FormControlLabel
        control={
            <Checkbox
            //   checked={category.includes("Women")}
            //   onChange={handleChange}
            value={"3 stars & above"}
            inputProps={{ "aria-label": "controlled" }}
            sx={{'& .MuiSvgIcon-root': { fontSize: 28 } }}
            />
        }
        label="★★★"
        />
        <FormControlLabel
        control={
            <Checkbox
            //   checked={category.includes("Accessories")}
            //   onChange={handleChange}
            value={"2 stars & above"}
            inputProps={{ "aria-label": "controlled" }}
            sx={{'& .MuiSvgIcon-root': { fontSize: 28 } }}
            />
        }
        label="★★"
        />
        <FormControlLabel
        control={
            <Checkbox
            //   checked={category.includes("Accessories")}
            //   onChange={handleChange}
            value={"1 star & above"}
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