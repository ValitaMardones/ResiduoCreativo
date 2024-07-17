import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Container } from "@mui/material";

/* Menu */
import HomeGeneral from "./pages/Home/General/General";
import Tiendas from "./pages/Home/Tienda/Tienda";
import Nosotros from "./pages/Home/QuienesSomos/Nosotros";

/* Seccion usuario */
import InicioSesion from "./pages/Home/InicioSesion/InicioSesion";
import RegistroUsuario from "./pages/Registro/Usuario/Usuario";
import RegistroProducto from "./pages/Registro/Producto/Producto";
import RegistroTienda from "./pages/Registro/Tienda/Tienda";

/* Footer */
import Preguntas from "./pages/Home/PreguntasFrecuentes/Preguntas";
import Contacto from "./pages/Home/Contacto/Contacto";
import Emprendedor from "./pages/Home/Emprendedor/Emprendedor";
import Pagos from "./pages/Home/MediosPago/MediosPago";

/* Vistas productos y tiendas */
import Producto from "./pages/ProductoVista/ProductoVista";
import Tienda from "./pages/TiendaVista/TiendaVista";

function App() {
  return (
    <>
      <Header
        emprendedor="Emprendedor!"
        inicio="Inicio"
        tienda="Tiendas"
        nosotros="Quienes somos"
      />

      <main>
        <Container>
          <Routes>
            <Route path="/ResiduoCreativo" element={<HomeGeneral />}></Route>
            <Route path="ResiduoCreativo/tiendas" element={<Tiendas />}></Route>
            <Route
              path="ResiduoCreativo/nosotros"
              element={<Nosotros />}
            ></Route>
            <Route
              path="ResiduoCreativo/inicio-de-sesion"
              element={<InicioSesion />}
            ></Route>

            {/* Reigstros */}
            <Route
              path="ResiduoCreativo/registro-usuario"
              element={<RegistroUsuario />}
            ></Route>
            <Route
              path="ResiduoCreativo/registro-producto"
              element={<RegistroProducto />}
            ></Route>
            <Route
              path="ResiduoCreativo/registrar-tienda"
              element={<RegistroTienda />}
            />

            <Route
              path="ResiduoCreativo/preguntas-frecuentes"
              element={<Preguntas />}
            ></Route>
            <Route
              path="ResiduoCreativo/contacto"
              element={<Contacto />}
            ></Route>
            <Route
              path="ResiduoCreativo/cuenta"
              element={<Emprendedor />}
            ></Route>
            <Route path="ResiduoCreativo/pagos" element={<Pagos />}></Route>

            <Route path="ResiduoCreativo/producto/:id" element={<Producto />} />
            <Route path="ResiduoCreativo/tienda/:id" element={<Tienda />} />
          </Routes>
        </Container>
      </main>

      <Footer
        contacto="Centro de ayuda"
        nosotros="¿Quiénes somos?"
        preguntas="Preguntas frecuentes"
      />
    </>
  );
}

export default App;
