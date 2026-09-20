"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { Dumbbell, Check, Flame, Clock, Users, MapPin, Trophy } from "lucide-react";
import VolverAlPortafolio from "../VolverAlPortafolio";
import { foto } from "../unsplash";

const DIAS = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

const HERO = foto("photo-1571902943202-507ec2618e8f", 1600, 700);

export default function GimnasioFuerzaNorte() {
  const planes = [
    {
      name: "Básico",
      price: "$12.000",
      periodo: "/mes",
      features: ["Acceso a sala de musculación", "Horario diurno (7 a 17 hs)", "Sin clases grupales"],
      destacado: false,
    },
    {
      name: "Full",
      price: "$19.500",
      periodo: "/mes",
      features: ["Acceso ilimitado 24hs", "Todas las clases grupales", "1 evaluación física por mes"],
      destacado: true,
    },
    {
      name: "Anual",
      price: "$180.000",
      periodo: "/año",
      features: ["Todo lo del plan Full", "2 meses gratis vs. mensual", "Congelamiento de 30 días incluido"],
      destacado: false,
    },
  ];

  const clases = [
    { name: "Funcional", dias: ["Lun", "Mié", "Vie"], hora: "18:00", instructor: "Lucía", duracion: "60 min", nivel: "Todos los niveles", img: foto("photo-1574680096145-d05b474e2155", 600, 450) },
    { name: "Spinning", dias: ["Mar", "Jue"], hora: "19:00", instructor: "Lucía", duracion: "45 min", nivel: "Intermedio", img: foto("photo-1540497077202-7c8a3999166f", 600, 450) },
    { name: "Yoga", dias: ["Lun", "Mié"], hora: "8:00", instructor: "Carolina", duracion: "60 min", nivel: "Todos los niveles", img: foto("photo-1544367567-0f2fcb009e0b", 600, 450) },
    { name: "Boxeo funcional", dias: ["Mar", "Jue"], hora: "20:00", instructor: "Marcos", duracion: "50 min", nivel: "Intermedio", img: foto("photo-1517438322307-e67111335449", 600, 450) },
    { name: "Movilidad", dias: ["Sáb"], hora: "10:00", instructor: "Carolina", duracion: "45 min", nivel: "Todos los niveles", img: foto("photo-1518611012118-696072aa579a", 600, 450) },
  ];

  const entrenadores = [
    { name: "Marcos Ledesma", rol: "Musculación y boxeo", img: foto("photo-1567013127542-490d757e51fc", 500, 500) },
    { name: "Lucía Herrera", rol: "Funcional y spinning", img: foto("photo-1594381898411-846e7d193883", 500, 500) },
    { name: "Carolina Paz", rol: "Yoga y movilidad", img: foto("photo-1552196563-55cd4e45efb3", 500, 500) },
  ];

  const galeria = [
    { alt: "Sala de mancuernas", img: foto("photo-1534438327276-14e5300c3a48", 500, 660) },
    { alt: "Entrenamiento con barra", img: foto("photo-1517836357463-d25dfeac3438", 500, 660) },
    { alt: "Peso libre", img: foto("photo-1534258936925-c58bed479fcb", 500, 660) },
    { alt: "Clase grupal", img: foto("photo-1518310383802-640c2de311b2", 500, 660) },
  ];

  const beneficios = [
    { icon: Dumbbell, titulo: "Sala completa", texto: "Máquinas y peso libre para todos los niveles." },
    { icon: Clock, titulo: "Abierto 24 hs", texto: "Entrená a tu horario con el plan Full." },
    { icon: Users, titulo: "Clases grupales", texto: "Funcional, spinning, yoga, boxeo y más." },
    { icon: Trophy, titulo: "Seguimiento", texto: "Evaluación física mensual para medir tu progreso." },
  ];

  const estadisticas = [
    { valor: "+800", label: "Socios activos" },
    { valor: "24 hs", label: "Acceso con plan Full" },
    { valor: String(clases.length), label: "Clases grupales" },
    { valor: String(entrenadores.length), label: "Entrenadores" },
  ];

  const [diaFiltro, setDiaFiltro] = useState("Todos");
  const [planElegido, setPlanElegido] = useState<string | null>(null);
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [enviado, setEnviado] = useState(false);

  const clasesVisibles = clases.filter((c) => diaFiltro === "Todos" || c.dias.includes(diaFiltro));

  const elegirPlan = (nombrePlan: string) => {
    setPlanElegido(nombrePlan);
    setEnviado(false);
    document.getElementById("sumate")?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const enviar = (e: FormEvent) => {
    e.preventDefault();
    if (planElegido && nombre.trim() && telefono.trim()) setEnviado(true);
  };

  const reiniciar = () => {
    setEnviado(false);
    setPlanElegido(null);
    setNombre("");
    setTelefono("");
  };

  return (
    <div className="min-h-screen bg-[#0d0d0f] text-[#f2f2f0] font-sans">
      <div className="px-6 md:px-16 pt-5">
        <VolverAlPortafolio className="bg-[#e2ff3d] text-[#0d0d0f] hover:brightness-95" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 flex items-center justify-between px-6 md:px-16 py-4 bg-[#0d0d0f]/85 backdrop-blur border-b border-white/10">
        <div className="flex items-center gap-2">
          <Dumbbell size={20} className="text-[#e2ff3d]" />
          <span className="text-lg font-bold tracking-tight">Fuerza Norte</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-[#f2f2f0]/70">
          <a href="#planes" className="hover:text-[#f2f2f0]">Planes</a>
          <a href="#clases" className="hover:text-[#f2f2f0]">Clases</a>
          <a href="#equipo" className="hover:text-[#f2f2f0]">Equipo</a>
          <a href="#sumate" className="px-4 py-2 rounded-md bg-[#e2ff3d] text-[#0d0d0f] font-semibold hover:brightness-95">
            Sumate
          </a>
        </nav>
        <a href="#sumate" className="md:hidden px-4 py-2 rounded-md bg-[#e2ff3d] text-[#0d0d0f] text-sm font-semibold">
          Sumate
        </a>
      </header>

      {/* Hero */}
      <div className="relative w-full aspect-[16/9] md:aspect-[16/7] overflow-hidden">
        <Image
          src={HERO}
          alt="Fuerza Norte"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0f] via-[#0d0d0f]/50 to-[#0d0d0f]/20" />
        <div className="absolute bottom-8 left-6 md:left-16 right-6">
          <p className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#e2ff3d] mb-3">
            <MapPin size={13} /> Av. Colón 3400, Córdoba
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight max-w-[14ch]">
            Entrená sin excusas.
          </h1>
          <p className="mt-3 text-[#f2f2f0]/70 max-w-[46ch] text-sm md:text-base">
            Sala completa, clases grupales y entrenadores que te acompañan. Elegí tu plan y empezá hoy.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href="#planes" className="px-6 py-3 rounded-md bg-[#e2ff3d] text-[#0d0d0f] font-semibold text-sm hover:brightness-95">
              Ver planes
            </a>
            <a href="#clases" className="px-6 py-3 rounded-md border border-white/25 text-sm font-semibold hover:bg-white/10">
              Ver clases
            </a>
          </div>
        </div>
      </div>

      {/* Estadísticas */}
      <section className="px-6 md:px-16 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 border-b border-white/10">
        {estadisticas.map((s) => (
          <div key={s.label}>
            <p className="text-3xl md:text-4xl font-extrabold text-[#e2ff3d]">{s.valor}</p>
            <p className="text-sm text-[#f2f2f0]/60 mt-1">{s.label}</p>
          </div>
        ))}
      </section>

      {/* Beneficios */}
      <section className="px-6 md:px-16 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {beneficios.map((b) => (
          <div key={b.titulo} className="rounded-xl bg-[#17171a] border border-white/10 p-6">
            <div className="w-10 h-10 rounded-lg bg-[#e2ff3d]/10 text-[#e2ff3d] flex items-center justify-center mb-4">
              <b.icon size={20} />
            </div>
            <p className="font-bold mb-1">{b.titulo}</p>
            <p className="text-sm text-[#f2f2f0]/60">{b.texto}</p>
          </div>
        ))}
      </section>

      {/* Galería */}
      <section className="px-6 md:px-16 pb-14">
        <h2 className="text-2xl font-bold mb-6">Conocé el gimnasio</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galeria.map((g) => (
            <div key={g.alt} className="relative aspect-[3/4] rounded-xl overflow-hidden">
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

      {/* Planes */}
      <section id="planes" className="px-6 md:px-16 py-14 border-t border-white/10 scroll-mt-16">
        <h2 className="text-2xl font-bold mb-2">Planes</h2>
        <p className="text-[#f2f2f0]/60 mb-10">Sin permanencia mínima, dado de baja cuando quieras.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {planes.map((plan) => {
            const elegido = planElegido === plan.name;
            return (
              <div
                key={plan.name}
                className={`rounded-xl p-7 flex flex-col transition-shadow ${
                  plan.destacado
                    ? "bg-[#e2ff3d] text-[#0d0d0f]"
                    : "bg-[#17171a] border border-white/10"
                } ${elegido ? "ring-2 ring-[#e2ff3d] ring-offset-4 ring-offset-[#0d0d0f]" : ""}`}
              >
                {plan.destacado && (
                  <span className="text-xs font-bold uppercase tracking-wide mb-3 flex items-center gap-1">
                    <Flame size={13} /> Más elegido
                  </span>
                )}
                <p className="text-lg font-bold">{plan.name}</p>
                <p className="mt-2 mb-6">
                  <span className="text-3xl font-extrabold">{plan.price}</span>
                  <span className={plan.destacado ? "text-[#0d0d0f]/70" : "text-[#f2f2f0]/50"}> {plan.periodo}</span>
                </p>
                <ul className="space-y-2 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check size={15} className="mt-0.5 shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => elegirPlan(plan.name)}
                  aria-pressed={elegido}
                  className={`w-full py-3 rounded-md font-semibold text-sm flex items-center justify-center gap-2 ${
                    plan.destacado
                      ? "bg-[#0d0d0f] text-[#e2ff3d]"
                      : "bg-[#e2ff3d] text-[#0d0d0f]"
                  }`}
                >
                  {elegido ? (
                    <>
                      <Check size={16} /> Plan elegido
                    </>
                  ) : (
                    "Elegir plan"
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* Clases */}
      <section id="clases" className="px-6 md:px-16 py-14 border-t border-white/10 scroll-mt-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-8">
          <div>
            <h2 className="text-2xl font-bold mb-2">Clases grupales</h2>
            <p className="text-[#f2f2f0]/60">Incluidas en los planes Full y Anual.</p>
          </div>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar clases por día">
            {["Todos", ...DIAS].map((d) => (
              <button
                key={d}
                onClick={() => setDiaFiltro(d)}
                aria-pressed={diaFiltro === d}
                className={`px-4 py-2 rounded-full text-sm border transition-colors ${
                  diaFiltro === d
                    ? "bg-[#e2ff3d] border-[#e2ff3d] text-[#0d0d0f] font-semibold"
                    : "border-white/15 text-[#f2f2f0]/70 hover:border-white/40"
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clasesVisibles.map((c) => (
            <div key={c.name} className="rounded-xl overflow-hidden bg-[#17171a] border border-white/10">
              <div className="relative aspect-[4/3]">
                <Image
                  src={c.img}
                  alt={c.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#0d0d0f]/80 backdrop-blur text-xs font-semibold text-[#e2ff3d]">
                  {c.nivel}
                </span>
              </div>
              <div className="p-5">
                <p className="font-bold text-lg">{c.name}</p>
                <p className="text-sm text-[#f2f2f0]/60 mt-1">
                  {c.dias.join(" / ")} · {c.hora}
                </p>
                <p className="text-xs text-[#f2f2f0]/40 mt-3">
                  {c.duracion} · con {c.instructor}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Equipo */}
      <section id="equipo" className="px-6 md:px-16 py-14 border-t border-white/10 scroll-mt-16">
        <h2 className="text-2xl font-bold mb-8">Tu equipo de entrenadores</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {entrenadores.map((e) => (
            <div key={e.name}>
              <div className="relative aspect-square rounded-xl overflow-hidden mb-3">
                <Image
                  src={e.img}
                  alt={e.name}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <p className="font-semibold">{e.name}</p>
              <p className="text-sm text-[#f2f2f0]/50">{e.rol}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sumate */}
      <section id="sumate" className="px-6 md:px-16 py-16 border-t border-white/10 scroll-mt-16">
        <div className="max-w-xl mx-auto rounded-2xl bg-[#17171a] border border-white/10 p-7 md:p-9">
          {!enviado ? (
            <form onSubmit={enviar}>
              <h2 className="text-2xl font-bold mb-2">Sumate a Fuerza Norte</h2>
              <p className="text-sm text-[#f2f2f0]/60 mb-6">
                Elegí tu plan, dejanos tus datos y te contactamos para coordinar tu primer día.
              </p>

              <p className="text-xs uppercase tracking-wide text-[#f2f2f0]/50 mb-2">Plan</p>
              <div className="flex flex-wrap gap-2 mb-6" role="group" aria-label="Elegir plan">
                {planes.map((p) => (
                  <button
                    type="button"
                    key={p.name}
                    onClick={() => setPlanElegido(p.name)}
                    aria-pressed={planElegido === p.name}
                    className={`px-4 py-2 rounded-md text-sm border transition-colors ${
                      planElegido === p.name
                        ? "bg-[#e2ff3d] border-[#e2ff3d] text-[#0d0d0f] font-semibold"
                        : "border-white/15 text-[#f2f2f0]/70 hover:border-white/40"
                    }`}
                  >
                    {p.name} · {p.price}
                    {p.periodo}
                  </button>
                ))}
              </div>

              <label className="block text-xs uppercase tracking-wide text-[#f2f2f0]/50 mb-2" htmlFor="nombre">
                Nombre
              </label>
              <input
                id="nombre"
                required
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Tu nombre y apellido"
                className="w-full mb-5 px-4 py-3 rounded-md bg-[#0d0d0f] border border-white/15 outline-none focus:border-[#e2ff3d] text-sm"
              />

              <label className="block text-xs uppercase tracking-wide text-[#f2f2f0]/50 mb-2" htmlFor="telefono">
                Teléfono
              </label>
              <input
                id="telefono"
                type="tel"
                required
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                placeholder="Tu numero de telefono"
                className="w-full mb-7 px-4 py-3 rounded-md bg-[#0d0d0f] border border-white/15 outline-none focus:border-[#e2ff3d] text-sm"
              />

              <button
                type="submit"
                disabled={!planElegido || !nombre.trim() || !telefono.trim()}
                className="w-full py-4 rounded-md bg-[#e2ff3d] text-[#0d0d0f] font-semibold disabled:opacity-30"
              >
                {planElegido ? `Quiero el plan ${planElegido}` : "Elegí un plan para continuar"}
              </button>
              <p className="mt-4 text-xs text-center text-[#f2f2f0]/40">
                Demostración: los datos no se envían a ningún lado.
              </p>
            </form>
          ) : (
            <div className="text-center py-6">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#e2ff3d] text-[#0d0d0f] flex items-center justify-center mb-4">
                <Check size={28} />
              </div>
              <h2 className="text-2xl font-bold mb-2">¡Listo, {nombre.trim().split(" ")[0]}!</h2>
              <p className="text-[#f2f2f0]/70">
                Recibimos tu solicitud para el plan <strong>{planElegido}</strong>. Te contactamos al{" "}
                {telefono.trim()} para coordinar tu primer día.
              </p>
              <button onClick={reiniciar} className="mt-6 text-sm underline text-[#f2f2f0]/60 hover:text-[#f2f2f0]">
                Hacer otra solicitud
              </button>
            </div>
          )}
        </div>
      </section>

      <footer className="px-6 md:px-16 py-7 border-t border-white/10 text-sm text-[#f2f2f0]/40 flex justify-between">
        <span>Fuerza Norte · Av. Colón 3400, Córdoba</span>
        <span>Sitio de ejemplo — DevCraft Studio</span>
      </footer>
    </div>
  );
}
