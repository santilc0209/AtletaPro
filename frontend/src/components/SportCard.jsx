import { motion } from "framer-motion";

export default function SportCard({ nombre, descripcion, imagen }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transition"
    >
      <img
        src={imagen}
        alt={nombre}
        className="h-48 w-full object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">{nombre}</h2>
        <p className="text-gray-600 mt-2">{descripcion}</p>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition">
          Ver Rutinas y Dietas
        </button>
      </div>
    </motion.div>
  );
}
