import Link from "next/link";
import { clinica, enderecoLinha, especialidades, exames } from "@/lib/site";
import { Marca } from "./Cabecalho";

export function Rodape() {
  const d = clinica.diretorTecnico;
  return (
    <footer className="mt-auto bg-marinho text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Marca clara />
          <address className="mt-6 space-y-1 text-[0.95rem] text-white/85 not-italic">
            <p>{enderecoLinha}</p>
            <p>CEP {clinica.endereco.cep}</p>
            <p>{clinica.horario}</p>
            <p>
              <a href={`tel:${clinica.telefoneE164}`} data-telefone className="underline underline-offset-4">
                {clinica.telefoneExibicao}
              </a>
            </p>
            <p>
              <a href={clinica.instagram} target="_blank" rel="noopener" className="underline underline-offset-4">
                Instagram
              </a>
            </p>
          </address>
        </div>
        <nav aria-label="Especialidades">
          <h2 className="font-sans text-sm font-semibold text-rosa">Especialidades</h2>
          <ul className="mt-4 space-y-2 text-[0.95rem] text-white/85">
            {especialidades.map((e) => (
              <li key={e.slug}>
                <Link href={e.rota} className="hover:text-white">{e.nome}</Link>
              </li>
            ))}
            <li><Link href="/corpo-clinico" className="hover:text-white">Corpo clínico</Link></li>
            <li><Link href="/contato" className="hover:text-white">Contato</Link></li>
          </ul>
        </nav>
        <nav aria-label="Exames">
          <h2 className="font-sans text-sm font-semibold text-rosa">Exames</h2>
          <ul className="mt-4 space-y-2 text-[0.95rem] text-white/85">
            {exames.map((e) => (
              <li key={e.slug}>
                <Link href={e.rota} className="hover:text-white">{e.nomeCurto}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-white/15">
        <div className="mx-auto max-w-6xl space-y-1.5 px-5 py-6 text-sm text-white/75">
          <p>
            Diretor técnico: {d.nome}, {d.crm}, {d.rqe}
          </p>
          <p>
            {clinica.razaoSocial}, CNPJ {clinica.cnpj}
          </p>
          <p>
            Este site não realiza atendimento de urgência. Em caso de emergência, ligue 192.
          </p>
        </div>
      </div>
    </footer>
  );
}
