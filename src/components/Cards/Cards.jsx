import { Link, useNavigate } from "react-router-dom";
import imagenes from "../assets/all_product";

import {
  Container,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  Grid,
} from "@mui/material";

import clp from "../Clp";

function Cards({ data, titulo }) {
  const handleDivClick = (key) => {
    navigate(`/producto/${key}`);
    const navigate = useNavigate();
  };
  return (
    <>
      <Container sx={{ my: "20px" }}>
        <Typography variant="h1" sx={{ mt: "100px" }}>
          {titulo}
        </Typography>
        <Grid container spacing={2} sx={{ mb: "20px" }}>
          {/* Mapeo */}
          {data
            ? data.map((producto, index) => (
                <Grid
                  key={index}
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  onClick={() => handleDivClick(producto.id)} //Onclik va dentro del Grid para poder hacer clic en cualquier parte de la tarjeta, ademas dentro del grid container estamos haciendo el mapeo.
                >
                  <Card sx={{ cursor: "pointer" }}>
                    <CardMedia
                      component="img"
                      alt={producto.nombre}
                      src={imagenes[index] && imagenes[index].imagen}
                    />
                    <CardContent>
                      <Typography variant="h6">{producto.nombre}</Typography>
                    </CardContent>
                    <CardActions sx={{ px: "15px" }}>
                      <Typography
                        variant="h6"
                        sx={{
                          textAlign: "right",
                          width: "50%",
                        }}
                      >
                        {clp(producto.precio)}
                      </Typography>
                    </CardActions>
                    <Link to={`/producto/${producto.id}`}></Link>
                  </Card>
                </Grid>
              ))
            : "cargando..."}
          {/* FinMapeo */}
        </Grid>
      </Container>
    </>
  );
}

export default Cards;
