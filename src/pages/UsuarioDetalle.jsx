import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUsuario } from "../services/api";

function UsuarioDetalle() {
  const { id } = useParams();
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    getUsuario(id).then(res => setUsuario(res.data));
  }, [id]);

  if (!usuario) return <p>Cargando...</p>;

  return (
    <div>
      <h2 className="text-2xl font-bold">{usuario.nombre}</h2>
      <p>Email: {usuario.email}</p>
    </div>
  );
}
export default UsuarioDetalle;