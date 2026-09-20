"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { MapPin, Clock, CalendarDays, Flame, Check, Plus, Minus } from "lucide-react";
import VolverAlPortafolio from "../VolverAlPortafolio";
import { foto } from "../unsplash";

type Categoria = "Entradas" | "Parrilla" | "Otros platos" | "Postres" | "Bebidas";

const CATEGORIAS: Categoria[] = ["Entradas", "Parrilla", "Otros platos", "Postres", "Bebidas"];
const DIAS = ["Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];
const HORARIOS = ["20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00"];

const HERO = foto("photo-1529692236671-f1f6cf9683ba", 1600, 1000);
const HISTORIA = foto("photo-1551218808-94e220e084d2", 900, 1100);
const RESERVA = foto("photo-1550966871-3ed3cdb5ed0c", 900, 1100);

// Plato con foto de Unsplash (se pasa el id) o con la URL completa de otro sitio (`externo`).
const plato = (name: string, desc: string, price: string, cat: Categoria, img: string, opciones: { chef?: boolean; externo?: boolean } = {}) => ({
  name,
  desc,
  price,
  cat,
  chef: Boolean(opciones.chef),
  externo: Boolean(opciones.externo),
  img: opciones.externo ? img : foto(img, 600, 450),
});

const MENU = [
  plato("Provoleta", "Orégano, aceite de oliva y ají molido", "$6.800", "Entradas", "https://media.diariouno.com.ar/p/87cacc6187b47e32baa1ee0d64b272d8/adjuntos/298/imagenes/009/313/0009313033/1200x0/smart/provoleta-1jpg.jpg", { externo: true }),
  plato("Achuras de autor", "Selección del día, mollejas y chinchulín", "$9.900", "Entradas", "https://media.c5n.com/p/413f0b415b516e001efd7f257f47a3b0/adjuntos/326/imagenes/000/177/0000177838/790x0/smart/don-zoilo.png", { externo: true }),
  plato("Crema de zapallo", "Con semillas tostadas y queso", "$5.200", "Entradas", "photo-1476718406336-bb5a9690ee2a"),
  plato("Ensalada de estación", "Hojas verdes, zanahoria y semillas", "$5.900", "Entradas", "photo-1540189549336-e6e99c3679fe"),

  plato("Bife de chorizo", "400g, papas rústicas al romero", "$14.500", "Parrilla", "https://cdn.tasteatlas.com/images/dishes/913891c87f814c73aaa1aae404111922.jpg?mw=1300", { externo: true, chef: true }),
  plato("Asado de tira", "Corte premium, 6 horas a las brasas", "$13.200", "Parrilla", "photo-1544025162-d76694265947"),
  plato("Cordero patagónico", "12 horas de cocción lenta", "$16.800", "Parrilla", "https://cdn.agroempresario.com/images/posts/fa8ec4f662ca515ee0295eb7f5dd3bedb2bd1b51b018ac8c_840.jpg", { externo: true }),
  plato("Ojo de bife", "Con espárragos grillados y tomillo", "$17.500", "Parrilla", "photo-1546964124-0cce460f38ef"),
  plato("Entraña a la parrilla", "Con papas al horno y ají", "$15.200", "Parrilla", "photo-1594041680534-e8c8cdebd659"),
  plato("Costillar ahumado", "Cocción lenta y glaseado de la casa", "$15.800", "Parrilla", "photo-1529193591184-b1d58069ecdd"),
  plato("Lomo con papas rústicas", "Corte grueso, punto a elección", "$16.200", "Parrilla", "photo-1600891964092-4316c288032e"),
  plato("Parrillada para dos", "Selección de cortes, chorizo y verduras", "$32.000", "Parrilla", "photo-1555939594-58d7cb561ad1", { chef: true }),

  plato("Salmón a la plancha", "Con vegetales salteados y limón", "$15.900", "Otros platos", "photo-1519708227418-c8fd9a32b7a2"),
  plato("Costeleta de cerdo", "Con manzana y papas doradas", "$13.800", "Otros platos", "photo-1432139555190-58524dae6a55"),
  plato("Ensalada de lomo", "Lomo grillado, verdes y ají", "$12.400", "Otros platos", "photo-1504674900247-0877df9cc836"),
  plato("Hamburguesa de la casa", "Blend de carne, huevo y panceta", "$11.900", "Otros platos", "photo-1565299507177-b0ac66763828"),

  plato("Flan de la casa", "Dulce de leche artesanal y crema", "$4.200", "Postres", "https://recetacubana.com/wp-content/uploads/2023/05/flan-con-3-ingredientes.jpg", { externo: true }),
  plato("Tiramisú", "Mascarpone, café y cacao", "$4.800", "Postres", "photo-1571877227200-a0d98ea607e9", { chef: true }),
  plato("Panna cotta de frutilla", "Crema suave y frutillas frescas", "$4.500", "Postres", "photo-1488477181946-6428a0291777"),

  plato("Malbec de la casa", "Copa, cosecha reserva", "$3.800", "Bebidas", "photo-1506377247377-2a5b3b417ebb"),
  plato("Old fashioned", "Bourbon, azúcar y naranja", "$5.600", "Bebidas", "photo-1470337458703-46ad1756a187"),
  plato("Cóctel de autor", "Preparación del día", "$5.900", "Bebidas", "photo-1514362545857-3bc16c4c7d1b"),
  plato("Limonada de menta", "Con jengibre y hielo", "$2.900", "Bebidas", "photo-1551024709-8f23befc6f87"),
];

const AMBIENTE = [
  { alt: "Salón principal", img: foto("photo-1517248135467-4c7edcad34c4", 700, 525) },
  { alt: "Salón lleno", img: foto("photo-1552566626-52f8b828add9", 700, 525) },
  { alt: "Mesa puesta", img: foto("photo-1587899897387-091ebd01a6b2", 700, 525) },
  { alt: "Barra", img: foto("photo-1481833761820-0509d3217039", 700, 525) },
  { alt: "Plato en la mesa", img: foto("photo-1414235077428-338989a2e8c0", 700, 525) },
  { alt: "Cocina abierta", img: foto("photo-1421622548261-c45bfe178854", 700, 525) },
];

// Simula que algunas mesas ya están tomadas (siempre las mismas, para que no cambie al recargar).
const ocupado = (dia: string, hora: string) => (DIAS.indexOf(dia) * 2 + HORARIOS.indexOf(hora)) % 5 === 1;

export default function Smyth() {
  const [categoria, setCategoria] = useState<Categoria>("Parrilla");
  const [dia, setDia] = useState<string | null>(null);
  const [horario, setHorario] = useState<string | null>(null);
  const [comensales, setComensales] = useState(2);
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [notas, setNotas] = useState("");
  const [confirmado, setConfirmado] = useState(false);

  const platos = MENU.filter((m) => m.cat === categoria);
  const listo = Boolean(dia && horario && nombre.trim() && telefono.trim());

  const elegirDia = (d: string) => {
    setDia(d);
    setHorario(null);
  };

  const confirmar = (e: FormEvent) => {
    e.preventDefault();
    if (listo) setConfirmado(true);
  };

  const reiniciar = () => {
    setConfirmado(false);
    setDia(null);
    setHorario(null);
    setComensales(2);
    setNombre("");
    setTelefono("");
    setNotas("");
  };

  return (
    <div className="min-h-screen bg-[#100c0a] text-[#efe6da] font-serif">
      {/* Volver */}
      <div className="px-6 md:px-16 pt-6 font-sans">
        <VolverAlPortafolio className="bg-[#c9a15a] text-[#100c0a] hover:brightness-110" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 mt-6 flex items-center justify-between px-6 md:px-16 py-5 bg-[#100c0a]/85 backdrop-blur border-y border-[#efe6da]/10 font-sans">
        <span className="text-2xl tracking-[0.15em] uppercase font-serif">Smyth</span>
        <nav className="hidden md:flex items-center gap-8 text-xs tracking-widest uppercase text-[#efe6da]/70">
          <a href="#historia" className="hover:text-[#efe6da]">Historia</a>
          <a href="#menu" className="hover:text-[#efe6da]">Menú</a>
          <a href="#ambiente" className="hover:text-[#efe6da]">Ambiente</a>
          <a href="#visitanos" className="hover:text-[#efe6da]">Visitanos</a>
          <a
            href="#reservar"
            className="border border-[#c9a15a] text-[#c9a15a] px-5 py-2.5 hover:bg-[#c9a15a] hover:text-[#100c0a] transition-colors"
          >
            Reservar mesa
          </a>
        </nav>
        <a
          href="#reservar"
          className="md:hidden text-xs tracking-widest uppercase border border-[#c9a15a] text-[#c9a15a] px-4 py-2"
        >
          Reservar
        </a>
      </header>

      {/* Hero */}
      <div className="relative w-full h-[75vh] min-h-[480px] overflow-hidden">
        <Image src={HERO} alt="Corte de carne a las brasas" fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-[#100c0a] via-[#100c0a]/55 to-[#100c0a]/35" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <p className="text-xs tracking-[0.3em] uppercase text-[#c9a15a] mb-5 font-sans">Cocina de fuego, desde 2015</p>
          <h1 className="text-4xl md:text-6xl leading-tight max-w-2xl">El arte del asado, sin apuro.</h1>
          <div className="mt-9 flex flex-wrap justify-center gap-3 font-sans">
            <a
              href="#reservar"
              className="text-xs tracking-widest uppercase bg-[#c9a15a] text-[#100c0a] px-7 py-3.5 hover:brightness-110 transition"
            >
              Reservar mesa
            </a>
            <a
              href="#menu"
              className="text-xs tracking-widest uppercase border border-[#efe6da]/50 px-7 py-3.5 hover:bg-[#efe6da]/10 transition-colors"
            >
              Ver menú
            </a>
          </div>
        </div>
      </div>

      {/* Datos rápidos */}
      <section className="px-6 md:px-16 py-7 grid sm:grid-cols-3 gap-5 border-b border-[#efe6da]/10 font-sans text-sm text-[#efe6da]/75">
        <div className="flex items-center gap-3">
          <Clock size={17} className="text-[#c9a15a] shrink-0" /> Martes a domingo · 20:00 a 00:30 hs
        </div>
        <div className="flex items-center gap-3">
          <Flame size={17} className="text-[#c9a15a] shrink-0" /> Cocina a las brasas, sin apuro
        </div>
        <a href="#visitanos" className="flex items-center gap-3 hover:text-[#efe6da]">
          <MapPin size={17} className="text-[#c9a15a] shrink-0" /> 177 N Ada St, Chicago
        </a>
      </section>

      {/* Historia */}
      <section id="historia" className="px-6 md:px-16 py-24 grid md:grid-cols-2 gap-14 items-center max-w-6xl mx-auto scroll-mt-16">
        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-[#c9a15a] mb-6 font-sans">Nuestra historia</p>
          <p className="text-xl md:text-2xl leading-relaxed text-[#efe6da]/90">
            Cada corte se elige personalmente en el mercado, cada brasa se prepara con horas de anticipación. En Smyth no
            apuramos el fuego — dejamos que la carne hable por sí sola.
          </p>
          <dl className="mt-10 grid grid-cols-3 gap-4 font-sans">
            {[
              ["2015", "Desde"],
              ["12 hs", "Cocción lenta"],
              [String(MENU.length), "Platos y bebidas"],
            ].map(([valor, label]) => (
              <div key={label} className="border-t border-[#c9a15a]/40 pt-3">
                <dt className="text-3xl font-serif text-[#c9a15a]">{valor}</dt>
                <dd className="text-xs text-[#efe6da]/60 mt-1">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
          <Image src={HISTORIA} alt="Cocinero preparando ingredientes" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
        </div>
      </section>

      {/* Menú */}
      <section id="menu" className="px-6 md:px-16 py-24 border-t border-[#efe6da]/10 bg-[#140f0c] scroll-mt-16">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-[#c9a15a] mb-3 text-center font-sans">Selección del chef</p>
          <h2 className="text-3xl md:text-5xl text-center mb-10 tracking-wide">Menú</h2>

          <div className="flex flex-wrap justify-center gap-2 mb-14 font-sans" role="group" aria-label="Categorías del menú">
            {CATEGORIAS.map((c) => (
              <button
                key={c}
                onClick={() => setCategoria(c)}
                aria-pressed={categoria === c}
                className={`text-xs tracking-widest uppercase px-6 py-3 border transition-colors ${
                  categoria === c
                    ? "bg-[#c9a15a] border-[#c9a15a] text-[#100c0a]"
                    : "border-[#efe6da]/20 text-[#efe6da]/70 hover:border-[#c9a15a] hover:text-[#c9a15a]"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {platos.map((item) => (
              <article
                key={item.name}
                className="group relative flex flex-col bg-[#1a1410] rounded-xl overflow-hidden border border-[#c9a15a]/20 hover:border-[#c9a15a]/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#c9a15a]/10"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#241c17]">
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    unoptimized={item.externo}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1410] via-transparent to-transparent opacity-80" />
                  {item.chef && (
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#c9a15a] text-[#100c0a] text-[11px] tracking-widest uppercase font-sans">
                      Recomendado
                    </span>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="text-xl group-hover:text-[#c9a15a] transition-colors">{item.name}</h3>
                    <span className="text-lg font-semibold text-[#c9a15a] whitespace-nowrap">{item.price}</span>
                  </div>
                  <p className="text-xs text-[#efe6da]/60 font-sans leading-relaxed mt-2">{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Ambiente */}
      <section id="ambiente" className="px-6 md:px-16 py-24 border-t border-[#efe6da]/10 scroll-mt-16">
        <p className="text-xs tracking-[0.3em] uppercase text-[#c9a15a] mb-3 text-center font-sans">El lugar</p>
        <h2 className="text-3xl md:text-4xl text-center mb-14">Ambiente</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {AMBIENTE.map((a) => (
            <div key={a.alt} className="relative aspect-[4/3] overflow-hidden rounded-sm">
              <Image
                src={a.img}
                alt={a.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Reservar */}
      <section id="reservar" className="px-6 md:px-16 py-24 border-t border-[#efe6da]/10 bg-[#140f0c] scroll-mt-16">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm hidden lg:block">
            <Image src={RESERVA} alt="Mesas del salón" fill sizes="50vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#100c0a]/80 via-transparent to-transparent" />
            <p className="absolute bottom-8 left-8 right-8 text-2xl leading-snug">
              Una mesa, buena compañía y todo el tiempo del mundo.
            </p>
          </div>

          <div className="font-sans">
            <p className="text-xs tracking-[0.3em] uppercase text-[#c9a15a] mb-3">Reservas</p>
            <h2 className="text-3xl md:text-4xl mb-3 font-serif">Reservá tu mesa</h2>
            <p className="text-[#efe6da]/65 mb-8 max-w-[46ch]">
              Elegí el día, el horario y cuántos son. Te esperamos con la mesa lista y las brasas encendidas.
            </p>

            <div className="rounded-xl bg-[#1a1410] border border-[#c9a15a]/25 p-7 md:p-9">
              {confirmado ? (
                <div className="text-center py-6">
                  <div className="w-14 h-14 mx-auto rounded-full bg-[#c9a15a] text-[#100c0a] flex items-center justify-center mb-4">
                    <Check size={28} />
                  </div>
                  <h3 className="text-2xl font-serif mb-2">¡Mesa reservada!</h3>
                  <p className="text-[#efe6da]/75">
                    Te esperamos, {nombre.trim().split(" ")[0]}: {dia} a las {horario}, para {comensales}{" "}
                    {comensales === 1 ? "comensal" : "comensales"}.
                  </p>
                  <button onClick={reiniciar} className="mt-6 text-sm underline text-[#efe6da]/60 hover:text-[#efe6da]">
                    Hacer otra reserva
                  </button>
                </div>
              ) : (
                <form onSubmit={confirmar}>
                  <p className="text-xs uppercase tracking-widest text-[#efe6da]/50 mb-3">Día</p>
                  <div className="flex flex-wrap gap-2 mb-6" role="group" aria-label="Elegir día">
                    {DIAS.map((d) => (
                      <button
                        type="button"
                        key={d}
                        onClick={() => elegirDia(d)}
                        aria-pressed={dia === d}
                        className={`px-5 py-2.5 text-sm border transition-colors ${
                          dia === d
                            ? "bg-[#c9a15a] border-[#c9a15a] text-[#100c0a]"
                            : "border-[#efe6da]/20 hover:border-[#c9a15a]"
                        }`}
                      >
                        {d}
                      </button>
                    ))}
                  </div>

                  <p className="text-xs uppercase tracking-widest text-[#efe6da]/50 mb-3">Horario</p>
                  {dia ? (
                    <div className="grid grid-cols-4 gap-2 mb-6" role="group" aria-label="Elegir horario">
                      {HORARIOS.map((h) => {
                        const tomado = ocupado(dia, h);
                        return (
                          <button
                            type="button"
                            key={h}
                            disabled={tomado}
                            onClick={() => setHorario(h)}
                            aria-pressed={horario === h}
                            className={`py-2.5 text-sm border transition-colors ${
                              tomado
                                ? "border-[#efe6da]/10 text-[#efe6da]/25 line-through cursor-not-allowed"
                                : horario === h
                                  ? "bg-[#c9a15a] border-[#c9a15a] text-[#100c0a]"
                                  : "border-[#efe6da]/20 hover:border-[#c9a15a]"
                            }`}
                          >
                            {h}
                          </button>
                        );
                      })}
                    </div>
                  ) : (
                    <p className="text-sm text-[#efe6da]/50 mb-6">Elegí un día para ver los horarios disponibles.</p>
                  )}

                  <p className="text-xs uppercase tracking-widest text-[#efe6da]/50 mb-3">Comensales</p>
                  <div className="inline-flex items-center border border-[#efe6da]/20 mb-6">
                    <button
                      type="button"
                      onClick={() => setComensales(Math.max(1, comensales - 1))}
                      aria-label="Menos comensales"
                      className="p-3 hover:bg-[#efe6da]/10"
                    >
                      <Minus size={15} />
                    </button>
                    <span className="w-12 text-center">{comensales}</span>
                    <button
                      type="button"
                      onClick={() => setComensales(Math.min(10, comensales + 1))}
                      aria-label="Más comensales"
                      className="p-3 hover:bg-[#efe6da]/10"
                    >
                      <Plus size={15} />
                    </button>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <input
                      required
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                      placeholder="Tu nombre"
                      aria-label="Nombre"
                      className="px-4 py-3 bg-[#100c0a] border border-[#efe6da]/15 outline-none focus:border-[#c9a15a] text-sm"
                    />
                    <input
                      required
                      type="tel"
                      value={telefono}
                      onChange={(e) => setTelefono(e.target.value)}
                      placeholder="Teléfono"
                      aria-label="Teléfono"
                      className="px-4 py-3 bg-[#100c0a] border border-[#efe6da]/15 outline-none focus:border-[#c9a15a] text-sm"
                    />
                  </div>
                  <textarea
                    value={notas}
                    onChange={(e) => setNotas(e.target.value)}
                    placeholder="Ocasión o pedido especial (opcional)"
                    aria-label="Ocasión o pedido especial"
                    rows={2}
                    className="w-full px-4 py-3 mb-6 bg-[#100c0a] border border-[#efe6da]/15 outline-none focus:border-[#c9a15a] text-sm resize-none"
                  />

                  <button
                    type="submit"
                    disabled={!listo}
                    className="w-full py-4 text-xs tracking-widest uppercase bg-[#c9a15a] text-[#100c0a] font-semibold disabled:opacity-30 hover:brightness-110 transition"
                  >
                    Confirmar reserva
                  </button>
                  <p className="mt-3 text-xs text-center text-[#efe6da]/40">
                    {listo ? "Demostración: los datos no se envían a ningún lado." : "Completá los datos para confirmar."}
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Visitanos */}
      <section id="visitanos" className="px-6 md:px-16 py-20 border-t border-[#efe6da]/10 font-sans scroll-mt-16">
        <div className="max-w-3xl mx-auto grid sm:grid-cols-3 gap-8 text-center">
          <div>
            <MapPin size={20} className="mx-auto mb-3 text-[#c9a15a]" />
            <p className="text-sm text-[#efe6da]/70">177 N Ada St 2nd Floor, Chicago, IL 60607</p>
          </div>
          <div>
            <Clock size={20} className="mx-auto mb-3 text-[#c9a15a]" />
            <p className="text-sm text-[#efe6da]/70">
              Mar a dom
              <br />
              20:00 a 00:30 hs
            </p>
          </div>
          <div>
            <CalendarDays size={20} className="mx-auto mb-3 text-[#c9a15a]" />
            <p className="text-sm text-[#efe6da]/70">
              Reservas
              <br />
              online las 24 hs
            </p>
          </div>
        </div>
      </section>

      <footer className="px-6 md:px-16 py-8 border-t border-[#efe6da]/10 text-xs text-[#efe6da]/40 flex justify-between font-sans">
        <span>Smyth</span>
        <span>Sitio de ejemplo — DevCraft Studio</span>
      </footer>
    </div>
  );
}
