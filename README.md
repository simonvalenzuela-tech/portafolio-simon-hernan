# DevBridge Córdoba — Portafolio

Proyecto Next.js + Tailwind con el portafolio y 4 sitios de ejemplo
(cafetería, indumentaria, barbería, ferretería).

## 1. Instalar dependencias

Necesitás tener [Node.js](https://nodejs.org) instalado (versión 18 o superior).

```bash
npm install
```

## 2. Correrlo en tu computadora

```bash
npm run dev
```

Abrí http://localhost:3000 — ahí vas a ver el portafolio. Cada tarjeta de
proyecto lleva a su sitio en /proyectos/cafe, /proyectos/indumentaria, etc.

## 3. Antes de publicarlo, cambiá:

- El número de WhatsApp en `app/page.tsx` (buscá `wa.me/5493511234567`
  y poné el número real, con código de país sin el +).
- Nombres, textos y precios de cada proyecto de ejemplo si quieren
  personalizarlos más.

## 4. Publicarlo online (gratis, con Vercel)

1. Creá una cuenta en https://vercel.com (podés entrar con GitHub).
2. Subí esta carpeta a un repositorio de GitHub.
3. En Vercel, hacé clic en "Add New Project", elegí el repositorio,
   dejá la configuración por defecto y hacé clic en "Deploy".
4. En unos minutos te da una URL como `devbridge-cordoba.vercel.app`.

Esa URL es la que van a poner detrás del QR de la tarjeta.

## Estructura del proyecto

```
app/
  page.tsx              → portafolio principal
  layout.tsx            → estructura general del sitio
  globals.css           → estilos base de Tailwind
  proyectos/
    cafe/page.tsx        → ejemplo: cafetería
    indumentaria/page.tsx → ejemplo: catálogo de ropa
    barberia/page.tsx     → ejemplo: reserva de turnos
    ferreteria/page.tsx   → ejemplo: panel de stock
```

Para agregar un proyecto nuevo más adelante: crear una carpeta dentro de
`app/proyectos/nombre-del-proyecto` con un archivo `page.tsx`, y agregar
la tarjeta correspondiente en `app/page.tsx`.
