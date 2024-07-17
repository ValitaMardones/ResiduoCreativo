import { useEffect, useState } from "react";
import fondo1 from "../assets/Tienda/fondo_tienda.webp";

import Cards from "../../components/Cards/Cards";
import data from "../../components/assets/all_tiendas";
import dataProducto from "../assets/all_product";
import "./TiendaId.css";

function TiendaId({ id }) {
  const [tienda, setTienda] = useState({ id });

  useEffect(() => {
    const tiendas = data.find((tiend) => tiend.id == id);
    setTienda(tiendas);
  }, []);

  const filterData = dataProducto.filter(
    (producto) => producto.idTienda == tienda.id
  );

  return (
    <>
      <div className="contenedor_tiendaId_item">
        <div className="cardPresentacion">
          <img className="imagenFondo" src={fondo1} alt="" />
          <div className="contenedor_tiendaId_texto">
            <h2 className="tiendaID_nombre">{tienda.nombre}</h2>
            <div className="tiendaID_detalle">
              <p className="tiendaID_titulo">Descripcion de la tienda:</p>
              <p className="tiendaID_descripcion">{tienda.descripcion}</p>
              <p className="tiendaID_titulo">Contacto:</p>
              <p className="tiendaID_telefono">+56 9 {tienda.telefono}</p>
              <p className="tiendaID_instagram">
                Instagram: {tienda.instagram}
              </p>
              <p className="tiendaID_facebook">Facebook: {tienda.facebook}</p>
              <p className="tiendaID_ubicacion">Ubicacion: {tienda.comuna}</p>
              <p className="tiendaID_emprendedor">{tienda.nombreEmprendedor}</p>
            </div>
          </div>
        </div>

        <Cards
          data={filterData}
          titulo="Revisa todos los productos disponibles"
        />
      </div>
    </>
  );
}

export default TiendaId;
