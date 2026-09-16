import Image from "next/image";
import Link from "next/link";
import { Search, Package, AlertTriangle, ArrowLeft, TrendingUp, Boxes } from "lucide-react";

export default function FerreteriaBelgrano() {
  const stock = [
    { name: "Tornillo autoperforante 8x1\"", sku: "TA-081", qty: 340, low: false },
    { name: "Pintura látex interior 10L", sku: "PL-10L", qty: 6, low: true },
    { name: "Cable unipolar 2.5mm (x rollo)", sku: "CU-25", qty: 22, low: false },
    { name: "Candado 40mm", sku: "CD-40", qty: 4, low: true },
    { name: "Cinta aisladora", sku: "CA-19", qty: 88, low: false },
    { name: "Llave inglesa 10\"", sku: "LI-10", qty: 15, low: false },
  ];
  const categorias = [
    { name: "Herramientas", seed: "ferreteria-herramientas", img: "https://i.pinimg.com/736x/a8/03/6d/a8036d7a7f1473067489c997c496dbc7.jpg"},
    { name: "Pinturas", seed: "ferreteria-pinturas", img: "https://i.pinimg.com/736x/22/3e/87/223e879873a8904b38dc0a05349e352e.jpg" },
    { name: "Electricidad", seed: "ferreteria-electricidad", img: "https://i.pinimg.com/736x/1f/ba/a7/1fbaa77dba7d4f81dc3ad88db8287819.jpg" },
  ];

  return (
    <div className="min-h-screen bg-[#f2f1ed] text-[#23262b] font-sans">
      <div className="px-6 md:px-16 pt-4 bg-[#23262b]">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-[#f2f1ed]/60 hover:text-[#f2f1ed]">
          <ArrowLeft size={15} /> Volver al portafolio
        </Link>
      </div>

      <header className="flex items-center justify-between px-6 md:px-16 py-6 bg-[#23262b] text-[#f2f1ed]">
        <div className="flex items-center gap-2">
          <Package size={18} className="text-[#e0a11c]" />
          <span className="font-medium">The Home Depot — Panel</span>
        </div>
        <span className="text-sm text-[#f2f1ed]/60">Gestión de catálogo y stock</span>
      </header>

      <div className="relative w-full aspect-[21/9] overflow-hidden">
        <Image
          src="https://wallpapers.com/images/hd/home-depot-blue-sky-w7ecw0brgdbmprgx.jpg"
          alt="The Home Depot"
          fill
          className="object-cover"
          priority
        />
      </div>

      <section className="px-6 md:px-16 py-8">
        {/* KPIs rápidos */}
        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          <div className="bg-white border border-[#dcdad2] rounded-lg p-5 flex items-center gap-3">
            <Boxes size={20} className="text-[#e0a11c]" />
            <div>
              <p className="text-xl font-medium">6</p>
              <p className="text-xs text-[#8a8f96]">Productos activos</p>
            </div>
          </div>
          <div className="bg-white border border-[#dcdad2] rounded-lg p-5 flex items-center gap-3">
            <AlertTriangle size={20} className="text-[#b5551f]" />
            <div>
              <p className="text-xl font-medium">2</p>
              <p className="text-xs text-[#8a8f96]">Con stock bajo</p>
            </div>
          </div>
          <div className="bg-white border border-[#dcdad2] rounded-lg p-5 flex items-center gap-3">
            <TrendingUp size={20} className="text-[#3f7a52]" />
            <div>
              <p className="text-xl font-medium">+12%</p>
              <p className="text-xs text-[#8a8f96]">Ventas vs. mes pasado</p>
            </div>
          </div>
        </div>

        {/* Categorías */}
        <h2 className="text-sm uppercase tracking-wide text-[#8a8f96] mb-4">Categorías</h2>
        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {categorias.map((c) => (
            <div key={c.name} className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
               src={c.img || `https://picsum.photos/seed/${c.seed}/450/600`}
               alt={c.name}
               fill
               sizes="(max-width: 1200px) 100vw, 1200px"
               className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <span className="absolute bottom-3 left-4 text-white font-medium">{c.name}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-medium">Inventario</h1>
            <p className="text-sm text-[#5c6066] mt-1">6 productos · 2 con stock bajo</p>
          </div>
          <div className="flex items-center gap-2 bg-white border border-[#dcdad2] rounded-md px-4 py-2 w-full md:w-80">
            <Search size={16} className="text-[#8a8f96]" />
            <input
              placeholder="Buscar producto o SKU..."
              className="bg-transparent outline-none text-sm w-full"
            />
          </div>
        </div>

        <div className="bg-white rounded-lg border border-[#dcdad2] overflow-hidden">
          <div className="grid grid-cols-[2fr_1fr_1fr_1fr] px-6 py-3 text-xs uppercase tracking-wide text-[#8a8f96] border-b border-[#dcdad2]">
            <span>Producto</span>
            <span>SKU</span>
            <span>Stock</span>
            <span>Estado</span>
          </div>
          {stock.map((item) => (
            <div
              key={item.sku}
              className="grid grid-cols-[2fr_1fr_1fr_1fr] items-center px-6 py-4 border-b border-[#eeece6] last:border-0 text-sm"
            >
              <span>{item.name}</span>
              <span className="text-[#5c6066]">{item.sku}</span>
              <span>{item.qty} u.</span>
              {item.low ? (
                <span className="flex items-center gap-1 text-[#b5551f] w-fit px-2 py-1 rounded-full bg-[#f5e1d3] text-xs">
                  <AlertTriangle size={12} /> Stock bajo
                </span>
              ) : (
                <span className="text-xs text-[#3f7a52] bg-[#e1efe4] px-2 py-1 rounded-full w-fit">
                  Disponible
                </span>
              )}
            </div>
          ))}
        </div>

        <p className="mt-6 text-sm text-[#5c6066] max-w-[60ch]">
          Este panel avisa automáticamente cuándo un producto está por
          agotarse, para que el pedido al proveedor se haga a tiempo y nunca
          falte mercadería en el mostrador.
        </p>
      </section>

      <footer className="px-6 md:px-16 py-6 border-t border-[#dcdad2] text-sm text-[#8a8f96] flex justify-between">
        <span>The Home Depot</span>
        <span>Sitio de ejemplo — DevCraft Studio</span>
      </footer>
    </div>
  );
}
