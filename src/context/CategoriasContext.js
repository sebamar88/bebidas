import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Crear context   
export const CategoriasContext = createContext();

// Provider es donde se ecuentran las funciones y el State
const CategoriaProvider = (props) => {

    //crear State
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        const getCategories = async () => {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

            const categories = await axios.get(url);

            setCategories(categories.data.drinks)
        }
        getCategories()
    }, [])

    return(
        <CategoriasContext.Provider
        value={{
            categories,
        }}
        > 
            {props.children}   
        </CategoriasContext.Provider>    
    )

}
export default CategoriaProvider;