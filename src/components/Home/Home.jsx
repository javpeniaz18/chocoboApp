import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Clima from "../weather/clima";

const Home = () => {
  const [ciudad, setCiudad] = useState("");
  const [nuevoDato, setNuevoDato] = useState("");
  const [climaActual, setClimaActual] = useState([]);

  const onChangeNewData = (e) => {
    setNuevoDato(e.target.value);
  };

  const ciudadClima = async (e) => {
    e.preventDefault();
    setCiudad(nuevoDato);
    setNuevoDato("");
    await fetchData(nuevoDato);
  };

  const fetchData = async (ciudad) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=3e960bb92b065d80ee7428724adc4324`
    );
    const data = await response.json();
    setClimaActual(data);
  };

  useEffect(() => {
    console.log(climaActual);
  }, [ciudad, climaActual]);

  return (
    <div className="row">
      <div className="d-flex justify-content-center mt-3">
        <h4>Aplicación de clima 🌞</h4>
      </div>
      <Form
        onSubmit={ciudadClima}
        className="d-flex align-items-center justify-content-center"
      >
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            value={nuevoDato}
            name="clima-txt"
            onChange={onChangeNewData}
            type="text"
            placeholder="Búsqueda de clima"
          />
        </Form.Group>
        <div className="p-4">
          <Button variant="primary" type="submit">
            Buscar
          </Button>
        </div>
      </Form>

      <div>{ciudad ? <Clima clima={climaActual} /> : ""}</div>
    </div>
  );
};

export default Home;
