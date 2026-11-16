// Fonte unica dos dados do site. Os fatos vem de documentos/.
// Textos de saude sao rascunho ate a revisao medica (ver PENDENCIAS.md).

export const clinica = {
  nome: "Cardio Clinic & Multiespecialidades",
  nomeCurto: "Cardio Clinic",
  razaoSocial: "Cardio Clinic & Multiespecialidades Ltda",
  cnpj: "68.959.372/0001-83",
  url: "https://www.cardioclinicprudente.com.br",
  endereco: {
    rua: "Rua Rafael Ayala, 35",
    bairro: "Jardim Paulistano",
    cidade: "Presidente Prudente",
    uf: "SP",
    cep: "19013-740",
  },
  telefoneExibicao: "(18) 98827-5450",
  telefoneE164: "+5518988275450",
  whatsapp: "5518988275450",
  email: "cardioclinic.prudente@gmail.com",
  horario: "Das 8h às 18h",
  instagram: "https://www.instagram.com/cardioclinic.prudente/",
  mapa: "https://www.google.com/maps/search/?api=1&query=Rua+Rafael+Ayala%2C+35%2C+Jardim+Paulistano%2C+Presidente+Prudente+-+SP",
  atendimento: "Atendimento particular, com desconto para convênios funerários.",
  diretorTecnico: {
    nome: "Dr. Arthur A. Zogheib Pinatto",
    crm: "CRM-SP 169.044",
    rqe: "RQE 95302",
  },
};

export const enderecoLinha = `${clinica.endereco.rua}, ${clinica.endereco.bairro}, ${clinica.endereco.cidade} - ${clinica.endereco.uf}`;

/* ------------------------------ Corpo clinico ----------------------------- */

export type Medico = {
  slug: string;
  nome: string;
  tratamento: "Dr." | "Dra.";
  crm: string;
  rqe: string;
  /** Titulo exibido ao lado do nome. Segue documentos/02-conteudo/corpo-clinico.md. */
  apresentacao: string;
  foto: string;
  resumo: string;
  formacao: string[];
  especialidades: string[]; // slugs
  exames: string[]; // slugs
  /** Rotulo usado na mensagem de consulta do WhatsApp. */
  consultaDe: string;
};

export const medicos: Medico[] = [
  {
    slug: "arthur-zogheib-pinatto",
    nome: "Arthur A. Zogheib Pinatto",
    tratamento: "Dr.",
    crm: "CRM-SP 169.044",
    rqe: "RQE 95302",
    apresentacao: "Cardiologista",
    foto: "/img/medicos/dr-arthur-zogheib-pinatto.jpg",
    resumo:
      "Diretor técnico da clínica. Atende consultas de cardiologia e faz a avaliação do coração de quem pratica ou quer começar a praticar esporte.",
    formacao: [
      "Graduado em Medicina pela Universidade do Oeste Paulista (UNOESTE)",
      "Residência de Clínica Médica no Hospital Regional de Presidente Prudente (HRPP)",
      "Fellow em Terapia Intensiva na Brussels University Hospital (Bélgica)",
      "Residência de Cardiologia no InCor/USP",
      "Fellow de Doenças Coronarianas no InCor/USP",
      "MBA em Gestão Executiva em Saúde na FGV",
      "Pós-graduação em Cardiologia do Esporte pela Anhembi Morumbi",
      "Membro titular da Sociedade Brasileira de Cardiologia (SBC)",
    ],
    especialidades: ["cardiologia"],
    exames: [],
    consultaDe: "cardiologia",
  },
  {
    slug: "caroline-molina",
    nome: "Caroline Molina",
    tratamento: "Dra.",
    crm: "CRM-SP 173.851",
    rqe: "RQE 98545",
    apresentacao: "Cardiologista | Ecocardiografia",
    foto: "/img/medicos/dra-caroline-molina.jpg",
    resumo:
      "Atende consultas de cardiologia e é quem realiza o ecocardiograma na clínica.",
    formacao: [
      "Graduada em Medicina pela Universidade do Oeste Paulista (UNOESTE)",
      "Residência em Clínica Médica pela Universidade Federal da Grande Dourados (UFGD)",
      "Residência em Cardiologia no Hospital Regional de Presidente Prudente (HRPP)",
      "Subespecialização em Ecocardiografia no Hospital Regional de Presidente Prudente (HRPP)",
      "Membro titular da Sociedade Brasileira de Cardiologia (SBC)",
    ],
    especialidades: ["cardiologia"],
    exames: ["ecocardiograma"],
    consultaDe: "cardiologia",
  },
  {
    slug: "mariana-gea-del-trejo",
    nome: "Mariana Gea Del Trejo",
    tratamento: "Dra.",
    crm: "CRM-SP 155.786",
    rqe: "RQE 82808",
    apresentacao: "Médica | Atuação em cardiologia",
    foto: "/img/medicos/dra-mariana-gea-del-trejo.jpg",
    resumo:
      "Atende com foco em saúde cardiovascular e mudança do estilo de vida.",
    formacao: [
      "Graduada em Medicina pela Universidade do Oeste Paulista (UNOESTE)",
      "Residência em Clínica Médica pelo Hospital Regional de Presidente Prudente (HRPP)",
      "Formação em Cardiologia pelo Instituto do Coração de São José do Rio Preto (INCOR Rio Preto)",
      "Mestranda em Ciências da Saúde, com linha de pesquisa relacionada à obesidade e à saúde cardiometabólica",
      "Pós-graduanda em Cardio-Oncologia pela Sociedade Brasileira de Cardiologia (SBC)",
    ],
    especialidades: ["cardiologia"],
    exames: [],
    consultaDe: "saúde cardiovascular",
  },
  {
    slug: "izadora-lopes-lima",
    nome: "Izadora V. B. Lopes Lima",
    tratamento: "Dra.",
    crm: "CRM-SP 209.746",
    rqe: "RQE 124346",
    apresentacao: "Neurologista | Eletroneuromiografia",
    foto: "/img/medicos/dra-izadora-lopes-lima.jpg",
    resumo:
      "Atende consultas de neurologia e é quem realiza a eletroneuromiografia na clínica.",
    formacao: [
      "Graduada em Medicina pela Faculdade de Medicina de Marília (FAMEMA)",
      "Residência em Neurologia no Hospital de Clínicas da UNICAMP",
      "Fellow em Neurofisiologia Clínica, com área de atuação em eletroneuromiografia e doenças neuromusculares, no Hospital de Clínicas da UNICAMP",
      "Membro titular da Academia Brasileira de Neurologia (ABN)",
    ],
    especialidades: ["neurologia"],
    exames: ["eletroneuromiografia"],
    consultaDe: "neurologia",
  },
  {
    slug: "barbara-goncales-olivo",
    nome: "Bárbara Gonçales Olivo",
    tratamento: "Dra.",
    crm: "CRM-SP 182.984",
    rqe: "RQE 105016",
    apresentacao: "Pneumologista",
    foto: "/img/medicos/dra-barbara-goncales-olivo.jpg",
    resumo: "Atende consultas de pneumologia.",
    formacao: [
      "Graduada em Medicina pela Universidade do Oeste Paulista (UNOESTE)",
      "Residência em Clínica Médica pelo Hospital Regional de Presidente Prudente (HRPP)",
      "Residência em Pneumologia pela FAMERP/Hospital de Base de São José do Rio Preto",
    ],
    especialidades: ["pneumologia"],
    exames: [],
    consultaDe: "pneumologia",
  },
  {
    slug: "bruna-beloni-fantini",
    nome: "Bruna Beloni Fantini",
    tratamento: "Dra.",
    crm: "CRM-SP 217.585",
    rqe: "RQE 135239",
    apresentacao: "Médica | Atuação em geriatria",
    foto: "/img/medicos/dra-bruna-beloni-fantini.jpg",
    resumo: "Atende consultas voltadas à saúde da pessoa idosa.",
    formacao: [
      "Graduada em Medicina pela Universidade do Oeste Paulista (UNOESTE)",
      "Residência em Clínica Médica pelo Hospital Regional de Presidente Prudente (HRPP)",
      "Pós-graduação em Geriatria pelo Instituto Sírio-Libanês de Ensino e Pesquisa (IEP/HSL)",
    ],
    especialidades: ["geriatria"],
    exames: [],
    consultaDe: "saúde da pessoa idosa",
  },
];

export const nomeCompleto = (m: Medico) => `${m.tratamento} ${m.nome}`;
export const artigo = (m: Medico) => (m.tratamento === "Dr." ? "o" : "a");

/* ------------------------------ Especialidades ---------------------------- */

export type Especialidade = {
  slug: string;
  rota: string; // caminho completo, com a cidade
  nome: string;
  titulo: string;
  chamada: string;
  motivos: string[];
  exames: string[];
};

export const especialidades: Especialidade[] = [
  {
    slug: "cardiologia",
    rota: "/cardiologista-presidente-prudente",
    nome: "Cardiologia",
    titulo: "Cardiologia em Presidente Prudente",
    chamada:
      "Consulta para cuidar do coração e da circulação, com os principais exames feitos na própria clínica.",
    motivos: [
      "Pressão alta",
      "Colesterol alto",
      "Dor no peito",
      "Palpitação",
      "Falta de ar",
      "Check-up do coração",
      "Avaliação antes de cirurgia",
      "Avaliação para começar ou intensificar exercício",
    ],
    exames: ["eletrocardiograma", "ecocardiograma", "holter-24h", "mapa-24h", "teste-ergometrico"],
  },
  {
    slug: "neurologia",
    rota: "/neurologista-presidente-prudente",
    nome: "Neurologia",
    titulo: "Neurologia em Presidente Prudente",
    chamada:
      "Consulta para investigar queixas do cérebro, dos nervos e dos músculos.",
    motivos: [
      "Dor de cabeça frequente",
      "Formigamento e dormência",
      "Perda de força",
      "Tontura",
      "Tremor",
      "Queixas de memória",
    ],
    exames: ["eletroneuromiografia"],
  },
  {
    slug: "pneumologia",
    rota: "/pneumologista-presidente-prudente",
    nome: "Pneumologia",
    titulo: "Pneumologia em Presidente Prudente",
    chamada: "Consulta para cuidar do pulmão e da respiração.",
    motivos: [
      "Tosse que não passa",
      "Falta de ar",
      "Chiado no peito",
      "Asma",
      "DPOC",
      "Acompanhamento de quem fuma ou já fumou",
    ],
    exames: ["espirometria"],
  },
  {
    slug: "geriatria",
    rota: "/geriatria-presidente-prudente",
    nome: "Geriatria",
    titulo: "Geriatria em Presidente Prudente",
    chamada:
      "Consulta voltada à saúde da pessoa idosa, com orientação também para a família.",
    motivos: [
      "Muitos remédios ao mesmo tempo",
      "Quedas",
      "Esquecimento",
      "Perda de peso",
      "Acompanhamento geral do idoso",
      "Orientação à família",
    ],
    exames: [],
  },
];

/* ---------------------------------- Exames -------------------------------- */

export type Pergunta = { pergunta: string; resposta: string };

export type Exame = {
  slug: string;
  rota: string;
  nome: string;
  nomeCurto: string;
  titulo: string;
  oQueE: string;
  comoEFeito: string;
  preparo: string[];
  realizadoPor?: string; // slug do medico, quando o exame tem medico fixo
  foto?: string;
  faq: Pergunta[];
};

export const exames: Exame[] = [
  {
    slug: "eletrocardiograma",
    rota: "/exames/eletrocardiograma-presidente-prudente",
    nome: "Eletrocardiograma (ECG)",
    nomeCurto: "Eletrocardiograma",
    titulo: "Eletrocardiograma em Presidente Prudente",
    oQueE:
      "É o registro da atividade elétrica do coração em repouso, feito com eletrodos colados na pele.",
    comoEFeito: "Você fica deitado por alguns minutos. Não dói.",
    preparo: ["No dia do exame, evite creme ou óleo no tórax."],
    foto: "/img/clinica/sala-ecg.jpg",
    faq: [
      {
        pergunta: "O eletrocardiograma dói?",
        resposta: "Não. São eletrodos colados na pele por alguns minutos.",
      },
    ],
  },
  {
    slug: "ecocardiograma",
    rota: "/exames/ecocardiograma-presidente-prudente",
    nome: "Ecocardiograma",
    nomeCurto: "Ecocardiograma",
    titulo: "Ecocardiograma em Presidente Prudente",
    oQueE:
      "É o ultrassom do coração. Mostra o tamanho das cavidades, a força do músculo e o funcionamento das válvulas.",
    comoEFeito:
      "Você fica deitado enquanto a médica passa um transdutor com gel sobre o tórax. Não dói e não usa radiação.",
    preparo: [],
    realizadoPor: "caroline-molina",
    faq: [
      {
        pergunta: "O ecocardiograma tem radiação?",
        resposta: "Não. É um exame de ultrassom.",
      },
    ],
  },
  {
    slug: "holter-24h",
    rota: "/exames/holter-24h-presidente-prudente",
    nome: "Holter 24h",
    nomeCurto: "Holter 24h",
    titulo: "Holter 24h em Presidente Prudente",
    oQueE:
      "É a gravação contínua do ritmo do coração durante 24 horas, feita por um aparelho pequeno preso à cintura.",
    comoEFeito:
      "Você coloca o aparelho na clínica, leva a vida normal e volta no dia seguinte para retirar. Durante o dia, anota em um diário o que sentiu e a que horas.",
    preparo: [
      "Tome banho antes de vir: o aparelho não pode molhar.",
      "Não passe creme no tórax.",
    ],
    faq: [
      {
        pergunta: "Posso tomar banho com o Holter?",
        resposta: "Não. O aparelho não pode molhar; tome banho antes de colocar.",
      },
      {
        pergunta: "Posso trabalhar normalmente com o Holter?",
        resposta: "Sim. A ideia é manter a rotina do dia a dia.",
      },
    ],
  },
  {
    slug: "mapa-24h",
    rota: "/exames/mapa-24h-presidente-prudente",
    nome: "MAPA 24h",
    nomeCurto: "MAPA 24h",
    titulo: "MAPA 24h em Presidente Prudente",
    oQueE:
      "É a medida automática da pressão arterial ao longo de 24 horas, inclusive durante o sono.",
    comoEFeito:
      "Uma braçadeira no braço infla de tempos em tempos. Você mantém a rotina e devolve o aparelho no dia seguinte.",
    preparo: [
      "Venha com camisa de manga larga.",
      "Tome banho antes de vir: o aparelho não pode molhar.",
      "Mantenha seus remédios, a não ser que o médico oriente diferente.",
    ],
    faq: [
      {
        pergunta: "Posso tomar banho com o MAPA?",
        resposta: "Não. O aparelho não pode molhar; tome banho antes de colocar.",
      },
      {
        pergunta: "Posso trabalhar normalmente com o MAPA?",
        resposta: "Sim. A ideia é manter a rotina do dia a dia.",
      },
    ],
  },
  {
    slug: "teste-ergometrico",
    rota: "/exames/teste-ergometrico-presidente-prudente",
    nome: "Teste ergométrico",
    nomeCurto: "Teste ergométrico",
    titulo: "Teste ergométrico em Presidente Prudente",
    oQueE:
      "É o eletrocardiograma feito durante o esforço na esteira, com medida da pressão.",
    comoEFeito:
      "Você caminha na esteira, com aumento gradual de velocidade e inclinação, acompanhado por médico.",
    preparo: [
      "Venha com roupa leve e tênis.",
      "Faça uma refeição leve antes: nem em jejum, nem de estômago cheio.",
      "Não fume antes do exame.",
    ],
    faq: [
      {
        pergunta: "Preciso parar meus remédios para o teste ergométrico?",
        resposta:
          "Só se o médico que pediu o exame orientar. Não suspenda por conta própria.",
      },
    ],
  },
  {
    slug: "espirometria",
    rota: "/exames/espirometria-presidente-prudente",
    nome: "Espirometria",
    nomeCurto: "Espirometria",
    titulo: "Espirometria em Presidente Prudente",
    oQueE:
      "É o exame do sopro. Mede quanto ar entra e sai dos pulmões e com que velocidade. A clínica faz com e sem broncodilatador.",
    comoEFeito:
      "Você sopra com força em um bocal, algumas vezes. Na versão com broncodilatador, repete os sopros depois de usar a bombinha.",
    preparo: [],
    faq: [],
  },
  {
    slug: "eletroneuromiografia",
    rota: "/exames/eletroneuromiografia-presidente-prudente",
    nome: "Eletroneuromiografia (ENMG)",
    nomeCurto: "Eletroneuromiografia",
    titulo: "Eletroneuromiografia em Presidente Prudente",
    oQueE:
      "É o exame que avalia nervos e músculos. Ajuda a investigar formigamento, dormência, perda de força e dor.",
    comoEFeito:
      "Tem duas partes: pequenos estímulos elétricos sobre a pele e, depois, uma agulha fina no músculo.",
    preparo: [],
    realizadoPor: "izadora-lopes-lima",
    faq: [
      {
        pergunta: "A eletroneuromiografia dói?",
        resposta:
          "Pode causar um desconforto passageiro, que varia de pessoa para pessoa.",
      },
    ],
  },
];

/* ----------------------------------- FAQ ---------------------------------- */

export const faqGeral: Pergunta[] = [
  {
    pergunta: "Como faço para agendar?",
    resposta: `Pelo WhatsApp ${clinica.telefoneExibicao}. É só tocar em um dos botões do site.`,
  },
  {
    pergunta: "A clínica atende convênio?",
    resposta: "O atendimento é particular. Há desconto para convênios funerários.",
  },
  {
    pergunta: "Onde fica a Cardio Clinic?",
    resposta: `Na ${clinica.endereco.rua}, ${clinica.endereco.bairro}, em ${clinica.endereco.cidade} (${clinica.endereco.uf}).`,
  },
  {
    pergunta: "Quais exames são feitos na clínica?",
    resposta:
      "Eletrocardiograma, ecocardiograma, Holter 24h, MAPA 24h, teste ergométrico, espirometria e eletroneuromiografia.",
  },
  {
    pergunta: "A clínica atende urgência?",
    resposta:
      "Não. O atendimento é com hora marcada. Em caso de dor forte no peito, falta de ar intensa, desmaio ou sinais de AVC, ligue 192 (SAMU) ou vá ao pronto-socorro mais próximo.",
  },
];

/* --------------------------------- Buscas --------------------------------- */

export const medicoPorSlug = (slug: string) => medicos.find((m) => m.slug === slug);
export const examePorSlug = (slug: string) => exames.find((e) => e.slug === slug);
export const especialidadePorSlug = (slug: string) =>
  especialidades.find((e) => e.slug === slug);
export const rotaMedico = (m: Medico) => `/corpo-clinico/${m.slug}`;
export const medicosDaEspecialidade = (slug: string) =>
  medicos.filter((m) => m.especialidades.includes(slug));
