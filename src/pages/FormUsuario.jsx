import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createUsuario, getUsuario, updateUsuario } from "../services/api";

function FormUsuario() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState({ nombre: "", email: "", password: "" });

  useEffect(() => {
    if (id) {
      getUsuario(id).then(res => setUsuario(res.data));
    }
  }, [id]);

  const handleChange = (e) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      updateUsuario(id, usuario).then(() => navigate("/usuarios"));
    } else {
      createUsuario(usuario).then(() => navigate("/usuarios"));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="nombre"
        placeholder="Nombre del usuario"
        value={usuario.nombre}
        onChange={handleChange}
        className="border p-2 w-full"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={usuario.email}
        onChange={handleChange}
        className="border p-2 w-full"
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Contraseña"
        value={usuario.password}
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
export default FormUsuario;