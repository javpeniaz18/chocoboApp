import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/CarritoAp/Home";
import About from "./components/CarritoAp/About";
import Products from "./components/CarritoAp/Products";
import Carrito from "./components/CarritoAp/Carrito";
import { ProductsProvider } from "./components/Context/ProductsProvider";
import { CartProvider } from "./components/Context/CartProvider";
import Footer from "./components/CarritoAp/Footer";

function App() {
  return (
    <ProductsProvider>
      <CartProvider>
        <NavBar></NavBar>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />}></Route>
            <Route path="/cart" element={<Carrito />}></Route>
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer></Footer>
        </div>
      </CartProvider>
    </ProductsProvider>
  );
}

export default App;
