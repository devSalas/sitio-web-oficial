import type { Metadata } from "next";

import "./globals.css";
import { inter } from "./fonts";


export const metadata: Metadata = {
  title: "Sunetya - Diseño Web y Aplicaciones para el Perú | Creación de Sitios Web y Apps",
  description: "Sunetya es una empresa especializada en diseño y desarrollo web en Perú.  Ofrecemos servicios de creación de sitios web y aplicaciones utilizando una variedad de lenguajes de programación. Ya sea que necesites un sitio en Wordpress, HTML/CSS, JavaScript u otros, estamos aquí para ayudarte a llevar tu visión a la realidad. ¡Impulsa tu presencia en línea con nosotros!",
  keywords: "diseño web, ecommerce, aplicaciones web, página web.",
  authors: [{ name:'Sunetya',url: 'https://sunetya.site/home'}],
  publisher:"Sunetya"

};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="logo.svg" type="image/svg" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
