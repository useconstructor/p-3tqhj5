import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Café Tostado | Specialty Coffee Roasted Daily",
  description: "Discover single origin beans and handcrafted espresso drinks from our Medellín roastery. Reserve your table for the ultimate coffee experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
}
