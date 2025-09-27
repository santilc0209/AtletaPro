import { useState } from "react";
import "./Home.css";
export default function Home() {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        alert("¡Gracias! Tu mensaje ha sido enviado.");
        setForm({ nombre: "", email: "", mensaje: "" });
      } else {
        alert("Hubo un error al enviar tu mensaje.");
      }
    } catch (err) {
      alert("Error de conexión con el servidor.");
      console.error(err);
    }
  };

  return (
    <>
      {/* NAVBAR */}
      <header style={{ background: "linear-gradient(90deg, var(--c1) 0%, var(--c2) 100%)", boxShadow: "0 2px 12px #0001" }}>
        <div className="container nav" style={{ padding: "16px 0" }}>
          <div className="brand" style={{ display: "flex", alignItems: "center", gap: 12 }}>
            {/* SVG logo */}
            <svg viewBox="0 0 240 240" width="40" height="40">
              <defs>
                <linearGradient id="ring" x1="0" x2="1">
                  <stop offset="0%" stopColor="var(--c3)" />
                  <stop offset="100%" stopColor="var(--c4)" />
                </linearGradient>
                <linearGradient id="Agrad" x1="0" x2="1">
                  <stop offset="0%" stopColor="var(--c1)" />
                  <stop offset="100%" stopColor="var(--c2)" />
                </linearGradient>
              </defs>
              <circle
                cx="120"
                cy="120"
                r="100"
                fill="none"
                stroke="url(#ring)"
                strokeWidth="14"
              />
              <path
                d="M60 170 L120 40 L180 170"
                fill="none"
                stroke="url(#Agrad)"
                strokeWidth="22"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M95 130 H170"
                stroke="#e9edf3"
                strokeWidth="16"
                strokeLinecap="round"
              />
            </svg>
            <strong style={{ fontSize: "1.3rem", letterSpacing: "1px", color: "var(--c3)" }}>
              Elite Performance Group
            </strong>
          </div>
          <div className="btn-group" style={{ gap: 8 }}>
            <a className="cta" href="#contacto" style={{ boxShadow: "0 2px 8px #0001" }}>Quiero saber más</a>
            <a className="cta" href="/login" style={{ boxShadow: "0 2px 8px #0001" }}>Login</a>
            <a className="cta" href="/register" style={{ boxShadow: "0 2px 8px #0001" }}>Registro</a>
          </div>
        </div>
      </header>

      <main className="container" style={{ background: "linear-gradient(135deg, #f8fafc 60%, var(--c2) 100%)", borderRadius: 24, boxShadow: "0 8px 32px #0001", marginTop: 24, marginBottom: 24, padding: "32px 0" }}>
        {/* HERO */}
        <section className="hero" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 32 }}>
          <div style={{ flex: 1, minWidth: 280 }}>
            <span className="pill" style={{ background: "var(--c1)", color: "#222", fontWeight: 600, boxShadow: "0 2px 8px #0001" }}>
              App: <strong>Atleta Pro</strong>
            </span>
            <h1 style={{ fontSize: "2.5rem", fontWeight: 800, margin: "18px 0", color: "var(--c3)", textShadow: "0 2px 8px #0001" }}>
              Entrenamiento y nutrición{" "}
              <span style={{ color: "var(--c1)" }}>personalizados</span> para alto rendimiento
            </h1>
            <p style={{ fontSize: "1.1rem", color: "#444", marginBottom: 18 }}>
              Combinamos inteligencia artificial y análisis de datos para crear planes de entrenamiento y alimentación que se adaptan a tu deporte, objetivos y características físicas.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a className="cta" href="#mision" style={{ boxShadow: "0 2px 8px #0001" }}>
                Nuestra misión
              </a>
              <a
                className="cta"
                style={{
                  background: "linear-gradient(135deg,var(--c1),var(--c2))",
                  color: "#111",
                  boxShadow: "0 2px 8px #0001"
                }}
                href="#equipo"
              >
                Conoce el equipo
              </a>
            </div>
          </div>

          {/* Logo grande */}
          <div className="logo-wrap card" style={{ flex: 1, minWidth: 280, background: "white", borderRadius: 24, boxShadow: "0 8px 32px #0002", padding: 24, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", transition: "transform 0.2s", marginTop: 16 }}>
            <svg viewBox="0 0 600 600" role="img" aria-label="Logo Atleta Pro" style={{ width: 180, height: 180 }}>
              <defs>
                <linearGradient id="gRing" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="var(--c3)" />
                  <stop offset="100%" stopColor="var(--c4)" />
                </linearGradient>
                <linearGradient id="gA" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="var(--c1)" />
                  <stop offset="100%" stopColor="var(--c2)" />
                </linearGradient>
              </defs>
              <circle
                cx="300"
                cy="300"
                r="240"
                fill="none"
                stroke="url(#gRing)"
                strokeWidth="28"
              />
              <path
                d="M160 450 L300 120 L440 450"
                fill="none"
                stroke="url(#gA)"
                strokeWidth="56"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M230 330 H455"
                stroke="#e9edf3"
                strokeWidth="40"
                strokeLinecap="round"
              />
            </svg>
            <div className="logo-title" style={{ fontWeight: 900, fontSize: "2rem", color: "var(--c3)", marginTop: 12, letterSpacing: 2 }}>
              ATLETA PRO
            </div>
          </div>
        </section>

        {/* MISION & VISION */}
        <section id="mision" style={{ marginTop: 48 }}>
          <div className="grid cols-2" style={{ gap: 24 }}>
            <article className="card" style={{ borderRadius: 18, boxShadow: "0 4px 16px #0001", background: "white", padding: 24, transition: "transform 0.2s", cursor: "pointer" }}>
              <h2 style={{ color: "var(--c3)", fontWeight: 700 }}>🎯 Misión</h2>
              <p>
                Brindar a los atletas de alto rendimiento planes de entrenamiento y nutrición personalizados, basados en sus características físicas, su disciplina y sus objetivos, utilizando inteligencia artificial y análisis de datos para maximizar rendimiento y bienestar.
              </p>
            </article>
            <article className="card" style={{ borderRadius: 18, boxShadow: "0 4px 16px #0001", background: "white", padding: 24, transition: "transform 0.2s", cursor: "pointer" }}>
              <h2 style={{ color: "var(--c4)", fontWeight: 700 }}>👁️ Visión</h2>
              <p>
                Ser la plataforma líder en Latinoamérica para la optimización del rendimiento deportivo, reconocida por su innovación, efectividad y por impulsar el éxito de atletas en todas las disciplinas.
              </p>
            </article>
          </div>
        </section>

        {/* EQUIPO */}
        <section id="equipo" style={{ marginTop: 48 }}>
          <h2 style={{ color: "var(--c3)", fontWeight: 700, marginBottom: 18 }}>👥 Equipo</h2>
          <div className="grid cols-3" style={{ gap: 18 }}>
            {[
              { avatar: "SL", nombre: "Santiago Lopez", rol: "CEO & Fundador" },
              { avatar: "MT", nombre: "Mario Testa Vargas", rol: "COO · Operaciones" },
              { avatar: "CT", nombre: "Directora de Tecnología", rol: "Arquitectura · App & Plataforma" },
              { avatar: "ND", nombre: "Nutricionista Deportivo", rol: "Planes alimenticios personalizados" },
              { avatar: "ER", nombre: "Entrenador de Alto Rendimiento", rol: "Rutinas por disciplina" },
              { avatar: "IA", nombre: "Especialista en IA y Datos", rol: "Modelos · Recolección · Analítica" },
            ].map((m, i) => (
              <div className="member" key={i} style={{ background: "white", borderRadius: 16, boxShadow: "0 2px 8px #0001", padding: 16, display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                <div className="avatar" style={{ background: "var(--c1)", color: "#222", fontWeight: 700, borderRadius: "50%", width: 48, height: 48, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem", boxShadow: "0 2px 8px #0001" }}>
                  {m.avatar}
                </div>
                <div>
                  <strong style={{ color: "var(--c3)" }}>{m.nombre}</strong>
                  <div className="role" style={{ color: "#666", fontSize: "0.95rem" }}>{m.rol}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* VALOR */}
        <section style={{ marginTop: 48 }}>
          <div className="grid cols-3" style={{ gap: 24 }}>
            <div className="card" style={{ borderRadius: 16, boxShadow: "0 2px 8px #0001", background: "white", padding: 20 }}>
              <h3 style={{ color: "var(--c3)", fontWeight: 700 }}>Personalización total</h3>
              <p>
                Algoritmos que se adaptan a tu edad, biometría, historial y objetivos competitivos.
              </p>
            </div>
            <div className="card" style={{ borderRadius: 16, boxShadow: "0 2px 8px #0001", background: "white", padding: 20 }}>
              <h3 style={{ color: "var(--c4)", fontWeight: 700 }}>Nutrición inteligente</h3>
              <p>
                Plan alimenticio dinámico con micro y macronutrientes ajustados al ciclo de entrenamiento.
              </p>
            </div>
            <div className="card" style={{ borderRadius: 16, boxShadow: "0 2px 8px #0001", background: "white", padding: 20 }}>
              <h3 style={{ color: "var(--c1)", fontWeight: 700 }}>Asistente 24/7</h3>
              <p>
                Chatbot especializado y análisis de imágenes para seguimiento físico y técnico.
              </p>
            </div>
          </div>
        </section>

        {/* PALETA */}
        <section style={{ marginTop: 48 }}>
          <h2 style={{ color: "var(--c3)", fontWeight: 700 }}>🎨 Paleta de marca</h2>
          <div className="swatches" style={{ display: "flex", gap: 18, marginTop: 12 }}>
            <div className="swatch" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
              <div className="chip" style={{ background: "var(--c1)", width: 32, height: 32, borderRadius: 8, boxShadow: "0 2px 8px #0001" }}></div>
              <div className="meta" style={{ color: "#444" }}>#96DAB8</div>
            </div>
            <div className="swatch" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
              <div className="chip" style={{ background: "var(--c2)", width: 32, height: 32, borderRadius: 8, boxShadow: "0 2px 8px #0001" }}></div>
              <div className="meta" style={{ color: "#444" }}>#F0D7D6</div>
            </div>
            <div className="swatch" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
              <div className="chip" style={{ background: "var(--c3)", width: 32, height: 32, borderRadius: 8, boxShadow: "0 2px 8px #0001" }}></div>
              <div className="meta" style={{ color: "#444" }}>#EC2A00</div>
            </div>
            <div className="swatch" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
              <div className="chip" style={{ background: "var(--c4)", width: 32, height: 32, borderRadius: 8, boxShadow: "0 2px 8px #0001" }}></div>
              <div className="meta" style={{ color: "#444" }}>#E6512C</div>
            </div>
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="card" style={{ marginTop: 48, borderRadius: 18, boxShadow: "0 4px 16px #0001", background: "white", padding: 32 }}>
          <div className="grid cols-2" style={{ gap: 24 }}>
            <div>
              <h2 style={{ color: "var(--c3)", fontWeight: 700 }}>¿Quieres colaborar o invertir?</h2>
              <p>
                Estamos listos para llevar Atleta Pro a la siguiente fase. Escríbenos y te compartimos el roadmap, prototipo y presupuesto.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="grid" style={{ gap: 12 }}>
              <input
                required
                name="nombre"
                placeholder="Nombre"
                value={form.nombre}
                onChange={handleChange}
                style={{ borderRadius: 8, border: "1px solid #e0e0e0", padding: "10px 12px", fontSize: "1rem", boxShadow: "0 2px 8px #0001" }}
              />
              <input
                required
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                style={{ borderRadius: 8, border: "1px solid #e0e0e0", padding: "10px 12px", fontSize: "1rem", boxShadow: "0 2px 8px #0001" }}
              />
              <textarea
                rows="4"
                name="mensaje"
                placeholder="Cuéntanos tu interés"
                value={form.mensaje}
                onChange={handleChange}
                style={{ borderRadius: 8, border: "1px solid #e0e0e0", padding: "10px 12px", fontSize: "1rem", boxShadow: "0 2px 8px #0001" }}
              />
              <button className="cta" type="submit" style={{ boxShadow: "0 2px 8px #0001", fontWeight: 700 }}>
                Enviar
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer style={{ background: "linear-gradient(90deg, var(--c1) 0%, var(--c2) 100%)", borderRadius: "0 0 24px 24px", boxShadow: "0 -2px 12px #0001", padding: "18px 0", marginTop: 24 }}>
        <div className="container" style={{ color: "#333", fontWeight: 600, textAlign: "center" }}>
          © {new Date().getFullYear()} Elite Performance Group · App: Atleta Pro · Hecho con ❤️ y ciencia del deporte
        </div>
      </footer>
    </>
  );
}