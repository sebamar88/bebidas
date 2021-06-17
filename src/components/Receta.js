import React, {useContext, useState} from 'react';

import { ModalContext } from '../context/ModalContext';

import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';


function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 450,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));

const Receta = ({recipe}) => {

    //Cofiguracion del modal de MATERIAL-UI
    const [ modalStyle ] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const classes = useStyles();

    const handleOpen = () =>{
        setOpen(true)
    }
    const handleClose = () =>{
        setOpen(false)
    }


    const { receta, setIdReceta, setReceta } = useContext(ModalContext);

    const { strDrink, strDrinkThumb, idDrink } = recipe;

    //Mostrar y Formatear ingredientes
    const mostrarIngredientes = receta =>{
        let ingredientes = [];
        for(let i =1; i<16; i++){
            if(receta[`strIngredient${i}`]){
                ingredientes.push(
                    <li key={receta[`strIngredient${i}`]}>{receta[`strIngredient${i}`]} {receta[`strMeasure${i}`]}</li>
                )
            }
        }
        return ingredientes;
    }

    return ( 
        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header">
                    {strDrink}
                </h2>
                <img src={strDrinkThumb} alt={`Imagen de ${strDrink}`} className="card-img-top"/>
                <div className="card-body">
                    <button
                        type="button"
                        className="btn btn-block btn-primary"
                        onClick={() => {
                            setIdReceta(idDrink);
                            handleOpen();
                        }}
                    >
                        Ver Receta
                    </button>

                    <Modal
                        open={open}
                        onClose={()=>{
                            setIdReceta(null);
                            setReceta({})
                            handleClose();
                        }                            
                        }
                    >
                        <div style={modalStyle} className={classes.paper}>
                            <h2>{receta.strDrink}</h2>
                            <h3 className="mt-4">Instrucciones</h3>
                            <p>
                                {receta.strInstructions}
                            </p>
                            <img src={strDrinkThumb} alt={strDrink} className="img-fluid my-4"/>
                            <h3>Ingredientes y Cantidades</h3>
                            <ul>
                                { mostrarIngredientes(receta) }
                            </ul>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
     );
}
 
export default Receta;