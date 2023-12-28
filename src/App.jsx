import React from 'react';
import navbar from './componentes/navbar/navbar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemCount from './componentes/ItemCount/ItemCount';

const App = () => {
  return (
    <div>
      <ItemListContainer saludo = "Hola Profesor Skinner! Estoy aprendiendo " />
      <ItemCount/>
    </div>
    
  )
}
<NavBar/>

export default App