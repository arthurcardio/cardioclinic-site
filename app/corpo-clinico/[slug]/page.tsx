import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { clinica, exameEmFrase, examePorSlug, medicoPorSlug, medicos, nomeCompleto, rotaMedico } from "@/lib/site";
import { contatoConsultaMedico, contatoExameMedico } from "@/lib/whatsapp";
import { BotaoWhatsApp } from "@/components/WhatsApp";
import { Secao, Trilha } from "@/components/Blocos";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return medicos.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const m = medicoPorSlug((await params).slug);
  if (!m) return {};
  const titulo = m.tituloSeo ?? `${nomeCompleto(m)}, ${m.apresentacao}`;
  return {
    title: m.tituloSeoSemMarca ? { absolute: titulo } : titulo,
    description:
      m.descricaoSeo ??
      `${nomeCompleto(m)} (${m.crm}, ${m.rqe}) atende na Cardio Clinic, em Presidente Prudente. ${m.resumo}`,
    alternates: { canonical: rotaMedico(m) },
  };
}

export default async function Pagina({ params }: Props) {
  const m = medicoPorSlug((await params).slug);
  if (!m) notFound();
  const examesDoMedico = m.exames.map(examePorSlug).filter((e) => e !== undefined);

  const json = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: nomeCompleto(m),
    image: clinica.url + m.foto,
    url: clinica.url + rotaMedico(m),
    worksFor: { "@type": "MedicalClinic", name: clinica.nome, url: clinica.url },
    identifier: `${m.crm}, ${m.rqe}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />
      <section className="bg-areia">
        <div className="mx-auto max-w-6xl px-5 pt-8 pb-14 md:pb-20">
          <Trilha itens={[{ nome: "Corpo clínico", href: "/corpo-clinico" }, { nome: nomeCompleto(m) }]} />
          <div className="mt-8 grid items-center gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
            <div className="max-w-sm overflow-hidden rounded-t-[12rem] rounded-b-2xl bg-white">
              <Image
                src={m.foto}
                alt={`${nomeCompleto(m)}, ${m.apresentacao}`}
                width={800}
                height={1000}
                priority
                sizes="(min-width: 768px) 30vw, 90vw"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-[2.4rem] text-vermelho-forte sm:text-5xl">{nomeCompleto(m)}</h1>
              <p className="mt-4 text-xl font-medium">{m.apresentacao}</p>
              <p className="mt-1 text-marinho-claro">
                {m.crm}, {m.rqe}
              </p>
              <p className="mt-6 max-w-[52ch] text-lg">{m.resumo}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <BotaoWhatsApp contato={contatoConsultaMedico(m)}>Agendar consulta</BotaoWhatsApp>
                {examesDoMedico.map((e) => (
                  <BotaoWhatsApp key={e.slug} contato={contatoExameMedico(m, e)} variante="contorno">
                    Agendar {exameEmFrase(e)}
                  </BotaoWhatsApp>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Secao>
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <h2 className="text-3xl">Formação</h2>
          <ul className="divide-y divide-areia-forte border-y border-areia-forte">
            {m.formacao.map((f) => (
              <li key={f} className="py-3.5 text-lg">{f}</li>
            ))}
          </ul>
        </div>
      </Secao>
    </>
  );
}
