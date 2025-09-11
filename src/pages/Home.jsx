// home.jsx
import { useState, useEffect } from "react";
import "../styles/Home.css";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/productos") 
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.error("Error al obtener los productos:", error));
  }, []);

  return (
    <div className="home">
      <h1>Bienvenidos a la Panadería UTN</h1>
      <p>Los mejores panes y facturas recién horneados :)</p>

      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.imagen} alt={product.nombre} className="product-image" />
            <h2>{product.nombre}</h2>
            <p>Precio: ${product.precio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

