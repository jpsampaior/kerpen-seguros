import { Header } from "@/components/header/header";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kerpen Seguros - Soluções Personalizadas em Seguros",
  description:
    "Kerpen Seguros oferece soluções especializadas em seguros de vida, saúde, transporte, patrimoniais e empresariais. Atendimento personalizado e acompanhamento integral para proteger o que é importante para você.",
  keywords: [
    "seguros personalizados",
    "seguros empresariais",
    "seguros de transporte",
    "seguros de vida",
    "seguro saúde",
    "gestão de risco",
    "Kerpen Seguros",
  ],
  openGraph: {
    title: "Kerpen Seguros",
    description:
      "Soluções em seguros com atendimento personalizado e foco no acompanhamento integral de sinistros. Especialistas em seguros para transporte, vida, saúde e empresas.",
    url: "https://kerpenseguros.com.br",
    type: "website",
    images: [
      {
        url: "https://kerpenseguros.com.br/logo-kerpen.png",
        width: 1200,
        height: 630,
        alt: "Kerpen Seguros - Proteção para você e seu negócio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kerpen Seguros",
    description:
      "Descubra a melhor solução em seguros para proteger seu patrimônio e negócio com a Kerpen Seguros.",
    images: ["https://kerpenseguros.com.br/logo-kerpen.png"],
  },
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
