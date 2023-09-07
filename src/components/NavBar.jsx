const NavBar = () => {
  return (
    <nav>
      <ul className="nav-list">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Sobre Nosotros</a></li>
        <li><a href="#">Certificaciones</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
      <div className="cart">
        <img
          src="ruta/a/la/imagen/carrito.png"
          alt="Carrito de Compras"
          title="Comprar"
        />
      </div>
    </nav>
  );
};

export default NavBar;
