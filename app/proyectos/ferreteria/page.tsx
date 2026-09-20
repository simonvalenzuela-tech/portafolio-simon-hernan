"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Search,
  Package,
  AlertTriangle,
  TrendingUp,
  Boxes,
  Check,
  Wrench,
  PaintBucket,
  Zap,
  RotateCcw,
  Layers,
} from "lucide-react";
import VolverAlPortafolio from "../VolverAlPortafolio";
import { foto } from "../unsplash";

type Categoria = "Herramientas" | "Pinturas" | "Electricidad";
type Producto = { name: string; sku: string; cat: Categoria; qty: number; min: number };

const HERO = foto("photo-1589939705384-5185137a7f0f", 1600, 800);

const STOCK_INICIAL: Producto[] = [
  { name: 'Tornillo autoperforante 8x1"', sku: "TA-081", cat: "Herramientas", qty: 340, min: 100 },
  { name: "Pintura látex interior 10L", sku: "PL-10L", cat: "Pinturas", qty: 6, min: 10 },
  { name: "Cable unipolar 2.5mm (x rollo)", sku: "CU-25", cat: "Electricidad", qty: 22, min: 10 },
  { name: "Candado 40mm", sku: "CD-40", cat: "Herramientas", qty: 4, min: 8 },
  { name: "Cinta aisladora", sku: "CA-19", cat: "Electricidad", qty: 88, min: 20 },
  { name: 'Llave inglesa 10"', sku: "LI-10", cat: "Herramientas", qty: 15, min: 5 },
  { name: "Rodillo de lana 22cm", sku: "RL-22", cat: "Pinturas", qty: 30, min: 8 },
  { name: "Taladro percutor 650W", sku: "TP-650", cat: "Herramientas", qty: 9, min: 4 },
  { name: "Lámpara LED 12W", sku: "LE-12", cat: "Electricidad", qty: 120, min: 40 },
];

const CATEGORIAS: { name: Categoria; icon: typeof Wrench; img: string }[] = [
  { name: "Herramientas", icon: Wrench, img: foto("photo-1581147036324-c17ac41dfa6c", 700, 520) },
  { name: "Pinturas", icon: PaintBucket, img: foto("photo-1562259949-e8e7689d7828", 700, 520) },
  { name: "Electricidad", icon: Zap, img: foto("photo-1544724569-5f546fd6f2b5", 700, 520) },
];

const GALERIA = [
  { alt: "Martillo y llave inglesa", img: foto("photo-1586864387789-628af9feed72", 600, 600) },
  { alt: "Taladro colocando una cerradura", img: foto("photo-1562259929-b4e1fd3aef09", 600, 600) },
  { alt: "Corte con sierra ingletadora", img: foto("photo-1601058268499-e52658b8bb88", 600, 600) },
  { alt: "Instalación eléctrica", img: foto("photo-1621905251189-08b45d6a269e", 600, 600) },
];

const esBajo = (p: Producto) => p.qty < p.min;
const objetivo = (p: Producto) => p.min * 3; // nivel al que se repone cada producto
const irA = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

export default function FerreteriaBelgrano() {
  const [stock, setStock] = useState<Producto[]>(STOCK_INICIAL);
  const [busqueda, setBusqueda] = useState("");
  const [catFiltro, setCatFiltro] = useState<Categoria | "Todas">("Todas");
  const [estadoFiltro, setEstadoFiltro] = useState<"Todos" | "Disponible" | "Stock bajo">("Todos");
  const [aviso, setAviso] = useState<string | null>(null);

  const bajos = stock.filter(esBajo);
  const unidades = stock.reduce((total, p) => total + p.qty, 0);

  const termino = busqueda.trim().toLowerCase();
  const visibles = stock.filter(
    (p) =>
      (p.name.toLowerCase().includes(termino) || p.sku.toLowerCase().includes(termino)) &&
      (catFiltro === "Todas" || p.cat === catFiltro) &&
      (estadoFiltro === "Todos" || (estadoFiltro === "Stock bajo") === esBajo(p))
  );

  const reponer = (sku: string) => {
    const producto = stock.find((p) => p.sku === sku);
    if (!producto) return;
    setStock(stock.map((p) => (p.sku === sku ? { ...p, qty: objetivo(p) } : p)));
    setAviso(`Se repuso "${producto.name}": +${objetivo(producto) - producto.qty} unidades.`);
  };

  const reponerTodo = () => {
    setStock(stock.map((p) => (esBajo(p) ? { ...p, qty: objetivo(p) } : p)));
    setAviso(`Pedido generado: se repusieron ${bajos.length} productos con stock bajo.`);
  };

  const reiniciar = () => {
    setStock(STOCK_INICIAL);
    setBusqueda("");
    setCatFiltro("Todas");
    setEstadoFiltro("Todos");
    setAviso(null);
  };

  const filtrarPorCategoria = (cat: Categoria) => {
    setCatFiltro(catFiltro === cat ? "Todas" : cat);
    irA("inventario");
  };

  const kpis = [
    { icon: Boxes, color: "text-[#e0a11c]", valor: String(stock.length), label: "Productos activos" },
    {
      icon: AlertTriangle,
      color: "text-[#b5551f]",
      valor: String(bajos.length),
      label: "Con stock bajo",
      alerta: bajos.length > 0,
    },
    { icon: Layers, color: "text-[#e0a11c]", valor: String(unidades), label: "Unidades en stock" },
    { icon: TrendingUp, color: "text-[#3f7a52]", valor: "+12%", label: "Ventas vs. mes pasado" },
  ];

  return (
    <div className="min-h-screen bg-[#f2f1ed] text-[#23262b] font-sans">
      <div className="px-6 md:px-16 pt-4 pb-4 bg-[#23262b]">
        <VolverAlPortafolio className="bg-[#e0a11c] text-[#23262b] hover:brightness-110" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 flex items-center justify-between px-6 md:px-16 py-4 bg-[#23262b] text-[#f2f1ed] border-t border-white/10 shadow-md">
        <div className="flex items-center gap-2">
          <Package size={20} className="text-[#e0a11c]" />
          <span className="font-medium">The Home Depot — Panel</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-[#f2f1ed]/70">
          <a href="#resumen" className="hover:text-[#f2f1ed]">Resumen</a>
          <a href="#categorias" className="hover:text-[#f2f1ed]">Categorías</a>
          <a href="#inventario" className="px-4 py-2 rounded-md bg-[#e0a11c] text-[#23262b] font-medium hover:brightness-110">
            Inventario
          </a>
        </nav>
        <a href="#inventario" className="md:hidden px-4 py-2 rounded-md bg-[#e0a11c] text-[#23262b] text-sm font-medium">
          Inventario
        </a>
      </header>

      {/* Hero */}
      <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/8] overflow-hidden bg-[#23262b]">
        <Image src={HERO} alt="Trabajo en obra con herramientas" fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-[#23262b] via-[#23262b]/60 to-[#23262b]/20" />
        <div className="absolute bottom-8 left-6 md:left-16 right-6 text-[#f2f1ed]">
          <p className="text-xs uppercase tracking-[0.25em] text-[#e0a11c] mb-3">Gestión de catálogo y stock</p>
          <h1 className="text-3xl md:text-5xl font-medium leading-tight max-w-[20ch]">
            Todo tu inventario, bajo control.
          </h1>
          <p className="mt-3 text-[#f2f1ed]/75 max-w-[52ch] text-sm md:text-base">
            Controlá las existencias en tiempo real y recibí alertas antes de que se agote la mercadería.
          </p>
          <a
            href="#inventario"
            className="mt-6 inline-flex px-7 py-3 rounded-md bg-[#e0a11c] text-[#23262b] font-medium text-sm hover:brightness-110"
          >
            Ver inventario
          </a>
        </div>
      </div>

      <main className="px-6 md:px-16 py-10 space-y-14">
        {/* Resumen */}
        <section id="resumen" className="scroll-mt-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {kpis.map((k) => (
              <div
                key={k.label}
                className={`bg-white border rounded-lg p-5 flex items-center gap-3 ${
                  k.alerta ? "border-[#b5551f]/40" : "border-[#dcdad2]"
                }`}
              >
                <k.icon size={22} className={k.color} />
                <div>
                  <p className="text-2xl font-medium leading-none">{k.valor}</p>
                  <p className="text-xs text-[#8a8f96] mt-1.5">{k.label}</p>
                </div>
              </div>
            ))}
          </div>

          {bajos.length > 0 ? (
            <div className="mt-5 rounded-lg border border-[#b5551f]/30 bg-[#f5e1d3]/60 p-5 flex flex-col lg:flex-row lg:items-center gap-4">
              <div className="flex items-start gap-3 flex-1">
                <AlertTriangle size={20} className="text-[#b5551f] mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-[#8a3f14]">
                    {bajos.length === 1
                      ? "1 producto necesita reposición"
                      : `${bajos.length} productos necesitan reposición`}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {bajos.map((p) => (
                      <span key={p.sku} className="text-xs bg-white/80 border border-[#b5551f]/20 rounded-full px-3 py-1">
                        {p.name} · {p.qty}/{p.min} u.
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <button
                onClick={reponerTodo}
                className="px-6 py-3 rounded-md bg-[#23262b] text-[#f2f1ed] text-sm font-medium hover:bg-[#3a3f47] transition-colors shrink-0"
              >
                Reponer todo el stock bajo
              </button>
            </div>
          ) : (
            <div className="mt-5 rounded-lg border border-[#3f7a52]/30 bg-[#e1efe4] p-5 flex items-center gap-3">
              <Check size={20} className="text-[#3f7a52] shrink-0" />
              <p className="font-medium text-[#2e5a3d]">Todo el inventario está al día. No hay productos por reponer.</p>
            </div>
          )}

          {aviso && (
            <p role="status" className="mt-3 text-sm text-[#5c6066]">
              {aviso}
            </p>
          )}
        </section>

        {/* Categorías */}
        <section id="categorias" className="scroll-mt-20">
          <h2 className="text-sm uppercase tracking-wide text-[#8a8f96] mb-4">Categorías</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {CATEGORIAS.map((c) => {
              const productos = stock.filter((p) => p.cat === c.name);
              const enBajo = productos.filter(esBajo).length;
              const activa = catFiltro === c.name;
              return (
                <button
                  key={c.name}
                  onClick={() => filtrarPorCategoria(c.name)}
                  aria-pressed={activa}
                  className={`group relative aspect-[4/3] rounded-lg overflow-hidden text-left transition-shadow ${
                    activa ? "ring-2 ring-[#e0a11c] ring-offset-2 ring-offset-[#f2f1ed]" : ""
                  }`}
                >
                  <Image
                    src={c.img}
                    alt={c.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="flex items-center gap-2 font-medium text-lg">
                      <c.icon size={18} className="text-[#e0a11c]" /> {c.name}
                    </p>
                    <p className="text-xs text-white/75 mt-1">
                      {productos.length} productos{enBajo > 0 ? ` · ${enBajo} con stock bajo` : ""}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* Inventario */}
        <section id="inventario" className="scroll-mt-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-medium">Inventario</h2>
              <p className="text-sm text-[#5c6066] mt-1">
                {stock.length} productos · {bajos.length} con stock bajo
              </p>
            </div>
            <div className="flex items-center gap-2 bg-white border border-[#dcdad2] rounded-md px-4 py-2.5 w-full md:w-80 focus-within:border-[#e0a11c]">
              <Search size={16} className="text-[#8a8f96]" />
              <input
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                placeholder="Buscar producto o SKU..."
                aria-label="Buscar producto o SKU"
                className="bg-transparent outline-none text-sm w-full"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3 mb-5">
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar por categoría">
              {(["Todas", ...CATEGORIAS.map((c) => c.name)] as const).map((c) => (
                <button
                  key={c}
                  onClick={() => setCatFiltro(c)}
                  aria-pressed={catFiltro === c}
                  className={`px-4 py-1.5 rounded-full text-sm border transition-colors ${
                    catFiltro === c
                      ? "bg-[#23262b] border-[#23262b] text-[#f2f1ed]"
                      : "border-[#dcdad2] bg-white text-[#5c6066] hover:border-[#23262b]"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar por estado">
              {(["Todos", "Disponible", "Stock bajo"] as const).map((e) => (
                <button
                  key={e}
                  onClick={() => setEstadoFiltro(e)}
                  aria-pressed={estadoFiltro === e}
                  className={`px-4 py-1.5 rounded-full text-sm border transition-colors ${
                    estadoFiltro === e
                      ? "bg-[#e0a11c] border-[#e0a11c] text-[#23262b] font-medium"
                      : "border-[#dcdad2] bg-white text-[#5c6066] hover:border-[#e0a11c]"
                  }`}
                >
                  {e}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg border border-[#dcdad2] overflow-hidden">
            <div className="hidden md:grid grid-cols-[2.2fr_1fr_1.6fr_1fr_1fr] gap-4 px-6 py-3 text-xs uppercase tracking-wide text-[#8a8f96] border-b border-[#dcdad2] bg-[#faf9f6]">
              <span>Producto</span>
              <span>Categoría</span>
              <span>Stock</span>
              <span>Estado</span>
              <span className="text-right">Acción</span>
            </div>

            {visibles.length === 0 && (
              <p className="px-6 py-10 text-sm text-center text-[#8a8f96]">
                No hay productos que coincidan con los filtros.
              </p>
            )}

            {visibles.map((p) => {
              const bajo = esBajo(p);
              const nivel = Math.min(100, Math.round((p.qty / objetivo(p)) * 100));
              return (
                <div
                  key={p.sku}
                  className="grid md:grid-cols-[2.2fr_1fr_1.6fr_1fr_1fr] gap-x-4 gap-y-3 items-center px-6 py-4 border-b border-[#eeece6] last:border-0 text-sm"
                >
                  <div>
                    <p className="font-medium">{p.name}</p>
                    <p className="text-xs text-[#8a8f96] mt-0.5">SKU {p.sku}</p>
                  </div>
                  <span className="text-[#5c6066]">{p.cat}</span>
                  <div>
                    <p>
                      {p.qty} u. <span className="text-xs text-[#8a8f96]">(mín. {p.min})</span>
                    </p>
                    <div className="h-1.5 rounded-full bg-[#eeece6] overflow-hidden mt-1.5">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${
                          bajo ? "bg-[#b5551f]" : "bg-[#3f7a52]"
                        }`}
                        style={{ width: `${nivel}%` }}
                      />
                    </div>
                  </div>
                  {bajo ? (
                    <span className="flex items-center gap-1 text-[#b5551f] w-fit px-2 py-1 rounded-full bg-[#f5e1d3] text-xs">
                      <AlertTriangle size={12} /> Stock bajo
                    </span>
                  ) : (
                    <span className="text-xs text-[#3f7a52] bg-[#e1efe4] px-2 py-1 rounded-full w-fit">Disponible</span>
                  )}
                  <div className="md:text-right">
                    {bajo ? (
                      <button
                        onClick={() => reponer(p.sku)}
                        className="px-4 py-2 rounded-md bg-[#e0a11c] text-[#23262b] text-xs font-medium hover:brightness-110"
                      >
                        Reponer +{objetivo(p) - p.qty}
                      </button>
                    ) : (
                      <span className="text-xs text-[#8a8f96]">—</span>
                    )}
                  </div>
                </div>
              );
            })}

            <div className="flex items-center justify-between px-6 py-3 text-xs text-[#8a8f96] bg-[#faf9f6] border-t border-[#dcdad2]">
              <span>
                Mostrando {visibles.length} de {stock.length} productos
              </span>
              <button onClick={reiniciar} className="inline-flex items-center gap-1.5 hover:text-[#23262b]">
                <RotateCcw size={12} /> Reiniciar demo
              </button>
            </div>
          </div>

          <p className="mt-6 text-sm text-[#5c6066] max-w-[60ch]">
            Este panel avisa automáticamente cuándo un producto está por agotarse, para que el pedido al proveedor se
            haga a tiempo y nunca falte mercadería en el mostrador.
          </p>
        </section>

        {/* Galería */}
        <section>
          <h2 className="text-sm uppercase tracking-wide text-[#8a8f96] mb-4">En el mostrador</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {GALERIA.map((g) => (
              <div key={g.alt} className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src={g.img}
                  alt={g.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="px-6 md:px-16 py-6 bg-[#23262b] text-sm text-[#f2f1ed]/60 flex justify-between">
        <span>The Home Depot</span>
        <span>Sitio de ejemplo — DevCraft Studio</span>
      </footer>
    </div>
  );
}
