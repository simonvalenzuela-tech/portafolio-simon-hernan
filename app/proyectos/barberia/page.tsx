"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Scissors, Clock, Check, ArrowLeft, Star } from "lucide-react";

export default function BarberiaDelSur() {
  const servicios = [
    { name: "Corte clásico", dur: "30 min", price: "$4.500" },
    { name: "Corte + barba", dur: "50 min", price: "$7.200" },
    { name: "Afeitado a navaja", dur: "25 min", price: "$3.800" },
    { name: "Color y perfilado", dur: "60 min", price: "$9.000" },
  ];
  const horarios = ["10:00", "11:00", "14:30", "16:00", "17:30", "19:00"];
  const barberos = [
    { name: "Fede", especialidad: "Cortes clásicos", seed: "barber-fede" },
    { name: "Nano", especialidad: "Barba y afeitado", seed: "barber-nano" },
    { name: "Lucho", especialidad: "Color y diseño", seed: "barber-lucho" },
  ];

  const [servicio, setServicio] = useState(servicios[0].name);
  const [horario, setHorario] = useState(null);
  const [confirmado, setConfirmado] = useState(false);

  return (
    <div className="min-h-screen bg-[#12161c] text-[#e9e4d8] font-sans">
      <div className="px-6 md:px-16 pt-5">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-[#e9e4d8]/60 hover:text-[#e9e4d8]">
          <ArrowLeft size={15} /> Volver al portafolio
        </Link>
      </div>

      <header className="flex items-center justify-between px-6 md:px-16 py-6">
        <div className="flex items-center gap-2">
          <Scissors size={18} className="text-[#b08a4e]" />
          <span className="text-lg tracking-wide">Barbería del Sur</span>
        </div>
        <span className="hidden md:block text-sm text-[#e9e4d8]/60">General Paz 812, Córdoba</span>
      </header>

      <div className="relative w-full aspect-[21/9] overflow-hidden">
        <Image
          src="https://majbarber.com/wp-content/uploads/2023/01/majbarbercalle.jpg"
          alt="Barbería del Sur"
          fill
          sizes="(max-width: 1200px) 100vw, 1200px"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#12161c] via-transparent to-transparent" />
      </div>

      <section className="px-6 md:px-16 py-14 grid md:grid-cols-2 gap-12">
        <div>
          <h1 className="text-4xl md:text-5xl font-medium leading-tight max-w-[12ch]">
            Reservá tu turno en menos de un minuto.
          </h1>
          <p className="mt-5 text-[#e9e4d8]/70 max-w-[42ch]">
            Sin llamadas, sin esperar respuesta. Elegí el servicio y el
            horario que te quede cómodo.
          </p>

          <div className="mt-10 space-y-3">
            {servicios.map((s) => (
              <button
                key={s.name}
                onClick={() => setServicio(s.name)}
                className={`w-full flex justify-between items-center px-5 py-4 rounded-md border text-left transition-colors ${
                  servicio === s.name
                    ? "border-[#b08a4e] bg-[#b08a4e]/10"
                    : "border-[#e9e4d8]/15 hover:border-[#e9e4d8]/30"
                }`}
              >
                <span>{s.name}</span>
                <span className="flex items-center gap-4 text-sm text-[#e9e4d8]/60">
                  <span className="flex items-center gap-1"><Clock size={14} />{s.dur}</span>
                  <span className="text-[#e9e4d8]">{s.price}</span>
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="bg-[#181d25] rounded-lg p-7 h-fit">
          {!confirmado ? (
            <>
              <p className="text-sm text-[#e9e4d8]/60 mb-4">Elegí un horario para hoy</p>
              <div className="grid grid-cols-3 gap-2 mb-8">
                {horarios.map((h) => (
                  <button
                    key={h}
                    onClick={() => setHorario(h)}
                    className={`py-3 rounded-md text-sm border ${
                      horario === h
                        ? "border-[#b08a4e] bg-[#b08a4e] text-[#12161c]"
                        : "border-[#e9e4d8]/15 hover:border-[#e9e4d8]/30"
                    }`}
                  >
                    {h}
                  </button>
                ))}
              </div>
              <button
                disabled={!horario}
                onClick={() => setConfirmado(true)}
                className="w-full py-4 rounded-md bg-[#b08a4e] text-[#12161c] font-medium disabled:opacity-30"
              >
                Confirmar turno · {servicio}
              </button>
            </>
          ) : (
            <div className="text-center py-6">
              <Check size={32} className="mx-auto text-[#b08a4e] mb-3" />
              <p className="font-medium">Turno confirmado</p>
              <p className="text-sm text-[#e9e4d8]/60 mt-1">{servicio} · hoy a las {horario}</p>
            </div>
          )}
        </div>
      </section>

      {/* Equipo */}
      <section className="px-6 md:px-16 py-14 border-t border-[#e9e4d8]/10">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-medium">El equipo</h2>
          <span className="flex items-center gap-1 text-sm text-[#e9e4d8]/60">
            <Star size={14} className="fill-[#b08a4e] text-[#b08a4e]" /> 4.9 · +300 reseñas
          </span>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          {barberos.map((b) => (
            <div key={b.name}>
              <div className="relative aspect-square rounded-md overflow-hidden mb-3">
                <Image
                  src={`https://picsum.photos/seed/${b.seed}/500/500`}
                  alt={b.name}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="font-medium">{b.name}</p>
              <p className="text-sm text-[#e9e4d8]/60">{b.especialidad}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="px-6 md:px-16 py-7 border-t border-[#e9e4d8]/10 text-sm text-[#e9e4d8]/50 flex justify-between">
        <span>Barbería del Sur</span>
        <span>Sitio de ejemplo — DevBridge</span>
      </footer>
    </div>
  );
}
