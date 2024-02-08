// Products.js
import { useContext } from "react";
import ProductCard from "./ProductCard";
import { ProductsContext } from "../Context/ProductsContext";
import RenderGroup from "../CarritoAp/FilterProducts";
import { CartContext } from "../Context/CartContext";

const Products = () => {
  const { products, setProducts } = useContext(ProductsContext); // Modificado para incluir setProducts

  const { listaCompras, agregarCompra, eliminarCompra } =
    useContext(CartContext);

  const handleAgregar = (compra) => {
    agregarCompra(compra);
  };

  const handleQuitar = (id) => {
    eliminarCompra(id);
  };

  return (
    <div>
      <div className="d-flex flex-wrap justify-content-center mt-4 mb-4">
        {products.map((item) => (
          <ProductCard
            product={item}
            key={item.id}
            handleAgregar={() => handleAgregar(item)}
            handleQuitar={() => handleQuitar(item.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
