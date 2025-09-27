import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const deportes = [
    {
      nombre: "Futbol",
      descripcion: "El deporte rey, trabajo en equipo y resistencia.",
      imagen: "https://img.icons8.com/color/96/soccer-ball.png",
    },
    {
      nombre: "Basquetbol",
      descripcion: "Juego rápido y dinámico con balón y aro.",
      imagen: "https://img.icons8.com/color/96/basketball.png",
    },
    {
      nombre: "Natacion",
      descripcion: "Entrenamiento acuático que combina fuerza y técnica.",
      imagen: "https://img.icons8.com/color/96/swimming.png",
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const handleSelectDeporte = (dep) => {
    const updatedUser = { ...user, deporte: dep.nombre.toLowerCase() };
    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
    navigate(`/deporte/${dep.nombre.toLowerCase()}`);
  };

  return (
    <div className="dashboard-bg min-h-screen">
      <div className="dashboard-container">
        {/* Header */}
        <div className="dashboard-header">
          <h1>
            🏅 Bienvenido {user?.username || "Invitado"}
          </h1>
          <div className="dashboard-btn-group">
            <button
              className="dashboard-btn dashboard-btn-green"
              onClick={() => navigate("/perfil")}
            >
              Mi Perfil
            </button>
            <button
              className="dashboard-btn dashboard-btn-red"
              onClick={handleLogout}
            >
              Cerrar sesión
            </button>
          </div>
        </div>

        {/* Tarjetas de deportes */}
        <div className="dashboard-grid">
          {deportes.map((dep, i) => (
            <div
              key={i}
              className="dashboard-card"
              onClick={() => handleSelectDeporte(dep)}
            >
              <div className="dashboard-card-content">
                <img
                  src={dep.imagen}
                  alt={dep.nombre}
                  className="dashboard-card-img"
                />
                <h2>{dep.nombre}</h2>
                <p>{dep.descripcion}</p>
                <button className="dashboard-btn dashboard-btn-blue">
                  Ver más
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
