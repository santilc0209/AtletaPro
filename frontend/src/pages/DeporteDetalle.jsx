import { useParams } from "react-router-dom";
import { Card, CardContent } from "../components/card";
import BackButton from "../components/BackButton";
import { useEffect, useState } from "react";

// Datos de ejemplo (se pueden reemplazar con API o BD)
const datosDeportes = {
  futbol: {
    rutinas: [
      { dia: "Lunes", ejercicio: "Resistencia", duracion: "60 min" },
      { dia: "Miércoles", ejercicio: "Táctica + velocidad", duracion: "90 min" },
      { dia: "Viernes", ejercicio: "Partido de práctica", duracion: "120 min" },
    ],
    dietas: [
      { comida: "Desayuno", menu: "Avena + fruta + huevo" },
      { comida: "Almuerzo", menu: "Arroz + pollo + ensalada" },
      { comida: "Cena", menu: "Sopa de verduras + pescado" },
    ],
  },
  basquetbol: {
    rutinas: [
      { dia: "Martes", ejercicio: "Sprints + técnica", duracion: "75 min" },
      { dia: "Jueves", ejercicio: "Trabajo de salto", duracion: "60 min" },
      { dia: "Sábado", ejercicio: "Partido de práctica", duracion: "90 min" },
    ],
    dietas: [
      { comida: "Desayuno", menu: "Pan integral + leche + banano" },
      { comida: "Almuerzo", menu: "Pasta + carne + ensalada" },
      { comida: "Cena", menu: "Pollo a la plancha + verduras" },
    ],
  },
  natacion: {
    rutinas: [
      { dia: "Lunes", ejercicio: "Fondo 1500m", duracion: "45 min" },
      { dia: "Miércoles", ejercicio: "Velocidad 100m", duracion: "30 min" },
      { dia: "Viernes", ejercicio: "Técnica de estilo libre", duracion: "60 min" },
    ],
    dietas: [
      { comida: "Desayuno", menu: "Batido de proteínas + fruta" },
      { comida: "Almuerzo", menu: "Pescado + arroz + ensalada" },
      { comida: "Cena", menu: "Tortilla de huevo + ensalada" },
    ],
  },
};

function DeporteDetalle() {
  const { nombre } = useParams();
  const deporte = datosDeportes[nombre.toLowerCase()];
  const [userData, setUserData] = useState(null);

  // 🔹 Cargar perfil del usuario desde localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem("userProfile");
    if (savedUser) {
      setUserData(JSON.parse(savedUser));
    }

    // Guardar el deporte seleccionado en el perfil
    const profile = savedUser ? JSON.parse(savedUser) : {};
    profile.deporte = nombre;
    localStorage.setItem("userProfile", JSON.stringify(profile));
  }, [nombre]);

  if (!deporte) {
    return (
      <h2 className="text-center text-red-500 mt-10">
        ⚠️ Deporte no encontrado
      </h2>
    );
  }

  // 🔹 Generar mensaje personalizado según objetivo físico
  const generarRecomendacion = () => {
    if (!userData?.objetivo) return "Completa tu perfil para ver recomendaciones personalizadas.";
    switch (userData.objetivo) {
      case "bajar":
        return "🔥 Enfócate en ejercicios de resistencia y una dieta baja en carbohidratos.";
      case "ganar":
        return "💪 Prioriza fuerza y una dieta alta en proteínas.";
      case "mantener":
        return "⚖️ Balancea tu entrenamiento con cardio moderado y dieta equilibrada.";
      default:
        return "Configura tu objetivo físico en tu perfil.";
    }
  };

  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold text-center capitalize">
        {nombre} 🏅
      </h1>

      {/* Recomendación personalizada */}
      <Card className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-xl">
        <CardContent>
          <h2 className="text-xl font-semibold mb-2">🎯 Recomendación Personalizada</h2>
          <p>{generarRecomendacion()}</p>
          {userData && (
            <p className="mt-2 text-sm">
              Perfil: {userData.peso}kg | {userData.altura}cm | {userData.edad} años
            </p>
          )}
        </CardContent>
      </Card>

      {/* Rutinas */}
      <Card className="shadow-lg">
        <CardContent>
          <h2 className="text-xl font-semibold mb-4">🏋️ Rutinas</h2>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2">Día</th>
                <th className="border border-gray-300 px-4 py-2">Ejercicio</th>
                <th className="border border-gray-300 px-4 py-2">Duración</th>
              </tr>
            </thead>
            <tbody>
              {deporte.rutinas.map((r, i) => (
                <tr key={i} className="hover:bg-gray-100 transition">
                  <td className="border border-gray-300 px-4 py-2">{r.dia}</td>
                  <td className="border border-gray-300 px-4 py-2">{r.ejercicio}</td>
                  <td className="border border-gray-300 px-4 py-2">{r.duracion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>

      {/* Dietas */}
      <Card className="shadow-lg">
        <CardContent>
          <h2 className="text-xl font-semibold mb-4">🥗 Dietas</h2>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2">Comida</th>
                <th className="border border-gray-300 px-4 py-2">Menú</th>
              </tr>
            </thead>
            <tbody>
              {deporte.dietas.map((d, i) => (
                <tr key={i} className="hover:bg-gray-100 transition">
                  <td className="border border-gray-300 px-4 py-2">{d.comida}</td>
                  <td className="border border-gray-300 px-4 py-2">{d.menu}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}

export default DeporteDetalle;
