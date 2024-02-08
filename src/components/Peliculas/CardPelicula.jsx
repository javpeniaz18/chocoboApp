import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const CardPelicula = ({ pelicula }) => {
  const basePosterURL = "https://image.tmdb.org/t/p/w500"; // URL base para las imágenes (ajusta el tamaño si es necesario)

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={`${basePosterURL}${pelicula.poster_path}`}
        alt={pelicula.title}
      />
      <Card.Body>
        <Card.Title>{pelicula.title}</Card.Title>
        <Card.Text>{pelicula.overview}</Card.Text>
        <Card.Text>{pelicula.release_date}</Card.Text>
        <Link to={`detalle/${pelicula.id}`}>
          <Button variant="primary">Go somewhere</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default CardPelicula;
