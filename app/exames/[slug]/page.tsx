import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { exames, medicoPorSlug, nomeCompleto, rotaMedico } from "@/lib/site";
import { contatoExame } from "@/lib/whatsapp";
import { BotaoWhatsApp } from "@/components/WhatsApp";
import { Perguntas, Revisao, SchemaFaq, Secao, Trilha } from "@/components/Blocos";

type Props = { params: Promise<{ slug: string }> };

const achar = (segmento: string) => exames.find((e) => e.rota === `/exames/${segmento}`);

export function generateStaticParams() {
  return exames.map((e) => ({ slug: e.rota.replace("/exames/", "") }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const exame = achar((await params).slug);
  if (!exame) return {};
  return {
    title: exame.titulo,
    description: `${exame.oQueE} Veja como é feito e agende pelo WhatsApp na Cardio Clinic.`,
    alternates: { canonical: exame.rota },
  };
}

export default async function Pagina({ params }: Props) {
  const exame = achar((await params).slug);
  if (!exame) notFound();
  const medico = exame.realizadoPor ? medicoPorSlug(exame.realizadoPor) : undefined;

  return (
    <>
      <SchemaFaq itens={exame.faq} />
      <section className="bg-areia">
        <div className="mx-auto max-w-6xl px-5 pt-8 pb-14 md:pb-20">
          <Trilha itens={[{ nome: "Exames", href: "/exames" }, { nome: exame.nomeCurto }]} />
          <h1 className="mt-8 max-w-[16ch] text-[2.6rem] sm:text-5xl">{exame.titulo}</h1>
          <p className="mt-5 max-w-[55ch] text-lg text-marinho-claro">{exame.oQueE}</p>
          <BotaoWhatsApp contato={contatoExame(exame)} className="mt-8">
            Agendar {exame.nomeCurto.toLowerCase().replace("mapa", "MAPA").replace("holter", "Holter")}
          </BotaoWhatsApp>
        </div>
      </section>

      <Secao>
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr] md:gap-16">
          <div>
            <h2 className="text-3xl">Como é feito</h2>
            <p className="mt-4 max-w-[58ch] text-lg">{exame.comoEFeito}</p>

            {exame.preparo.length > 0 && (
              <>
                <h2 className="mt-12 text-3xl">Preparo</h2>
                <ul className="mt-5 divide-y divide-areia-forte border-y border-areia-forte">
                  {exame.preparo.map((p) => (
                    <li key={p} className="py-3 text-lg">{p}</li>
                  ))}
                </ul>
              </>
            )}

            {medico && (
              <p className="mt-10 max-w-[58ch] rounded-2xl bg-salvia p-6">
                Na Cardio Clinic, este exame é realizado por{" "}
                <Link href={rotaMedico(medico)} className="font-semibold underline underline-offset-4">
                  {nomeCompleto(medico)}
                </Link>{" "}
                ({medico.crm}, {medico.rqe}).
              </p>
            )}
            <Revisao />
          </div>
          {exame.foto && (
            <Image
              src={exame.foto}
              alt={`Sala onde é feito o ${exame.nomeCurto.toLowerCase()} na Cardio Clinic`}
              width={1080}
              height={960}
              sizes="(min-width: 768px) 40vw, 100vw"
              className="w-full self-start rounded-2xl object-cover"
            />
          )}
        </div>
      </Secao>

      {exame.faq.length > 0 && (
        <Secao fundo="bg-areia">
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
            <h2 className="text-3xl">Dúvidas sobre o exame</h2>
            <Perguntas itens={exame.faq} />
          </div>
        </Secao>
      )}
    </>
  );
}
