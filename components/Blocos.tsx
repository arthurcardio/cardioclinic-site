import Image from "next/image";
import Link from "next/link";
import { clinica, nomeCompleto, rotaMedico, type Medico, type Pergunta } from "@/lib/site";

export function Secao({
  children,
  fundo = "",
  id,
  className = "",
}: {
  children: React.ReactNode;
  fundo?: string;
  id?: string;
  className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-28 ${fundo}`}>
      <div className={`mx-auto max-w-6xl px-5 py-16 md:py-24 ${className}`}>{children}</div>
    </section>
  );
}

export function CartaoMedico({ medico }: { medico: Medico }) {
  return (
    <Link href={rotaMedico(medico)} className="group block">
      <div className="overflow-hidden rounded-t-[10rem] rounded-b-2xl border border-areia-forte bg-white">
        <Image
          src={medico.foto}
          alt={`${nomeCompleto(medico)}, ${medico.apresentacao}`}
          width={800}
          height={1000}
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
          className="aspect-[4/5] w-full object-cover"
        />
      </div>
      <h3 className="mt-4 text-xl text-vermelho-forte group-hover:underline group-hover:underline-offset-4">
        {nomeCompleto(medico)}
      </h3>
      <p className="mt-1 text-[0.95rem] font-medium">{medico.apresentacao}</p>
      <p className="text-sm text-marinho-claro">
        {medico.crm}, {medico.rqe}
      </p>
    </Link>
  );
}

export function Perguntas({ itens }: { itens: Pergunta[] }) {
  if (itens.length === 0) return null;
  return (
    <div className="divide-y divide-areia-forte border-y border-areia-forte">
      {itens.map((p) => (
        <details key={p.pergunta} className="group py-1">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-lg font-semibold">
            {p.pergunta}
            <span aria-hidden="true" className="text-2xl font-normal text-vermelho transition-transform group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="max-w-[65ch] pb-5 text-marinho-claro">{p.resposta}</p>
        </details>
      ))}
    </div>
  );
}

/** Dados estruturados de perguntas frequentes. */
export function SchemaFaq({ itens }: { itens: Pergunta[] }) {
  if (itens.length === 0) return null;
  const json = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: itens.map((p) => ({
      "@type": "Question",
      name: p.pergunta,
      acceptedAnswer: { "@type": "Answer", text: p.resposta },
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
}

export function Trilha({ itens }: { itens: { nome: string; href?: string }[] }) {
  const json = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ nome: "Início", href: "/" }, ...itens].map((i, n) => ({
      "@type": "ListItem",
      position: n + 1,
      name: i.nome,
      ...(i.href ? { item: clinica.url + i.href } : {}),
    })),
  };
  return (
    <nav aria-label="Você está em" className="text-sm text-marinho-claro">
      <ol className="flex flex-wrap gap-x-2">
        <li>
          <Link href="/" className="underline underline-offset-4">Início</Link>
        </li>
        {itens.map((i) => (
          <li key={i.nome} className="flex gap-x-2">
            <span aria-hidden="true">/</span>
            {i.href ? (
              <Link href={i.href} className="underline underline-offset-4">{i.nome}</Link>
            ) : (
              <span aria-current="page">{i.nome}</span>
            )}
          </li>
        ))}
      </ol>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />
    </nav>
  );
}

/** Assinatura de revisao medica exigida em paginas de saude. */
export function Revisao() {
  const d = clinica.diretorTecnico;
  return (
    <p className="mt-10 max-w-[70ch] border-l-2 border-rosa pl-4 text-sm text-marinho-claro">
      Conteúdo informativo, que não substitui a consulta médica. Revisado por {d.nome}, {d.crm}, {d.rqe}.
    </p>
  );
}

export function LinkSeta({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="font-semibold text-vermelho-forte underline underline-offset-4 hover:text-marinho">
      {children}
    </Link>
  );
}
