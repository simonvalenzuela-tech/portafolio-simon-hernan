import Image from "next/image";
import Link from "next/link";
import { MapPin, MessageCircle, Clock, ArrowLeft } from "lucide-react";

export default function CafeLatente() {
  const menu = [
    { name: "Espresso", desc: "Blend propio, tueste medio", price: "$2.200" },
    { name: "Flat white", desc: "Doble shot, leche texturizada", price: "$3.400" },
    { name: "Filtrado V60", desc: "Grano de origen, rotación semanal", price: "$3.100" },
    { name: "Chai casero", desc: "Especias molidas en el local", price: "$2.900" },
    { name: "Medialuna de manteca", desc: "Horneadas cada mañana", price: "$1.400" },
    { name: "Budín de limón", desc: "Receta de la casa", price: "$2.600" },
  ];
  const galeria = ["cafe-gal-1", "cafe-gal-2", "cafe-gal-3"];

  return (
    <div className="min-h-screen bg-[#f6ede1] text-[#2b1d14] font-sans">
      {/* Header */}
      <header className="flex items-center justify-between px-6 md:px-16 py-6 border-b border-[#2b1d14]/10">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-[#4a3a2c]/70 hover:text-[#2b1d14]">
          <ArrowLeft size={15} /> Volver al portafolio
        </Link>
        <span className="font-serif text-xl font-semibold">Café Latente</span>
        <nav className="hidden md:flex gap-8 text-sm">
          <a href="#menu" className="hover:opacity-70">Menú</a>
          <a href="#nosotros" className="hover:opacity-70">Nosotros</a>
          <a href="#visitanos" className="hover:opacity-70">Visitanos</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="grid md:grid-cols-2 gap-10 items-center px-6 md:px-16 py-16">
        <div>
          <h1 className="font-serif text-4xl md:text-6xl leading-tight max-w-[11ch]">
            Tu pausa del día, hecha con calma.
          </h1>
          <p className="mt-5 max-w-[42ch] text-[#4a3a2c] text-lg">
            Café de especialidad tostado en Córdoba, repostería casera y un lugar
            para desacelerar en Nueva Córdoba.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#visitanos" className="px-7 py-3 bg-[#a8552f] text-[#f6ede1] rounded-sm text-sm">
              Ver ubicación
            </a>
            <a href="#menu" className="px-7 py-3 border border-[#2b1d14] rounded-sm text-sm">
              Ver menú
            </a>
          </div>
        </div>
        <div className="aspect-[4/5] rounded-md relative overflow-hidden">
          <Image
            src="https://i.pinimg.com/736x/37/b3/67/37b3672803c81f70e94aa6d8a25cb917.jpg"
            alt="Café Latente"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="px-6 md:px-16 py-14">
        <h2 className="font-serif text-3xl mb-1">Menú</h2>
        <p className="text-[#6b5a48] mb-10">Lo de siempre, y algunas cosas nuevas cada mes.</p>
        <div className="grid md:grid-cols-2 gap-x-16">
          {menu.map((item) => (
            <div key={item.name} className="flex justify-between py-4 border-b border-dashed border-[#2b1d14]/15">
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-[#7a6a58]">{item.desc}</p>
              </div>
              <span className="font-serif whitespace-nowrap ml-5">{item.price}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Galería */}
      <section className="px-6 md:px-16 pb-14">
        <h2 className="font-serif text-2xl mb-6">El local</h2>
        <div className="grid grid-cols-3 gap-4">
          {galeria.map((seed) => (
            <div key={seed} className="relative aspect-square rounded-md overflow-hidden">
              <Image
                src="https://appetizer.com.ar/assets/uploads/restaurantes/35425-la-milkeria-portada.jpg"
                alt="Café Latente — el local"
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="nosotros" className="grid md:grid-cols-2 gap-10 items-center px-6 md:px-16 py-16 bg-[#2b1d14] text-[#f6ede1]">
        <div className="relative aspect-square rounded-md overflow-hidden">
          <Image
            src="https://appetizer.com.ar/assets/uploads/restaurantes/d2bf0-la-milkeria-cuadradas.jpg"
            alt="Tueste de café"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="font-serif text-3xl mb-4">Del grano a la taza, sin apuro.</h2>
          <p className="max-w-[48ch] text-[#d8c9b8]">
            Empezamos en 2021 como un puesto de fin de semana. Hoy tostamos
            nuestro propio café y elegimos cada proveedor por su forma de
            trabajar la tierra, no solo por el precio.
          </p>
        </div>
      </section>

      {/* Visit */}
      <section id="visitanos" className="px-6 md:px-16 py-16 text-center">
        <h2 className="font-serif text-3xl mb-2">Visitanos</h2>
        <p className="text-[#6b5a48] mb-7 flex items-center justify-center gap-2">
          <MapPin size={16} /> Bulevar Illia 450, Nueva Córdoba
          <span className="mx-1">·</span>
          <Clock size={16} /> Lun a sáb, 8 a 20 hs
        </p>
        <div className="max-w-2xl mx-auto aspect-[16/7] rounded-md bg-[#f0e6d6] relative" />
      </section>

      <a href="#" className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-[#3a7d5c] text-white flex items-center justify-center shadow-lg">
        <MessageCircle size={24} />
      </a>

      <footer className="flex justify-between px-6 md:px-16 py-7 border-t border-[#2b1d14]/10 text-sm text-[#7a6a58]">
        <span>Café Latente · Córdoba</span>
        <span>Sitio de ejemplo — DevBridge</span>
      </footer>
    </div>
  );
}
