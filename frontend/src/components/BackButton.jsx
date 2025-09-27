import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react"; // ícono moderno

export default function BackButton({ label = "Volver" }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-xl shadow-md hover:from-purple-700 hover:to-blue-700 transition transform hover:scale-105"
    >
      <ArrowLeft size={18} />
      {label}
    </button>
  );
}
