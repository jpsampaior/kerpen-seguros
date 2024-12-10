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
      <body className="antialiased bg-background-default text-stone-300">
        <Header />
        {children}
      </body>
    </html>
  );
}
