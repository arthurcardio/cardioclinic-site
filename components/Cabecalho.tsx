import Image from "next/image";
import Link from "next/link";
import { clinica } from "@/lib/site";
import { contatoGeral } from "@/lib/whatsapp";
import { BotaoWhatsApp } from "./WhatsApp";

const menu = [
  { href: "/#especialidades", rotulo: "Especialidades" },
  { href: "/exames", rotulo: "Exames" },
  { href: "/corpo-clinico", rotulo: "Corpo clínico" },
  { href: "/contato", rotulo: "Contato" },
];

export function Marca({ clara = false }: { clara?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label={`${clinica.nome}: página inicial`}>
      <Image src="/img/logo-coracao.png" alt="" width={161} height={229} className="h-12 w-auto" priority />
      <span className={`leading-none whitespace-nowrap ${clara ? "text-white" : "text-marinho"}`}>
        <span className="block text-lg font-medium tracking-[0.04em]">CARDIO CLINIC</span>
        <span className="mt-1 block text-[0.68rem] font-medium tracking-[0.14em]">&amp; Multiespecialidades</span>
      </span>
    </Link>
  );
}

export function Cabecalho() {
  return (
    <header className="sticky top-0 z-30 border-b border-areia-forte/50 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Marca />
        <nav aria-label="Principal" className="hidden items-center gap-7 text-[0.95rem] font-medium lg:flex">
          {menu.map((m) => (
            <Link key={m.href} href={m.href} className="hover:text-vermelho-forte">
              {m.rotulo}
            </Link>
          ))}
        </nav>
        <div className="hidden sm:block">
          <BotaoWhatsApp contato={contatoGeral}>Agendar</BotaoWhatsApp>
        </div>
      </div>
      <nav aria-label="Atalhos" className="flex gap-5 overflow-x-auto border-t border-areia px-5 py-2.5 text-sm font-medium whitespace-nowrap lg:hidden">
        {menu.map((m) => (
          <Link key={m.href} href={m.href}>
            {m.rotulo}
          </Link>
        ))}
      </nav>
    </header>
  );
}
