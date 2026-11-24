import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { especialidades, exames, medicosDaEspecialidade } from "@/lib/site";
import { contatoEspecialidade } from "@/lib/whatsapp";
import { BotaoWhatsApp } from "@/components/WhatsApp";
import { CartaoMedico, Revisao, Secao, Trilha } from "@/components/Blocos";

type Props = { params: Promise<{ especialidade: string }> };

const achar = (segmento: string) => especialidades.find((e) => e.rota === `/${segmento}`);

export function generateStaticParams() {
  return especialidades.map((e) => ({ especialidade: e.rota.slice(1) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const esp = achar((await params).especialidade);
  if (!esp) return {};
  return {
    title: esp.titulo,
    description: esp.descricaoSeo ?? `${esp.chamada} Agende pelo WhatsApp na Cardio Clinic.`,
    alternates: { canonical: esp.rota },
  };
}

export default async function Pagina({ params }: Props) {
  const esp = achar((await params).especialidade);
  if (!esp) notFound();
  const equipe = medicosDaEspecialidade(esp.slug);
  const examesDaArea = exames.filter((e) => esp.exames.includes(e.slug));

  return (
    <>
      <section className="bg-areia">
        <div className="mx-auto max-w-6xl px-5 pt-8 pb-14 md:pb-20">
          <Trilha itens={[{ nome: esp.nome }]} />
          <h1 className="mt-8 max-w-[16ch] text-[2.6rem] sm:text-5xl">{esp.titulo}</h1>
          <p className="mt-5 max-w-[55ch] text-lg text-marinho-claro">{esp.chamada}</p>
          <BotaoWhatsApp contato={contatoEspecialidade(esp)} className="mt-8">
            Agendar consulta de {esp.nome.toLowerCase()}
          </BotaoWhatsApp>
        </div>
      </section>

      <Secao>
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="text-3xl">Motivos comuns de consulta</h2>
            <ul className="mt-6 divide-y divide-areia-forte border-y border-areia-forte">
              {esp.motivos.map((m) => (
                <li key={m} className="py-3 text-lg">{m}</li>
              ))}
            </ul>
          </div>
          {examesDaArea.length > 0 && (
            <div>
              <h2 className="text-3xl">Exames feitos na clínica</h2>
              <p className="mt-4 max-w-[50ch] text-marinho-claro">
                Se o médico pedir um destes exames, você faz no mesmo endereço.
              </p>
              <ul className="mt-6 divide-y divide-areia-forte border-y border-areia-forte">
                {examesDaArea.map((e) => (
                  <li key={e.slug}>
                    <Link href={e.rota} className="flex items-baseline justify-between gap-4 py-3 text-lg font-medium hover:text-vermelho-forte">
                      {e.nomeCurto}
                      <span className="text-sm font-normal text-marinho-claro">Como é feito</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <Revisao />
      </Secao>

      <Secao fundo="bg-salvia">
        <h2 className="text-3xl">Quem atende</h2>
        <div className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {equipe.map((m) => (
            <CartaoMedico key={m.slug} medico={m} />
          ))}
        </div>
      </Secao>
    </>
  );
}
