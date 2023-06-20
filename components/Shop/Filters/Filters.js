import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import classes from './Filters.module.css'


const Filters = () => {

    const [openFilter, setOpenFilter] = React.useState( // to detect which expandable filter to open
        {
            price: false,
            category: false,
            size: false,
            rating: false,
            sortBy: false
        }
    )

    function toggleFilter(type){
        switch(type){
            case 'price':
                setOpenFilter((prev) => ({
                    price: true,
                    category: false,
                    size: false,
                    rating: false,
                    anyActive: true
                }))
            break;
               
            case 'category':
                setOpenFilter((prev) => ({
                    price: false,
                    category: !prev.category,
                    size: false,
                    rating: false,
                    anyActive: true
                }))
            break;        
      
            case 'size':   
                setOpenFilter((prev) => ({
                    price: false,
                    category: false,
                    size: !prev.size,
                    rating: false,
                    anyActive: true
                }))
            break;       
            case 'rating':
                setOpenFilter((prev) => ({
                    price: false,
                    category: false,
                    size: false,
                    rating: !prev.rating,
                    anyActive: true,
                }))
                break;
            case 'sortby':
                setOpenFilter((prev) => ({
                    price: false,
                    category: false,
                    size: false,
                    rating: false,
                    sortBy: !prev.sortBy,
                }))
                break;
                default:
                    break;
        }
    }

    console.log(openFilter.price)

  return (
    <div className={classes.container}>
        <div className={classes.desktopDiv}>
            <div className={classes.leftFilters}>
                <div className={`${openFilter.price ? classes.activeFilter : classes.filter}`} onClick={() => toggleFilter('price')}>
                    <h3>PRICE</h3>
                    <ArrowDropDownIcon className={`${classes.expandIcon} ${openFilter.price && classes.activeIcon}`}/>
                </div>
                <div className={`${openFilter.category ? classes.activeFilter : classes.filter}`} onClick={() => toggleFilter('category')}>
                    <h3>CATEGORY</h3>
                    <ArrowDropDownIcon className={`${classes.expandIcon} ${openFilter.category && classes.activeIcon}`}/>
                </div>
                <div className={`${openFilter.size ? classes.activeFilter : classes.filter}`} onClick={() =>toggleFilter('size')}>
                    <h3>SIZE</h3>
                    <ArrowDropDownIcon className={`${classes.expandIcon} ${openFilter.size && classes.activeIcon}`}/>
                </div>
                <div className={`${openFilter.rating ? classes.activeFilter : classes.filter}`} onClick={() => toggleFilter('rating')}>
                    <h3>RATING</h3>
                    <ArrowDropDownIcon className={`${classes.expandIcon} ${openFilter.rating && classes.activeIcon}`}/>
                </div>
            </div>
            <div className={classes.rightFilters}>
                <div className={`${openFilter.sortBy ? classes.activeFilter : classes.filter}`} onClick={() => toggleFilter('sortby')}>
                    <h3>SORT BY</h3>
                    <ArrowDropDownIcon className={`${classes.expandIcon} ${openFilter.rating && classes.activeIcon}`}/>
                </div>
            </div>
        </div>
        <div className={classes.mobileDiv}>
                <div className={`${openFilter.price ? classes.activeFilter : classes.filter}`} onClick={() => toggleFilter('price')}>
                    <h3>PRICE</h3>
                    <ArrowDropDownIcon className={`${classes.expandIcon} ${openFilter.price && classes.activeIcon}`}/>
                </div>
                <div className={`${openFilter.category ? classes.activeFilter : classes.filter}`} onClick={() => toggleFilter('category')}>
                    <h3>CATEGORY</h3>
                    <ArrowDropDownIcon className={`${classes.expandIcon} ${openFilter.category && classes.activeIcon}`}/>
                </div>
                <div className={`${openFilter.size ? classes.activeFilter : classes.filter}`} onClick={() =>toggleFilter('size')}>
                    <h3>SIZE</h3>
                    <ArrowDropDownIcon className={`${classes.expandIcon} ${openFilter.size && classes.activeIcon}`}/>
                </div>
                <div className={`${openFilter.rating ? classes.activeFilter : classes.filter}`} onClick={() => toggleFilter('rating')}>
                    <h3>RATING</h3>
                    <ArrowDropDownIcon className={`${classes.expandIcon} ${openFilter.rating && classes.activeIcon}`}/>
                </div>
                <div className={`${openFilter.sortBy ? classes.activeFilter : classes.filter}`} onClick={() => toggleFilter('sortby')}>
                    <h3>SORT BY</h3>
                    <ArrowDropDownIcon className={`${classes.expandIcon} ${openFilter.rating && classes.activeIcon}`}/>
                </div>
        </div>
    </div>
  )
}

export default Filters