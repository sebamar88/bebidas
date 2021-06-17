import React, { useContext, useState } from 'react';
import { CategoriasContext } from '../context/CategoriasContext';
import { RecetasContext } from '../context/RecetasContext';


const Formulario = () => {

    const { categories } = useContext(CategoriasContext);
    const { setSearchRecipes, setQuery } = useContext(RecetasContext);

    const [search,setSearch] = useState({
        ingrediente: '',
        categoria: ''
    })

    

    return ( 
        <form
        onSubmit={e=>{
            e.preventDefault();
            setSearchRecipes(search);
            setQuery(true)
        }}
        className="col-12">
            <fieldset className="text-center">
                <legend>Busca bebidas por categoría o Ingrediente</legend>
            </fieldset>
            <div className="row my-4">
                <div className="col-md-4">
                    <input 
                        type="text"
                        name="ingrediente"
                        className="form-control"
                        placeholder="Buscar por Ingrediente"
                        onChange={e=>setSearch({...search, [e.target.name]:e.target.value})}
                    />
                </div>
                <div className="col-md-4">
                    <select
                        name="categoria"
                        className="form-control"
                        onChange={e=>setSearch({...search, [e.target.name]:e.target.value})}
                    >
                        <option value="">-- Selecciona Categoria --</option>
                        {categories.map(category=>(
                            <option 
                            key={category.strCategory}
                            value={category.strCategory}
                            >{category.strCategory}</option>
                        ))}
                    </select>
                </div>
                <div className="col-md-4">
                    <input 
                        type="submit"
                        name="nombre"
                        className="btn btn-block btn-primary"
                        value="Buscar Bebidas"
                    />
                </div>
            </div>
        </form>
     );
}
 
export default Formulario;