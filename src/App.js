import React from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListaRecetas from './components/ListaRecetas'

import CategoriaProvider from './context/CategoriasContext'
import RecetasProvider from './context/RecetasContext'
import ModalProvider from './context/ModalContext'


function App() {
  return (
    <CategoriaProvider>
      <RecetasProvider>
        <ModalProvider>
        <Header />

        <div className="container mt-5">
          <div className="row">
            <Formulario />
          </div>
          <ListaRecetas />
        </div>
        </ModalProvider>
      </RecetasProvider>
    </CategoriaProvider>
  );
}

export default App;
