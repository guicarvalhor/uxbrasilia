export interface TeamMember {
  id: string;
  name: string;
  role: string;
  group: 'coordenacao' | 'leads';
  groupLabel: string;
  category: 'coordenacao' | 'mentorias' | 'conteudo' | 'redes' | 'parcerias' | 'recursos' | 'clube';
  badgeType: 'coord' | 'head' | 'lead';
  badgeLabel: string;
  img: string;
  fallbackImg?: string;
}

export interface TeamCategoryFilter {
  id: string;
  label: string;
}

export const teamData: TeamMember[] = [
  // COORDENAÇÃO GERAL & HEADS
  {
    id: 'gui',
    name: 'Guilherme Rodrigues',
    role: 'Coordenação Geral',
    group: 'coordenacao',
    groupLabel: 'Coordenação Geral & Heads',
    category: 'coordenacao',
    badgeType: 'coord',
    badgeLabel: 'Coordenação Geral',
    img: '/assets/perfis/gui.jpg',
  },
  {
    id: 'lany',
    name: 'Lanyelle Mota',
    role: 'Head de Curadoria de Conteúdo',
    group: 'coordenacao',
    groupLabel: 'Coordenação Geral & Heads',
    category: 'conteudo',
    badgeType: 'head',
    badgeLabel: 'Head',
    img: '/assets/perfis/lany.jpg',
  },
  {
    id: 'vi',
    name: 'Victor Braz',
    role: 'Head de Comunicação e Redes Sociais',
    group: 'coordenacao',
    groupLabel: 'Coordenação Geral & Heads',
    category: 'redes',
    badgeType: 'head',
    badgeLabel: 'Head',
    img: '/assets/perfis/vi.jpg',
  },

  // LEADS DAS FRENTES
  {
    id: 'carlos',
    name: 'Carlos Guilherme',
    role: 'Lead de Mentorias',
    group: 'leads',
    groupLabel: 'Leads de Frentes e Programas',
    category: 'mentorias',
    badgeType: 'lead',
    badgeLabel: 'Lead',
    img: '/leads/carlos-gui.png',
    fallbackImg: '/assets/perfis/carlos.png',
  },
  {
    id: 'renato',
    name: 'Renato Pina',
    role: 'Lead de Mentorias',
    group: 'leads',
    groupLabel: 'Leads de Frentes e Programas',
    category: 'mentorias',
    badgeType: 'lead',
    badgeLabel: 'Lead',
    img: '/leads/Renato.png',
    fallbackImg: '/assets/perfis/renato.png',
  },
  {
    id: 'whelyda',
    name: 'Whelyda Meira',
    role: 'Lead de Produção de Conteúdos',
    group: 'leads',
    groupLabel: 'Leads de Frentes e Programas',
    category: 'conteudo',
    badgeType: 'lead',
    badgeLabel: 'Lead',
    img: '/leads/Whelyda.png',
    fallbackImg: '/assets/perfis/whelyda.png',
  },
  {
    id: 'vanessa',
    name: 'Vanessa Sousa',
    role: 'Lead de Parcerias',
    group: 'leads',
    groupLabel: 'Leads de Frentes e Programas',
    category: 'parcerias',
    badgeType: 'lead',
    badgeLabel: 'Lead',
    img: '/leads/Vanessa.png',
    fallbackImg: '/assets/perfis/vanessa.png',
  },
  {
    id: 'gustavo',
    name: 'Gustavo Henrique',
    role: 'Lead de Redes Sociais',
    group: 'leads',
    groupLabel: 'Leads de Frentes e Programas',
    category: 'redes',
    badgeType: 'lead',
    badgeLabel: 'Lead',
    img: '/leads/Gustavo.png',
    fallbackImg: '/assets/perfis/gustavo.png',
  },
  {
    id: 'lana',
    name: 'Lana Rodrigues',
    role: 'Lead de Materiais e Recursos',
    group: 'leads',
    groupLabel: 'Leads de Frentes e Programas',
    category: 'recursos',
    badgeType: 'lead',
    badgeLabel: 'Lead',
    img: '/leads/Lana.png',
    fallbackImg: '/assets/perfis/lana.png',
  },
  {
    id: 'victoria',
    name: 'Victoria Cristina',
    role: 'Lead Clube do Livro',
    group: 'leads',
    groupLabel: 'Leads de Frentes e Programas',
    category: 'clube',
    badgeType: 'lead',
    badgeLabel: 'Lead',
    img: '/leads/Victoria.png',
    fallbackImg: '/assets/perfis/victoria.png',
  },
];

export const teamFilters: TeamCategoryFilter[] = [
  { id: 'all', label: 'Todos' },
  { id: 'coordenacao', label: 'Coordenação & Heads' },
  { id: 'leads', label: 'Leads de Frentes' },
  { id: 'mentorias', label: 'Mentorias' },
  { id: 'conteudo', label: 'Conteúdos' },
  { id: 'redes', label: 'Redes Sociais' },
  { id: 'parcerias', label: 'Parcerias' },
  { id: 'recursos', label: 'Recursos' },
  { id: 'clube', label: 'Clube do Livro' },
];
