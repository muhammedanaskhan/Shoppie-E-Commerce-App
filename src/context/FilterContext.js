import { createContext } from "react";

const FilterContext = createContext();

export const FilterContextProvider = ({ children }) => {

    const filterContext = {
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
        <FilterContext.Provider value={{filterContext}}>
            {children}
        </FilterContext.Provider>
    );
}

export const useFilterContext = () => {
    return useContext(FilterContext);
}