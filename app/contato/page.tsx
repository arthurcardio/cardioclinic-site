import type { Metadata } from "next";
import Image from "next/image";
import { clinica, enderecoLinha } from "@/lib/site";
import { contatoDuvida, contatoGeral } from "@/lib/whatsapp";
import { BotaoWhatsApp } from "@/components/WhatsApp";
import { Trilha } from "@/components/Blocos";

export const metadata: Metadata = {
  title: "Contato e como chegar",
  description: `Cardio Clinic: ${enderecoLinha}. Agendamento pelo WhatsApp ${clinica.telefoneExibicao}.`,
  alternates: { canonical: "/contato" },
};

export default function Pagina() {
  return (
    <section className="bg-areia">
      <div className="mx-auto max-w-6xl px-5 pt-8 pb-16 md:pb-24">
        <Trilha itens={[{ nome: "Contato" }]} />
        <div className="mt-8 grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <h1 className="text-[2.6rem] sm:text-5xl">Contato e como chegar</h1>
            <address className="mt-8 space-y-1 text-lg not-italic">
              <p>{enderecoLinha}</p>
              <p>CEP {clinica.endereco.cep}</p>
              <p>{clinica.horario}</p>
              <p>
                <a href={`tel:${clinica.telefoneE164}`} data-telefone className="underline underline-offset-4">
                  {clinica.telefoneExibicao}
                </a>
              </p>
            </address>
            <p className="mt-6 max-w-[48ch] text-marinho-claro">{clinica.atendimento}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <BotaoWhatsApp contato={contatoGeral}>Agendar pelo WhatsApp</BotaoWhatsApp>
              <BotaoWhatsApp contato={contatoDuvida} variante="contorno">Tirar uma dúvida</BotaoWhatsApp>
            </div>
            <p className="mt-6">
              <a href={clinica.mapa} target="_blank" rel="noopener" data-rota className="font-semibold text-vermelho-forte underline underline-offset-4">
                Abrir o endereço no mapa
              </a>
            </p>
          </div>
          <Image
            src="/img/clinica/fachada.jpg"
            alt="Fachada da Cardio Clinic, com o letreiro e o coração da marca na entrada"
            width={1033}
            height={816}
            priority
            sizes="(min-width: 768px) 48vw, 100vw"
            className="w-full rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
