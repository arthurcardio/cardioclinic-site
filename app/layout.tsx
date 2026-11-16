import type { Metadata, Viewport } from "next";
import "./globals.css";
import { clinica } from "@/lib/site";
import { Cabecalho } from "@/components/Cabecalho";
import { Rodape } from "@/components/Rodape";
import { WhatsAppFlutuante } from "@/components/WhatsAppFlutuante";

export const metadata: Metadata = {
  metadataBase: new URL(clinica.url),
  title: {
    default: "Cardio Clinic | Cardiologia e exames em Presidente Prudente",
    template: "%s | Cardio Clinic",
  },
  description:
    "Consultas de cardiologia, neurologia, geriatria e pneumologia e exames do coração no mesmo endereço, em Presidente Prudente. Agende pelo WhatsApp.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: clinica.nome,
    images: [{ url: "/img/clinica/fachada.jpg", width: 1033, height: 816, alt: "Fachada da Cardio Clinic em Presidente Prudente" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#233a51",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <a href="#conteudo" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-white focus:p-3">
          Pular para o conteúdo
        </a>
        <Cabecalho />
        <main id="conteudo">{children}</main>
        <Rodape />
        <WhatsAppFlutuante />
      </body>
    </html>
  );
}
