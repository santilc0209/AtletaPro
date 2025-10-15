import React, { useEffect, useState } from "react";
import "./Home.css";
import logo from "../assets/Logo.png";

const Home = () => {
  const [status, setStatus] = useState(""); // Para mensajes de éxito/error

  useEffect(() => {
    // Smooth scroll para los enlaces internos
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }, []);

  const handleIngresar = () => {
    window.location.href = "/login"; // Cambia a tu ruta de login/registro
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xdkdjoee", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: data,
      });

      if (response.ok) {
        setStatus("Gracias por tu mensaje, te contactaremos pronto!");
        form.reset();
      } else {
        setStatus("Oops! Hubo un problema al enviar el mensaje.");
      }
    } catch (error) {
      setStatus("Error de red, por favor intenta de nuevo.");
    }
  };

  return (
    <div className="home-container">
      {/* ===== NAVBAR ===== */}
      <header className="navbar">
        <div className="navbar-content">
          <div className="navbar-logo">
            <img src={logo} alt="Atleta Pro Logo" />
            <span>Atleta Pro</span>
          </div>

          <nav>
            <ul>
              <li><a href="#mision">Misión</a></li>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#equipo">Equipo</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </nav>

          <div className="nav-actions">
            <button className="btn-ingresar" onClick={handleIngresar}>
              Ingresar / Registrarse
            </button>
          </div>
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero-content fade-up">
          <h1>
            <span className="highlight">Entrena</span> como un profesional
          </h1>
          <h3>Nutrición, disciplina y ciencia</h3>
          <p>
            Planes personalizados impulsados por inteligencia artificial y asesoría de expertos en alto rendimiento. 
            Transforma tu cuerpo y mente con tecnología de vanguardia.
          </p>
          <div className="hero-buttons">
            <a href="#servicios" className="btn-primary">Conócenos</a>
          </div>
        </div>

        <div className="hero-logo fade-up">
          <img src={logo} alt="Atleta Pro" />
          <h2>Atleta Pro</h2>
        </div>
      </section>

      {/* ===== MISIÓN ===== */}
      <section id="mision" className="section fade-up">
        <h2>Nuestra Misión y Visión</h2>
        <p className="lead">
          En Atleta Pro buscamos revolucionar el entrenamiento deportivo mediante el uso de inteligencia artificial, ciencia del movimiento y nutrición avanzada.
          Nuestra visión es formar atletas integrales con bienestar físico y mental.
        </p>
      </section>

      {/* ===== SERVICIOS ===== */}
      <section id="servicios" className="section dark fade-up">
        <h2>Nuestros Servicios</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Entrenamiento Personalizado</h3>
            <p>Planes de alto rendimiento adaptados a tu deporte y metas personales.</p>
          </div>
          <div className="service-card">
            <h3>Nutrición Deportiva</h3>
            <p>Asesoría nutricional basada en tu biotipo, gasto energético y objetivos.</p>
          </div>
          <div className="service-card">
            <h3>Evaluación Física y Mental</h3>
            <p>Diagnóstico integral para potenciar tu desarrollo y prevenir lesiones.</p>
          </div>
        </div>
      </section>

      {/* ===== EQUIPO ===== */}
      <section id="equipo" className="section fade-up">
        <h2>Nuestro Equipo</h2>
        <div className="team-grid">
          <div className="team-card">
            <img src={logo} alt="Santiago López" />
            <h3>Santiago López</h3>
            <p>Fundador / Entrenador de alto rendimiento</p>
          </div>
          <div className="team-card">
            <img src={logo} alt="Mario Testa" />
            <h3>Mario Testa</h3>
            <p>Nutricionista deportiva</p>
          </div>
          <div className="team-card">
            <img src={logo} alt="Juanda Pineda" />
            <h3>Juanda Pineda</h3>
            <p>Psicólogo del deporte</p>
          </div>
        </div>
      </section>

      {/* ===== CONTACTO ===== */}
      <section id="contacto" className="section dark fade-up">
        <h2>Contáctanos</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Nombre completo" required />
          <input type="email" name="email" placeholder="Correo electrónico" required />
          <textarea name="message" placeholder="Tu mensaje" rows="4" required></textarea>
          <button type="submit" className="btn-primary">Enviar</button>
          {status && <p className="form-status">{status}</p>}
        </form>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        © 2025 Atleta Pro — Todos los derechos reservados.
      </footer>
    </div>
  );
};

export default Home;
