import "./globals.css";

export const metadata = {
  title: "DevBridge Córdoba",
  description: "Desarrollo web para comercios de Córdoba",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
