import React from 'react';
import NavBar from './componentes/navbar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemCount from './componentes/ItemCount/ItemCount';

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer saludo = "Hola Profesor Skinner! Estoy aprendiendo " />
      <ItemCount />
    </div>
    
  );
}

export default App