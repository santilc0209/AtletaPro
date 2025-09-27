import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <h1 className="text-2xl font-extrabold text-blue-600">AtletaPro</h1>

      {/* Links */}
      <div className="space-x-6 text-gray-700 font-medium">
        <Link to="/" className="hover:text-blue-600 transition">Inicio</Link>
        <Link to="/register" className="hover:text-blue-600 transition">Registro</Link>
        <Link to="/dashboard" className="hover:text-blue-600 transition">Dashboard</Link>
        <Link
          to="/login"
          className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}
