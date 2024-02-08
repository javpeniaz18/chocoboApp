import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const ProductCard = ({ product, handleAgregar, handleQuitar }) => {
  // Utilizamos el almacenamiento local para mantener el estado de 'added'
  const [added, setAdded] = useState(() => {
    const storedValue = localStorage.getItem(`product_${product.id}_added`);
    return storedValue ? JSON.parse(storedValue) : true;
  });

  // Función para manejar el evento de agregar al carrito
  const clickAgregar = () => {
    setAdded(false);
    handleAgregar();
  };

  // Función para manejar el evento de quitar del carrito
  const clickEliminar = () => {
    setAdded(true);
    handleQuitar();
  };

  // Guardar el estado 'added' en el almacenamiento local cada vez que cambie
  useEffect(() => {
    localStorage.setItem(`product_${product.id}_added`, JSON.stringify(added));
  }, [added, product.id]);

  return (
    <div className="p-3">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 250 }}
          image={product.image}
          title={product.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title.length > 10
              ? `${product.title.slice(0, 20)}...`
              : product.title}
          </Typography>

          <Rating
            className="mb-3"
            name="read-only"
            value={product.rating?.rate}
            readOnly
          />

          <Typography variant="body2" color="text.secondary">
            {product.description.length > 30
              ? `${product.description.slice(0, 70)}...`
              : product.description}
          </Typography>

          <div className="mt-3" variant="body2" color="text.secondary">
            $ {product.price}
          </div>
        </CardContent>

        <CardActions className="mb-2 d-flex justify-content-between p-3 pt-0">
          {added ? (
            <Button variant="contained" onClick={clickAgregar}>
              Add to Cart
            </Button>
          ) : (
            <Button
              variant="contained"
              color="secondary"
              onClick={clickEliminar}
            >
              Remove from cart
            </Button>
          )}

          <FavoriteBorderIcon fontSize="large" />
        </CardActions>
        {/* <FavoriteIcon color="error" fontSize="large" /> */}
      </Card>
    </div>
  );
};

export default ProductCard;
