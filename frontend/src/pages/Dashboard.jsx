import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const deportesData = [
  { nombre: "Fútbol", descripcion: "Trabajo en equipo y resistencia.", imagen: "https://img.icons8.com/color/96/soccer-ball.png" },
  { nombre: "Básquetbol", descripcion: "Juego rápido y dinámico.", imagen: "https://img.icons8.com/color/96/basketball.png" },
  { nombre: "Natación", descripcion: "Fuerza y técnica en el agua.", imagen: "https://img.icons8.com/color/96/swimming.png" },
  { nombre: "Tenis", descripcion: "Precisión, reflejos y estrategia.", imagen: "https://img.icons8.com/color/96/tennis.png" },
  { nombre: "Ciclismo", descripcion: "Resistencia y velocidad.", imagen: "https://img.icons8.com/color/96/cycling-road.png" },
];

function DeporteCard({ deporte, onClick }) {
  return (
    <div className="deporte-card" onClick={onClick} tabIndex={0}>
      <img src={deporte.imagen} alt={deporte.nombre} className="deporte-img" />
      <h3>{deporte.nombre}</h3>
      <p>{deporte.descripcion}</p>
    </div>
  );
}

const Dashboard = () => {
  const navigate = useNavigate();
  const [busqueda, setBusqueda] = useState("");

  const deportesFiltrados = deportesData.filter(d =>
    d.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  const irAPerfilUsuario = (deporte) => {
    navigate("/perfil-usuario", { state: { deporte } });
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">🏋️‍♂️ Explora tu Deporte</h1>
      <p className="dashboard-subtitle">
        Selecciona un deporte y registra tu perfil.
      </p>

      <input
        type="text"
        className="busqueda-input"
        placeholder="Buscar deporte..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <div className="deportes-grid">
        {deportesFiltrados.length === 0 ? (
          <p style={{ color: "#f87171" }}>No se encontró ningún deporte.</p>
        ) : (
          deportesFiltrados.map((deporte, index) => (
            <DeporteCard
              key={index}
              deporte={deporte}
              onClick={() => irAPerfilUsuario(deporte)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Dashboard;
