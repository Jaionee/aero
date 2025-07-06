import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NewChatbot from "./components/NewChatbot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Aero4 | Grabación con Drones en País Vasco, La Rioja y Santander";
const description = "Servicio profesional de filmación aérea con drones en el País Vasco, La Rioja y Santander. Realizamos vídeos para bodas, eventos, inmobiliarias e inspección de estructuras. Calidad profesional a precios accesibles.";
const url = "https://www.aero4.net";
const ogImage = "https://images.pexels.com/photos/8783857/pexels-photo-8783857.jpeg";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title,
    description,
    url: '/',
    siteName: 'Aero4',
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'Filmación aérea profesional con dron en el norte de España.',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/image/NZWOe56msmky6Wmx.png',
    shortcut: '/image/NZWOe56msmky6Wmx.png',
    apple: '/image/NZWOe56msmky6Wmx.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) { 
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <NewChatbot />
        <Footer />
      </body>
    </html>
  );
}
