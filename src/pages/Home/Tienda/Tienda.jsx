import { useState } from "react";

import Cards from "../../../components/Cards/Cards";
import CardTienda from "../../../components/CardTienda/CardTienda";

import dataProducto from "../../../components/assets/all_product";
import dataTienda from "../../../components/assets/all_tiendas";

function Tienda() {
  return (
    <>
      <CardTienda
        data={dataTienda}
        titulo="Revisa los productos que las tiendas tienen para ti"
      />
      <Cards
        data={dataProducto}
        titulo="Revisa todos los productos disponibles"
      />
    </>
  );
}

export default Tienda;
