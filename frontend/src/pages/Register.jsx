import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (res.ok) {
        navigate("/login", { state: { message: "✅ Registro exitoso, ahora inicia sesión" } });
      } else {
        setError(data.message || "Error al registrarse");
      }
    } catch (error) {
      console.error(error);
      setError("Error en el servidor");
    }
  };

  return (
    <div className="register-page">
      <div className="register-wrapper">
        <form onSubmit={handleRegister} className="register-form">
          <h2>Registro</h2>

          {error && <div className="error-box">{error}</div>}

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

          <button type="submit">Registrarse</button>
        </form>
      </div>
    </div>
  );
}
