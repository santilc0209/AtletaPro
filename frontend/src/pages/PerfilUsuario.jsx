import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./PerfilUsuario.css";

const PerfilUsuario = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const deporte = location.state?.deporte;

  const [perfil, setPerfil] = useState({
    nombre: "",
    edad: "",
    peso: "",
    objetivo: "",
  });

  const [guardado, setGuardado] = useState(false);

  const handleGuardar = (e) => {
    e.preventDefault();
    setGuardado(true);

    setTimeout(() => {
      navigate(`/deporte/${deporte.nombre}`, { state: { deporte, perfil } });
    }, 2000);
  };

  if (!deporte) {
    return (
      <div className="perfil-container">
        <h2>No se seleccionó ningún deporte</h2>
        <button onClick={() => navigate("/dashboard")}>Volver al Dashboard</button>
      </div>
    );
  }

  return (
    <div className="perfil-container">
      <h1>Perfil de Usuario</h1>
      <p>Completa tus datos para personalizar tu rutina de {deporte.nombre}</p>

      <form onSubmit={handleGuardar}>
        <input
          type="text"
          placeholder="Nombre"
          value={perfil.nombre}
          onChange={(e) => setPerfil({ ...perfil, nombre: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Edad"
          value={perfil.edad}
          onChange={(e) => setPerfil({ ...perfil, edad: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Peso (kg)"
          value={perfil.peso}
          onChange={(e) => setPerfil({ ...perfil, peso: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Objetivo (fuerza, resistencia, etc.)"
          value={perfil.objetivo}
          onChange={(e) => setPerfil({ ...perfil, objetivo: e.target.value })}
          required
        />
        <button type="submit">Guardar Perfil</button>
      </form>

      {guardado && <p className="mensaje-guardado">✅ Perfil guardado correctamente</p>}
    </div>
  );
};

export default PerfilUsuario;
