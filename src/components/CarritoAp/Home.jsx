import "./home.css"; // Importa tu archivo de estilos CSS para el componente Home

const Home = () => {
  return (
    <div>
      <div className="col-12">
        <div className="image-container">
          <div className="image-text">
            <h1>Your friendly store</h1>
            <p>
              Explore our collection of products and find your next favorite!
            </p>
          </div>
          <img
            src="https://mymodernmet.com/wp/wp-content/uploads/2022/02/ghibli-park-opening-and-trailer-thumbnail.jpg"
            alt="Imagen de Ghibli Park"
            className="w-100"
          />
        </div>
      </div>
      <div className="col-12">
        <div className="image-container">
          <img
            src="https://www.ohayo.it/wp-content/uploads/2022/01/giardino-arrietty-parco-ghibli-1-1024x675.jpg"
            alt="Otra imagen de Ghibli Park"
            className="w-100"
          />
        </div>
      </div>
      <div className="col-12">
        <div className="image-container">
          <img
            src="https://www.ohayo.it/wp-content/uploads/2022/01/great-ghibli-warehouse-citta-incantata-1024x672.jpg"
            alt="Otra imagen de Ghibli Park"
            className="w-100"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
