import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios'

export const ModalContext = createContext();

const ModalProvider = (props) => {

    //state del provider
    const [ idReceta, setIdReceta ] = useState(null);
    const [receta, setReceta] = useState({})

    useEffect(()=>{
        const obtenerReceta = async () =>{
            if(!idReceta) return;

            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`;
            const resulta = await axios.get(url);
            setReceta(resulta.data.drinks[0])
        }
        obtenerReceta()
    }, [idReceta])

    return ( 

        <ModalContext.Provider
        value={{
            setIdReceta,
            receta,
            setReceta
        }}
        >
            {props.children}
        </ModalContext.Provider>

     );
}
 
export default ModalProvider;