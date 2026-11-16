import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { clinica, enderecoLinha, especialidades, exameEmFrase, exames } from "@/lib/site";
import { contatoGeral } from "@/lib/whatsapp";
import { BotaoWhatsApp } from "@/components/WhatsApp";
import { LinkSeta, Secao, Trilha } from "@/components/Blocos";

export const metadata: Metadata = {
  title: "A clínica",
  description:
    "Conheça a Cardio Clinic & Multiespecialidades, em Presidente Prudente: consultas e exames no mesmo endereço, no Jardim Paulistano.",
  alternates: { canonical: "/sobre" },
};

export default function Pagina() {
  const d = clinica.diretorTecnico;
  return (
    <>
      <section className="bg-areia">
        <div className="mx-auto max-w-6xl px-5 pt-8 pb-14 md:pb-20">
          <Trilha itens={[{ nome: "A clínica" }]} />
          <div className="mt-8 grid items-center gap-10 md:grid-cols-[1fr_1.1fr] md:gap-14">
            <div>
              <h1 className="text-[2.6rem] sm:text-5xl">Consulta e exame no mesmo lugar</h1>
              <p className="mt-5 max-w-[52ch] text-lg text-marinho-claro">
                A Cardio Clinic &amp; Multiespecialidades fica no Jardim Paulistano, em Presidente
                Prudente, e reúne quatro especialidades e nove exames em um só endereço.
              </p>
              <BotaoWhatsApp contato={contatoGeral} className="mt-8">
                Agendar pelo WhatsApp
              </BotaoWhatsApp>
            </div>
            <Image
              src="/img/clinica/fachada.jpg"
              alt="Fachada da Cardio Clinic, com o letreiro e o coração da marca na entrada"
              width={1033}
              height={816}
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className="w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>

      <Secao>
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr] md:gap-16">
          <div className="max-w-[62ch] space-y-4 text-lg">
            <h2 className="text-3xl">Por que a clínica existe</h2>
            <p>
              Quem cuida do coração costuma consultar em um lugar, fazer o exame em outro e esperar
              dias para juntar tudo. A Cardio Clinic nasceu para encurtar esse caminho: o paciente
              consulta, faz o exame e volta com o resultado para o mesmo médico.
            </p>
            <p>
              As especialidades foram escolhidas porque andam juntas no consultório. Quem tem
              pressão alta muitas vezes tem também queixa de memória, de falta de ar ou de dor de
              cabeça, e a pessoa idosa costuma precisar de mais de um olhar.
            </p>
            <p>{clinica.atendimento} O agendamento é feito pelo WhatsApp.</p>
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="font-sans text-base font-semibold text-vermelho-forte">Especialidades</h2>
              <ul className="mt-3 divide-y divide-areia-forte border-y border-areia-forte">
                {especialidades.map((e) => (
                  <li key={e.slug}>
                    <Link href={e.rota} className="block py-3 text-lg font-medium hover:text-vermelho-forte">
                      {e.nome}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-sans text-base font-semibold text-vermelho-forte">Exames</h2>
              <p className="mt-3">
                {exames.map((e, n) => (n === 0 ? e.nomeCurto : exameEmFrase(e))).join(", ")}.
              </p>
              <p className="mt-3">
                <LinkSeta href="/exames">Ver como cada exame é feito</LinkSeta>
              </p>
            </div>
          </div>
        </div>
      </Secao>

      <Secao fundo="bg-salvia">
        <h2 className="text-3xl">O espaço</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Image
            src="/img/clinica/recepcao.jpg"
            alt="Recepção da Cardio Clinic, com o nome da clínica na parede"
            width={2000}
            height={1126}
            sizes="(min-width: 768px) 33vw, 100vw"
            className="aspect-[4/5] w-full rounded-2xl object-cover object-[22%_50%]"
          />
          <Image
            src="/img/clinica/sala-espera.jpg"
            alt="Sala de espera da Cardio Clinic, com sofá e poltronas"
            width={1200}
            height={1600}
            sizes="(min-width: 768px) 33vw, 100vw"
            className="aspect-[4/5] w-full rounded-2xl object-cover"
          />
          <Image
            src="/img/clinica/consultorio.jpg"
            alt="Consultório da Cardio Clinic, com mesa de atendimento e maca"
            width={1104}
            height={1312}
            sizes="(min-width: 768px) 33vw, 100vw"
            className="aspect-[4/5] w-full rounded-2xl object-cover"
          />
        </div>
      </Secao>

      <Secao>
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="text-3xl">Quem responde pela clínica</h2>
            <p className="mt-5 max-w-[52ch] text-lg">
              O diretor técnico é o {d.nome}, cardiologista ({d.crm}, {d.rqe}).
            </p>
            <p className="mt-4">
              <LinkSeta href="/corpo-clinico">Conhecer o corpo clínico</LinkSeta>
            </p>
          </div>
          <div>
            <h2 className="text-3xl">Dados da clínica</h2>
            <address className="mt-5 space-y-1 text-lg not-italic">
              <p>{clinica.razaoSocial}</p>
              <p>CNPJ {clinica.cnpj}</p>
              <p>{enderecoLinha}</p>
              <p>CEP {clinica.endereco.cep}</p>
              <p>{clinica.horario}</p>
            </address>
          </div>
        </div>
      </Secao>
    </>
  );
}
