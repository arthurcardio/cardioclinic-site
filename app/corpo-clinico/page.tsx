import type { Metadata } from "next";
import { medicos } from "@/lib/site";
import { CartaoMedico, Secao, Trilha } from "@/components/Blocos";

export const metadata: Metadata = {
  title: "Corpo clínico",
  description:
    "Conheça os médicos da Cardio Clinic, em Presidente Prudente, com CRM, RQE e formação de cada um.",
  alternates: { canonical: "/corpo-clinico" },
};

export default function Pagina() {
  return (
    <>
      <section className="bg-areia">
        <div className="mx-auto max-w-6xl px-5 pt-8 pb-14 md:pb-20">
          <Trilha itens={[{ nome: "Corpo clínico" }]} />
          <h1 className="mt-8 text-[2.6rem] sm:text-5xl">Corpo clínico</h1>
          <p className="mt-5 max-w-[55ch] text-lg text-marinho-claro">
            Toque em um nome para ver a formação e agendar.
          </p>
        </div>
      </section>
      <Secao>
        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {medicos.map((m) => (
            <CartaoMedico key={m.slug} medico={m} />
          ))}
        </div>
      </Secao>
    </>
  );
}
