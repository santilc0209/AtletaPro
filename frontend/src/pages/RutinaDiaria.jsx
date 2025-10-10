import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const RutinaDiaria = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { deporte, perfil } = location.state || {};

  if (!deporte || !perfil) {
    return (
      <div>
        <h2>Información incompleta</h2>
        <button onClick={() => navigate("/dashboard")}>Volver al Dashboard</button>
      </div>
    );
  }

  // Rutinas ejemplo según deporte y objetivo
  const generarRutina = () => {
    switch (deporte.nombre) {
      case "Fútbol":
        return `Rutina para ${perfil.nombre}: 1h cardio + 30min fuerza + práctica de balón enfocada en ${perfil.objetivo}.`;
      case "Natación":
        return `Rutina para ${perfil.nombre}: 30min calentamiento + series de natación adaptadas a ${perfil.objetivo}.`;
      case "Básquetbol":
        return `Rutina para ${perfil.nombre}: 40min dribbling + 30min tiro + 20min agilidad según ${perfil.objetivo}.`;
      default:
        return `Rutina para ${perfil.nombre}: rutina estándar de ${deporte.nombre} adaptada a ${perfil.objetivo}.`;
    }
  };

  return (
    <div className="rutina-container">
      <h1>Rutina Diaria: {deporte.nombre}</h1>
      <p>{generarRutina()}</p>
      <button onClick={() => navigate("/dashboard")}>← Volver al Dashboard</button>
    </div>
  );
};

export default RutinaDiaria;
