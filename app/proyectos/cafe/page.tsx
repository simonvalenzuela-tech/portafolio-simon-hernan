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
        <span className="font-serif text-xl font-semibold">Balthazar Bakery</span>
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
            src="https://newyorkspork.com/wp-content/uploads/2024/05/Balthazar-1006221.jpg"
            alt="Balthazar Bakery"
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
                src="https://media.cntraveler.com/photos/61648be9ea8904e83ba2e77c/16:9/w_2560%2Cc_limit/Balthazar%2C%2520NYC_Michael_Grimm_In08.jpg"
                alt="Balthazar Bakery — el local"
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
            src="http://localhost:3000/_next/image?url=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2FQS6xQxdUo8zRKxRRv-JLF-fNlMQ%3D%2F0x0%3A4032x3024%2F2070x1553%2Ffilters%3Afocal(1694x1190%3A2338x1834)%3Ano_upscale()%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_image%2Fimage%2F62582949%2Fbalthazar_bakery_inside.0.0.jpg&w=1920&q=75"
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
    <MapPin size={16} /> 80 Spring St, New York, NY 10012
    <span className="mx-1">·</span>
    <Clock size={16} /> Lun a sáb, 8 a 20 hs
  </p>
  
  <div className="max-w-2xl mx-auto aspect-[16/7] rounded-md overflow-hidden bg-[#f0e6d6] relative shadow-sm border border-[#e2d5c3]">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.4735237375207!2d-73.9991206234255!3d40.72295623653135!2m3!1f0!f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598c4f039169%3A0x6b63d91cf3241b71!2s80%20Spring%20St%2C%20New%20York%2C%20NY%2010012%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1710000000000!5m2!1ses-419!2sar"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen={false}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="w-full h-full border-0"
    />
  </div>
</section>

      <a href="#" className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-[#3a7d5c] text-white flex items-center justify-center shadow-lg">
        <MessageCircle size={24} />
      </a>

      <footer className="flex justify-between px-6 md:px-16 py-7 border-t border-[#2b1d14]/10 text-sm text-[#7a6a58]">
        <span>Balthazar Bakery</span>
        <span>Sitio de ejemplo — DevCraft Studio</span>
      </footer>
    </div>
  );
}
