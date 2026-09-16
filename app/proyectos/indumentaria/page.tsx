import Image from "next/image";
import Link from "next/link";
import { MessageCircle, ArrowLeft } from "lucide-react";

export default function TiendaAmericanEagle() {
  const productos = [
    { name: "Camisa lino crudo", price: "$28.500", seed: "American Eagle-camisa-lino", img:"https://i.pinimg.com/736x/34/45/06/344506edff321c88d9b153ecd47aaf81.jpg" },
    { name: "Pantalón sastrero", price: "$34.900", seed: "American Eagle-pantalon-sastrero",img:"https://i.pinimg.com/736x/af/32/1f/af321f50933981871f9c6664c1bd548e.jpg"},
    { name: "Saco liviano", price: "$52.000", seed: "American Eagle-saco-liviano",img:"https://i.pinimg.com/1200x/14/74/10/147410e804d6818285eb28e5a4bd38a2.jpg"},
    { name: "Camisa a rayas", price: "$26.900", seed: "American Eagle-camisa-rayas",img:"https://i.pinimg.com/1200x/6b/25/11/6b2511a3c046baa5a12d90dd3eb68468.jpg"},
    { name: "Pantalón cargo", price: "$31.200", seed: "American Eagle-pantalon-cargo",img:"https://i.pinimg.com/736x/2d/e7/fc/2de7fcafaae1a9099bc7b6ca0164c6ae.jpg"},
    { name: "Chaleco de lana", price: "$29.800", seed: "American Eagle-chaleco-lana",img:"https://i.pinimg.com/1200x/d4/5f/18/d45f18007222137982079b39a056bd23.jpg"},
    { name: "Remera comprimida", price: "$30.000", seed: "American Eagle-remera-comprimida",img:"https://i.pinimg.com/736x/be/de/6c/bede6cf466271a0971603f1b353ba6d1.jpg"},
    { name: "Jean baggy", price: "$34.600", seed: "American Eagle-jean-baggy",img:"https://i.pinimg.com/1200x/ec/06/2f/ec062f3cb82f9de74cd82d16d5bce1f3.jpg"},
    { name: "Buzo overzide", price: "$45.300", seed: "American Eagle-buzo-overzide",img:"https://i.pinimg.com/1200x/fe/83/0b/fe830be11ca14495bc0844b2a3a6f21c.jpg"},
  ];

  return (
    <div className="min-h-screen bg-[#efece6] text-[#1c1a18] font-sans">
      <header className="flex items-center justify-between px-6 md:px-16 py-7">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-[#4a453e] hover:text-[#1c1a18]">
          <ArrowLeft size={15} /> Volver al portafolio
        </Link>
        <span className="text-2xl tracking-tight font-semibold">American Eagle</span>
        <nav className="hidden md:flex gap-8 text-sm uppercase tracking-wide">
          <a href="#catalogo" className="hover:opacity-60">Catálogo</a>
          <a href="#contacto" className="hover:opacity-60">Contacto</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="px-6 md:px-16 pt-6 pb-16">
        <h1 className="text-[13vw] md:text-[7vw] leading-[0.85] font-semibold tracking-tighter">
          Ropa que
          <br />
          no pasa de moda.
        </h1>
        <p className="mt-6 max-w-[46ch] text-[#4a453e]">
          Indumentaria de fibras naturales, cortes simples y una paleta
          pensada para combinar todo entre sí. Hecho en Córdoba.
        </p>
      </section>

      {/* Catálogo */}
     <section id="catalogo" className="px-6 md:px-16 pb-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {productos.map((p, index) => (
             <div key={p.name} className="group flex flex-col justify-between">
               <div className="aspect-[3/4] rounded-sm relative overflow-hidden bg-white p-4 shadow-sm border border-[#e2dcd3]">
                  <Image
                     src={p.img || `https://picsum.photos/seed/${p.seed}/450/600`}
                     alt={p.name}
                     fill
                     priority={index < 2}
                     sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                     className="object-contain transition-transform duration-300 group-hover:scale-105"
                   />
                  </div>
                   <div className="mt-3 flex justify-between text-sm">
                    <span className="font-medium">{p.name}</span>
                   <span className="text-[#7a7266] font-semibold">{p.price}</span>
                  </div>
                 </div>
                ))}
             </div>
           </section>

      {/* Cómo comprar */}
      <section className="px-6 md:px-16 py-16 bg-[#1c1a18] text-[#efece6] grid md:grid-cols-3 gap-10">
        <div>
          <p className="text-sm text-[#a89482] mb-2">Paso 1</p>
          <p>Elegís tus prendas y nos escribís por WhatsApp con el nombre de cada una.</p>
        </div>
        <div>
          <p className="text-sm text-[#a89482] mb-2">Paso 2</p>
          <p>Te confirmamos talles disponibles y coordinamos el pago.</p>
        </div>
        <div>
          <p className="text-sm text-[#a89482] mb-2">Paso 3</p>
          <p>Retirás en el local o coordinamos envío.</p>
        </div>
      </section>

      <section id="contacto" className="px-6 md:px-16 py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h2 className="text-2xl font-semibold mb-1">¿Alguna prenda te gustó?</h2>
          <p className="text-[#4a453e]">Escribinos y te contamos disponibilidad al instante.</p>
        </div>
        <a href="#" className="flex items-center gap-2 px-7 py-3 bg-[#1c1a18] text-[#efece6] rounded-sm text-sm shrink-0">
          <MessageCircle size={18} /> Escribir por WhatsApp
        </a>
      </section>

      <footer className="px-6 md:px-16 py-7 border-t border-[#1c1a18]/10 text-sm text-[#7a7266] flex justify-between">
        <span>American Eagle · 150 Lehigh Valley Mall, Whitehall Township, PA 18052, Estados Unidos </span>
        <span>Sitio de ejemplo — DevCraft Studio</span>
      </footer>
    </div>
  );
}