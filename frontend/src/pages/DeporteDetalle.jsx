import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./DeporteDetalle.css";

const DeporteDetalle = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { deporte, perfil } = location.state || {};

  if (!deporte || !perfil) {
    return (
      <div className="deporte-detalle-container">
        <h2>Información incompleta</h2>
        <button onClick={() => navigate("/dashboard")}>Volver al Dashboard</button>
      </div>
    );
  }

  const generarRutina = () => {
    const { edad, peso, objetivo } = perfil;

    // Datos dinámicos de ejemplo
    const rutinas = {
      "Fútbol": {
        ejercicios: [
          { dia: "Lunes", actividad: "Calentamiento 15 min + Técnica de pases 45 min" },
          { dia: "Miércoles", actividad: "Resistencia en cancha 60 min + Estiramientos" },
          { dia: "Viernes", actividad: "Juego táctico 1h + Fuerza piernas 30 min" },
        ],
        alimentacion: [
          { comida: "Desayuno", plan: "Avena + Fruta + Huevo" },
          { comida: "Almuerzo", plan: "Pollo a la plancha + Arroz integral + Verduras" },
          { comida: "Cena", plan: "Sopa de verduras + Pescado al horno" },
        ],
        consejos: [
          "Hidratación constante",
          "Dormir mínimo 7-8 horas",
          "Estiramientos diarios"
        ],
      },
      "Natación": {
        ejercicios: [
          { dia: "Martes", actividad: "Series de 30 min crol + técnica de respiración" },
          { dia: "Jueves", actividad: "Braza y espalda 45 min + Patada 15 min" },
          { dia: "Sábado", actividad: "Natación continua 1h + Estiramientos" },
        ],
        alimentacion: [
          { comida: "Desayuno", plan: "Batido de proteínas + Fruta" },
          { comida: "Almuerzo", plan: "Pasta integral + Pollo + Verduras" },
          { comida: "Cena", plan: "Ensalada + Pescado" },
        ],
        consejos: [
          "Respirar correctamente durante la técnica",
          "Mantener core activo",
          "Estiramiento de hombros diario"
        ],
      },
      "Básquetbol": {
        ejercicios: [
          { dia: "Lunes", actividad: "Dribbling y tiros 45 min + Fuerza brazos 20 min" },
          { dia: "Miércoles", actividad: "Juego en equipo 60 min + Resistencia" },
          { dia: "Viernes", actividad: "Agilidad y coordinación 40 min + Tiros libres 20 min" },
        ],
        alimentacion: [
          { comida: "Desayuno", plan: "Pan integral + Huevos + Fruta" },
          { comida: "Almuerzo", plan: "Arroz integral + Pollo + Verduras" },
          { comida: "Cena", plan: "Ensalada + Proteína ligera" },
        ],
        consejos: [
          "Calentamiento y estiramiento antes del juego",
          "Hidratación adecuada",
          "Práctica de tiros libres y puntería"
        ],
      }
    };

    // Si el deporte no está definido, usamos uno genérico
    return rutinas[deporte.nombre] || {
      ejercicios: [{ dia: "Todos los días", actividad: "Rutina general adaptada al objetivo" }],
      alimentacion: [{ comida: "Todos", plan: "Plan balanceado adaptado" }],
      consejos: ["Mantener disciplina", "Dormir bien", "Hidratación"]
    };
  };

  const rutina = generarRutina();

  return (
    <div className="deporte-detalle-container">
      <h1>{deporte.nombre}</h1>
      <img src={deporte.imagen} alt={deporte.nombre} />
      <p>{deporte.descripcion}</p>

      <h2>Rutina de Ejercicios</h2>
      <table>
        <thead>
          <tr>
            <th>Día</th>
            <th>Actividad</th>
          </tr>
        </thead>
        <tbody>
          {rutina.ejercicios.map((e, idx) => (
            <tr key={idx}>
              <td>{e.dia}</td>
              <td>{e.actividad}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Plan de Alimentación</h2>
      <table>
        <thead>
          <tr>
            <th>Comida</th>
            <th>Plan</th>
          </tr>
        </thead>
        <tbody>
          {rutina.alimentacion.map((a, idx) => (
            <tr key={idx}>
              <td>{a.comida}</td>
              <td>{a.plan}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Consejos</h2>
      <ul>
        {rutina.consejos.map((c, idx) => (
          <li key={idx}>{c}</li>
        ))}
      </ul>

      <button onClick={() => navigate("/dashboard")}>← Volver al Dashboard</button>
    </div>
  );
};

export default DeporteDetalle;
