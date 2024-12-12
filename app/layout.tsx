import { Header } from "@/components/header/header";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = { 
  title: "Kerpen Seguros",
};

const montserrat = Montserrat({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={montserrat.className}>
      <body className="antialiased bg-fixed bg-gradient bg-cover text-stone-300 overflow-x-hidden">
        <Header />
        {children}
      </body>
    </html>
  );
}
