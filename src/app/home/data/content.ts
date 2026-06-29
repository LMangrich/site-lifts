import type { TeamMember, FaqItem, Result } from './types'

export const CONTACT = {
  phone: '(11) 99999-0000',
  email: 'contato@clinicalifts.com.br',
  whatsapp: 'https://wa.me/5511999990000',
}

export const TEAM: TeamMember[] = [
  {
    role: 'Maria',
    name: 'Eduarda',
    registration: 'Nutricionista · CRN/SC 7678',
    bio: 'Alimentação pensada para o seu corpo, sua rotina e seus objetivos.',
    image: '/assets/nutri.png',
    alt: 'Maria Eduarda',
    photoHeight: '78%',
  },
  {
    role: 'Personal',
    name: 'Samuel',
    registration: 'Personal Trainer · CREF 54369-G',
    bio: 'Treino com progressão estruturada, pensado para o seu corpo, sua rotina e seus objetivos.',
    image: '/assets/samuka.png',
    alt: 'Personal Samuel',
    photoHeight: '80%',
  },
  {
    role: 'Maria de',
    name: 'Lurdes',
    registration: 'Médica · CRM/SC 20675',
    bio: 'Responsável técnica e médica focada em saúde da mulher.',
    image: '/assets/medica.png',
    alt: 'Maria de Lurdes',
    photoHeight: '82%',
  },
  {
    role: 'Médico',
    name: 'Guilherme',
    registration: 'Médico · CRM/RS 53614',
    bio: 'Plano terapêutico individual. Prescrições e exames que respeitam quem você é.',
    image: '/assets/medico.png',
    alt: 'Médico Guilherme',
    photoHeight: '84%',
  },
]

export const RESULTS: Result[] = [
  {
    beforeLabel: '117kg · 43% BF',
    afterLabel: '88kg · 18% BF',
    image: '/assets/depois1.png',
  },
  {
    beforeLabel: '117kg · 43% BF',
    afterLabel: '88kg · 18% BF',
    image: '/assets/depois2.png',
  },
]

export const DUVIDAS_STEPS = [
  {
    n: '1',
    title: 'Entrei para a LIFTS, e agora?',
    text: 'Sua jornada começa com uma consulta médica completa: avaliamos sua saúde, seus exames e seu objetivo. A partir daí, médico, nutricionista e personal montam um plano único, integrado e pensado só para você.',
  },
  {
    n: '2',
    title: 'Consultas de verdade, não de passagem',
    text: 'Aqui você não recebe uma orientação genérica e tchau. Cada consulta é um momento real de atenção ao seu caso, para garantir que cada decisão esteja alinhada com seu corpo, sua rotina e seu objetivo.',
  },
  {
    n: '3',
    title: 'Acompanhamento contínuo, mesmo que você não peça',
    text: 'Monitoramos sua evolução de forma ativa. Se algo precisa ser ajustado, nós ajustamos antes que vire problema, porque resultado sustentável exige atenção constante.',
  },
]

export const FAQS: FaqItem[] = [
  {
    icon: 'flag',
    q: 'Como começo?',
    a: 'Você passa por uma avaliação inicial onde entendemos seu momento, seus objetivos e o melhor plano. A partir disso, o acompanhamento começa. Clique aqui e agende já a sua avaliação gratuita com o nosso time.',
  },
  {
    icon: 'restaurant',
    q: 'Isso é só mais uma dieta ou treino?',
    a: 'NÃO. A LIFTS não trabalha com soluções isoladas. Aqui você tem médico, nutricionista e personal no mesmo plano, com decisões integradas e baseadas em ciência.',
  },
  {
    icon: 'medication',
    q: 'Vocês utilizam canetas emagrecedoras?',
    a: 'Sim, se você tiver indicação. O médico avaliará se há a possibilidade de usar os medicamentos que ajudam no emagrecimento. Nosso foco é resultado sustentável, saúde e longevidade, utilizando medicações como devem ser utilizadas: com acompanhamento profissional.',
  },
  {
    icon: 'compare_arrows',
    q: 'Qual a diferença da LIFTS para as outras que eu já tentei?',
    a: 'O PROBLEMA NÃO É VOCÊ. É fazer tudo sozinho e sem integração. Na LIFTS você tem acompanhamento clínico real, estratégia alimentar personalizada, treino com progressão estruturada, tudo alinhado no mesmo plano.',
  },
  {
    icon: 'checklist',
    q: 'Como funciona o acompanhamento na prática?',
    a: '',
    listItems: [
      'Consulta médica completa: Saúde, exames e objetivos',
      'Plano integrado: 3 profissionais alinhados',
      'Acompanhamento contínuo: Ajustes mensais',
      'Resultado sustentável: Não é só perder peso, é manter',
    ],
  },
  {
    icon: 'person',
    q: 'O atendimento é realmente personalizado?',
    a: 'SIM. Você não recebe plano pronto. Recebe conduta adaptada à sua rotina, com ajustes conforme sua evolução real.',
  },
  {
    icon: 'wifi',
    q: 'É tudo online mesmo?',
    a: 'SIM, 100% ONLINE. Mas não é acompanhamento superficial, são três profissionais alinhados, monitoramento contínuo e estrutura real de evolução.',
  },
  {
    icon: 'savings',
    q: 'Vale mais a pena do que fazer tudo por conta própria?',
    a: 'Fazendo sozinho você pode gastar com consultas separadas, tentativa e erro além de suplementos desnecessários, o que pode passar de R$ 3.700 em poucos meses. Na LIFTS, tudo integrado a partir de R$ 229,90/mês.',
  },
  {
    icon: 'schedule',
    q: 'E se eu não tiver tempo?',
    a: 'Esse é exatamente o perfil que mais se beneficia. A LIFTS é pensada para quem tem rotina corrida e precisa de um plano que se adapte à vida real.',
  },
]
