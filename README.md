# DevCraft Studio — Portafolio

Proyecto Next.js + Tailwind con el portafolio de DevCraft Studio y 6 sitios de
ejemplo (cafetería, indumentaria, barbería, ferretería, gimnasio y restaurante).

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

- Los números de WhatsApp del equipo en `app/page.tsx` (array `equipo`, campo
  `whatsapp`): código de país y número, sin el `+`.
  Al tocar "Escribir a ...", se abre el chat con un mensaje ya escrito
  (función `linkWhatsApp`, en el mismo archivo).
- Los botones de los sitios de ejemplo (`app/proyectos/*`) son solo de
  demostración: no envían mensajes a ningún número.
- Nombres, textos y precios de cada proyecto de ejemplo si quieren
  personalizarlos más.

## 4. Publicarlo online (gratis, con Vercel)

1. Creá una cuenta en https://vercel.com (podés entrar con GitHub).
2. Subí esta carpeta a un repositorio de GitHub.
3. En Vercel, hacé clic en "Add New Project", elegí el repositorio,
   dejá la configuración por defecto y hacé clic en "Deploy".
4. En unos minutos te da una URL como `devcraft-studio.vercel.app`.

Esa URL es la que van a poner detrás del QR de la tarjeta.

## Estructura del proyecto

```
app/
  page.tsx              → portafolio principal
  layout.tsx            → estructura general del sitio
  globals.css           → estilos base de Tailwind
  proyectos/
    cafe/page.tsx          → ejemplo: cafetería
    indumentaria/page.tsx  → ejemplo: catálogo de ropa
    barberia/page.tsx      → ejemplo: reserva de turnos
    ferreteria/page.tsx    → ejemplo: panel de stock
    gimnasio/page.tsx      → ejemplo: planes y clases
    restaurante/page.tsx   → ejemplo: carta de comida
```

Para agregar un proyecto nuevo más adelante: crear una carpeta dentro de
`app/proyectos/nombre-del-proyecto` con un archivo `page.tsx`, y agregar
la tarjeta correspondiente (con `slug`, `tone` y `badgeColor`) en el array
`proyectos` de `app/page.tsx`.
