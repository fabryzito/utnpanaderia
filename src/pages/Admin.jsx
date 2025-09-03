import { Link } from "react-router-dom";
import "../styles/Admin.css";

function Admin() {
  return (
    <div className="admin">
      <h2>Panel de Administración</h2>
      <div className="admin-menu">
        <Link to="/productos" className="btn-primary">
          Gestionar Productos
        </Link>
        <Link to="/usuarios" className="btn-primary">
          Gestionar Usuarios
        </Link>
      </div>
    </div>
  );
}

export default Admin;
