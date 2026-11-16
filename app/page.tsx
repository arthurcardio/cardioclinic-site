import Image from "next/image";
import Link from "next/link";
import { clinica, enderecoLinha, especialidades, exames, faqGeral, medicos } from "@/lib/site";
import { contatoGeral } from "@/lib/whatsapp";
import { BotaoWhatsApp } from "@/components/WhatsApp";
import { CartaoMedico, LinkSeta, Perguntas, SchemaFaq, Secao } from "@/components/Blocos";

export const metadata = {
  alternates: { canonical: "/" },
};

function SchemaClinica() {
  const json = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: clinica.nome,
    url: clinica.url,
    telephone: clinica.telefoneE164,
    email: clinica.email,
    image: clinica.url + "/img/clinica/fachada.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: clinica.endereco.rua,
      addressLocality: clinica.endereco.cidade,
      addressRegion: clinica.endereco.uf,
      postalCode: clinica.endereco.cep,
      addressCountry: "BR",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    sameAs: [clinica.instagram],
    medicalSpecialty: ["Cardiovascular", "Neurologic", "Geriatric", "Pulmonary"],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
}

export default function Home() {
  return (
    <>
      <SchemaClinica />
      <SchemaFaq itens={faqGeral} />

      {/* Abertura */}
      <section className="bg-areia">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pt-12 pb-14 md:grid-cols-[1fr_1.15fr] md:gap-12 md:pt-20 md:pb-24">
          <div>
            <h1 className="text-[2.4rem] sm:text-5xl lg:text-[3.3rem]">
              Consulta e exame do coração no mesmo endereço, em Presidente Prudente
            </h1>
            <p className="mt-6 max-w-[52ch] text-lg text-marinho-claro">
              Cardiologia, neurologia, geriatria e pneumologia, com os exames feitos aqui mesmo.
              Você agenda pelo WhatsApp.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <BotaoWhatsApp contato={contatoGeral}>Agendar pelo WhatsApp</BotaoWhatsApp>
              <a
                href={clinica.mapa}
                target="_blank"
                rel="noopener"
                data-rota
                className="inline-flex min-h-13 items-center justify-center rounded-full border-2 border-marinho px-6 py-3 font-semibold transition-colors hover:bg-marinho hover:text-white"
              >
                Como chegar
              </a>
            </div>
            <p className="mt-6 text-[0.95rem] text-marinho-claro">
              {clinica.endereco.rua}, {clinica.endereco.bairro}. {clinica.horario}.
            </p>
          </div>
          <Image
            src="/img/clinica/recepcao.jpg"
            alt="Recepção da Cardio Clinic, com o nome da clínica na parede e a sala de espera ao fundo"
            width={2000}
            height={1126}
            priority
            sizes="(min-width: 768px) 52vw, 100vw"
            className="aspect-[4/3] w-full rounded-tl-[7rem] rounded-tr-2xl rounded-b-2xl object-cover object-[22%_50%]"
          />
        </div>
      </section>

      {/* O que agendar */}
      <Secao id="especialidades">
        <h2 className="max-w-[18ch] text-3xl md:text-[2.6rem]">O que você precisa agendar?</h2>
        <div className="mt-10 grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <h3 className="font-sans text-base font-semibold text-vermelho-forte">Consultas</h3>
            <ul className="mt-3 divide-y divide-areia-forte border-y border-areia-forte">
              {especialidades.map((e) => (
                <li key={e.slug}>
                  <Link href={e.rota} className="group flex items-baseline justify-between gap-4 py-4">
                    <span className="font-serif text-2xl group-hover:text-vermelho-forte">{e.nome}</span>
                    <span className="text-sm text-marinho-claro">Ver consulta</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div id="exames">
            <h3 className="font-sans text-base font-semibold text-vermelho-forte">Exames feitos na clínica</h3>
            <ul className="mt-3 divide-y divide-areia-forte border-y border-areia-forte">
              {exames.map((e) => (
                <li key={e.slug}>
                  <Link href={e.rota} className="group flex items-baseline justify-between gap-4 py-3">
                    <span className="text-lg font-medium group-hover:text-vermelho-forte">{e.nomeCurto}</span>
                    <span className="text-sm text-marinho-claro">Como é feito</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Secao>

      {/* A clinica */}
      <Secao fundo="bg-salvia">
        <div className="grid items-center gap-10 md:grid-cols-[1fr_1.1fr] md:gap-16">
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/img/clinica/sala-espera.jpg"
              alt="Sala de espera da Cardio Clinic, com sofá e poltronas"
              width={1200}
              height={1600}
              sizes="(min-width: 768px) 22vw, 45vw"
              className="aspect-[3/4] w-full rounded-2xl object-cover"
            />
            <Image
              src="/img/clinica/consultorio.jpg"
              alt="Consultório da Cardio Clinic, com mesa de atendimento e maca"
              width={1104}
              height={1312}
              sizes="(min-width: 768px) 22vw, 45vw"
              className="mt-10 aspect-[3/4] w-full rounded-2xl object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-[2.6rem]">Você consulta, faz o exame e volta ao mesmo médico</h2>
            <p className="mt-6 max-w-[58ch]">
              Quem cuida do coração costuma consultar em um lugar, fazer o exame em outro e esperar
              para juntar tudo. Na Cardio Clinic, consulta e exame ficam no mesmo endereço, no
              Jardim Paulistano.
            </p>
            <p className="mt-4 max-w-[58ch]">
              As quatro especialidades da clínica andam juntas no dia a dia: quem trata a pressão
              muitas vezes também tem queixa de memória, de falta de ar ou de dor de cabeça.
            </p>
            <p className="mt-6 font-semibold">{clinica.atendimento}</p>
          </div>
        </div>
      </Secao>

      {/* Corpo clinico */}
      <Secao>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-3xl md:text-[2.6rem]">Quem atende você</h2>
          <LinkSeta href="/corpo-clinico">Ver formação de cada médico</LinkSeta>
        </div>
        <div className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {medicos.map((m) => (
            <CartaoMedico key={m.slug} medico={m} />
          ))}
        </div>
      </Secao>

      {/* Perguntas */}
      <Secao fundo="bg-areia">
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <h2 className="text-3xl md:text-[2.6rem]">Dúvidas antes de agendar</h2>
          <Perguntas itens={faqGeral} />
        </div>
      </Secao>

      {/* Onde fica */}
      <Secao>
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="text-3xl md:text-[2.6rem]">Onde fica</h2>
            <address className="mt-6 space-y-1 text-lg not-italic">
              <p>{enderecoLinha}</p>
              <p>CEP {clinica.endereco.cep}</p>
              <p>{clinica.horario}</p>
            </address>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <BotaoWhatsApp contato={contatoGeral}>Agendar pelo WhatsApp</BotaoWhatsApp>
              <a
                href={clinica.mapa}
                target="_blank"
                rel="noopener"
                data-rota
                className="inline-flex min-h-13 items-center justify-center rounded-full border-2 border-marinho px-6 py-3 font-semibold transition-colors hover:bg-marinho hover:text-white"
              >
                Abrir no mapa
              </a>
            </div>
          </div>
          <Image
            src="/img/clinica/fachada.jpg"
            alt="Fachada da Cardio Clinic, com o letreiro e o coração da marca na entrada"
            width={1033}
            height={816}
            sizes="(min-width: 768px) 48vw, 100vw"
            className="w-full rounded-2xl object-cover"
          />
        </div>
      </Secao>
    </>
  );
}
