import type { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "DevCraft Studio",
  description: "Software a medida, sitios web y soluciones digitales para comercios y empresas de Córdoba",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
