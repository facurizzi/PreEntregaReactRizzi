import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div>
        <h1>{greeting}</h1>
        <p >Bienvenido a nuestra tienda en línea.</p>
    </div>
  );
};

export default ItemListContainer;
