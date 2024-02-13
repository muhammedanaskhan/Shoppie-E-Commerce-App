import React from 'react'
import styles from "./Filters.module.css";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useFilter } from '@/context/FilterContext';

const SizeFilter = () => {

    const { sizes, filterBySize } = useFilter();

    const handleChange = (event) => {
      const value = event.target.value ;
      filterBySize(value);
    };
  return (
    <div className={styles.sizeFilter}>
    <FormGroup className={styles.checkboxContainer}>
        <FormControlLabel
        control={
            <Checkbox
            checked={sizes.includes("XS")}
            onChange={handleChange}
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
            checked={sizes.includes("S")}
            onChange={handleChange}
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
            checked={sizes.includes("M")}
            onChange={handleChange}
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
            checked={sizes.includes("L")}
            onChange={handleChange}
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
            checked={sizes.includes("XL")}
            onChange={handleChange}
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