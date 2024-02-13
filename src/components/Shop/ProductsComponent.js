import React from 'react'
import Products from '../AllProducts/Products'
import { useFilter } from '@/context/FilterContext';
import products from '@/constants/constants';

function ProductsComponent() {
    
  const {test, filteredProducts} = useFilter();
  //console.log("filteredProducts",filteredProducts);
  // console.log("test",test);

  return (
    <div>
        <Products products={filteredProducts}/>
    </div>
  )
}

export default ProductsComponent