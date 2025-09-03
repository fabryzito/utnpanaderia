import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  const user = JSON.parse(localStorage.getItem("auth"));
  return user ? <Outlet /> : <Navigate to="/login" />;
}
export default ProtectedRoute;