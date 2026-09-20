import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// Botón para volver al portafolio, común a todos los sitios de ejemplo.
// `className` define los colores de cada sitio (fondo, texto y hover).
export default function VolverAlPortafolio({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg transition-all hover:shadow-xl ${className}`}
    >
      <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
      Volver al portafolio
    </Link>
  );
}
