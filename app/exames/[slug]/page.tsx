import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { clinica, exameEmFrase, exames, medicoPorSlug, nomeCompleto, rotaMedico } from "@/lib/site";
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
  const foto = exame.fotos[0];
  return {
    title: exame.tituloSeo ?? exame.titulo,
    description:
      exame.descricaoSeo ?? `${exame.oQueE} Veja como é feito e agende pelo WhatsApp na Cardio Clinic.`,
    alternates: { canonical: exame.rota },
    // O openGraph da pagina substitui o do layout inteiro, entao repetimos os campos fixos.
    openGraph: {
      type: "website",
      locale: "pt_BR",
      siteName: clinica.nome,
      images: foto ? [{ url: foto.src, width: foto.largura, height: foto.altura, alt: foto.alt }] : undefined,
    },
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
            Agendar {exameEmFrase(exame)}
          </BotaoWhatsApp>
        </div>
      </section>

      <Secao>
        <div className="grid gap-12 md:grid-cols-[1.25fr_1fr] md:gap-16">
          <div>
            <h2 className="text-3xl">Por que o médico pede este exame</h2>
            <div className="mt-5 max-w-[62ch] space-y-4 text-lg">
              {exame.porQue.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <h2 className="mt-14 text-3xl">Como é feito</h2>
            <div className="mt-5 max-w-[62ch] space-y-4 text-lg">
              {exame.comoEFeito.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            {exame.preparo.length > 0 && (
              <>
                <h2 className="mt-14 text-3xl">Preparo</h2>
                <ul className="mt-5 divide-y divide-areia-forte border-y border-areia-forte">
                  {exame.preparo.map((p) => (
                    <li key={p} className="py-3 text-lg">{p}</li>
                  ))}
                </ul>
              </>
            )}
            <Revisao />
          </div>

          <aside className="space-y-8 md:sticky md:top-28 md:self-start">
            {exame.fotos.map((f, n) => (
              <figure key={f.src}>
                <Image
                  src={f.src}
                  alt={f.alt}
                  width={f.largura}
                  height={f.altura}
                  priority={n === 0}
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="w-full rounded-2xl"
                />
                <figcaption className="mt-2 text-sm text-marinho-claro">
                  {f.legenda ?? (f.ilustrativa ? "Imagem ilustrativa." : "Foto da Cardio Clinic.")}
                </figcaption>
              </figure>
            ))}
            <div className="rounded-2xl bg-salvia p-6">
              <h2 className="font-sans text-base font-semibold">Quando costuma ser pedido</h2>
              <ul className="mt-3 space-y-2">
                {exame.indicacoes.map((i) => (
                  <li key={i} className="border-l-2 border-salvia-forte pl-3">{i}</li>
                ))}
              </ul>
            </div>
            {medico && (
              <p className="rounded-2xl border border-areia-forte p-6">
                Na Cardio Clinic, este exame é realizado por{" "}
                <Link href={rotaMedico(medico)} className="font-semibold underline underline-offset-4">
                  {nomeCompleto(medico)}
                </Link>{" "}
                ({medico.crm}, {medico.rqe}).
              </p>
            )}
            <BotaoWhatsApp contato={contatoExame(exame)} className="w-full">
              Agendar pelo WhatsApp
            </BotaoWhatsApp>
          </aside>
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
