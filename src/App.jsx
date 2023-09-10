import React from 'react';
import styles from "./style.module.css"
import NavBar from "./components/NavBar"
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="¡Bienvenidos la tienda de COSACO PETSHOP!" />
      {}
    </div>
      );
}

export default App
