import CardTienda from "../../../components/CardTienda/CardTienda";

import dataTienda from "../../../components/assets/all_tiendas";

function Tienda() {
  return (
    <>
      <CardTienda
        data={dataTienda}
        titulo="Revisa los productos que las tiendas tienen para ti"
      />
    </>
  );
}

export default Tienda;
