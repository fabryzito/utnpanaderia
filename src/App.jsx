import { Routes, Route } from "react-router-dom";

// Componentes
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Páginas
import Home from "./pages/Home";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Productos from "./pages/Productos";
import ProductoDetalle from "./pages/ProductoDetalle";
import Usuarios from "./pages/Usuarios";
import UsuarioDetalle from "./pages/UsuarioDetalle";
import FormProducto from "./pages/FormProducto";
import FormUsuario from "./pages/FormUsuario";

// Rutas protegidas
import ProtectedRoute from "./routes/ProtectedRoute";

// Estilos
import "./styles/App.css";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          {/* Rutas protegidas */}
          <Route element={<ProtectedRoute />}>
            <Route path="/admin" element={<Admin />} />

            <Route path="/productos" element={<Productos />} />
            <Route path="/productos/:id" element={<ProductoDetalle />} />
            <Route path="/productos/nuevo" element={<FormProducto />} />
            <Route path="/productos/editar/:id" element={<FormProducto />} />

            <Route path="/usuarios" element={<Usuarios />} />
            <Route path="/usuarios/:id" element={<UsuarioDetalle />} />
            <Route path="/usuarios/nuevo" element={<FormUsuario />} />
            <Route path="/usuarios/editar/:id" element={<FormUsuario />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;


