import { Link, useNavigate } from "react-router-dom";
import datos from "../assets/all_product";
import sinImagen from "../assets/Productos/sin_imagen.png";

import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  Grid,
} from "@mui/material";

function CardTienda({ data, titulo }) {
  const handleDivClick = (key) => {
    navigate(`/tienda/${key}`);
  };
  const navigate = useNavigate();
  return (
    <>
      <Typography variant="h1" sx={{ mt: "20px", fontSize: "40px" }}>
        {titulo}
      </Typography>
      <Grid container spacing={2} sx={{ mt: "20px", mb: "20px", gap: "10%" }}>
        {/* Mapeo */}
        {data
          ? data.map((tienda, index) => (
              <Grid
                key={index}
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                onClick={() => handleDivClick(tienda.id)} //Onclik va dentro del Grid para poder hacer clic en cualquier parte de la tarjeta, ademas dentro del grid container estamos haciendo el mapeo.
              >
                <Card sx={{ cursor: "pointer" }}>
                  <CardMedia
                    component="img"
                    alt={tienda.nombre}
                    src={datos[index] ? datos[index].imagen : sinImagen}
                  />
                  <CardContent>
                    <Typography variant="h6">{tienda.nombre}</Typography>
                  </CardContent>
                  <CardActions sx={{ px: "15px" }}>
                    <Typography
                      variant="h6"
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                        width: "90%",
                      }}
                    >
                      {tienda.descripcion}
                    </Typography>
                  </CardActions>
                  <Link to={`/tienda/${tienda.id}`}></Link>
                </Card>
              </Grid>
            ))
          : "cargando..."}
        {/* FinMapeo */}
      </Grid>
    </>
  );
}

export default CardTienda;
