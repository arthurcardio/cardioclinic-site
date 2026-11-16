import type { Metadata } from "next";
import { clinica, enderecoLinha } from "@/lib/site";
import { Trilha } from "@/components/Blocos";

export const metadata: Metadata = {
  title: "Política de privacidade",
  description: "Como o site da Cardio Clinic trata dados pessoais e cookies.",
  alternates: { canonical: "/politica-de-privacidade" },
};

const ATUALIZADA_EM = "16 de novembro de 2026";

function Bloco({ titulo, children }: { titulo: string; children: React.ReactNode }) {
  return (
    <section className="mt-12">
      <h2 className="text-2xl">{titulo}</h2>
      <div className="mt-4 space-y-4">{children}</div>
    </section>
  );
}

export default function Pagina() {
  return (
    <div className="mx-auto max-w-3xl px-5 pt-8 pb-20">
      <Trilha itens={[{ nome: "Política de privacidade" }]} />
      <h1 className="mt-8 text-[2.4rem] sm:text-5xl">Política de privacidade</h1>
      <p className="mt-4 text-marinho-claro">Atualizada em {ATUALIZADA_EM}.</p>

      <Bloco titulo="Quem é o responsável">
        <p>
          {clinica.razaoSocial}, CNPJ {clinica.cnpj}, com endereço na {enderecoLinha}, CEP{" "}
          {clinica.endereco.cep}. Para qualquer assunto sobre seus dados, escreva para{" "}
          <a href={`mailto:${clinica.email}`} className="font-semibold underline underline-offset-4">
            {clinica.email}
          </a>
          .
        </p>
      </Bloco>

      <Bloco titulo="O que este site coleta">
        <p>
          Este site não tem cadastro nem formulário. Ele não pede seu nome, seus sintomas nem
          qualquer informação de saúde.
        </p>
        <p>O que pode ser coletado é o seguinte:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Dados técnicos de acesso.</strong> Como em todo site, o serviço de hospedagem
            registra o endereço IP, o tipo de navegador e as páginas abertas, para manter o site
            funcionando e seguro.
          </li>
          <li>
            <strong>Cookies de medição e de anúncios, só se você aceitar.</strong> Com o seu aceite
            no aviso de cookies, usamos o Google Analytics, o Google Ads e o pixel da Meta para
            saber quantas pessoas visitam o site, quais páginas são mais vistas e se os anúncios
            trazem contatos.
          </li>
          <li>
            <strong>Cliques nos botões.</strong> Com o seu aceite, registramos que um botão de
            WhatsApp, de telefone ou de mapa foi clicado e em qual página. O registro fica ligado
            a um identificador do navegador, sem seu nome, telefone ou e-mail. Como o endereço da
            página faz parte desse registro, o Google e a Meta ficam sabendo qual página do site
            foi aberta.
          </li>
        </ul>
      </Bloco>

      <Bloco titulo="O que não fazemos">
        <ul className="list-disc space-y-2 pl-6">
          <li>Não montamos listas de visitantes para exibir anúncios personalizados (remarketing).</li>
          <li>Não enviamos às plataformas de anúncio seu nome, telefone ou e-mail.</li>
          <li>Não vendemos nem cedemos dados a terceiros.</li>
        </ul>
      </Bloco>

      <Bloco titulo="Contato pelo WhatsApp">
        <p>
          Os botões de agendamento abrem uma conversa no WhatsApp, que é um serviço da Meta e tem
          política de privacidade própria. O que você escrever na conversa é recebido pela
          recepção da clínica e usado para agendar e prestar o atendimento.
        </p>
      </Bloco>

      <Bloco titulo="Cookies: como aceitar, recusar ou mudar de ideia">
        <p>
          Na primeira visita, o site pergunta se você aceita os cookies de medição e de anúncios.
          Se recusar, nenhum deles é carregado e o site funciona normalmente. Para rever a escolha,
          use o link &ldquo;Preferências de cookies&rdquo; no rodapé.
        </p>
      </Bloco>

      <Bloco titulo="Com quem os dados são compartilhados">
        <p>
          Apenas com os fornecedores que fazem o site funcionar e a medição acontecer: a Vercel
          (hospedagem), o Google (Analytics e Ads) e a Meta (pixel). Esses fornecedores podem
          tratar dados fora do Brasil.
        </p>
      </Bloco>

      <Bloco titulo="Por quanto tempo">
        <p>
          Os dados de medição ficam guardados pelo prazo configurado em cada ferramenta e são
          usados de forma agregada, em números e relatórios.
        </p>
      </Bloco>

      <Bloco titulo="Seus direitos">
        <p>
          A Lei Geral de Proteção de Dados (Lei 13.709/2018) garante a você, entre outros direitos,
          confirmar se tratamos seus dados, acessar, corrigir e pedir a exclusão, além de retirar o
          consentimento a qualquer momento. Para exercer qualquer um deles, escreva para{" "}
          <a href={`mailto:${clinica.email}`} className="font-semibold underline underline-offset-4">
            {clinica.email}
          </a>
          . Você também pode recorrer à Autoridade Nacional de Proteção de Dados (ANPD).
        </p>
      </Bloco>

      <Bloco titulo="Dados de pacientes">
        <p>
          Esta política trata apenas do site. Os dados de quem é atendido na clínica, como o
          prontuário, seguem as regras do sigilo médico e da legislação de saúde e não passam por
          este site.
        </p>
      </Bloco>

      <Bloco titulo="Mudanças nesta política">
        <p>
          Se o site passar a coletar algo diferente, esta página será atualizada, com a nova data
          no topo.
        </p>
      </Bloco>
    </div>
  );
}
