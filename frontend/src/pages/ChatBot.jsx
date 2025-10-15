import React, { useState, useEffect, useRef } from "react";
import "./ChatBot.css";

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "¡Hola! Soy el asistente de AtletaPro 🤖" }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  // Scroll automático
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const toggleChat = () => setOpen(!open);

  const handleSend = (text) => {
    if (!text.trim()) return;

    const userMessage = { sender: "user", text };
    setMessages(prev => [...prev, userMessage]);
    setInput("");

    // Simular respuesta con delay
    setTimeout(() => {
      const botMessage = { sender: "bot", text: getBotResponse(text) };
      setMessages(prev => [...prev, botMessage]);
    }, 600);
  };

  const getBotResponse = (text) => {
    text = text.toLowerCase();

    if (text.includes("hola") || text.includes("hi")) {
      return "¡Hola! ¿Qué te interesa hoy? 💪";
    }
    if (text.includes("entrenamiento")) {
      return "Tenemos rutinas personalizadas según tu nivel y objetivo. 🏋️‍♂️";
    }
    if (text.includes("productos")) {
      return "Puedes ver nuestros productos deportivos en la sección Productos. 🏀🎾";
    }
    if (text.includes("contacto")) {
      return "Puedes escribirnos a soporte@atletapro.com o llamar al +57 123456789.";
    }

    return "Lo siento, no entendí eso. 😅 Prueba seleccionando alguna opción:";
  };

  const quickReplies = ["Entrenamientos", "Productos", "Contacto"];

  return (
    <div className="chatbot-container">
      <button className="chatbot-toggle" onClick={toggleChat}>
        {open ? "Cerrar Chat" : "Chat AtletaPro"}
      </button>

      {open && (
        <div className="chatbot-window">
          <div className="chatbot-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Botones de respuesta rápida */}
          <div className="chatbot-quick-replies">
            {quickReplies.map((reply, idx) => (
              <button key={idx} onClick={() => handleSend(reply)}>
                {reply}
              </button>
            ))}
          </div>

          <div className="chatbot-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe tu mensaje..."
              onKeyDown={(e) => e.key === "Enter" && handleSend(input)}
            />
            <button onClick={() => handleSend(input)}>Enviar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
