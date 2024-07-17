import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import usuario from "../assets/Icons/usuario.svg";
import menu from "../assets/Icons/menu_hamburguesa.svg";
import lupa from "../assets/Icons/lupa.svg";
import logo from "../assets/Logos/Logo_texto.svg";
import close from "../assets/Icons/cerrar.png";
import products from "../assets/all_product";

function Header({ emprendedor, inicio, tienda, nosotros }) {
  const [filter, setFilter] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };
  const filteredProducts = products.filter((product) =>
    product.nombre.toLowerCase().includes(filter.toLowerCase())
  );
  const handleSelectFilterProduct = (id) => {
    navigate(`ResiduoCreativo/producto/${id}`);
    console.log(id);
  };
  const navigate = useNavigate();
  return (
    <header>
      <nav className="nav">
        <div className="nav_logo">
          <Link to="/ResiduoCreativo" style={{ textDecoration: "none" }}>
            <img className="logo" src={logo} alt="logo residuo creativo" />
          </Link>
        </div>
        <div className={`nav_menu ${showMenu ? "show_menu" : ""}`}>
          <ul className="nav_menu_list">
            <li className="nav_menu_item">
              <Link
                to="/ResiduoCreativo"
                style={{ textDecoration: "none" }}
                className="nav_menu_link"
              >
                {inicio}
              </Link>
            </li>
            <li className="nav_menu_item">
              <Link
                to="ResiduoCreativo/tiendas"
                style={{ textDecoration: "none" }}
                className="nav_menu_link"
              >
                {tienda}
              </Link>
            </li>
            <li className="nav_menu_item">
              <Link
                to="ResiduoCreativo/nosotros"
                style={{ textDecoration: "none" }}
                className="nav_menu_link"
              >
                {nosotros}
              </Link>
            </li>
          </ul>
          <div className="nav_close" onClick={handleShowMenu}>
            <img src={close} alt="boton para cerrar el menu" />
          </div>
        </div>
        <div className="nav_toggle" onClick={handleShowMenu}>
          <img src={menu} alt="icono para desplegar menu" />
          Menú
        </div>
        <div className="nav_busqueda">
          <input
            type="text"
            className="nav_busqueda_text"
            placeholder="Hola, ¿Qué comprarás hoy?"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />

          {filter && (
            <ul className="resultado_busqueda">
              {filteredProducts.map((product) => (
                <li
                  role="button"
                  key={product.id}
                  onClick={() => handleSelectFilterProduct(product.id)}
                >
                  {product.nombre}
                </li>
              ))}
            </ul>
          )}

          <div className="nav_busqueda_icon">
            <a href="#" src={lupa}>
              <img className="lupa" src={lupa} alt="icono de busqueda" />
            </a>
            <p>Buscar</p>
          </div>
        </div>

        <div className="nav_usuario">
          <div className="nav_usuario_icon">
            <Link className="nav_usuario_icon" to="ResiduoCreativo/cuenta">
              <img src={usuario} alt="icono usuario" />
            </Link>
          </div>
          <div className="nav_usuario_text">
            <div className="nav_usuario_saludo">
              <h2>Hola! {emprendedor}</h2>
            </div>
            <div className="nav_usuario_ingreso">
              <Link
                to="ResiduoCreativo/inicio-de-sesion"
                style={{ textDecoration: "none" }}
              >
                Inicia Sesion
              </Link>
            </div>
            <div className="nav_usuario_registro">
              <Link
                to="ResiduoCreativo/registro-usuario"
                style={{ textDecoration: "none" }}
              >
                Registrate
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
