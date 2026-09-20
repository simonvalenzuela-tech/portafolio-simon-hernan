"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Clock, Leaf } from "lucide-react";
import VolverAlPortafolio from "../VolverAlPortafolio";
import { foto } from "../unsplash";

type Categoria = "Bebidas" | "Panadería" | "Dulces" | "Brunch";

const CATEGORIAS: Categoria[] = ["Bebidas", "Panadería", "Dulces", "Brunch"];

const HERO = foto("photo-1509042239860-f550ce710b93", 900, 1100);
const NOSOTROS = foto("photo-1453614512568-c4024d13c247", 900, 900);

const item = (name: string, desc: string, price: string, cat: Categoria, id: string, fav = false) => ({
  name,
  desc,
  price,
  cat,
  fav,
  img: foto(id, 600, 450),
});

const MENU = [
  item("Espresso", "Blend propio, tueste medio", "$2.200", "Bebidas", "photo-1514432324607-a09d9b4aefdd"),
  item("Flat white", "Doble shot, leche texturizada", "$3.400", "Bebidas", "photo-1534778101976-62847782c213", true),
  item("Cappuccino", "Espresso con leche vaporizada y espuma", "$3.300", "Bebidas", "photo-1495474472287-4d71bcdd2085"),
  item("Filtrado V60", "Grano de origen, rotación semanal", "$3.100", "Bebidas", "photo-1442512595331-e89e73853f31"),
  item("Cold brew", "Infusión en frío durante 18 horas", "$3.600", "Bebidas", "photo-1461023058943-07fcbe16d735"),
  item("Chai casero", "Especias molidas en el local", "$2.900", "Bebidas", "photo-1544787219-7f47ccb76574"),
  item("Medialuna de manteca", "Horneadas cada mañana", "$1.400", "Panadería", "photo-1555507036-ab1f4038808a", true),
  item("Pain au chocolat", "Hojaldre y chocolate semiamargo", "$2.300", "Panadería", "photo-1483695028939-5bb13f8648b0"),
  item("Pan de masa madre", "Fermentación lenta de 24 horas", "$3.800", "Panadería", "photo-1509440159596-0249088772ff"),
  item("Budín de limón", "Receta de la casa", "$2.600", "Dulces", "photo-1447078806655-40579c2520d6"),
  item("Torta de chocolate", "Bizcocho húmedo y ganache", "$3.900", "Dulces", "photo-1578985545062-69928b1d9587"),
  item("Tiramisú", "Mascarpone, café y cacao", "$4.200", "Dulces", "photo-1571115177098-24ec42ed204d", true),
  item("Tarta de frutos rojos", "Masa sablée y frutos del bosque", "$3.800", "Dulces", "photo-1464305795204-6f5bbfc7fb81"),
  item("Tartaletas de frutas", "Crema pastelera y fruta de estación", "$2.900", "Dulces", "photo-1495147466023-ac5c588e2e94"),
  item("Waffles con frutos rojos", "Miel y azúcar impalpable", "$5.400", "Brunch", "photo-1568051243851-f9b136146e97"),
  item("Panqueques con arándanos", "Con miel de abejas", "$5.200", "Brunch", "photo-1506084868230-bb9d95c24759"),
  item("Sándwich de pollo", "Pan casero, pollo grillado y verdes", "$6.200", "Brunch", "photo-1521305916504-4a1121188589"),
  item("Ensalada César", "Pollo, croutons y parmesano", "$6.400", "Brunch", "photo-1563897539633-7374c276c212"),
];

const GALERIA = [
  { alt: "Salón de Balthazar Bakery", img: foto("photo-1554118811-1e0d58224f24", 900, 900), grande: true },
  { alt: "Terraza sobre la calle", img: foto("photo-1559925393-8be0ec4767c8", 500, 500) },
  { alt: "Barra y mesas", img: foto("photo-1521017432531-fbd92d768814", 500, 500) },
  { alt: "Mesa junto a la ventana", img: foto("photo-1445116572660-236099ec97a0", 500, 500) },
  { alt: "Latte art", img: foto("photo-1507133750040-4a8f57021571", 500, 500) },
];

export default function CafeLatente() {
  const [categoria, setCategoria] = useState<Categoria>("Bebidas");

  const platos = MENU.filter((m) => m.cat === categoria);

  return (
    <div className="min-h-screen bg-[#f6ede1] text-[#2b1d14] font-sans">
      <div className="px-6 md:px-16 pt-5">
        <VolverAlPortafolio className="bg-[#2b1d14] text-[#f6ede1] hover:bg-[#a8552f]" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 mt-5 flex items-center justify-between px-6 md:px-16 py-4 bg-[#f6ede1]/90 backdrop-blur border-y border-[#2b1d14]/10">
        <span className="font-serif text-xl font-semibold">Balthazar Bakery</span>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#menu" className="hover:opacity-70">Menú</a>
          <a href="#nosotros" className="hover:opacity-70">Nosotros</a>
          <a href="#galeria" className="hover:opacity-70">El local</a>
          <a href="#visitanos" className="ml-2 px-5 py-2.5 bg-[#a8552f] text-[#f6ede1] rounded-sm hover:bg-[#8f4626] transition-colors">
            Visitanos
          </a>
        </nav>
        <a href="#menu" className="md:hidden px-4 py-2 bg-[#a8552f] text-[#f6ede1] rounded-sm text-sm">
          Ver menú
        </a>
      </header>

      {/* Hero */}
      <section className="grid md:grid-cols-2 gap-10 items-center px-6 md:px-16 py-16">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[#a8552f] mb-5">Café de especialidad</p>
          <h1 className="font-serif text-4xl md:text-6xl leading-tight max-w-[11ch]">
            Tu pausa del día, hecha con calma.
          </h1>
          <p className="mt-5 max-w-[42ch] text-[#4a3a2c] text-lg">
            Café de especialidad tostado en Córdoba, repostería casera y un lugar para desacelerar en Nueva Córdoba.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#menu" className="px-7 py-3 bg-[#a8552f] text-[#f6ede1] rounded-sm text-sm hover:bg-[#8f4626] transition-colors">
              Ver menú
            </a>
            <a href="#visitanos" className="px-7 py-3 border border-[#2b1d14] rounded-sm text-sm hover:bg-[#2b1d14] hover:text-[#f6ede1] transition-colors">
              Ver ubicación
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] rounded-md relative overflow-hidden">
            <Image src={HERO} alt="Tres cafés con leche sobre una mesa de madera" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" priority />
          </div>
          <div className="absolute -bottom-5 left-5 md:-left-6 bg-[#2b1d14] text-[#f6ede1] rounded-md px-5 py-4 shadow-xl">
            <p className="font-serif text-lg">Tueste propio</p>
            <p className="text-xs text-[#d8c9b8]">Blend de la casa, cada semana</p>
          </div>
        </div>
      </section>

      {/* Datos rápidos */}
      <section className="px-6 md:px-16 py-8 grid sm:grid-cols-3 gap-6 border-y border-[#2b1d14]/10 text-sm">
        <div className="flex items-center gap-3">
          <Clock size={18} className="text-[#a8552f] shrink-0" /> Lunes a sábado · 8 a 20 hs
        </div>
        <div className="flex items-center gap-3">
          <Leaf size={18} className="text-[#a8552f] shrink-0" /> Granos de origen, comprados con criterio
        </div>
        <a href="#visitanos" className="flex items-center gap-3 hover:opacity-70">
          <MapPin size={18} className="text-[#a8552f] shrink-0" /> 80 Spring St, New York, NY 10012
        </a>
      </section>

      {/* Menú */}
      <section id="menu" className="px-6 md:px-16 py-16 scroll-mt-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#a8552f] mb-2">La carta</p>
            <h2 className="font-serif text-3xl md:text-4xl mb-1">Menú</h2>
            <p className="text-[#6b5a48]">Lo de siempre, y algunas cosas nuevas cada mes.</p>
          </div>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Categorías del menú">
            {CATEGORIAS.map((c) => (
              <button
                key={c}
                onClick={() => setCategoria(c)}
                aria-pressed={categoria === c}
                className={`px-5 py-2 rounded-full text-sm border transition-colors ${
                  categoria === c
                    ? "bg-[#2b1d14] border-[#2b1d14] text-[#f6ede1]"
                    : "border-[#2b1d14]/25 hover:border-[#2b1d14]"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {platos.map((m) => (
            <article key={m.name} className="group rounded-md overflow-hidden bg-[#fbf5ec] border border-[#e2d5c3]">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={m.img}
                  alt={m.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {m.fav && (
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#a8552f] text-[#f6ede1] text-[11px] uppercase tracking-wide">
                    Más pedido
                  </span>
                )}
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start gap-4">
                  <h3 className="font-medium text-lg leading-tight">{m.name}</h3>
                  <span className="font-serif text-lg whitespace-nowrap">{m.price}</span>
                </div>
                <p className="text-sm text-[#7a6a58] mt-1.5">{m.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Nosotros */}
      <section id="nosotros" className="grid md:grid-cols-2 gap-10 items-center px-6 md:px-16 py-16 bg-[#2b1d14] text-[#f6ede1] scroll-mt-16">
        <div className="relative aspect-square rounded-md overflow-hidden">
          <Image src={NOSOTROS} alt="Barra de café con molinos y granos" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[#d99a7a] mb-3">Nuestra historia</p>
          <h2 className="font-serif text-3xl md:text-4xl mb-4">Del grano a la taza, sin apuro.</h2>
          <p className="max-w-[48ch] text-[#d8c9b8]">
            Empezamos en 2021 como un puesto de fin de semana. Hoy tostamos nuestro propio café y elegimos cada
            proveedor por su forma de trabajar la tierra, no solo por el precio.
          </p>
          <dl className="mt-8 grid grid-cols-3 gap-4 max-w-md">
            {[
              ["2021", "Desde"],
              ["100%", "Tueste propio"],
              [String(MENU.length), "Productos en carta"],
            ].map(([valor, label]) => (
              <div key={label} className="border-t border-[#f6ede1]/25 pt-3">
                <dt className="font-serif text-3xl">{valor}</dt>
                <dd className="text-xs text-[#d8c9b8] mt-1">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Galería */}
      <section id="galeria" className="px-6 md:px-16 py-16 scroll-mt-16">
        <p className="text-xs uppercase tracking-[0.3em] text-[#a8552f] mb-2">El local</p>
        <h2 className="font-serif text-3xl md:text-4xl mb-10">Un lugar para quedarse</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {GALERIA.map((g) => (
            <div
              key={g.alt}
              className={`relative overflow-hidden rounded-md ${g.grande ? "col-span-2 row-span-2 aspect-square" : "aspect-square"}`}
            >
              <Image
                src={g.img}
                alt={g.alt}
                fill
                sizes={g.grande ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Visitanos */}
      <section id="visitanos" className="px-6 md:px-16 py-16 text-center scroll-mt-16">
        <h2 className="font-serif text-3xl mb-2">Visitanos</h2>
        <p className="text-[#6b5a48] mb-7 flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
          <MapPin size={16} /> 80 Spring St, New York, NY 10012
          <span className="mx-1">·</span>
          <Clock size={16} /> Lun a sáb, 8 a 20 hs
        </p>

        <div className="max-w-2xl mx-auto aspect-[16/7] rounded-md overflow-hidden bg-[#f0e6d6] relative shadow-sm border border-[#e2d5c3]">
          <iframe
            title="Mapa de Balthazar Bakery"
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

      <footer className="flex justify-between px-6 md:px-16 py-7 border-t border-[#2b1d14]/10 text-sm text-[#7a6a58]">
        <span>Balthazar Bakery</span>
        <span>Sitio de ejemplo — DevCraft Studio</span>
      </footer>
    </div>
  );
}
