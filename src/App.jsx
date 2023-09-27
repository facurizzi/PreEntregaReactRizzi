import React from 'react';
import styles from "./style.module.css"
import Nav from "./components/NavBar/NavBar"
import ItemListContainer from './components/Items/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/Details/ItemDetailContainer';

function App() {
  
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="¡Bienvenidos la tienda de COSACO PETSHOP!" />
      <ItemDetailContainer />
      {}
    </div>
      );
}

export default App
