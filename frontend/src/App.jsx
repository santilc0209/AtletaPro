import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./AuthContext";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import DeporteDetalle from "./pages/DeporteDetalle";
import PerfilUsuario from "./pages/PerfilUsuario";
import RutinaDiaria from "./pages/RutinaDiaria";

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

        {/* RUTA PROTEGIDA: PerfilUsuario */}
        <Route
          path="/perfil-usuario"
          element={
            <PrivateRoute>
              <PerfilUsuario />
            </PrivateRoute>
          }
        />

        {/* RUTA PROTEGIDA: RutinaDiaria */}
        <Route
          path="/rutina-diaria"
          element={
            <PrivateRoute>
              <RutinaDiaria />
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
