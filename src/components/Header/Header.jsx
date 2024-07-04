/* Logo, menu desplegable, barra de busqueda, icono de usuario, bienvenida y opciones de inicio de sesion y registrarse (hasta la barra naranja inferior) */

import "./Header.css";
import usuario from "../assets/Icons/usuario.svg";
import menu_hamburguesa from "../assets/Icons/menu_hamburguesa.svg";
import lupa from "../assets/Icons/lupa.svg";
import logo from "../assets/Logo.svg";

function Header() {
  return (
    <>
      <div className="est-header">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="menu-desplegable">
          <img src={menu_hamburguesa} alt="menu desplegable" />
        </div>
        <div className="barra-busqueda">
          <img src={lupa} alt="lupa" />
        </div>
        <div className="usuario">
          <img src={usuario} alt="icono-usuario" />
        </div>
      </div>
    </>
  );
}

export default Header;
