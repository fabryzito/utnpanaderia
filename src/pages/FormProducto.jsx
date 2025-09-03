import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createProducto, getProducto, updateProducto } from "../services/api";

function FormProducto() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [producto, setProducto] = useState({ nombre: "", precio: "" });

  useEffect(() => {
    if (id) {
      getProducto(id).then(res => setProducto(res.data));
    }
  }, [id]);

  const handleChange = (e) => {
    setProducto({ ...producto, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      updateProducto(id, producto).then(() => navigate("/productos"));
    } else {
      createProducto(producto).then(() => navigate("/productos"));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="nombre"
        placeholder="Nombre del producto"
        value={producto.nombre}
        onChange={handleChange}
        className="border p-2 w-full"
        required
      />
      <input
        type="number"
        name="precio"
        placeholder="Precio"
        value={producto.precio}
        onChange={handleChange}
        className="border p-2 w-full"
        required
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        {id ? "Actualizar" : "Crear"}
      </button>
    </form>
  );
}
export default FormProducto;