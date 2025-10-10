import { useState } from "react";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "¡Hola! ¿Necesitas ayuda para registrarte?" }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages(msgs => [
      ...msgs,
      { from: "user", text: input },
      { from: "bot", text: "Gracias por tu mensaje. Pronto te ayudaremos." }
    ]);
    setInput("");
  };

  return (
    <>
      {/* Botón flotante para abrir/cerrar el chatbot */}
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          zIndex: 1100,
          background: "#ff7849",
          color: "#fff",
          border: "none",
          borderRadius: "50%",
          width: 56,
          height: 56,
          boxShadow: "0 4px 16px #0002",
          fontSize: 28,
          cursor: "pointer"
        }}
        aria-label={open ? "Cerrar chatbot" : "Abrir chatbot"}
      >
        💬
      </button>

      {/* Ventana del chatbot */}
      {open && (
        <div style={{
          position: "fixed",
          bottom: 90,
          right: 24,
          width: 320,
          background: "#fff",
          borderRadius: 12,
          boxShadow: "0 4px 16px #0002",
          padding: 16,
          zIndex: 1000
        }}>
          <div style={{ maxHeight: 200, overflowY: "auto", marginBottom: 8 }}>
            {messages.map((msg, i) => (
              <div key={i} style={{ textAlign: msg.from === "bot" ? "left" : "right", margin: "4px 0" }}>
                <span style={{
                  background: msg.from === "bot" ? "#eee" : "#c3e6cb",
                  padding: "6px 12px",
                  borderRadius: 8,
                  display: "inline-block"
                }}>
                  {msg.text}
                </span>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: 4 }}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Escribe tu mensaje..."
              style={{ flex: 1, borderRadius: 6, border: "1px solid #ccc", padding: 6 }}
              onKeyDown={e => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              style={{
                borderRadius: 6,
                padding: "6px 12px",
                background: "#ff7849",
                color: "#fff",
                border: "none"
              }}
            >
              Enviar
            </button>
          </div>
        </div>
      )}
    </>
  );
}