"use client";

import { useEffect, useState, type FormEvent } from "react";
import Image from "next/image";
import { ShoppingBag, X, Plus, Minus, Check, Leaf, Truck, MapPin } from "lucide-react";
import VolverAlPortafolio from "../VolverAlPortafolio";
import { foto } from "../unsplash";

type Categoria = "Camisas" | "Pantalones" | "Abrigos" | "Remeras" | "Buzos" | "Vestidos";
type Item = { clave: string; name: string; talle: string; precio: number; img: string; cover?: boolean; qty: number };

const TALLES = ["S", "M", "L", "XL"];
const CATEGORIAS: Categoria[] = ["Camisas", "Pantalones", "Abrigos", "Remeras", "Buzos", "Vestidos"];
const POR_PAGINA = 9;

// Foto de prenda de Unsplash (vertical 3:4, ocupa toda la tarjeta).
const prenda = (id: string) => foto(id, 600, 800);

const HERO = foto("photo-1558769132-cb1aea458c5e", 900, 1100);
const CONTACTO = foto("photo-1483985988355-763728e1935b", 900, 700);

const PRODUCTOS: { name: string; precio: number; cat: Categoria; img: string; cover?: boolean }[] = [
  { name: "Camisa lino crudo", precio: 28500, cat: "Camisas", img: "https://i.pinimg.com/736x/34/45/06/344506edff321c88d9b153ecd47aaf81.jpg" },
  { name: "Pantalón sastrero", precio: 34900, cat: "Pantalones", img: "https://i.pinimg.com/736x/af/32/1f/af321f50933981871f9c6664c1bd548e.jpg" },
  { name: "Saco liviano", precio: 52000, cat: "Abrigos", img: "https://i.pinimg.com/1200x/14/74/10/147410e804d6818285eb28e5a4bd38a2.jpg" },
  { name: "Camisa a rayas", precio: 26900, cat: "Camisas", img: "https://i.pinimg.com/1200x/6b/25/11/6b2511a3c046baa5a12d90dd3eb68468.jpg" },
  { name: "Pantalón cargo", precio: 31200, cat: "Pantalones", img: "https://i.pinimg.com/736x/2d/e7/fc/2de7fcafaae1a9099bc7b6ca0164c6ae.jpg" },
  { name: "Chaleco de lana", precio: 29800, cat: "Abrigos", img: "https://i.pinimg.com/1200x/d4/5f/18/d45f18007222137982079b39a056bd23.jpg" },
  { name: "Remera comprimida", precio: 30000, cat: "Remeras", img: "https://i.pinimg.com/736x/be/de/6c/bede6cf466271a0971603f1b353ba6d1.jpg" },
  { name: "Jean baggy", precio: 34600, cat: "Pantalones", img: "https://i.pinimg.com/1200x/ec/06/2f/ec062f3cb82f9de74cd82d16d5bce1f3.jpg" },
  { name: "Buzo overzide", precio: 45300, cat: "Abrigos", img: "https://i.pinimg.com/1200x/fe/83/0b/fe830be11ca14495bc0844b2a3a6f21c.jpg" },
  { name: "Camisa blanca clásica", precio: 27800, cat: "Camisas", cover: true, img: prenda("photo-1598033129183-c4f50c736f10") },
  { name: "Remera básica blanca", precio: 14500, cat: "Remeras", cover: true, img: prenda("photo-1521572163474-6864f9cf17ab") },
  { name: "Remera negra oversize", precio: 16900, cat: "Remeras", cover: true, img: prenda("photo-1583743814966-8936f5b7be1a") },
  { name: "Remera celeste", precio: 15200, cat: "Remeras", cover: true, img: prenda("photo-1564584217132-2271feaeb3c5") },
  { name: "Buzo canguro gris", precio: 38900, cat: "Buzos", cover: true, img: prenda("photo-1556821840-3a63f95609a7") },
  { name: "Buzo liso blanco", precio: 33500, cat: "Buzos", cover: true, img: prenda("photo-1620799140408-edc6dcb6d633") },
  { name: "Buzo naranja", precio: 35200, cat: "Buzos", cover: true, img: prenda("photo-1578587018452-892bacefd3f2") },
  { name: "Campera bomber", precio: 58000, cat: "Abrigos", cover: true, img: prenda("photo-1591047139829-d91aecb6caea") },
  { name: "Campera de cuero", precio: 89000, cat: "Abrigos", cover: true, img: prenda("photo-1551028719-00167b16eac5") },
  { name: "Campera de jean", precio: 49500, cat: "Abrigos", cover: true, img: prenda("photo-1516257984-b1b4d707412e") },
  { name: "Campera cargo oliva", precio: 54900, cat: "Abrigos", cover: true, img: prenda("photo-1544022613-e87ca75a784a") },
  { name: "Jean clásico", precio: 32900, cat: "Pantalones", cover: true, img: prenda("photo-1604176354204-9268737828e4") },
  { name: "Short de jean", precio: 21700, cat: "Pantalones", cover: true, img: prenda("photo-1591195853828-11db59a44f6b") },
  { name: "Vestido de jean", precio: 39800, cat: "Vestidos", cover: true, img: prenda("photo-1591369822096-ffd140ec948f") },
  { name: "Vestido largo rojo", precio: 47500, cat: "Vestidos", cover: true, img: prenda("photo-1595777457583-95e059d581b8") },
];

const LOOKBOOK = [
  { alt: "Boutique con perchas", img: foto("photo-1441984904996-e0b6ba687e04", 600, 800) },
  { alt: "Tejidos en vidriera", img: foto("photo-1445205170230-053b83016050", 600, 800) },
  { alt: "Camisas dobladas", img: foto("photo-1602810318383-e386cc2a3ccf", 600, 800) },
  { alt: "Prendas y accesorios", img: foto("photo-1479064555552-3ef4979f8908", 600, 800) },
];

// Formatea con puntos de miles sin depender del idioma del navegador ("$28.500").
const precioTexto = (n: number) => "$" + String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const irA = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

export default function TiendaAmericanEagle() {
  const [categoria, setCategoria] = useState<Categoria | "Todas">("Todas");
  const [orden, setOrden] = useState("destacados");
  const [talles, setTalles] = useState<Record<string, string>>({});
  const [carrito, setCarrito] = useState<Item[]>([]);
  const [abierto, setAbierto] = useState(false);
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [enviado, setEnviado] = useState(false);
  const [mostrar, setMostrar] = useState(POR_PAGINA);

  const cantidad = carrito.reduce((total, i) => total + i.qty, 0);
  const total = carrito.reduce((suma, i) => suma + i.precio * i.qty, 0);

  const filtrados = PRODUCTOS.filter((p) => categoria === "Todas" || p.cat === categoria).sort((a, b) =>
    orden === "menor" ? a.precio - b.precio : orden === "mayor" ? b.precio - a.precio : 0
  );
  const visibles = filtrados.slice(0, mostrar);

  // Con el carrito abierto: se cierra con Escape y no se mueve la página de fondo.
  useEffect(() => {
    if (!abierto) return;
    const alTeclear = (e: KeyboardEvent) => {
      if (e.key === "Escape") setAbierto(false);
    };
    document.addEventListener("keydown", alTeclear);
    const anterior = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", alTeclear);
      document.body.style.overflow = anterior;
    };
  }, [abierto]);

  const limpiarPedido = () => {
    setCarrito([]);
    setEnviado(false);
    setNombre("");
    setTelefono("");
  };

  const abrirCarrito = () => {
    if (enviado) limpiarPedido();
    setAbierto(true);
  };

  const agregar = (p: (typeof PRODUCTOS)[number]) => {
    const talle = talles[p.name] ?? "M";
    const clave = `${p.name}|${talle}`;
    const base = enviado ? [] : carrito;
    if (enviado) {
      setEnviado(false);
      setNombre("");
      setTelefono("");
    }
    const existe = base.some((i) => i.clave === clave);
    setCarrito(
      existe
        ? base.map((i) => (i.clave === clave ? { ...i, qty: i.qty + 1 } : i))
        : [...base, { clave, name: p.name, talle, precio: p.precio, img: p.img, cover: p.cover, qty: 1 }]
    );
    setAbierto(true);
  };

  const cambiarCantidad = (clave: string, delta: number) => {
    setCarrito(carrito.map((i) => (i.clave === clave ? { ...i, qty: i.qty + delta } : i)).filter((i) => i.qty > 0));
  };

  const enviarPedido = (e: FormEvent) => {
    e.preventDefault();
    if (carrito.length > 0 && nombre.trim() && telefono.trim()) setEnviado(true);
  };

  const seguirComprando = () => {
    limpiarPedido();
    setAbierto(false);
    irA("catalogo");
  };

  return (
    <div className="min-h-screen bg-[#efece6] text-[#1c1a18] font-sans">
      <div className="px-6 md:px-16 pt-5">
        <VolverAlPortafolio className="bg-[#1c1a18] text-[#efece6] hover:bg-[#4a453e]" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-30 flex items-center justify-between px-6 md:px-16 py-4 mt-5 bg-[#efece6]/90 backdrop-blur border-y border-[#1c1a18]/10">
        <span className="text-2xl tracking-tight font-semibold">American Eagle</span>
        <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wide">
          <a href="#catalogo" className="hover:opacity-60">Catálogo</a>
          <a href="#lookbook" className="hover:opacity-60">Lookbook</a>
          <a href="#como-comprar" className="hover:opacity-60">Cómo comprar</a>
          <a href="#contacto" className="hover:opacity-60">Contacto</a>
        </nav>
        <button
          onClick={abrirCarrito}
          aria-label={`Abrir carrito, ${cantidad} productos`}
          className="relative flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1c1a18] text-[#efece6] text-sm font-medium hover:bg-[#4a453e] transition-colors"
        >
          <ShoppingBag size={17} />
          <span className="hidden sm:inline">Mi pedido</span>
          {cantidad > 0 && (
            <span className="min-w-5 h-5 px-1.5 rounded-full bg-[#efece6] text-[#1c1a18] text-xs font-semibold flex items-center justify-center">
              {cantidad}
            </span>
          )}
        </button>
      </header>

      {/* Hero */}
      <section className="grid md:grid-cols-2 gap-10 items-center px-6 md:px-16 pt-14 pb-16">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[#7a7266] mb-5">Nueva colección</p>
          <h1 className="text-5xl md:text-7xl leading-[0.95] font-semibold tracking-tighter">
            Ropa que
            <br />
            no pasa de moda.
          </h1>
          <p className="mt-6 max-w-[46ch] text-[#4a453e] text-lg">
            Indumentaria de fibras naturales, cortes simples y una paleta pensada para combinar todo entre sí. Hecho en
            Córdoba.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#catalogo" className="px-8 py-3.5 bg-[#1c1a18] text-[#efece6] rounded-sm text-sm font-medium hover:bg-[#4a453e] transition-colors">
              Ver catálogo
            </a>
            <a href="#como-comprar" className="px-8 py-3.5 border border-[#1c1a18] rounded-sm text-sm font-medium hover:bg-[#1c1a18] hover:text-[#efece6] transition-colors">
              Cómo comprar
            </a>
          </div>
        </div>
        <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
          <Image src={HERO} alt="Prendas de tejido natural en una percha" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" priority />
        </div>
      </section>

      {/* Ventajas */}
      <section className="px-6 md:px-16 py-8 grid sm:grid-cols-3 gap-6 border-y border-[#1c1a18]/10 text-sm">
        <div className="flex items-center gap-3">
          <Leaf size={18} className="shrink-0" /> Fibras naturales y cortes simples
        </div>
        <div className="flex items-center gap-3">
          <MapPin size={18} className="shrink-0" /> Diseño y confección en Córdoba
        </div>
        <div className="flex items-center gap-3">
          <Truck size={18} className="shrink-0" /> Retiro en el local o envío a coordinar
        </div>
      </section>

      {/* Catálogo */}
      <section id="catalogo" className="px-6 md:px-16 py-16 scroll-mt-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#7a7266] mb-2">Catálogo</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Elegí tus prendas</h2>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar por categoría">
              {(["Todas", ...CATEGORIAS] as const).map((c) => (
                <button
                  key={c}
                  onClick={() => {
                    setCategoria(c);
                    setMostrar(POR_PAGINA);
                  }}
                  aria-pressed={categoria === c}
                  className={`px-4 py-2 rounded-full text-sm border transition-colors ${
                    categoria === c
                      ? "bg-[#1c1a18] border-[#1c1a18] text-[#efece6]"
                      : "border-[#1c1a18]/25 hover:border-[#1c1a18]"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
            <select
              value={orden}
              onChange={(e) => setOrden(e.target.value)}
              aria-label="Ordenar productos"
              className="px-4 py-2 rounded-full text-sm border border-[#1c1a18]/25 bg-transparent outline-none focus:border-[#1c1a18]"
            >
              <option value="destacados">Destacados</option>
              <option value="menor">Menor precio</option>
              <option value="mayor">Mayor precio</option>
            </select>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {visibles.map((p, index) => {
            const talle = talles[p.name] ?? "M";
            return (
              <div key={p.name} className="group flex flex-col">
                <div
                  className={`aspect-[3/4] rounded-sm relative overflow-hidden bg-white shadow-sm border border-[#e2dcd3] ${
                    p.cover ? "" : "p-4"
                  }`}
                >
                  <Image
                    src={p.img}
                    alt={p.name}
                    fill
                    priority={index < 2}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={`${
                      p.cover ? "object-cover" : "object-contain"
                    } transition-transform duration-300 group-hover:scale-105`}
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#efece6] text-[11px] uppercase tracking-wide text-[#4a453e]">
                    {p.cat}
                  </span>
                </div>
                <div className="mt-4 flex justify-between gap-3">
                  <span className="font-medium">{p.name}</span>
                  <span className="font-semibold text-[#4a453e]">{precioTexto(p.precio)}</span>
                </div>
                <div className="mt-3 flex items-center gap-2" role="group" aria-label={`Talle de ${p.name}`}>
                  <span className="text-xs text-[#7a7266] mr-1">Talle</span>
                  {TALLES.map((t) => (
                    <button
                      key={t}
                      onClick={() => setTalles({ ...talles, [p.name]: t })}
                      aria-pressed={talle === t}
                      className={`w-9 h-9 rounded-sm text-xs border transition-colors ${
                        talle === t
                          ? "bg-[#1c1a18] border-[#1c1a18] text-[#efece6]"
                          : "border-[#1c1a18]/25 hover:border-[#1c1a18]"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => agregar(p)}
                  className="mt-4 w-full py-3 rounded-sm bg-[#1c1a18] text-[#efece6] text-sm font-medium flex items-center justify-center gap-2 hover:bg-[#4a453e] transition-colors"
                >
                  <ShoppingBag size={16} /> Agregar al pedido
                </button>
              </div>
            );
          })}
        </div>

        <div className="mt-14 flex flex-col items-center gap-3">
          <p className="text-sm text-[#7a7266]">
            Mostrando {visibles.length} de {filtrados.length} prendas
          </p>
          {mostrar < filtrados.length && (
            <button
              onClick={() => setMostrar(mostrar + POR_PAGINA)}
              className="px-8 py-3.5 border border-[#1c1a18] rounded-sm text-sm font-medium hover:bg-[#1c1a18] hover:text-[#efece6] transition-colors"
            >
              Ver más prendas
            </button>
          )}
        </div>
      </section>

      {/* Lookbook */}
      <section id="lookbook" className="px-6 md:px-16 pb-16 scroll-mt-20">
        <p className="text-xs uppercase tracking-[0.3em] text-[#7a7266] mb-2">Lookbook</p>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-10">Inspiración de temporada</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {LOOKBOOK.map((l) => (
            <div key={l.alt} className="relative aspect-[3/4] rounded-sm overflow-hidden">
              <Image
                src={l.img}
                alt={l.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Cómo comprar */}
      <section id="como-comprar" className="px-6 md:px-16 py-16 bg-[#1c1a18] text-[#efece6] scroll-mt-20">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-10">Cómo comprar</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            ["Paso 1", "Elegís tus prendas y talles, y las sumás a tu pedido."],
            ["Paso 2", "Te confirmamos talles disponibles y coordinamos el pago."],
            ["Paso 3", "Retirás en el local o coordinamos envío."],
          ].map(([paso, texto]) => (
            <div key={paso} className="border-t border-[#efece6]/25 pt-5">
              <p className="text-sm text-[#a89482] mb-2">{paso}</p>
              <p className="text-lg">{texto}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="px-6 md:px-16 py-16 grid md:grid-cols-2 gap-10 items-center scroll-mt-20">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3">¿Alguna prenda te gustó?</h2>
          <p className="text-[#4a453e] text-lg max-w-[42ch]">
            Armá tu pedido y te contamos la disponibilidad al instante.
          </p>
          <button
            onClick={abrirCarrito}
            className="mt-8 inline-flex items-center gap-2 px-8 py-3.5 bg-[#1c1a18] text-[#efece6] rounded-sm text-sm font-medium hover:bg-[#4a453e] transition-colors"
          >
            <ShoppingBag size={17} /> Ver mi pedido{cantidad > 0 ? ` (${cantidad})` : ""}
          </button>
        </div>
        <div className="relative aspect-[9/7] rounded-sm overflow-hidden">
          <Image src={CONTACTO} alt="Clienta con bolsas de compras" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
        </div>
      </section>

      <footer className="px-6 md:px-16 py-7 border-t border-[#1c1a18]/10 text-sm text-[#7a7266] flex flex-col sm:flex-row justify-between gap-2">
        <span>American Eagle · 150 Lehigh Valley Mall, Whitehall Township, PA 18052, Estados Unidos</span>
        <span>Sitio de ejemplo — DevCraft Studio</span>
      </footer>

      {/* Carrito */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          abierto ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!abierto}
      >
        <div className="absolute inset-0 bg-[#1c1a18]/50" onClick={() => setAbierto(false)} />
        <aside
          role="dialog"
          aria-modal="true"
          aria-label="Mi pedido"
          className={`absolute right-0 top-0 h-full w-full max-w-md bg-[#efece6] shadow-2xl flex flex-col transition-transform duration-300 ${
            abierto ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-[#1c1a18]/10">
            <p className="text-lg font-semibold">Mi pedido{cantidad > 0 ? ` (${cantidad})` : ""}</p>
            <button onClick={() => setAbierto(false)} aria-label="Cerrar" className="p-2 -mr-2 hover:opacity-60">
              <X size={20} />
            </button>
          </div>

          {enviado ? (
            <div className="flex-1 overflow-y-auto px-6 py-10 text-center">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#1c1a18] text-[#efece6] flex items-center justify-center mb-4">
                <Check size={28} />
              </div>
              <h3 className="text-2xl font-semibold mb-2">¡Pedido recibido!</h3>
              <p className="text-[#4a453e]">
                Gracias, {nombre.trim().split(" ")[0]}. Te escribimos al {telefono.trim()} para confirmar talles y
                coordinar el pago.
              </p>
              <ul className="mt-6 text-sm text-left bg-white rounded-sm border border-[#e2dcd3] divide-y divide-[#e2dcd3]">
                {carrito.map((i) => (
                  <li key={i.clave} className="flex justify-between gap-3 px-4 py-3">
                    <span>
                      {i.qty} × {i.name} <span className="text-[#7a7266]">(talle {i.talle})</span>
                    </span>
                    <span>{precioTexto(i.precio * i.qty)}</span>
                  </li>
                ))}
                <li className="flex justify-between px-4 py-3 font-semibold">
                  <span>Total</span>
                  <span>{precioTexto(total)}</span>
                </li>
              </ul>
              <button onClick={seguirComprando} className="mt-8 text-sm underline text-[#4a453e] hover:text-[#1c1a18]">
                Seguir comprando
              </button>
            </div>
          ) : carrito.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
              <ShoppingBag size={36} className="text-[#7a7266] mb-4" />
              <p className="font-medium">Tu pedido está vacío</p>
              <p className="text-sm text-[#7a7266] mt-1">Sumá prendas desde el catálogo.</p>
              <button
                onClick={() => {
                  setAbierto(false);
                  irA("catalogo");
                }}
                className="mt-6 px-6 py-3 bg-[#1c1a18] text-[#efece6] rounded-sm text-sm font-medium hover:bg-[#4a453e] transition-colors"
              >
                Ver catálogo
              </button>
            </div>
          ) : (
            <form onSubmit={enviarPedido} className="flex-1 flex flex-col min-h-0">
              <ul className="flex-1 overflow-y-auto px-6 divide-y divide-[#1c1a18]/10">
                {carrito.map((i) => (
                  <li key={i.clave} className="flex gap-4 py-5">
                    <div className="relative w-20 h-24 shrink-0 bg-white border border-[#e2dcd3] rounded-sm overflow-hidden">
                      <Image src={i.img} alt={i.name} fill sizes="80px" className={i.cover ? "object-cover" : "object-contain p-1"} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium leading-tight">{i.name}</p>
                      <p className="text-xs text-[#7a7266] mt-1">Talle {i.talle}</p>
                      <div className="mt-3 flex items-center justify-between">
                        <div className="flex items-center border border-[#1c1a18]/25 rounded-sm">
                          <button
                            type="button"
                            onClick={() => cambiarCantidad(i.clave, -1)}
                            aria-label={`Quitar una unidad de ${i.name}`}
                            className="p-2 hover:bg-[#1c1a18]/10"
                          >
                            <Minus size={13} />
                          </button>
                          <span className="w-8 text-center text-sm">{i.qty}</span>
                          <button
                            type="button"
                            onClick={() => cambiarCantidad(i.clave, 1)}
                            aria-label={`Agregar una unidad de ${i.name}`}
                            className="p-2 hover:bg-[#1c1a18]/10"
                          >
                            <Plus size={13} />
                          </button>
                        </div>
                        <span className="font-semibold">{precioTexto(i.precio * i.qty)}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="px-6 py-5 border-t border-[#1c1a18]/10 bg-[#e8e4dc]">
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <input
                    required
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Tu nombre"
                    aria-label="Nombre"
                    className="px-3 py-2.5 rounded-sm bg-white border border-[#e2dcd3] outline-none focus:border-[#1c1a18] text-sm"
                  />
                  <input
                    required
                    type="tel"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    placeholder="Teléfono"
                    aria-label="Teléfono"
                    className="px-3 py-2.5 rounded-sm bg-white border border-[#e2dcd3] outline-none focus:border-[#1c1a18] text-sm"
                  />
                </div>
                <div className="flex justify-between items-baseline mb-4">
                  <span className="text-[#4a453e]">Total</span>
                  <span className="text-2xl font-semibold">{precioTexto(total)}</span>
                </div>
                <button
                  type="submit"
                  disabled={!nombre.trim() || !telefono.trim()}
                  className="w-full py-3.5 rounded-sm bg-[#1c1a18] text-[#efece6] text-sm font-medium disabled:opacity-30 hover:bg-[#4a453e] transition-colors"
                >
                  Enviar pedido
                </button>
                <p className="mt-3 text-xs text-center text-[#7a7266]">
                  Demostración: los datos no se envían a ningún lado.
                </p>
              </div>
            </form>
          )}
        </aside>
      </div>
    </div>
  );
}
