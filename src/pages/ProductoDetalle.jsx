import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducto } from "../services/api";

function ProductoDetalle() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    getProducto(id).then(res => setProducto(res.data));
  }, [id]);

  if (!producto) return <p>Cargando...</p>;

  return (
    <div>
      <h2 className="text-2xl font-bold">{producto.nombre}</h2>
      <p>Precio: ${producto.precio}</p>
    </div>
  );
}
export default ProductoDetalle;