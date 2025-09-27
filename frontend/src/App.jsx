import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./AuthContext";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import DeporteDetalle from "./pages/DeporteDetalle";
import PerfilUsuario from "./pages/PerfilUsuario"; // 👈 nuevo perfil

// Componente para proteger rutas
function PrivateRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* RUTA PROTEGIDA: Dashboard */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        {/* RUTA PROTEGIDA: Perfil */}
        <Route
          path="/perfil"
          element={
            <PrivateRoute>
              <PerfilUsuario />
            </PrivateRoute>
          }
        />

        {/* RUTA PROTEGIDA: Detalle de deportes */}
        <Route
          path="/deporte/:nombre"
          element={
            <PrivateRoute>
              <DeporteDetalle />
            </PrivateRoute>
          }
        />

        {/* Cualquier ruta desconocida redirige al Home */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
