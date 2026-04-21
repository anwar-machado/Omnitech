import { Injectable, signal, computed } from '@angular/core';

export type Lang = 'pt' | 'en';

const translations = {
  pt: {
    nav: {
      home: 'Início',
      features: 'Funcionalidades',
      portfolio: 'Portfólio',
      contact: 'Contacte-nos',
      login: 'Entrar',
      register: 'Começar',
    },
    hero: {
      badge: 'TECNOLOGIA QUE TRANSFORMA',
      title1: 'Soluções digitais',
      title2: 'sob medida',
      title3: 'para o seu negócio',
      subtitle:
        'Da criação de websites e e-commerce ao desenvolvimento de sistemas personalizados — a Omnitech transforma a tecnologia em vantagem competitiva para o seu negócio.',
      cta1: 'Fale Connosco',
      cta2: 'Ver Portfólio',
      pills: ['Websites & E-commerce', 'Sistemas à Medida', 'Marketing Digital', 'Suporte Técnico'],
    },
    stats: [
      { value: '30+', label: 'Projetos' },
      { value: '4 Anos', label: 'Experiência' },
      { value: '98%', label: 'Satisfação' },
      { value: '24h', label: 'Suporte' },
    ],
    features: {
      label: 'O QUE FAZEMOS',
      title: 'Tudo que o seu negócio precisa',
      subtitle: 'Software personalizado e soluções digitais completas — numa única parceria de confiança.',
      items: [
        {
          icon: 'pi pi-globe',
          title: 'Websites & Landing Pages',
          description: 'Sites modernos, rápidos e responsivos. Do portfólio institucional à landing page de alta conversão.',
        },
        {
          icon: 'pi pi-shopping-cart',
          title: 'E-commerce',
          description: 'Lojas online prontas a vender com gestão de stock, pagamentos integrados e painel de administração.',
        },
        {
          icon: 'pi pi-code',
          title: 'Sistemas à Medida',
          description: 'ERP, CRM, plataformas internas — desenvolvemos exatamente o que a sua empresa precisa, sem soluções genéricas.',
        },
        {
          icon: 'pi pi-chart-bar',
          title: 'Marketing Digital & SEO',
          description: 'Estratégia de conteúdo, Google Ads e otimização para motores de busca que trazem mais clientes ao seu negócio.',
        },
        {
          icon: 'pi pi-mobile',
          title: 'Aplicações Mobile',
          description: 'Apps iOS e Android nativas ou híbridas, com design intuitivo e experiência de utilizador de topo.',
        },
        {
          icon: 'pi pi-shield',
          title: 'Segurança & Manutenção',
          description: 'Monitorização contínua, backups automáticos, atualizações e suporte técnico dedicado ao seu sistema.',
        },
      ],
    },
    portfolio: {
      label: 'PORTFÓLIO',
      title: 'Projetos que falam por nós',
      subtitle: 'Uma seleção do nosso trabalho em desenvolvimento de software.',
      tabs: ['Todos', 'Websites', 'Sistemas', 'Mobile'],
      items: [
        {
          type: 'Websites',
          tag: 'E-commerce',
          title: 'Loja Multimarca Moz',
          description: 'Plataforma de e-commerce com +800 SKUs, pagamento por Multicaixa Express e painel de gestão.',
          color: '#3B82F6',
        },
        {
          type: 'Sistemas',
          tag: 'ERP',
          title: 'Sistema de Gestão Logística',
          description: 'ERP de gestão de frotas e logística para empresa com 40+ veículos em operação nacional.',
          color: '#10B981',
        },
        {
          type: 'Websites',
          tag: 'Website',
          title: 'Portal Institucional',
          description: 'Website corporativo com CMS personalizado, multilingue (PT/EN) e integração com CRM.',
          color: '#EC4899',
        },
        {
          type: 'Mobile',
          tag: 'App Mobile',
          title: 'App de Delivery',
          description: 'Aplicação iOS e Android para serviço de entregas com rastreamento em tempo real e pagamento integrado.',
          color: '#8B5CF6',
        },
        {
          type: 'Sistemas',
          tag: 'SaaS',
          title: 'Plataforma de RH',
          description: 'Sistema de gestão de recursos humanos com módulos de recrutamento, folha de pagamento e avaliação.',
          color: '#F59E0B',
        },
        {
          type: 'Websites',
          tag: 'Landing Page',
          title: 'Campanha de Marketing',
          description: 'Landing page de alta conversão para lançamento de produto com A/B testing e analytics integrado.',
          color: '#14B8A6',
        },
      ],
    },
    contact: {
      label: 'CONTACTE-NOS',
      title: 'Pronto para começar?',
      subtitle: 'Conte-nos o seu projeto. Respondemos em menos de 24 horas.',
      info: [
        { icon: 'pi pi-map-marker', label: 'Localização', value: 'Moçambique, Maputo' },
        { icon: 'pi pi-phone', label: 'Telefone', value: '+258 84 720 66 38' },
        { icon: 'pi pi-envelope', label: 'E-mail', value: 'raymachado90@gmail.com' },
      ],
      form: {
        name: 'Nome completo',
        email: 'E-mail',
        subject: 'Assunto',
        subjectOptions: [
          'Desenvolvimento de Website',
          'E-commerce',
          'Sistema à Medida',
          'App Mobile',
          'Marketing Digital',
          'Outro',
        ],
        message: 'Mensagem',
        send: 'Enviar Mensagem',
      },
    },
    footer: {
      description:
        'Software sob medida e soluções digitais completas — para empresas moçambicanas que querem crescer com tecnologia.',
      services: 'Serviços',
      company: 'Empresa',
      serviceLinks: ['Websites', 'E-commerce', 'Sistemas', 'Mobile', 'Suporte'],
      companyLinks: ['Sobre Nós', 'Portfólio', 'Carreiras', 'Blog', 'Contacto'],
      copy: 'Todos os direitos reservados.',
      terms: 'Termos',
      privacy: 'Privacidade',
      cookies: 'Cookies',
    },
  },

  en: {
    nav: {
      home: 'Home',
      features: 'Features',
      portfolio: 'Portfolio',
      contact: 'Contact Us',
      login: 'Login',
      register: 'Get Started',
    },
    hero: {
      badge: 'TECHNOLOGY THAT TRANSFORMS',
      title1: 'Digital solutions',
      title2: 'tailored',
      title3: 'for your business',
      subtitle:
        'From websites and e-commerce to custom software systems — Omnitech turns technology into a competitive advantage for your business.',
      cta1: 'Contact Us',
      cta2: 'View Portfolio',
      pills: ['Websites & E-commerce', 'Custom Systems', 'Digital Marketing', 'Tech Support'],
    },
    stats: [
      { value: '30+', label: 'Projects' },
      { value: '4 Yrs', label: 'Experience' },
      { value: '98%', label: 'Satisfaction' },
      { value: '24h', label: 'Support' },
    ],
    features: {
      label: 'WHAT WE DO',
      title: 'Everything your business needs',
      subtitle: 'Custom software and complete digital solutions — in one trusted partnership.',
      items: [
        {
          icon: 'pi pi-globe',
          title: 'Websites & Landing Pages',
          description: 'Modern, fast, responsive websites. From institutional portfolios to high-conversion landing pages.',
        },
        {
          icon: 'pi pi-shopping-cart',
          title: 'E-commerce',
          description: 'Online stores ready to sell with stock management, integrated payments and an admin dashboard.',
        },
        {
          icon: 'pi pi-code',
          title: 'Custom Systems',
          description: 'ERP, CRM, internal platforms — we build exactly what your company needs, no generic solutions.',
        },
        {
          icon: 'pi pi-chart-bar',
          title: 'Digital Marketing & SEO',
          description: 'Content strategy, Google Ads and search engine optimization that bring more customers to your business.',
        },
        {
          icon: 'pi pi-mobile',
          title: 'Mobile Apps',
          description: 'Native or hybrid iOS and Android apps with intuitive design and a top-tier user experience.',
        },
        {
          icon: 'pi pi-shield',
          title: 'Security & Maintenance',
          description: 'Continuous monitoring, automatic backups, updates and dedicated technical support for your system.',
        },
      ],
    },
    portfolio: {
      label: 'PORTFOLIO',
      title: 'Projects that speak for themselves',
      subtitle: 'A selection of our software development work.',
      tabs: ['All', 'Websites', 'Systems', 'Mobile'],
      items: [
        {
          type: 'Websites',
          tag: 'E-commerce',
          title: 'Multi-brand Store Mozambique',
          description: 'E-commerce platform with 800+ SKUs, Multicaixa Express payment and management dashboard.',
          color: '#3B82F6',
        },
        {
          type: 'Systems',
          tag: 'ERP',
          title: 'Logistics Management System',
          description: 'Fleet and logistics ERP for a company with 40+ vehicles in national operation.',
          color: '#10B981',
        },
        {
          type: 'Websites',
          tag: 'Website',
          title: 'Corporate Portal',
          description: 'Corporate website with custom CMS, multilingual (PT/EN) and CRM integration.',
          color: '#EC4899',
        },
        {
          type: 'Mobile',
          tag: 'Mobile App',
          title: 'Delivery App',
          description: 'iOS and Android app for delivery service with real-time tracking and integrated payment.',
          color: '#8B5CF6',
        },
        {
          type: 'Systems',
          tag: 'SaaS',
          title: 'HR Platform',
          description: 'Human resources management system with recruitment, payroll and performance evaluation modules.',
          color: '#F59E0B',
        },
        {
          type: 'Websites',
          tag: 'Landing Page',
          title: 'Marketing Campaign',
          description: 'High-conversion landing page for a product launch with A/B testing and integrated analytics.',
          color: '#14B8A6',
        },
      ],
    },
    contact: {
      label: 'CONTACT US',
      title: 'Ready to get started?',
      subtitle: 'Tell us about your project. We respond in less than 24 hours.',
      info: [
        { icon: 'pi pi-map-marker', label: 'Location', value: 'Maputo, Mozambique' },
        { icon: 'pi pi-phone', label: 'Phone', value: '+258 84 720 66 38' },
        { icon: 'pi pi-envelope', label: 'Email', value: 'raymachado90@gmail.com' },
      ],
      form: {
        name: 'Full name',
        email: 'E-mail',
        subject: 'Subject',
        subjectOptions: [
          'Website Development',
          'E-commerce',
          'Custom System',
          'Mobile App',
          'Digital Marketing',
          'Other',
        ],
        message: 'Message',
        send: 'Send Message',
      },
    },
    footer: {
      description:
        'Custom software and complete digital solutions — for Mozambican businesses that want to grow with technology.',
      services: 'Services',
      company: 'Company',
      serviceLinks: ['Websites', 'E-commerce', 'Systems', 'Mobile', 'Support'],
      companyLinks: ['About Us', 'Portfolio', 'Careers', 'Blog', 'Contact'],
      copy: 'All rights reserved.',
      terms: 'Terms',
      privacy: 'Privacy Policy',
      cookies: 'Cookies',
    },
  },
};

@Injectable({ providedIn: 'root' })
export class I18nService {
  readonly lang = signal<Lang>('pt');
  readonly t = computed(() => translations[this.lang()]);

  toggle() {
    this.lang.update(l => (l === 'pt' ? 'en' : 'pt'));
  }
}
