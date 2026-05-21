import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/layout/Navbar";

import { Playfair_Display, Inter } from "next/font/google";
import Footer from "./components/layout/Footer";
import FixedContactIcons from "./components/FixedContactIcons";


const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fatin Tax | Premium Fabrics",
  description: "Luxury fabric brand for designers and creators",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-inter bg-[#0b0f19] text-white">

        <Navbar />
<FixedContactIcons/>
        {children}
<Footer/>
      </body>
    </html>
  );
}