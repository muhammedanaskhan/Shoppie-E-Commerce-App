import React from 'react'
import styles from "./Filters.module.css";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const SizeFilter = () => {
  return (
    <div className={styles.sizeFilter}>
    <FormGroup className={styles.checkboxContainer}>
        <FormControlLabel
        control={
            <Checkbox
            //   checked={category.includes("Men")}
            //   onChange={handleChange}
            value={"XS"}
            inputProps={{ "aria-label": "controlled" }}
            sx={{'& .MuiSvgIcon-root': { fontSize: 28 } }}
            />
        }
        label="XS"
        />
        <FormControlLabel
        control={
            <Checkbox
            //   checked={category.includes("Women")}
            //   onChange={handleChange}
            value={"S"}
            inputProps={{ "aria-label": "controlled" }}
            sx={{'& .MuiSvgIcon-root': { fontSize: 28 } }}
            />
        }
        label="S"
        />
        <FormControlLabel
        control={
            <Checkbox
            //   checked={category.includes("Accessories")}
            //   onChange={handleChange}
            value={"M"}
            inputProps={{ "aria-label": "controlled" }}
            sx={{'& .MuiSvgIcon-root': { fontSize: 28 } }}
            />
        }
        label="M"
        />
        <FormControlLabel
        control={
            <Checkbox
            //   checked={category.includes("Accessories")}
            //   onChange={handleChange}
            value={"L"}
            inputProps={{ "aria-label": "controlled" }}
            sx={{'& .MuiSvgIcon-root': { fontSize: 28 } }}
            />
        }
        label="L"
        />
        <FormControlLabel
        control={
            <Checkbox
            //   checked={category.includes("Accessories")}
            //   onChange={handleChange}
            value={"XL"}
            inputProps={{ "aria-label": "controlled" }}
            sx={{'& .MuiSvgIcon-root': { fontSize: 28 } }}
            />
        }
        label="XL"
        />
  </FormGroup>
</div>
  )
}

export default SizeFilter