import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Dermatologista em Campos dos Goytacazes | Dra. Paula Artiles | Parque Santo Amaro",
  description: "Clínica Dra. Paula Artiles - Dermatologia de Alta Performance & Spa Exclusivo no Santo Amaro - Campos/RJ. Agende sua avaliação personalizada.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${jakarta.variable} ${playfair.variable} font-sans antialiased bg-[#FAF8F5] text-[#1A1A1A]`}
      >
        {children}
      </body>
    </html>
  );
}
