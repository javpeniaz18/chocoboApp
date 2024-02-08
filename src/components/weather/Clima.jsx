import React from "react";

const Clima = ({ clima }) => {
  return (
    <div className="text-center">
      <div>Ubicación: {clima.name}</div>
      <div>
        Tiempo:{" "}
        {clima &&
          clima.weather &&
          clima.weather[0] &&
          clima.weather[0].description}
      </div>
      <div>Temperatura: {clima?.main?.temp}</div>
    </div>
  );
};

export default Clima;
