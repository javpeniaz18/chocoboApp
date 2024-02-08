import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const DetallePelicula = () => {
  const { id } = useParams();

  const basePosterURL = "https://image.tmdb.org/t/p/w500"; // URL base para las imágenes (ajusta el tamaño si es necesario)

  const [detalle, setDetalle] = useState([]);

  const detallePelicula = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=652274915c4acda2f641507d4e8f3723`
      );
      const data = await response.json();
      setDetalle(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    detallePelicula();
  }, []);

  console.log(detalle);

  return (
    <div>
      El id de la pelicula es : {id}
      <div>
        <img src={`${basePosterURL}${detalle.poster_path}`}></img>
        <p>{detalle.overview}</p>
      </div>
    </div>
  );
};

export default DetallePelicula;
