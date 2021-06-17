import React, {useState, useEffect, createContext} from 'react';
import axios from 'axios'

export const RecetasContext = createContext();

const RecetasProvider = (props) => {

    const [recipes, setRecipes] = useState([])
    const [searchRecipes, setSearchRecipes] =useState({
        ingrediente: '',
        categoria: '',
    });
    const [query, setQuery] = useState(false)

    const { ingrediente, categoria } = searchRecipes;

    useEffect(()=>{
        if(query){

            const getRecipes = async () =>{
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingrediente}&c=${categoria}`
    
                const resultado = await axios.get(url);
    
                //console.log(resultado.data.drinks)
                setRecipes(resultado.data.drinks);
            }
            getRecipes()
        }
        
        
        
    },[searchRecipes, ingrediente, categoria, query])


    return ( 
        <RecetasContext.Provider
            value={{
                setSearchRecipes,
                setQuery,
                recipes
            }}
        >
            {props.children}
        </RecetasContext.Provider>
     );
}
 
export default RecetasProvider;