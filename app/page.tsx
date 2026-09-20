import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Code2, ArrowUpRight, CheckCircle2, Sparkles, Zap } from "lucide-react";

export default function PortafolioDevCraft() {
  const proyectos = [
    {
      slug: "cafe",
      name: "Balthazar Bakery",
      tag: "Landing de comercio",
      desc: "Cafetería con menú interactivo, ubicación en vivo y contacto directo por WhatsApp.",
      tone: "from-amber-500/20 via-orange-500/10 to-transparent",
      badgeColor: "border-amber-500/30 text-amber-400 bg-amber-500/10",
      img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&h=560&q=75",
    },
    {
      slug: "indumentaria",
      name: "American Eagle",
      tag: "Catálogo online",
      desc: "Tienda de indumentaria con catálogo visual optimizado y pedidos rápidos por WhatsApp.",
      tone: "from-fuchsia-500/20 via-purple-500/10 to-transparent",
      badgeColor: "border-fuchsia-500/30 text-fuchsia-400 bg-fuchsia-500/10",
      img: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=1000&h=560&q=75",
    },
    {
      slug: "barberia",
      name: "Barbería del Sur",
      tag: "Reserva de turnos",
      desc: "Sistema interactivo para selección de servicios, horarios en vivo y confirmación ágil.",
      tone: "from-cyan-500/20 via-blue-500/10 to-transparent",
      badgeColor: "border-cyan-500/30 text-cyan-400 bg-cyan-500/10",
      img: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1000&h=560&q=75",
    },
    {
      slug: "ferreteria",
      name: "The Home Depot",
      tag: "Gestión de stock",
      desc: "Panel de inventario en tiempo real con alertas automáticas de reposición.",
      tone: "from-emerald-500/20 via-teal-500/10 to-transparent",
      badgeColor: "border-emerald-500/30 text-emerald-400 bg-emerald-500/10",
      img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1000&h=560&q=75",
    },
     {
      slug: "gimnasio",
      name: "Fuerza Norte",
      tag: "Planes y membresías",
      desc: "Gimnasio con planes comparados y clases grupales con horarios.",
      tone: "from-lime-500/20 via-lime-400/10 to-transparent",
      badgeColor: "border-lime-500/30 text-lime-400 bg-lime-500/10",
      img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&h=560&q=75",
    },
    {
      slug: "restaurante",
      name: "Smyth",
      tag: "Carta de comida",
      desc: "Parrilla con menú y fotos de cada plato.",
      tone: "from-orange-500/20 via-red-500/10 to-transparent",
      badgeColor: "border-orange-500/30 text-orange-400 bg-orange-500/10",
      img: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=1000&h=560&q=75",
    },
  ];

  const equipo = [
    {
      name: "Simón Valenzuela",
      rol: "Programador Full Stack",
      whatsapp: "5493515500620",
      skills: ["React / Next.js", "Node.js", "JavaScript", "TypeScript", "Tailwind CSS", "ECMAScript", "Postgre SQL / MongoDB", "Testing"],
    },
    {
      name: "Hernán Alejandro Rolón",
      rol: "Técnico Superior en Programación",
      whatsapp: "5493513773391",
      skills: ["Python", "JavaScript", "Postgre SQL / My SQL / Supabase / Firebase", "Android Studio", "Node.js", "Docker"],
    },
  ];

  // Abre el chat con la persona y deja escrito un mensaje para que solo tenga que enviarlo.
  const linkWhatsApp = (persona: { name: string; whatsapp: string }) => {
    const mensaje = `Hola ${persona.name.split(" ")[0]}! Vi el portafolio de DevCraft Studio y quería hacerte una consulta.`;
    return `https://wa.me/${persona.whatsapp}?text=${encodeURIComponent(mensaje)}`;
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-violet-500 selection:text-white relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-violet-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <header className="flex items-center justify-between px-6 md:px-16 py-5 border-b border-slate-800/80 backdrop-blur-xl bg-slate-950/70 sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-gradient-to-tr from-violet-600 to-indigo-500 text-white shadow-lg shadow-violet-500/25">
            <Code2 size={22} />
          </div>
          <span className="text-xl font-black tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            DevCraft <span className="text-violet-400">Studio</span>
          </span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-6 md:px-16 pt-20 pb-24 max-w-5xl mx-auto text-center md:text-left relative">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-violet-500/30 text-violet-300 text-xs font-semibold tracking-wide uppercase mb-8 shadow-inner">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <Sparkles size={14} className="text-violet-400" />
          SOLUCIONES IT & DESARROLLO DE SOFTWARE
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black leading-[1.08] tracking-tight text-white">
          Impulsamos tu empresa con software a medida{" "}
          <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-300 bg-clip-text text-transparent">
            y soluciones digitales de alto impacto.
          </span>
        </h1>

        <p className="mt-8 text-slate-400 text-lg md:text-xl max-w-[58ch] font-normal leading-relaxed">
        Diseñamos y desarrollamos sistemas a medida, aplicaciones, automatizaciones de procesos y plataformas web para comercios y empresas. Tecnología escalable, rendimiento extremo y enfoque 100% en resultados.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <a
            href="#contacto"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-base shadow-xl shadow-emerald-500/20 hover:shadow-emerald-400/30 hover:scale-[1.02] transition-all duration-300"
          >
            <MessageCircle size={20} className="fill-slate-950" />
            Cotizar por WhatsApp
          </a>
          <a
            href="#proyectos"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 font-bold text-base transition-all duration-200"
          >
            Ver Proyectos <ArrowUpRight size={18} />
          </a>
        </div>
      </section>

      {/* Portfolio Grid Section */}
      <section id="proyectos" className="px-6 md:px-16 py-20 max-w-7xl mx-auto border-t border-slate-900">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-violet-400 mb-2 block">
              Trabajos Destacados
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white">Soluciones reales para negocios</h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md">
            Modelos funcionales adaptados a la necesidad concreta de cada rubro.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {proyectos.map((p) => (
            <Link
              key={p.slug}
              href={`/proyectos/${p.slug}`}
              className="group rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-sm overflow-hidden hover:border-violet-500/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-violet-500/10 block"
            >
              <div className={`aspect-[16/9] relative overflow-hidden bg-gradient-to-br ${p.tone}`}>
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold border backdrop-blur-md ${p.badgeColor}`}>
                  {p.tag}
                </span>
              </div>
              <div className="p-7">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-bold text-white group-hover:text-violet-300 transition-colors">
                    {p.name}
                  </h3>
                  <ArrowUpRight size={20} className="text-slate-500 group-hover:text-violet-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Workflow Section */}
      <section className="px-6 md:px-16 py-20 bg-slate-900/40 border-y border-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-black text-white mb-4">¿Cómo trabajamos?</h2>
            <p className="text-slate-400 text-sm">Proceso transparente, directo y enfocado en entregar resultados rápidamente.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800/80 relative overflow-hidden">
              <span className="text-5xl font-black text-violet-500/20 absolute top-4 right-6">01</span>
              <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400 flex items-center justify-center mb-6 font-bold">1</div>
              <h4 className="text-lg font-bold text-white mb-2">Reunión de Diagnóstico</h4>
              <p className="text-slate-400 leading-relaxed text-sm">
                Nos contás la meta de tu negocio y te asesoramos con la propuesta adecuada sin dar rodeos técnicos.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800/80 relative overflow-hidden">
              <span className="text-5xl font-black text-fuchsia-500/20 absolute top-4 right-6">02</span>
              <div className="w-10 h-10 rounded-xl bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-400 flex items-center justify-center mb-6 font-bold">2</div>
              <h4 className="text-lg font-bold text-white mb-2">Desarrollo a Medida</h4>
              <p className="text-slate-400 leading-relaxed text-sm">
                Diseñamos y programamos la plataforma optimizada para cualquier dispositivo, rápido y con estética profesional.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800/80 relative overflow-hidden">
              <span className="text-5xl font-black text-emerald-500/20 absolute top-4 right-6">03</span>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6 font-bold">3</div>
              <h4 className="text-lg font-bold text-white mb-2">Entrega y Soporte</h4>
              <p className="text-slate-400 leading-relaxed text-sm">
                Lanzamos tu sitio web funcionando al 100% y te brindamos asistencia continua ante cualquier ajuste.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team / Contact Section */}
      <section id="contacto" className="px-6 md:px-16 py-24 max-w-6xl mx-auto relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-black mb-4 text-white">
            ¿Listo para llevar tu negocio al siguiente nivel?
          </h2>
          <p className="text-slate-400 text-lg">
            Hablá directamente con nosotros. Te respondemos al instante.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {equipo.map((persona) => (
            <div
              key={persona.name}
              className="rounded-3xl border border-slate-800 bg-slate-900/90 p-8 flex flex-col justify-between hover:border-violet-500/40 transition-all duration-300 shadow-xl"
            >
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-violet-400 mb-2">
                  <Zap size={14} /> Desarrollador Directo
                </div>
                <h3 className="text-2xl font-black text-white">
                  {persona.name}
                </h3>
                <p className="text-sm font-medium text-slate-400 mt-1 mb-6">
                  {persona.rol}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {persona.skills.map((skill) => (
                    <span key={skill} className="text-xs px-3 py-1 rounded-full bg-slate-800 text-slate-300 font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <a
                href={linkWhatsApp(persona)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-6 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black rounded-2xl text-sm shadow-lg shadow-emerald-500/20 hover:scale-[1.02] transition-all duration-200"
              >
                <MessageCircle size={18} className="fill-slate-950" /> Escribir a {persona.name.split(" ")[0]}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-16 py-8 border-t border-slate-900 text-xs text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-4 bg-slate-950">
        <span className="font-semibold text-slate-400">© DevCraft Studio {new Date().getFullYear()}</span>
        <span className="flex items-center gap-2">
          <CheckCircle2 size={14} className="text-emerald-400" /> Todos los derechos reservados
        </span>
      </footer>
    </div>
  );
}