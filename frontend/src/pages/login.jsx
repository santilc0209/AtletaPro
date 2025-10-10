import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../AuthContext";
import "./Login.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (res.ok) {
        login(data.username);
        navigate("/dashboard");
      } else {
        setError(data.message || "Error al iniciar sesión");
      }
    } catch (error) {
      console.error(error);
      setError("Error en el servidor");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2>🔑 Iniciar Sesión</h2>

        {location.state?.message && (
          <div className="msg success">{location.state.message}</div>
        )}

        {error && <div className="msg error">{error}</div>}

        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Iniciar Sesión</button>

        <p className="login-footer">
          ¿No tienes cuenta?{" "}
          <a href="/register" className="link">
            Regístrate aquí
          </a>
        </p>
      </form>
    </div>
  );
}
