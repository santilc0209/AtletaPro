import { useState, useEffect } from "react";
import { Card, CardContent } from "../components/card";

function PerfilUsuario() {
  const [formData, setFormData] = useState({
    nombre: "",
    edad: "",
    peso: "",
    altura: "",
    objetivo: "",
  });

  // 🔹 Cargar datos guardados al iniciar
  useEffect(() => {
    const savedUser = localStorage.getItem("userProfile");
    if (savedUser) {
      setFormData(JSON.parse(savedUser));
    }
  }, []);

  // 🔹 Guardar cambios en localStorage
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userProfile", JSON.stringify(formData));
    alert("✅ Perfil guardado correctamente");
  };

  // 🔹 Manejar cambios en inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <Card className="shadow-lg">
        <CardContent>
          <h1 className="text-2xl font-bold mb-6 text-center">👤 Perfil del Usuario</h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            
            {/* Nombre */}
            <div>
              <label className="block mb-1 font-medium">Nombre</label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded-lg"
                placeholder="Ej: Juan Pérez"
              />
            </div>

            {/* Edad */}
            <div>
              <label className="block mb-1 font-medium">Edad</label>
              <input
                type="number"
                name="edad"
                value={formData.edad}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded-lg"
                placeholder="Ej: 25"
              />
            </div>

            {/* Peso */}
            <div>
              <label className="block mb-1 font-medium">Peso (kg)</label>
              <input
                type="number"
                name="peso"
                value={formData.peso}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded-lg"
                placeholder="Ej: 70"
              />
            </div>

            {/* Altura */}
            <div>
              <label className="block mb-1 font-medium">Altura (cm)</label>
              <input
                type="number"
                name="altura"
                value={formData.altura}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded-lg"
                placeholder="Ej: 175"
              />
            </div>

            {/* Objetivo */}
            <div>
              <label className="block mb-1 font-medium">Objetivo físico</label>
              <select
                name="objetivo"
                value={formData.objetivo}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded-lg"
              >
                <option value="">Selecciona...</option>
                <option value="bajar">🔥 Bajar de peso</option>
                <option value="ganar">💪 Ganar masa muscular</option>
                <option value="mantener">⚖️ Mantener forma física</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg mt-4"
            >
              Guardar Perfil
            </button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default PerfilUsuario;
