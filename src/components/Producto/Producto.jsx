import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Productos.css";
import data from "../assets/all_product";
import clp from "../Clp";

function Productos({ id }) {
  const [itemProducto, setItemProducto] = useState({ id });
  useEffect(() => {
    const items = data.find((prod) => prod.id == id);
    setItemProducto(items);
  }, []);

  return (
    <>
      <div className="contenedor_item">
        <img
          className="contenedor_item_imagen"
          src={itemProducto.imagen}
          alt={itemProducto.descripcion}
        />

        <div className="contenedor_item_texto">
          <h2 className="item_nombre">{itemProducto.nombre}</h2>
          <p className="item_categoria">Categoria: {itemProducto.categoria}</p>
          <div className="item_detalle">
            <p className="item_titulo">Descripcion del producto:</p>
            <p className="item_descripcion">{itemProducto.descripcion}</p>
            <Link
              className="item_tienda"
              to={`/ResiduoCreativo/tienda/${itemProducto.idTienda}`}
            >
              Tienda: {itemProducto.tienda}
            </Link>
          </div>
          <div className="item_precio">{clp(itemProducto.precio)}</div>
          <div className="item_stock">
            {itemProducto.cantidad} unidades disponibles
          </div>
        </div>
      </div>
    </>
  );
}

export default Productos;
