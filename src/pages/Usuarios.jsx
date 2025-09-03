import { useEffect, useState } from "react";
import { getUsuarios, deleteUsuario } from "../services/api";
import { Link } from "react-router-dom";
import "../styles/Usuarios.css";

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    getUsuarios().then((res) => setUsuarios(res.data));
  }, []);

  const handleDelete = (id) => {
    deleteUsuario(id).then(() => {
      setUsuarios(usuarios.filter((u) => u.id !== id));
    });
  };

  return (
    <div className="usuarios">
      <h2>Lista de Usuarios</h2>
      <Link to="/usuarios/nuevo" className="btn-primary">
        Agregar Usuario
      </Link>

      <ul className="usuarios-lista">
        {usuarios.map((u) => (
          <li key={u.id} className="usuario-item">
            <span>
              {u.nombre} - {u.email}
            </span>
            <div className="acciones">
              <Link to={`/usuarios/${u.id}`} className="btn-link">
                Ver
              </Link>
              <Link to={`/usuarios/editar/${u.id}`} className="btn-warning">
                Editar
              </Link>
              <button
                onClick={() => handleDelete(u.id)}
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

export default Usuarios;
