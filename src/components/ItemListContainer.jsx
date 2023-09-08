import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container mt-4">
      <div className="jumbotron">
        <h1 className="display-4">{greeting}</h1>
        <p className="lead">Bienvenido a nuestra tienda en línea.</p>
      </div>
    </div>
  );
};

export default ItemListContainer;
