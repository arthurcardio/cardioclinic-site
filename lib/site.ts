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
  horario: "Segunda a sexta, das 8h às 18h",
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
  /** WhatsApp proprio da medica (so digitos, com 55). Sem ele, vale o numero da clinica. */
  whatsapp?: string;
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
      "Diretor técnico da clínica. Atende consultas de cardiologia, faz a avaliação do coração de quem pratica ou quer começar a praticar esporte e realiza o teste ergométrico.",
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
    exames: ["teste-ergometrico"],
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
    whatsapp: "5518996834477",
    nome: "Mariana Gea Del Trejo",
    tratamento: "Dra.",
    crm: "CRM-SP 155.786",
    rqe: "RQE 82808",
    apresentacao: "Médica | Atuação em cardiologia",
    foto: "/img/medicos/dra-mariana-gea-del-trejo.jpg",
    resumo:
      "Atende com foco em saúde cardiovascular e mudança do estilo de vida, e é quem realiza a bioimpedância na clínica.",
    formacao: [
      "Graduada em Medicina pela Universidade do Oeste Paulista (UNOESTE)",
      "Residência em Clínica Médica pelo Hospital Regional de Presidente Prudente (HRPP)",
      "Formação em Cardiologia pelo Instituto do Coração de São José do Rio Preto (INCOR Rio Preto)",
      "Mestranda em Ciências da Saúde, com linha de pesquisa relacionada à obesidade e à saúde cardiometabólica",
      "Pós-graduanda em Cardio-Oncologia pela Sociedade Brasileira de Cardiologia (SBC)",
    ],
    especialidades: ["cardiologia"],
    exames: ["bioimpedancia"],
    consultaDe: "saúde cardiovascular",
  },
  {
    slug: "izadora-lopes-lima",
    whatsapp: "5518996883814",
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
    whatsapp: "5518996473587",
    nome: "Bárbara Gonçales Olivo",
    tratamento: "Dra.",
    crm: "CRM-SP 182.984",
    rqe: "RQE 105016",
    apresentacao: "Pneumologista",
    foto: "/img/medicos/dra-barbara-goncales-olivo.jpg",
    resumo: "Atende consultas de pneumologia e é quem realiza a espirometria na clínica.",
    formacao: [
      "Graduada em Medicina pela Universidade do Oeste Paulista (UNOESTE)",
      "Residência em Clínica Médica pelo Hospital Regional de Presidente Prudente (HRPP)",
      "Residência em Pneumologia pela FAMERP/Hospital de Base de São José do Rio Preto",
    ],
    especialidades: ["pneumologia"],
    exames: ["espirometria"],
    consultaDe: "pneumologia",
  },
  {
    slug: "bruna-beloni-fantini",
    whatsapp: "5518998010612",
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
    exames: ["eletrocardiograma", "ecocardiograma", "holter-24h", "mapa-24h", "teste-ergometrico", "bioimpedancia", "exame-do-sono-biologix"],
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
    exames: ["espirometria", "exame-do-sono-biologix"],
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

export type Foto = {
  src: string;
  alt: string;
  largura: number;
  altura: number;
  /** true quando a foto nao e da clinica: a pagina mostra "Imagem ilustrativa". */
  ilustrativa?: boolean;
  /** Legenda propria; quando ausente, usa o texto padrao. */
  legenda?: string;
};

export type Exame = {
  slug: string;
  rota: string;
  nome: string;
  nomeCurto: string;
  titulo: string;
  /** Resumo em uma frase: aparece no topo da pagina e na lista de exames. */
  oQueE: string;
  /** Por que o medico pede o exame. */
  porQue: string[];
  /** Situacoes em que o exame costuma ser pedido. */
  indicacoes: string[];
  comoEFeito: string[];
  preparo: string[];
  realizadoPor?: string; // slug do medico, quando o exame tem medico fixo
  fotos: Foto[];
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
    porQue: [
      "Cada batimento do coração começa com um impulso elétrico. O eletrocardiograma desenha esse impulso no papel e mostra se o coração bate no ritmo certo, rápido ou devagar demais.",
      "Costuma ser o primeiro exame do coração que o médico pede, porque é rápido e dá muita informação: o ritmo, a frequência, sinais de que o músculo está sobrecarregado, de um infarto antigo ou de um bloqueio na passagem do impulso elétrico.",
      "Um eletrocardiograma normal não descarta todos os problemas. Ele registra só os poucos segundos em que você está deitado. Por isso, conforme a queixa, o médico pode pedir junto um Holter, um ecocardiograma ou um teste ergométrico.",
    ],
    indicacoes: [
      "Palpitação ou sensação de batimento falhando",
      "Dor ou aperto no peito",
      "Falta de ar, tontura ou desmaio",
      "Pressão alta, diabetes ou colesterol alto",
      "Check-up do coração",
      "Avaliação antes de cirurgia",
      "Avaliação antes de começar atividade física",
      "Acompanhamento de quem usa remédios que podem alterar o ritmo do coração",
    ],
    comoEFeito: [
      "Você deita na maca com o tórax descoberto. São colados eletrodos no peito, nos punhos e nos tornozelos, ligados ao aparelho por fios.",
      "Durante o registro, basta ficar parado e respirar normalmente. O aparelho só capta a eletricidade do coração: ele não dá choque e você não sente nada.",
      "O registro leva poucos minutos. Depois você pode voltar à rotina normalmente.",
    ],
    preparo: [
      "No dia do exame, evite creme ou óleo no tórax: eles atrapalham a fixação dos eletrodos.",
      "Venha com roupa fácil de abrir na frente.",
    ],
    fotos: [
      { src: "/img/exames/eletrocardiograma.jpg", alt: "Homem deitado com eletrodos no tórax ao lado do aparelho de eletrocardiograma", largura: 800, altura: 600, ilustrativa: true },
      { src: "/img/clinica/sala-ecg.jpg", alt: "Sala onde é feito o eletrocardiograma na Cardio Clinic", largura: 1080, altura: 960 },
    ],
    faq: [
      {
        pergunta: "O eletrocardiograma dói?",
        resposta: "Não. São eletrodos colados na pele por alguns minutos. O aparelho apenas registra.",
      },
      {
        pergunta: "Eletrocardiograma normal quer dizer que meu coração está bem?",
        resposta:
          "É um bom sinal, mas ele mostra só o momento do exame. Se a queixa continuar, o médico pode pedir outros exames para completar a avaliação.",
      },
      {
        pergunta: "Preciso estar em jejum?",
        resposta: "Não. O eletrocardiograma não exige jejum.",
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
    porQue: [
      "O eletrocardiograma mostra a parte elétrica do coração. O ecocardiograma mostra a parte mecânica: o coração batendo, em imagem e em tempo real.",
      "Com ele o médico mede o tamanho das cavidades, a espessura das paredes e a força com que o músculo bombeia o sangue. Também vê as válvulas abrindo e fechando e, com o Doppler, acompanha o caminho do sangue lá dentro, para saber se alguma válvula está apertada ou deixando o sangue voltar.",
      "É o exame que ajuda a entender a causa de um sopro, de uma falta de ar ou de um inchaço nas pernas, e a acompanhar ao longo dos anos quem já tem uma doença do coração.",
    ],
    indicacoes: [
      "Sopro no coração",
      "Falta de ar ou cansaço sem explicação",
      "Inchaço nas pernas",
      "Pressão alta há muitos anos",
      "Depois de um infarto",
      "Arritmias",
      "Acompanhamento de doença das válvulas ou de insuficiência cardíaca",
      "Antes e durante tratamentos que podem afetar o coração, como alguns tipos de quimioterapia",
    ],
    comoEFeito: [
      "Você deita na maca, em geral virado para o lado esquerdo, com o tórax descoberto.",
      "A médica passa um gel e desliza o transdutor sobre o peito, em algumas posições. As imagens aparecem na tela na hora. Em certos momentos dá para ouvir o som do fluxo do sangue: é o Doppler funcionando.",
      "O exame não dói e não usa radiação. No fim, é só limpar o gel e voltar à rotina.",
    ],
    preparo: [],
    realizadoPor: "caroline-molina",
    fotos: [{ src: "/img/exames/ecocardiograma.jpg", alt: "Profissional de saúde faz ecocardiograma em paciente deitado, com as imagens do coração na tela do aparelho", largura: 1114, altura: 844, ilustrativa: true }],
    faq: [
      {
        pergunta: "O ecocardiograma tem radiação?",
        resposta: "Não. É um exame de ultrassom, o mesmo princípio usado na gravidez.",
      },
      {
        pergunta: "Qual a diferença entre eletrocardiograma e ecocardiograma?",
        resposta:
          "O eletrocardiograma registra a atividade elétrica do coração. O ecocardiograma mostra a imagem do coração batendo: músculo, cavidades e válvulas. Um completa o outro.",
      },
      {
        pergunta: "O ecocardiograma dói?",
        resposta: "Não. Você sente apenas a pressão leve do transdutor sobre o peito.",
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
    porQue: [
      "Muitas alterações do ritmo do coração vêm e vão. A palpitação aparece em casa, à noite ou no trabalho, e some antes da consulta. O eletrocardiograma comum, que dura poucos segundos, pode sair normal.",
      "O Holter resolve isso gravando todos os batimentos de um dia inteiro, inclusive durante o sono. Assim o médico consegue ver se houve arritmia, quantas vezes, por quanto tempo e em que horário.",
      "O diário que você preenche é parte do exame. Ao comparar a hora do sintoma com o traçado daquele momento, o médico descobre se a palpitação ou a tontura veio mesmo do coração.",
    ],
    indicacoes: [
      "Palpitação ou coração disparado",
      "Sensação de batimento falhando",
      "Tontura ou desmaio",
      "Batimentos muito lentos ou muito rápidos",
      "Acompanhamento de arritmia já conhecida",
      "Avaliação do efeito de um remédio para o ritmo",
      "Investigação depois de um AVC",
    ],
    comoEFeito: [
      "Na clínica, são colados eletrodos no seu tórax, ligados a um gravador pequeno que fica preso à cintura ou a tiracolo.",
      "Você vai embora e leva a vida normal: trabalha, caminha, come e dorme com o aparelho. Durante o dia, anota no diário o que sentiu e a que horas.",
      "No dia seguinte, você volta para retirar o aparelho. A gravação é analisada e vira o laudo.",
    ],
    preparo: [
      "Tome banho antes de vir: o aparelho não pode molhar.",
      "Não passe creme ou óleo no tórax.",
      "Venha com uma camisa larga, que ajuda a acomodar os fios.",
    ],
    fotos: [{ src: "/img/exames/holter-24h.jpg", alt: "Pessoa com eletrodos colados no tórax segurando o gravador do Holter", largura: 800, altura: 538, ilustrativa: true }],
    faq: [
      {
        pergunta: "Posso tomar banho com o Holter?",
        resposta: "Não. O aparelho não pode molhar; tome banho antes de colocar.",
      },
      {
        pergunta: "Posso trabalhar normalmente com o Holter?",
        resposta:
          "Sim. A ideia é justamente registrar o coração na sua rotina de verdade, então mantenha o dia como ele costuma ser.",
      },
      {
        pergunta: "E se eu não sentir nada durante o exame?",
        resposta:
          "O exame continua valendo. O Holter registra todos os batimentos, com ou sem sintoma, e pode mostrar alterações que você nem percebe.",
      },
      {
        pergunta: "Posso dormir com o aparelho?",
        resposta: "Sim. O registro durante o sono é uma parte importante do exame.",
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
    porQue: [
      "A pressão muda o dia inteiro. Uma ou duas medidas no consultório mostram só aquele instante, e nem sempre representam o que acontece no resto do dia.",
      "Há quem tenha a pressão alta só no consultório, por ansiedade: é a chamada hipertensão do avental branco. E há o contrário, a pressão normal na consulta e alta em casa e no trabalho, chamada de hipertensão mascarada. O MAPA separa uma situação da outra.",
      "O exame também mostra como a pressão se comporta durante o sono, quando ela normalmente cai, e se o remédio está controlando a pressão nas 24 horas, e não só logo depois de tomado.",
    ],
    indicacoes: [
      "Confirmar o diagnóstico de pressão alta",
      "Pressão alta só no consultório",
      "Pressão normal no consultório, mas alta em casa",
      "Verificar se o tratamento controla a pressão o dia todo",
      "Pressão que varia muito",
      "Tontura ou suspeita de pressão baixa",
    ],
    comoEFeito: [
      "Na clínica, uma braçadeira é colocada no seu braço e ligada a um aparelho pequeno, preso à cintura.",
      "A braçadeira infla sozinha de tempos em tempos, durante o dia e a noite. Quando sentir que ela começou a apertar, pare o que estiver fazendo e deixe o braço parado e relaxado até terminar.",
      "Você mantém a rotina e anota no diário os horários de dormir, acordar, comer, tomar remédios e qualquer sintoma. No dia seguinte, devolve o aparelho.",
    ],
    preparo: [
      "Venha com camisa de manga larga.",
      "Tome banho antes de vir: o aparelho não pode molhar.",
      "Mantenha seus remédios, a não ser que o médico oriente diferente.",
    ],
    fotos: [{ src: "/img/exames/mapa-24h.jpg", alt: "Homem com a braçadeira do MAPA no braço e o aparelho preso à cintura", largura: 365, altura: 250, ilustrativa: true }],
    faq: [
      {
        pergunta: "Posso tomar banho com o MAPA?",
        resposta: "Não. O aparelho não pode molhar; tome banho antes de colocar.",
      },
      {
        pergunta: "O MAPA atrapalha o sono?",
        resposta:
          "A braçadeira também infla durante a noite, e algumas pessoas acordam nas primeiras medidas. É esperado, e o registro do sono é uma parte importante do exame.",
      },
      {
        pergunta: "Qual a diferença entre MAPA e Holter?",
        resposta:
          "O MAPA mede a pressão arterial ao longo de 24 horas. O Holter grava o ritmo do coração no mesmo período. São exames diferentes, e o médico pode pedir os dois.",
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
    porQue: [
      "Em repouso, o coração trabalha com folga. Algumas alterações só aparecem quando ele é exigido: no esforço, o músculo precisa de mais sangue, e uma artéria coronária estreitada pode não dar conta.",
      "No teste ergométrico, o médico acompanha o eletrocardiograma, a pressão, a frequência do coração e o que você sente enquanto o esforço aumenta aos poucos. Por isso ele também é chamado de teste de esforço.",
      "Além de investigar dor no peito, o exame mostra como a pressão reage ao exercício, se surgem arritmias no esforço e qual é a sua capacidade física. É uma informação útil para liberar e orientar a prática de atividade física.",
    ],
    indicacoes: [
      "Dor ou aperto no peito ao fazer esforço",
      "Avaliação antes de começar ou intensificar atividade física",
      "Palpitação que aparece no exercício",
      "Avaliar o comportamento da pressão no esforço",
      "Acompanhamento depois de infarto, angioplastia ou cirurgia do coração",
      "Medir a capacidade física",
    ],
    comoEFeito: [
      "São colados eletrodos no seu tórax e uma braçadeira de pressão no braço. O registro começa ainda em repouso.",
      "A esteira começa devagar. Em etapas, a velocidade e a inclinação aumentam. O médico fica ao seu lado o tempo todo, acompanhando o traçado e medindo a pressão.",
      "O esforço termina quando você atinge o objetivo do exame, quando se cansa ou quando o médico decide parar. Depois vêm alguns minutos de recuperação, ainda com o monitoramento ligado.",
      "Se sentir dor no peito, tontura ou falta de ar forte durante o teste, avise na hora.",
    ],
    preparo: [
      "Venha com roupa leve e tênis.",
      "Faça uma refeição leve antes: nem em jejum, nem de estômago cheio.",
      "Não fume antes do exame.",
      "Sobre os remédios de uso contínuo, siga a orientação do médico que pediu o exame.",
    ],
    realizadoPor: "arthur-zogheib-pinatto",
    fotos: [{ src: "/img/exames/teste-ergometrico.jpg", alt: "Homem com eletrodos no tórax corre na esteira durante teste ergométrico, acompanhado por profissional de saúde", largura: 900, altura: 506, ilustrativa: true }],
    faq: [
      {
        pergunta: "Preciso parar meus remédios para o teste ergométrico?",
        resposta:
          "Só se o médico que pediu o exame orientar. Não suspenda por conta própria.",
      },
      {
        pergunta: "Preciso correr na esteira?",
        resposta:
          "Nem sempre. O esforço aumenta aos poucos e é ajustado à sua condição. Muitas pessoas fazem o exame inteiro caminhando.",
      },
      {
        pergunta: "O teste ergométrico é seguro?",
        resposta:
          "É um exame feito com acompanhamento médico do começo ao fim, com o eletrocardiograma e a pressão monitorados. Se surgir qualquer alteração ou sintoma, o teste é interrompido.",
      },
      {
        pergunta: "Posso fazer o teste em jejum?",
        resposta: "Não é recomendado. Faça uma refeição leve antes.",
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
    porQue: [
      "Falta de ar, tosse e chiado são queixas que podem vir do pulmão, do coração ou de outras causas. A espirometria mostra, em números, como o pulmão está funcionando.",
      "O exame mede o volume de ar que você consegue soprar e a velocidade com que ele sai. Quando os brônquios estão estreitados, como na asma e na DPOC, o ar sai mais devagar, e isso aparece no resultado.",
      "Na versão com broncodilatador, o sopro é repetido depois de usar a bombinha. Se o resultado melhora, é sinal de que o estreitamento dos brônquios é reversível, uma informação que ajuda o médico a definir o diagnóstico e o tratamento.",
    ],
    indicacoes: [
      "Tosse que não passa",
      "Falta de ar",
      "Chiado no peito",
      "Diagnóstico e acompanhamento de asma",
      "Diagnóstico e acompanhamento de DPOC",
      "Avaliação de quem fuma ou já fumou",
      "Avaliação antes de algumas cirurgias",
    ],
    comoEFeito: [
      "Você fica sentado, com um clipe no nariz para o ar sair só pela boca, e segura o bocal entre os lábios.",
      "Na hora indicada, enche o peito ao máximo e sopra com toda a força e o mais rápido que conseguir, até esvaziar os pulmões. O sopro é repetido algumas vezes, porque o exame precisa de medidas parecidas entre si para ser confiável.",
      "O resultado depende do seu esforço, e quem aplica o exame orienta cada sopro. Soprar com força pode dar uma tontura leve e passageira.",
    ],
    preparo: [],
    realizadoPor: "barbara-goncales-olivo",
    fotos: [{ src: "/img/exames/espirometria.jpg", alt: "Mulher com clipe no nariz sopra no espirômetro, orientada por profissional de saúde", largura: 800, altura: 1067, ilustrativa: true }],
    faq: [
      {
        pergunta: "A espirometria dói?",
        resposta:
          "Não. Ela exige esforço para soprar, e isso pode cansar um pouco ou dar uma tontura leve e passageira.",
      },
      {
        pergunta: "Para que serve o broncodilatador no exame?",
        resposta:
          "Ele abre os brônquios. Comparar o sopro antes e depois mostra se o estreitamento das vias aéreas melhora com o remédio.",
      },
      {
        pergunta: "Por que preciso soprar várias vezes?",
        resposta:
          "Porque o exame só é considerado confiável quando os sopros dão resultados parecidos entre si.",
      },
    ],
  },
  {
    slug: "eletroneuromiografia",
    rota: "/exames/eletroneuromiografia-presidente-prudente",
    nome: "Eletroneuromiografia (ENMG)",
    nomeCurto: "Eletroneuromiografia",
    titulo: "Eletroneuromiografia em Presidente Prudente",
    oQueE:
      "É o exame que avalia nervos e músculos. Ajuda a investigar formigamento, dormência, perda de força e dor.",
    porQue: [
      "Os nervos levam os comandos do cérebro e da medula até os músculos e trazem de volta as sensações. Quando um nervo é comprimido ou adoece, podem aparecer formigamento, dormência, dor ou perda de força.",
      "A eletroneuromiografia mede como o sinal elétrico caminha pelos nervos e como os músculos respondem. Com isso, ajuda a mostrar onde está o problema: no nervo, na raiz do nervo junto à coluna ou no próprio músculo. Também indica a intensidade da lesão.",
      "É um exame que complementa a consulta e os exames de imagem. A ressonância mostra a anatomia; a eletroneuromiografia mostra se o nervo está funcionando.",
    ],
    indicacoes: [
      "Formigamento ou dormência nas mãos e nos pés",
      "Suspeita de síndrome do túnel do carpo",
      "Dor que desce pelo braço ou pela perna, com suspeita de nervo comprimido na coluna",
      "Suspeita de neuropatia, como a do diabetes",
      "Perda de força ou fraqueza muscular",
      "Investigação de doenças dos nervos e dos músculos",
    ],
    comoEFeito: [
      "O exame tem duas partes. Na primeira, eletrodos são colados na pele e o nervo recebe estímulos elétricos curtos, parecidos com pequenos choques rápidos. O aparelho mede a velocidade e a força do sinal.",
      "Na segunda parte, uma agulha fina e descartável é colocada em alguns músculos para registrar a atividade deles em repouso e durante a contração. Nada é injetado.",
      "Os nervos e músculos examinados dependem da sua queixa. O exame pode causar desconforto, que passa logo depois.",
    ],
    preparo: [
      "Avise a médica antes do exame se você usa anticoagulante ou tem marca-passo.",
    ],
    realizadoPor: "izadora-lopes-lima",
    fotos: [{ src: "/img/exames/eletroneuromiografia.jpg", alt: "Eletrodos na mão e no punho de uma paciente durante o estudo de condução nervosa da eletroneuromiografia", largura: 768, altura: 462, ilustrativa: true }],
    faq: [
      {
        pergunta: "A eletroneuromiografia dói?",
        resposta:
          "Pode causar um desconforto passageiro, que varia de pessoa para pessoa. Os estímulos são rápidos e a agulha é fina.",
      },
      {
        pergunta: "Qual a diferença entre eletroneuromiografia e ressonância?",
        resposta:
          "A ressonância mostra a imagem da coluna, dos nervos e dos músculos. A eletroneuromiografia mostra o funcionamento deles. Muitas vezes os dois exames se completam.",
      },
      {
        pergunta: "Posso voltar às atividades depois do exame?",
        resposta:
          "Em geral, sim. Pode ficar uma sensibilidade leve nos pontos examinados, que passa em pouco tempo.",
      },
    ],
  },
  {
    slug: "bioimpedancia",
    rota: "/exames/bioimpedancia-presidente-prudente",
    nome: "Exame de Avaliação de Composição Corporal por Bioimpedância com Laudo Médico",
    nomeCurto: "Exame de Avaliação de Composição Corporal por Bioimpedância com Laudo Médico",
    titulo: "Exame de Avaliação de Composição Corporal por Bioimpedância com Laudo Médico",
    oQueE:
      "É o exame que mostra do que o seu peso é feito: quanto é gordura, quanto é músculo e quanto é água.",
    porQue: [
      "A balança comum mostra só o peso total, e o IMC é uma conta entre peso e altura. Nenhum dos dois diz se o peso vem de gordura ou de músculo. Duas pessoas com o mesmo peso podem ter composições bem diferentes.",
      "A bioimpedância faz essa separação. Uma corrente elétrica muito fraca, que você não sente, percorre o corpo. Como o músculo tem mais água e conduz melhor a corrente do que a gordura, o aparelho consegue estimar a quantidade de cada um.",
      "Para quem está tratando o peso, a pressão, o colesterol ou o diabetes, o exame ajuda a acompanhar o que realmente mudou: se a perda foi de gordura, se a massa muscular foi preservada e como o corpo responde ao tratamento ao longo dos meses.",
    ],
    indicacoes: [
      "Acompanhamento de emagrecimento",
      "Sobrepeso e obesidade",
      "Avaliação da massa muscular",
      "Acompanhamento de mudança de alimentação e de exercício",
      "Avaliação de risco cardiometabólico",
      "Comparação da evolução entre consultas",
    ],
    comoEFeito: [
      "Você sobe descalço na balança e segura os pegadores com as duas mãos, com os braços estendidos.",
      "Fica parado por alguns instantes enquanto o aparelho faz a leitura. Não dói e você não sente a corrente.",
      "O resultado sai na hora e é explicado junto com a avaliação da médica.",
    ],
    preparo: [
      "Vá ao banheiro antes do exame.",
      "Evite exercício intenso nas horas anteriores.",
      "Avise antes do exame se você tem marca-passo ou está grávida.",
    ],
    realizadoPor: "mariana-gea-del-trejo",
    fotos: [{ src: "/img/exames/bioimpedancia.jpg", alt: "Mulher descalça sobre a balança de bioimpedância, segurando os pegadores com os braços estendidos", largura: 846, altura: 850, ilustrativa: true }],
    faq: [
      {
        pergunta: "A bioimpedância dói ou dá choque?",
        resposta: "Não. A corrente usada é muito fraca e você não sente nada.",
      },
      {
        pergunta: "Qual a diferença entre a bioimpedância e a balança comum?",
        resposta:
          "A balança comum mostra só o peso. A bioimpedância estima quanto desse peso é gordura, músculo e água.",
      },
      {
        pergunta: "De quanto em quanto tempo devo repetir?",
        resposta:
          "Depende do seu objetivo e do tratamento. A médica define o intervalo para comparar um exame com o outro.",
      },
    ],
  },
  {
    slug: "exame-do-sono-biologix",
    rota: "/exames/exame-do-sono-biologix-presidente-prudente",
    nome: "Exame do sono (Biologix)",
    nomeCurto: "Exame do sono Biologix",
    titulo: "Exame do sono Biologix em Presidente Prudente",
    oQueE:
      "É um exame feito em casa, durante o sono, para investigar a apneia. Usa um sensor pequeno no dedo e um aplicativo no celular.",
    porQue: [
      "Na apneia do sono, a respiração para ou fica muito fraca várias vezes durante a noite. A cada pausa, o oxigênio do sangue cai e o corpo desperta por instantes para voltar a respirar. A pessoa quase nunca percebe, mas acorda cansada.",
      "Além do cansaço e do ronco, a apneia sobrecarrega o coração. Ela está ligada à pressão alta difícil de controlar e a arritmias, como a fibrilação atrial. Por isso é um exame que o cardiologista pede com frequência.",
      "O exame do sono Biologix registra, noite adentro, a oxigenação do sangue e os batimentos do coração, e mostra quantas vezes o oxigênio caiu. Como é feito na sua cama, sem fios pelo corpo, registra uma noite parecida com as suas noites de verdade.",
      "Ele investiga a apneia do sono. Para outros distúrbios do sono, ou conforme o resultado, o médico pode pedir a polissonografia completa.",
    ],
    indicacoes: [
      "Ronco alto e frequente",
      "Pausas na respiração percebidas por quem dorme ao lado",
      "Sono que não descansa e sonolência durante o dia",
      "Dor de cabeça ao acordar",
      "Pressão alta difícil de controlar",
      "Arritmias, como a fibrilação atrial",
      "Acompanhamento do tratamento da apneia",
    ],
    comoEFeito: [
      "Você recebe o sensor na clínica, com a orientação de uso, e instala o aplicativo Biologix no celular.",
      "Na hora de dormir, coloca o sensor no dedo, inicia o exame no aplicativo e deixa o celular ao lado da cama. O sensor envia os dados para o celular sem fio.",
      "Ao acordar, você encerra o exame no aplicativo. Os dados são enviados para análise e o resultado é avaliado pelo médico.",
    ],
    preparo: [
      "Deixe o celular carregando ao lado da cama durante a noite.",
      "Procure dormir no seu horário habitual.",
    ],
    fotos: [{ src: "/img/exames/exame-do-sono-biologix.jpg", alt: "Mulher dormindo com o sensor do exame do sono Biologix no dedo e o celular com o aplicativo ao lado", largura: 1280, altura: 500, ilustrativa: true, legenda: "Imagem de divulgação da Biologix." }],
    faq: [
      {
        pergunta: "Preciso dormir na clínica?",
        resposta: "Não. O exame é feito em casa, na sua cama.",
      },
      {
        pergunta: "O exame do sono Biologix é igual à polissonografia?",
        resposta:
          "Não. Ele é um exame mais simples, voltado para a apneia do sono. A polissonografia completa mede mais parâmetros e pode ser pedida pelo médico em algumas situações.",
      },
      {
        pergunta: "Ronco sempre quer dizer apneia?",
        resposta:
          "Nem sempre. Mas ronco alto e frequente, junto com cansaço durante o dia, é um motivo para investigar.",
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
      "Eletrocardiograma, ecocardiograma, Holter 24h, MAPA 24h, teste ergométrico, espirometria, eletroneuromiografia, bioimpedância e exame do sono Biologix.",
  },
  {
    pergunta: "A clínica atende urgência?",
    resposta:
      "Não. O atendimento é com hora marcada. Em caso de dor forte no peito, falta de ar intensa, desmaio ou sinais de AVC, ligue 192 (SAMU) ou vá ao pronto-socorro mais próximo.",
  },
];

/* --------------------------------- Buscas --------------------------------- */

/** Nome do exame para usar no meio de uma frase ou em um botao. */
export const exameEmFrase = (e: Exame) =>
  /^(MAPA|Holter)/.test(e.nomeCurto) ? e.nomeCurto : e.nomeCurto.charAt(0).toLowerCase() + e.nomeCurto.slice(1);

export const medicoPorSlug = (slug: string) => medicos.find((m) => m.slug === slug);
export const examePorSlug = (slug: string) => exames.find((e) => e.slug === slug);
export const especialidadePorSlug = (slug: string) =>
  especialidades.find((e) => e.slug === slug);
export const rotaMedico = (m: Medico) => `/corpo-clinico/${m.slug}`;
export const medicosDaEspecialidade = (slug: string) =>
  medicos.filter((m) => m.especialidades.includes(slug));
