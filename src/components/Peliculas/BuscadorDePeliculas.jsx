import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import CardPelicula from "./CardPelicula";

const BuscadorDePeliculas = () => {
  const [valorInput, setValorInput] = useState("");
  const [pelicula, setPelicula] = useState("");

  const [dataPelicula, setDataPelicula] = useState([]);

  const obtenerValorInput = (e) => {
    setValorInput(e.target.value);
  };

  const EnviarNuevoDato = (e) => {
    e.preventDefault();
    setPelicula(valorInput);
    setValorInput("");
  };

  const Busqueda = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=652274915c4acda2f641507d4e8f3723&query=${pelicula}`
      );

      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.status}`);
      }

      const data = await response.json();
      console.log("Data de la película:", data);
      setDataPelicula(data.results); // Asumiendo que los resultados están en la propiedad 'results'
    } catch (error) {
      console.error("Error al realizar la búsqueda:", error);
    }
  };

  useEffect(() => {
    Busqueda();
  }, [pelicula]);

  return (
    <div className="text-center mt-4">
      <h1>Buscador de películas</h1>
      <div>
        <Form
          onSubmit={EnviarNuevoDato}
          className="d-flex align-items-center justify-content-center"
        >
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              value={valorInput}
              onChange={obtenerValorInput}
              name="pelicula"
              type="text"
              placeholder="Búsqueda de película"
            />
          </Form.Group>
          <div className="p-4">
            <Button variant="primary" type="submit">
              Buscar
            </Button>
          </div>
        </Form>
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        {dataPelicula.map((item) => (
          <div key={item.id} className="p-2">
            <CardPelicula pelicula={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuscadorDePeliculas;
