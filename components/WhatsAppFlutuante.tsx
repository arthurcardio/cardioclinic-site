"use client";

import { usePathname } from "next/navigation";
import { contatoDaRota, linkWhatsApp } from "@/lib/whatsapp";
import { IconeWhatsApp } from "./WhatsApp";

/** Botao fixo no canto. A mensagem acompanha a pagina aberta. */
export function WhatsAppFlutuante() {
  const pathname = usePathname();
  const contato = contatoDaRota(pathname);
  return (
    <a
      href={linkWhatsApp(contato.mensagem, contato.whatsapp)}
      target="_blank"
      rel="noopener"
      data-whatsapp
      data-tipo={contato.tipo}
      data-item={contato.item}
      data-acao={contato.acao}
      data-origem="flutuante"
      aria-label="Agendar pelo WhatsApp"
      className="fixed right-4 bottom-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-vermelho-forte text-white shadow-lg shadow-marinho/25 transition-colors hover:bg-marinho sm:right-6 sm:bottom-6"
    >
      <IconeWhatsApp className="h-7 w-7" />
    </a>
  );
}
