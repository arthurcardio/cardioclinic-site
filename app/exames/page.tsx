import type { Metadata } from "next";
import Link from "next/link";
import { exames } from "@/lib/site";
import { Secao, Trilha } from "@/components/Blocos";

export const metadata: Metadata = {
  title: "Exames em Presidente Prudente",
  description:
    "Eletrocardiograma, ecocardiograma, Holter, MAPA, teste ergométrico, espirometria, eletroneuromiografia, bioimpedância e exame do sono feitos na Cardio Clinic, em Presidente Prudente.",
  alternates: { canonical: "/exames" },
};

export default function Pagina() {
  return (
    <>
      <section className="bg-areia">
        <div className="mx-auto max-w-6xl px-5 pt-8 pb-14 md:pb-20">
          <Trilha itens={[{ nome: "Exames" }]} />
          <h1 className="mt-8 max-w-[16ch] text-[2.6rem] sm:text-5xl">Exames feitos na clínica</h1>
          <p className="mt-5 max-w-[55ch] text-lg text-marinho-claro">
            Escolha o exame para ver como ele é feito, o preparo e como agendar.
          </p>
        </div>
      </section>
      <Secao>
        <ul className="divide-y divide-areia-forte border-y border-areia-forte">
          {exames.map((e) => (
            <li key={e.slug}>
              <Link href={e.rota} className="group grid gap-1 py-6 md:grid-cols-[1fr_1.6fr] md:gap-10">
                <span className="font-serif text-2xl group-hover:text-vermelho-forte">{e.nome}</span>
                <span className="text-marinho-claro">{e.oQueE}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Secao>
    </>
  );
}
