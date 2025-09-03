import { useEffect, useState } from "react";
import { getProductos, deleteProducto } from "../services/api";
import { Link } from "react-router-dom";
import "../styles/Productos.css";

function Productos() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProductos().then((res) => setProductos(res.data));
  }, []);

  const handleDelete = (id) => {
    deleteProducto(id).then(() => {
      setProductos(productos.filter((p) => p.id !== id));
    });
  };

  return (
    <div className="productos">
      <h2>Lista de Productos</h2>
      <Link to="/productos/nuevo" className="btn-primary">
        Agregar Producto
      </Link>

      <ul className="productos-lista">
        {productos.map((p) => (
          <li key={p.id} className="producto-item">
            <span>
              {p.nombre} - ${p.precio}
            </span>
            <div className="acciones">
              <Link to={`/productos/${p.id}`} className="btn-link">
                Ver
              </Link>
              <Link to={`/productos/editar/${p.id}`} className="btn-warning">
                Editar
              </Link>
              <button
                onClick={() => handleDelete(p.id)}
                className="btn-danger"
              >
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Productos;
