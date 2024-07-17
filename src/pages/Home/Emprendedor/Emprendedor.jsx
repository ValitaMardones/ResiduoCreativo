import { Link } from "react-router-dom";
import "./Emprendedor.css";

import Boton from "../../../components/Botones/Boton";
import BannerEmprendedor from "../../../components/BannerEmprendedor/BannerEmprendedor";
import BannerInfo from "../../../components/BannerInfo/BannerInfo";
import BannerRProducto from "../../../components/BannerRProducto/BannerRProducto";
import PropuestaValor from "../../../components/PropuestaValor/PropuestaValor";

function Emprendedor() {
  return (
    <>
      <div className="pagina_inicio_emprendedor">
        {/* Banner principal */}
        <div className="emprendedor_tienda">
          <BannerEmprendedor />
          <Link
            to="/ResiduoCreativo/registrar-tienda"
            style={{ textDecoration: "none" }}
            className="btn_tienda"
          >
            <Boton text="Registrar tienda" />
          </Link>
        </div>

        {/* Imagenes informativas */}
        <div className="emprendedor_informativo">
          <PropuestaValor />
        </div>

        {/* Banner registro de producto */}
        <div className="registro_producto">
          <BannerRProducto />

          <Link
            className="btn btn_Registroproducto"
            to="/ResiduoCreativo/registro-producto"
            style={{ textDecoration: "none" }}
          >
            <button>Empezar a vender</button>
          </Link>
        </div>

        {/* Instrucciones */}
        <div className="banner_informativo">
          <BannerInfo />
        </div>
      </div>
    </>
  );
}

export default Emprendedor;
