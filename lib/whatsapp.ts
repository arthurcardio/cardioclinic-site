import {
  clinica,
  exameEmFrase,
  especialidades,
  exames,
  medicos,
  nomeCompleto,
  artigo,
  type Especialidade,
  type Exame,
  type Medico,
} from "./site";

/** Dados que vao no clique: usados na mensagem e, depois, na medicao. */
export type Contato = {
  mensagem: string;
  tipo: "geral" | "especialidade" | "medico" | "exame" | "contato";
  item: string;
  acao: "consulta" | "exame" | "duvida";
  /** Numero de destino. Vazio = numero da clinica. */
  whatsapp?: string;
};

export const linkWhatsApp = (mensagem: string, numero?: string) =>
  `https://wa.me/${numero ?? clinica.whatsapp}?text=${encodeURIComponent(mensagem)}`;

/** Se a especialidade tem uma unica medica com WhatsApp proprio, o botao vai para ela. */
const numeroDaEspecialidade = (e: Especialidade) => {
  const doutoras = medicos.filter((m) => m.especialidades.includes(e.slug));
  return doutoras.length === 1 ? doutoras[0].whatsapp : undefined;
};

const numeroDoExame = (e: Exame) =>
  e.realizadoPor ? medicos.find((m) => m.slug === e.realizadoPor)?.whatsapp : undefined;

export const contatoGeral: Contato = {
  mensagem: "Olá! Vim pelo site da Cardio Clinic e gostaria de agendar um atendimento.",
  tipo: "geral",
  item: "geral",
  acao: "consulta",
};

export const contatoDuvida: Contato = {
  mensagem: "Olá! Vim pelo site da Cardio Clinic e gostaria de tirar uma dúvida.",
  tipo: "contato",
  item: "duvida",
  acao: "duvida",
};

export const contatoEspecialidade = (e: Especialidade): Contato => ({
  mensagem: `Olá! Vim pelo site e gostaria de agendar uma consulta de ${e.nome.toLowerCase()}.`,
  tipo: "especialidade",
  item: e.slug,
  acao: "consulta",
  whatsapp: numeroDaEspecialidade(e),
});

export const contatoExame = (e: Exame): Contato => ({
  mensagem: `Olá! Vim pelo site e gostaria de agendar um exame: ${e.nomeCurto}.`,
  tipo: "exame",
  item: e.slug,
  acao: "exame",
  whatsapp: numeroDoExame(e),
});

export const contatoConsultaMedico = (m: Medico): Contato => ({
  mensagem: `Olá! Vim pelo site e gostaria de agendar uma consulta de ${m.consultaDe} com ${artigo(m)} ${nomeCompleto(m)}.`,
  tipo: "medico",
  item: m.slug,
  acao: "consulta",
  whatsapp: m.whatsapp,
});

export const contatoExameMedico = (m: Medico, e: Exame): Contato => ({
  mensagem: `Olá! Vim pelo site e gostaria de agendar um exame (${exameEmFrase(e)}) com ${artigo(m)} ${nomeCompleto(m)}.`,
  tipo: "medico",
  item: `${m.slug}:${e.slug}`,
  acao: "exame",
  whatsapp: m.whatsapp,
});

/** Mensagem do botao flutuante conforme a pagina aberta. */
export function contatoDaRota(pathname: string): Contato {
  const esp = especialidades.find((e) => e.rota === pathname);
  if (esp) return contatoEspecialidade(esp);
  const exame = exames.find((e) => e.rota === pathname);
  if (exame) return contatoExame(exame);
  const medico = medicos.find((m) => `/corpo-clinico/${m.slug}` === pathname);
  if (medico) return contatoConsultaMedico(medico);
  if (pathname === "/contato") return contatoDuvida;
  return contatoGeral;
}
