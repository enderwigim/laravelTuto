import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";
import { AppProvider } from "../context/AppProvider";

// ASIGNAN A VARIABLES CSS LOS VALORES DE LAS FUENTES
/*const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
*/
// METADATOS DE LA PAGINA. Se exporta para que Next.js lo use automaticamente en <head>
export const metadata: Metadata = {
  title: "My Next.js App",
  description: "CRUD based Next.js app with laravel",
};

// DEFINICIÓN LAYOUT PRINCIPAL.
export default function RootLayout({
  // PROPIEDAD QUE REPRESENTA EL CONTENIDO DE CADA PAGINA
  children,
  /*Se asegura de que children es solo de lectura y de tipo ReactNode 
  (puede ser texto, elementos HTML o componentes de React). */
}: Readonly<{
  children: React.ReactNode;
}>) {
  // RETORNA LA ESTRUCTURA HTML children es el contenido de la pagina.
  return (
    <html lang="en">
      <body>
        <AppProvider>
          <Toaster />
          <Navbar />
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
