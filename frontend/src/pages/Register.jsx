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
    <div
      className="flex items-center justify-center"
      style={{
        minHeight: "80vh",
        background: "linear-gradient(135deg, #0a0f1a 70%, #161b22 100%)",
      }}
    >
      <form
        onSubmit={handleRegister}
        className="w-full max-w-md"
        style={{
          background: "#161b22",
          padding: "2rem",
          borderRadius: "1.5rem",
          boxShadow: "0 8px 32px -8px rgba(45,212,191,.18)",
          border: "1px solid #23272f",
          textAlign: "center",
        }}
      >
        <h2
          className="text-3xl font-bold mb-8"
          style={{ color: "#ff7849", letterSpacing: "1px" }}
        >
          Registro
        </h2>
        {error && (
          <div
            style={{
              background: "rgba(225,29,72,0.12)",
              color: "#e11d48",
              borderRadius: "8px",
              padding: "8px",
              marginBottom: "1rem",
              fontWeight: "600",
            }}
          >
            {error}
          </div>
        )}
        <input
          type="text"
          placeholder="Usuario"
          className="w-full mb-4 p-4 rounded-xl bg-[#23272f] text-[#f5f7fa] border-2 border-[#2dd4bf] focus:border-[#ff7849] focus:outline-none transition font-medium text-lg"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="w-full mb-6 p-4 rounded-xl bg-[#23272f] text-[#f5f7fa] border-2 border-[#2dd4bf] focus:border-[#ff7849] focus:outline-none transition font-medium text-lg"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full p-3 rounded font-bold bg-gradient-to-r from-[#ff7849] to-[#e11d48] text-white shadow-lg hover:scale-105 hover:shadow-xl transition text-lg"
        >
          Registrarse
        </button>
      </form>
    </div>
  );
}
