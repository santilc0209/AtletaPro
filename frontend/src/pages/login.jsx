import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../AuthContext";

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
    <div
      className="flex items-center justify-center"
      style={{
        minHeight: "80vh",
        background: "linear-gradient(135deg, #0a0f1a 70%, #161b22 100%)",
      }}
    >
      <form
        onSubmit={handleLogin}
        className="w-full max-w-sm bg-[#161b22] p-8 rounded-2xl shadow-2xl"
        style={{
          border: "1px solid #23272f",
        }}
      >
        <h2
          className="text-3xl font-bold mb-6 text-center"
          style={{
            color: "#ff7849",
            letterSpacing: "1px",
          }}
        >
          🔑 Iniciar Sesión
        </h2>

        {location.state?.message && (
          <p className="mb-3 p-2 text-green-400 bg-green-900/30 rounded text-center font-semibold">
            {location.state.message}
          </p>
        )}

        {error && (
          <p className="mb-3 p-2 text-red-400 bg-red-900/30 rounded text-center font-semibold">
            {error}
          </p>
        )}

        <input
          type="text"
          placeholder="Usuario"
          className="w-full p-3 mb-4 rounded-lg bg-[#23272f] text-[#f5f7fa] border border-[#2dd4bf] focus:border-[#ff7849] focus:outline-none transition"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Contraseña"
          className="w-full p-3 mb-4 rounded-lg bg-[#23272f] text-[#f5f7fa] border border-[#2dd4bf] focus:border-[#ff7849] focus:outline-none transition"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full p-3 rounded-lg font-bold bg-gradient-to-r from-[#ff7849] to-[#e11d48] text-white shadow-lg hover:scale-105 hover:shadow-xl transition"
        >
          Iniciar Sesión
        </button>

        <p className="text-center text-sm mt-6 text-[#8ca0b3]">
          ¿No tienes cuenta?{" "}
          <a
            href="/register"
            className="text-[#2dd4bf] hover:underline font-semibold"
          >
            Regístrate aquí
          </a>
        </p>
      </form>
    </div>
  );
}
