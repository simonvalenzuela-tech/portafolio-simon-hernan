"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { Scissors, Clock, Check, Star, MapPin, Phone, CalendarDays } from "lucide-react";
import VolverAlPortafolio from "../VolverAlPortafolio";
import { foto } from "../unsplash";

const DIAS = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
const HORARIOS = ["10:00", "11:00", "14:30", "16:00", "17:30", "19:00"];
const SIN_PREFERENCIA = "Sin preferencia";

const HERO = foto("photo-1585747860715-2ba37e788b70", 1600, 800);

// Simula que algunos horarios ya están tomados (siempre los mismos, para que no cambie al recargar).
const ocupado = (dia: string, hora: string) => (DIAS.indexOf(dia) + HORARIOS.indexOf(hora)) % 4 === 1;

const irA = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

export default function BarberiaDelSur() {
  const servicios = [
    {
      name: "Corte clásico",
      dur: "30 min",
      price: "$4.500",
      desc: "Corte a tijera o máquina, lavado y peinado.",
      img: foto("photo-1622286342621-4bd786c2447c", 600, 420),
    },
    {
      name: "Corte + barba",
      dur: "50 min",
      price: "$7.200",
      desc: "Corte completo y perfilado de barba con toalla caliente.",
      img: foto("photo-1599351431202-1e0f0137899a", 600, 420),
    },
    {
      name: "Afeitado a navaja",
      dur: "25 min",
      price: "$3.800",
      desc: "Afeitado tradicional con espuma y toalla caliente.",
      img: foto("photo-1532710093739-9470acff878f", 600, 420),
    },
    {
      name: "Color y perfilado",
      dur: "60 min",
      price: "$9.000",
      desc: "Coloración y perfilado de contornos para un acabado prolijo.",
      img: foto("photo-1493256338651-d82f7acb2b38", 600, 420),
    },
  ];

  const barberos = [
    { name: "Fede", especialidad: "Cortes clásicos", img: foto("photo-1567894340315-735d7c361db0", 500, 500) },
    { name: "Nano", especialidad: "Barba y afeitado", img: foto("photo-1622287162716-f311baa1a2b8", 500, 500) },
    { name: "Lucho", especialidad: "Color y diseño", img: foto("photo-1605497788044-5a32c7078486", 500, 500) },
  ];

  const galeria = [
    { alt: "Herramientas de barbería", img: foto("photo-1621605815971-fbc98d665033", 600, 600) },
    { alt: "Sillón de cuero", img: foto("photo-1512690459411-b9245aed614b", 600, 600) },
    { alt: "Perfilado de barba con tijera", img: foto("photo-1503951914875-452162b0f3f1", 600, 600) },
    { alt: "Afeitado a navaja", img: foto("photo-1596728325488-58c87691e9af", 600, 600) },
  ];

  const [servicio, setServicio] = useState(servicios[0].name);
  const [dia, setDia] = useState<string | null>(null);
  const [horario, setHorario] = useState<string | null>(null);
  const [barbero, setBarbero] = useState(SIN_PREFERENCIA);
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [confirmado, setConfirmado] = useState(false);

  const servicioElegido = servicios.find((s) => s.name === servicio) ?? servicios[0];
  const listo = Boolean(dia && horario && nombre.trim() && telefono.trim());

  const elegirDia = (d: string) => {
    setDia(d);
    setHorario(null);
  };

  const elegirServicio = (nombreServicio: string) => {
    setServicio(nombreServicio);
    irA("reservar");
  };

  const elegirBarbero = (nombreBarbero: string) => {
    setBarbero(nombreBarbero);
    irA("reservar");
  };

  const confirmar = (e: FormEvent) => {
    e.preventDefault();
    if (listo) setConfirmado(true);
  };

  const reiniciar = () => {
    setConfirmado(false);
    setServicio(servicios[0].name);
    setDia(null);
    setHorario(null);
    setBarbero(SIN_PREFERENCIA);
    setNombre("");
    setTelefono("");
  };

  return (
    <div className="min-h-screen bg-[#12161c] text-[#e9e4d8] font-sans">
      <div className="px-6 md:px-16 pt-5">
        <VolverAlPortafolio className="bg-[#b08a4e] text-[#12161c] hover:brightness-110" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 flex items-center justify-between px-6 md:px-16 py-4 bg-[#12161c]/85 backdrop-blur border-b border-[#e9e4d8]/10">
        <div className="flex items-center gap-2">
          <Scissors size={20} className="text-[#b08a4e]" />
          <span className="text-lg tracking-wide">Barbería del Sur</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-[#e9e4d8]/70">
          <a href="#servicios" className="hover:text-[#e9e4d8]">Servicios</a>
          <a href="#equipo" className="hover:text-[#e9e4d8]">Equipo</a>
          <a href="#galeria" className="hover:text-[#e9e4d8]">Galería</a>
          <a href="#reservar" className="px-4 py-2 rounded-md bg-[#b08a4e] text-[#12161c] font-medium hover:brightness-110">
            Reservar turno
          </a>
        </nav>
        <a href="#reservar" className="md:hidden px-4 py-2 rounded-md bg-[#b08a4e] text-[#12161c] text-sm font-medium">
          Reservar
        </a>
      </header>

      {/* Hero */}
      <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] overflow-hidden">
        <Image src={HERO} alt="Interior de Barbería del Sur" fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-[#12161c] via-[#12161c]/55 to-[#12161c]/25" />
        <div className="absolute bottom-8 left-6 md:left-16 right-6">
          <p className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.25em] text-[#b08a4e] mb-3">
            <MapPin size={13} /> General Paz 812, Córdoba
          </p>
          <h1 className="text-3xl md:text-5xl font-medium leading-tight max-w-[18ch]">
            Reservá tu turno en menos de un minuto.
          </h1>
          <p className="mt-3 text-[#e9e4d8]/70 max-w-[46ch] text-sm md:text-base">
            Sin llamadas, sin esperar respuesta. Elegí el servicio y el horario que te quede cómodo.
          </p>
          <a
            href="#reservar"
            className="mt-6 inline-flex px-7 py-3 rounded-md bg-[#b08a4e] text-[#12161c] font-medium text-sm hover:brightness-110"
          >
            Reservar turno
          </a>
        </div>
      </div>

      {/* Datos rápidos */}
      <section className="px-6 md:px-16 py-8 grid sm:grid-cols-3 gap-6 border-b border-[#e9e4d8]/10 text-sm">
        <div className="flex items-center gap-3">
          <Clock size={18} className="text-[#b08a4e] shrink-0" />
          <span className="text-[#e9e4d8]/80">Lunes a sábado · 10 a 20 hs</span>
        </div>
        <div className="flex items-center gap-3">
          <Star size={18} className="fill-[#b08a4e] text-[#b08a4e] shrink-0" />
          <span className="text-[#e9e4d8]/80">4.9 · +300 reseñas</span>
        </div>
        <div className="flex items-center gap-3">
          <CalendarDays size={18} className="text-[#b08a4e] shrink-0" />
          <span className="text-[#e9e4d8]/80">Reservá online, sin llamadas</span>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="px-6 md:px-16 py-16 scroll-mt-16">
        <p className="text-xs uppercase tracking-[0.25em] text-[#b08a4e] mb-2">Servicios</p>
        <h2 className="text-2xl md:text-3xl font-medium mb-10">Elegí lo que necesitás</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicios.map((s) => {
            const elegido = servicio === s.name;
            return (
              <div
                key={s.name}
                className={`rounded-xl overflow-hidden bg-[#181d25] border transition-colors flex flex-col ${
                  elegido ? "border-[#b08a4e]" : "border-[#e9e4d8]/10"
                }`}
              >
                <div className="relative aspect-[10/7]">
                  <Image
                    src={s.img}
                    alt={s.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <p className="font-medium text-lg leading-tight">{s.name}</p>
                    <p className="text-[#b08a4e] font-medium">{s.price}</p>
                  </div>
                  <p className="text-sm text-[#e9e4d8]/60 mt-2 flex-1">{s.desc}</p>
                  <p className="flex items-center gap-1.5 text-xs text-[#e9e4d8]/50 mt-4">
                    <Clock size={13} /> {s.dur}
                  </p>
                  <button
                    onClick={() => elegirServicio(s.name)}
                    aria-pressed={elegido}
                    className={`mt-4 w-full py-2.5 rounded-md text-sm font-medium flex items-center justify-center gap-2 transition-colors ${
                      elegido
                        ? "bg-[#b08a4e] text-[#12161c]"
                        : "border border-[#e9e4d8]/20 hover:border-[#b08a4e] hover:text-[#b08a4e]"
                    }`}
                  >
                    {elegido ? (
                      <>
                        <Check size={15} /> Elegido
                      </>
                    ) : (
                      "Reservar este servicio"
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Reserva */}
      <section id="reservar" className="px-6 md:px-16 py-16 bg-[#0e1116] border-y border-[#e9e4d8]/10 scroll-mt-16">
        <p className="text-xs uppercase tracking-[0.25em] text-[#b08a4e] mb-2">Reservas</p>
        <h2 className="text-2xl md:text-3xl font-medium mb-10">Reservá tu turno</h2>

        {confirmado ? (
          <div className="max-w-lg mx-auto rounded-2xl bg-[#181d25] border border-[#e9e4d8]/10 p-8 text-center">
            <div className="w-14 h-14 mx-auto rounded-full bg-[#b08a4e] text-[#12161c] flex items-center justify-center mb-4">
              <Check size={28} />
            </div>
            <h3 className="text-2xl font-medium mb-2">Turno confirmado</h3>
            <p className="text-[#e9e4d8]/70">
              ¡Gracias, {nombre.trim().split(" ")[0]}! Te esperamos el <strong>{dia}</strong> a las{" "}
              <strong>{horario}</strong>.
            </p>
            <dl className="mt-6 text-sm text-left rounded-lg bg-[#12161c] border border-[#e9e4d8]/10 divide-y divide-[#e9e4d8]/10">
              <div className="flex justify-between px-4 py-3">
                <dt className="text-[#e9e4d8]/50">Servicio</dt>
                <dd>{servicioElegido.name}</dd>
              </div>
              <div className="flex justify-between px-4 py-3">
                <dt className="text-[#e9e4d8]/50">Barbero</dt>
                <dd>{barbero}</dd>
              </div>
              <div className="flex justify-between px-4 py-3">
                <dt className="text-[#e9e4d8]/50">Total</dt>
                <dd className="text-[#b08a4e] font-medium">{servicioElegido.price}</dd>
              </div>
            </dl>
            <button onClick={reiniciar} className="mt-6 text-sm underline text-[#e9e4d8]/60 hover:text-[#e9e4d8]">
              Reservar otro turno
            </button>
          </div>
        ) : (
          <form onSubmit={confirmar} className="grid lg:grid-cols-[1fr_340px] gap-8 items-start">
            <div className="space-y-10">
              {/* 1. Servicio */}
              <div>
                <p className="text-sm font-medium mb-4">
                  <span className="text-[#b08a4e] mr-2">1</span> Servicio
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {servicios.map((s) => (
                    <button
                      type="button"
                      key={s.name}
                      onClick={() => setServicio(s.name)}
                      aria-pressed={servicio === s.name}
                      className={`flex justify-between items-center px-5 py-4 rounded-md border text-left transition-colors ${
                        servicio === s.name
                          ? "border-[#b08a4e] bg-[#b08a4e]/10"
                          : "border-[#e9e4d8]/15 hover:border-[#e9e4d8]/30"
                      }`}
                    >
                      <span>
                        {s.name}
                        <span className="flex items-center gap-1 text-xs text-[#e9e4d8]/50 mt-1">
                          <Clock size={12} /> {s.dur}
                        </span>
                      </span>
                      <span>{s.price}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Día y horario */}
              <div>
                <p className="text-sm font-medium mb-4">
                  <span className="text-[#b08a4e] mr-2">2</span> Día y horario
                </p>
                <div className="flex flex-wrap gap-2 mb-5" role="group" aria-label="Elegir día">
                  {DIAS.map((d) => (
                    <button
                      type="button"
                      key={d}
                      onClick={() => elegirDia(d)}
                      aria-pressed={dia === d}
                      className={`px-5 py-2.5 rounded-md text-sm border transition-colors ${
                        dia === d
                          ? "border-[#b08a4e] bg-[#b08a4e] text-[#12161c] font-medium"
                          : "border-[#e9e4d8]/15 hover:border-[#e9e4d8]/30"
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
                {dia ? (
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-2" role="group" aria-label="Elegir horario">
                    {HORARIOS.map((h) => {
                      const tomado = ocupado(dia, h);
                      return (
                        <button
                          type="button"
                          key={h}
                          disabled={tomado}
                          onClick={() => setHorario(h)}
                          aria-pressed={horario === h}
                          className={`py-3 rounded-md text-sm border transition-colors ${
                            tomado
                              ? "border-[#e9e4d8]/10 text-[#e9e4d8]/25 line-through cursor-not-allowed"
                              : horario === h
                                ? "border-[#b08a4e] bg-[#b08a4e] text-[#12161c] font-medium"
                                : "border-[#e9e4d8]/15 hover:border-[#e9e4d8]/30"
                          }`}
                        >
                          {h}
                        </button>
                      );
                    })}
                  </div>
                ) : (
                  <p className="text-sm text-[#e9e4d8]/50">Elegí un día para ver los horarios disponibles.</p>
                )}
              </div>

              {/* 3. Barbero */}
              <div>
                <p className="text-sm font-medium mb-4">
                  <span className="text-[#b08a4e] mr-2">3</span> Barbero
                </p>
                <div className="flex flex-wrap gap-2" role="group" aria-label="Elegir barbero">
                  {[SIN_PREFERENCIA, ...barberos.map((b) => b.name)].map((b) => (
                    <button
                      type="button"
                      key={b}
                      onClick={() => setBarbero(b)}
                      aria-pressed={barbero === b}
                      className={`px-5 py-2.5 rounded-md text-sm border transition-colors ${
                        barbero === b
                          ? "border-[#b08a4e] bg-[#b08a4e]/10"
                          : "border-[#e9e4d8]/15 hover:border-[#e9e4d8]/30"
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* 4. Datos */}
              <div>
                <p className="text-sm font-medium mb-4">
                  <span className="text-[#b08a4e] mr-2">4</span> Tus datos
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nombre" className="block text-xs uppercase tracking-wide text-[#e9e4d8]/50 mb-2">
                      Nombre
                    </label>
                    <input
                      id="nombre"
                      required
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                      placeholder="Tu nombre y apellido"
                      className="w-full px-4 py-3 rounded-md bg-[#12161c] border border-[#e9e4d8]/15 outline-none focus:border-[#b08a4e] text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="telefono" className="block text-xs uppercase tracking-wide text-[#e9e4d8]/50 mb-2">
                      Teléfono
                    </label>
                    <input
                      id="telefono"
                      type="tel"
                      required
                      value={telefono}
                      onChange={(e) => setTelefono(e.target.value)}
                      placeholder="Tu numero de telefono"
                      className="w-full px-4 py-3 rounded-md bg-[#12161c] border border-[#e9e4d8]/15 outline-none focus:border-[#b08a4e] text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Resumen */}
            <aside className="rounded-xl bg-[#181d25] border border-[#e9e4d8]/10 p-6 lg:sticky lg:top-24">
              <p className="font-medium mb-4">Resumen del turno</p>
              <dl className="text-sm space-y-3">
                <div className="flex justify-between gap-4">
                  <dt className="text-[#e9e4d8]/50">Servicio</dt>
                  <dd>{servicioElegido.name}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-[#e9e4d8]/50">Día</dt>
                  <dd>{dia ?? "—"}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-[#e9e4d8]/50">Horario</dt>
                  <dd>{horario ?? "—"}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-[#e9e4d8]/50">Barbero</dt>
                  <dd>{barbero}</dd>
                </div>
                <div className="flex justify-between gap-4 pt-3 border-t border-[#e9e4d8]/10">
                  <dt className="text-[#e9e4d8]/50">Total</dt>
                  <dd className="text-[#b08a4e] text-lg font-medium">{servicioElegido.price}</dd>
                </div>
              </dl>
              <button
                type="submit"
                disabled={!listo}
                className="mt-6 w-full py-4 rounded-md bg-[#b08a4e] text-[#12161c] font-medium disabled:opacity-30"
              >
                Confirmar turno
              </button>
              <p className="mt-3 text-xs text-center text-[#e9e4d8]/40">
                {listo ? "Demostración: los datos no se envían a ningún lado." : "Completá los pasos para confirmar."}
              </p>
            </aside>
          </form>
        )}
      </section>

      {/* Equipo */}
      <section id="equipo" className="px-6 md:px-16 py-16 scroll-mt-16">
        <div className="flex items-end justify-between mb-10 gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#b08a4e] mb-2">El equipo</p>
            <h2 className="text-2xl md:text-3xl font-medium">Tu barbero de confianza</h2>
          </div>
          <span className="hidden sm:flex items-center gap-1 text-sm text-[#e9e4d8]/60">
            <Star size={14} className="fill-[#b08a4e] text-[#b08a4e]" /> 4.9 · +300 reseñas
          </span>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          {barberos.map((b) => (
            <div key={b.name} className="rounded-xl overflow-hidden bg-[#181d25] border border-[#e9e4d8]/10">
              <div className="relative aspect-square">
                <Image
                  src={b.img}
                  alt={b.name}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <p className="font-medium text-lg">{b.name}</p>
                <p className="text-sm text-[#e9e4d8]/60">{b.especialidad}</p>
                <button
                  onClick={() => elegirBarbero(b.name)}
                  className="mt-4 w-full py-2.5 rounded-md text-sm font-medium border border-[#e9e4d8]/20 hover:border-[#b08a4e] hover:text-[#b08a4e] transition-colors"
                >
                  Reservar con {b.name}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Galería */}
      <section id="galeria" className="px-6 md:px-16 pb-16 scroll-mt-16">
        <p className="text-xs uppercase tracking-[0.25em] text-[#b08a4e] mb-2">Galería</p>
        <h2 className="text-2xl md:text-3xl font-medium mb-10">El oficio, de cerca</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galeria.map((g) => (
            <div key={g.alt} className="relative aspect-square rounded-xl overflow-hidden">
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

      {/* Contacto */}
      <section className="px-6 md:px-16 py-12 border-t border-[#e9e4d8]/10 grid sm:grid-cols-3 gap-8 text-sm">
        <div className="flex items-start gap-3">
          <MapPin size={18} className="text-[#b08a4e] mt-0.5 shrink-0" />
          <div>
            <p className="font-medium">Dónde estamos</p>
            <p className="text-[#e9e4d8]/60">General Paz 812, Córdoba</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Clock size={18} className="text-[#b08a4e] mt-0.5 shrink-0" />
          <div>
            <p className="font-medium">Horarios</p>
            <p className="text-[#e9e4d8]/60">Lunes a sábado, 10 a 20 hs</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Phone size={18} className="text-[#b08a4e] mt-0.5 shrink-0" />
          <div>
            <p className="font-medium">Turnos</p>
            <p className="text-[#e9e4d8]/60">Reservá online las 24 hs</p>
          </div>
        </div>
      </section>

      <footer className="px-6 md:px-16 py-7 border-t border-[#e9e4d8]/10 text-sm text-[#e9e4d8]/50 flex justify-between">
        <span>Barbería del Sur</span>
        <span>Sitio de ejemplo — DevCraft Studio</span>
      </footer>
    </div>
  );
}
