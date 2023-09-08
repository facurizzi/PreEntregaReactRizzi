import React from 'react';
import styles from "./style.module.css"
import NavBar from "./components/NavBar"
import ItemListContainer from './components/ItemListContainer';

function App() {
  
  return (
   
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a nuestra tienda en línea!" />
      {}
    </div>
      );
}

export default App
