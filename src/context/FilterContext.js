import React, { createContext, useContext, useEffect, useState } from 'react'
import products from '@/constants/constants'

const FilterContext = createContext({   // context object for filters
    test: "",
    category: [],
    sizes: [],
    minPrice: 0,
    maxPrice: 5000,
    searchTerm: "",
    rating: "1",
    filteredProducts: [],
    sortBy: "default-sort",
    setSearchTerm: () => {},
    searchProducts: () => {},
    filterBySize: () => {},
    filterByCategory: () => {},
    filterByRating: () => {},
    filterByPrice: () => {},
    sort: () => {},
    clearFilters: () => {},
}); 

export const FilterProvider = ({children}) => {

   
    const [
       {
        test,
        category,
        sizes,
        minPrice,
        maxPrice,
        searchTerm,
        rating,
        filteredProducts,
        sortBy,}, setFilters] = useState( //toggle filters
      
       {test: "updatedtest",
       category: [],
        sizes: [],
        minPrice: 0,
        maxPrice: 5000,
        searchTerm: "",
        rating: "1",
        filteredProducts: products,
        sortBy: "default-sort",
    });

    //console.log("filteredProducts",filteredProducts);

    useEffect(() => {
        if (products) {
          setFilters((prev) => ({
            ...prev,
            filteredProducts: products,
          }));
        }
      }, [products]);

      

    //console.log("filteredProducts",filteredProducts);
    
      useEffect(() => {
        sort(sortBy);
      }, [filteredProducts]);

      const setSearchTerm = (searchTerm) => {
        setFilters((prev) => ({
          ...prev,
          searchTerm: searchTerm,
        }));
      };
    
      const searchProducts = (searchTerm) => {
        if (!products) return;
        const newProducts = products.filter((product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilters((prev) => ({
          ...prev,
          searchTerm: searchTerm,
          filteredProducts: newProducts,
        }));
        navigate("/products");
      };
    
      const filterBySize = (size) => {
        if (!products) return;
        let filters = {
          category,
          filteredProducts,
          maxPrice,
          minPrice,
          rating,
          searchTerm,
          sortBy,
        };
        if (sizes.includes(size)) {
          let newSizes = sizes.filter((s) => s !== size);
          setFilters((prev) => {
            return {
              ...prev,
              sizes: newSizes,
            };
          });
          filterProducts({ ...filters, sizes: newSizes });
        } else {
          let newSizes = [...sizes, size];
          setFilters((prev) => {
            return {
              ...prev,
              sizes: newSizes,
            };
          });
          filterProducts({ ...filters, sizes: newSizes });
        }
      };
    
      const filterByCategory = (categoryName) => {
        if (!products) return;
        let filters = {
          sizes,
          filteredProducts,
          maxPrice,
          minPrice,
          rating,
          searchTerm,
          sortBy,
        };
        if (category.includes(categoryName)) {
          let newCategory = category.filter((c) => c !== categoryName);
          setFilters((prev) => {
            return {
              ...prev,
              category: newCategory,
            };
          });
          filterProducts({ ...filters, category: newCategory });
        } else {
          let newCategory = [...category, categoryName];
          setFilters((prev) => {
            return {
              ...prev,
              category: newCategory,
            };
          });
          filterProducts({ ...filters, category: newCategory });
        }
      };
    
      const filterByRating = (rating) => {
        setFilters((prev) => {
          return {
            ...prev,
            rating: rating,
          };
        });
        const filters = {
          sizes,
          category,
          filteredProducts,
          maxPrice,
          minPrice,
          searchTerm,
          sortBy,
        };
        filterProducts({ ...filters, rating: rating });
      };
    
      const filterByPrice = (minPrice, maxPrice) => {
        setFilters((prev) => {
          return {
            ...prev,
            minPrice: minPrice,
            maxPrice: maxPrice,
          };
        });
        const filters = {
          sizes,
          category,
          filteredProducts,
          rating,
          searchTerm,
          sortBy,
        };
        filterProducts({ ...filters, minPrice: minPrice, maxPrice: maxPrice });
      };
    
      const sort = (sortType) => {
        if (!filteredProducts) return;
        let newProducts = filteredProducts;
        switch (sortType) {
          case "default-sort":
            newProducts = filteredProducts.sort((a, b) => +a._id - +b._id);
            break;
          case "price-low-to-high":
            newProducts = filteredProducts.sort((a, b) => +a.price - +b.price);
            break;
          case "price-high-to-low":
            newProducts = filteredProducts.sort((a, b) => +b.price - +a.price);
            break;
          case "trending":
            // All the products which have trending set to true will be shown first
            newProducts = filteredProducts.sort((a, b) => {
              if (a.trending && !b.trending) return -1;
              if (!a.trending && b.trending) return 1;
              return 0;
            });
            break;
        }
        setFilters((prev) => {
          return {
            ...prev,
            sortBy: sortType,
            filteredProducts: newProducts,
          };
        });
      };
    
      const filterProducts = (filters) => {
        if (!products) return;
        // FILTER PRODUCTS
        let newProducts = products.filter((product) => {
          let filtered = product;
          // Check if the product title contain the search term
          if (filters.searchTerm.length > 0) {
            const isValid = product.title
              .toLowerCase()
              .includes(filters.searchTerm.toLowerCase());
            if (!isValid) return false;
          }
    
          // Check if the product contain atleast one of the categories from the filter
          if (filters.category.length > 0) {
            const isValid = filters.category.includes(product.category);
            if (!isValid) return false;
          }
    
          // Check if the product contain atleast one of the sizes from the filter
          if (filters.sizes.length > 0) {
            const isValid = filters.sizes.includes(product.size);
            if (!isValid) return false;
          }
          return filtered;
        });
    
        // Filter by price
        newProducts = newProducts.filter((product) => {
          return (
            +product.price >= filters.minPrice && +product.price <= filters.maxPrice
          );
        });
    
        // Filter by  rating
        newProducts = newProducts.filter((product) => {
          return +product.rating >= +filters.rating;
        });
    
        setFilters((prev) => {
          return {
            ...prev,
            filteredProducts: newProducts,
          };
        });
      };
    
      const clearFilters = () => {
        const newFilters = {
          sizes: [],
          category: [],
          filteredProducts: products,
          maxPrice: 5000,
          minPrice: 0,
          rating: "1",
          searchTerm: "",
          sortBy: "default-sort",
        };
        setFilters(newFilters);
        filterProducts(newFilters);
      };
    
    //console.log("filteredProducts",filteredProducts);

    const filterContext = {
        test,
        category,
        sizes,
        minPrice,
        maxPrice,
        searchTerm,
        rating,
        filteredProducts,
        sortBy,
        setSearchTerm,
        searchProducts,
        filterBySize,
        filterByCategory,
        filterByRating,
        filterByPrice,
        sort,
        clearFilters,
      };
      return (
        <FilterContext.Provider value={filterContext}>
          {children}
        </FilterContext.Provider>
      );

}

export const useFilter = () => useContext(FilterContext);