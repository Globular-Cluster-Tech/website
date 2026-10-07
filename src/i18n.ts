export const LANGUAGES = ['en', 'zh'] as const;
export type Lang = (typeof LANGUAGES)[number];

export const DEFAULT_LANG: Lang = 'en';

/** Language of a page, taken from the first path segment (`/zh/...`). */
export const getLangFromPath = (pathname: string): Lang => {
  const segment = pathname.split('/').filter(Boolean)[0];
  return (LANGUAGES as readonly string[]).includes(segment) ? (segment as Lang) : DEFAULT_LANG;
};

/** Same page in the other language: `/en/terms/` <-> `/zh/terms/`. */
export const getAlternatePath = (pathname: string, lang: Lang): string => {
  const rest = pathname.split('/').filter(Boolean).slice(1).join('/');
  return `/${lang}/${rest ? `${rest}/` : ''}`;
};

export const HTML_LANG: Record<Lang, string> = { en: 'en', zh: 'zh-CN' };
export const OG_LOCALE: Record<Lang, string> = { en: 'en_CA', zh: 'zh_CN' };

export const SUPPORT_EMAIL = 'support@globularcluster.ca';
export const FORMSPREE_ACTION = 'https://formspree.io/f/xpwdpldp';

export const ui = {
  en: {
    siteName: 'Globular Cluster Technology Software Limited',
    description:
      'Empowering Your Business with Expert IT Solutions for Cloud Optimization, Business Efficiency, and Digital Transformation.',
    nav: {
      services: 'Services',
      about: 'About',
      contact: 'Contact',
      switchLang: '中文',
    },
    hero: {
      button: 'Tell Me More',
      imageAlt: 'Illustration of a globular cluster',
    },
    services: {
      title: 'Services',
      subtitle: 'Our professional services',
      items: [
        {
          title: 'AWS Cloud Platform Cost Saving',
          description:
            'We perform in-depth analysis of your AWS usage, identify optimization opportunities, provide expert cost reduction strategies (such as reserved instances, spot instances, auto scaling optimization, etc.), and assist with implementation. Without sacrificing performance or availability, we significantly reduce your cloud spending and improve cost-effectiveness.',
          icon: 'tabler:cloud',
        },
        {
          title: 'Company IT Business Optimization',
          description:
            'We conduct a comprehensive assessment of your current IT infrastructure and business processes to identify pain points and bottlenecks. We offer solutions including automation, standardization of processes, and introduction of new technologies to help you enhance IT operational efficiency, simplify management, and ensure your IT systems better support business growth and overall competitiveness.',
          icon: 'tabler:chart-arrows-vertical',
        },
        {
          title: 'Company Website Design and Construction',
          description:
            'Professional website design and development services, from requirements gathering and UI/UX design to front-end development and back-end integration. We build websites that align with your brand identity, are user-friendly, fully functional, and responsive, helping you establish a professional online presence and expand your business channels.',
          icon: 'tabler:world-www',
        },
        {
          title: 'Enterprise IT Desktop Operations & Maintenance',
          description:
            'Provide timely and professional IT desktop support services for your employees, including hardware and software installation, configuration, troubleshooting, system maintenance, and upgrades. Ensure stable operation of employee workstations, resolve daily issues, and improve work efficiency.',
          icon: 'tabler:device-desktop',
        },
        {
          title: 'Enterprise IT Business Operations & Maintenance',
          description:
            'Offer continuous monitoring, maintenance, incident response, capacity management, and performance optimization services for your critical business systems (such as servers, databases, applications, networks, storage, etc.). Through proactive operations and rapid response mechanisms, we ensure high availability, high performance, and secure stable operation of your business systems.',
          icon: 'tabler:server',
        },
      ],
    },
    about: {
      title: 'About Us',
      tagline: 'Our story',
      body: 'Globular Cluster Technology Software Limited is a technology company specializing in providing high-value IT consulting, optimization, and operations and maintenance services. We are committed to leveraging cutting-edge technology and extensive industry experience to help clients solve IT challenges, improve efficiency, reduce costs, and drive business innovation and growth.',
    },
    contact: {
      title: 'Contact Us',
      subtitle: `We are here to help you. Please contact us for any questions or inquiries. Email: ${SUPPORT_EMAIL}`,
      name: 'Name*',
      email: 'Email*',
      phone: 'Phone Number',
      message: 'Message*',
      subject: 'Contact Form Submission',
      submit: 'Send Message',
    },
    footer: {
      terms: 'Terms of Service',
      refund: 'Refund Policy',
      privacy: 'Privacy Policy',
      rights: 'All rights reserved.',
    },
    notFound: {
      title: 'Page not found',
      text: 'Sorry, the page you are looking for does not exist.',
      button: 'Back to Home',
    },
  },
  zh: {
    siteName: '球状星团科技软件有限公司',
    description: '通过专业的IT解决方案，为您的业务提供云优化、业务效率和数字化转型支持。',
    nav: {
      services: '服务',
      about: '关于我们',
      contact: '联系我们',
      switchLang: 'English',
    },
    hero: {
      button: '告诉我更多',
      imageAlt: '球状星团插图',
    },
    services: {
      title: '服务',
      subtitle: '我们的专业服务',
      items: [
        {
          title: 'AWS云平台成本节省',
          description:
            '我们进行深入分析您的AWS使用情况，识别优化机会，提供专家成本减少策略（如保留实例、竞价实例、自动扩展优化等），并协助实施。在不牺牲性能或可用性的情况下，我们显著减少您的云支出并提高成本效益。',
          icon: 'tabler:cloud',
        },
        {
          title: '公司IT业务优化',
          description:
            '我们对您当前的IT基础设施和业务流程进行全面评估，识别痛点和瓶颈。我们提供包括自动化、流程标准化和新技术引入在内的解决方案，帮助您提高IT运营效率，简化管理，确保您的IT系统更好地支持业务增长和整体竞争力。',
          icon: 'tabler:chart-arrows-vertical',
        },
        {
          title: '公司网站设计和建设',
          description:
            '专业的网站设计和开发服务，从需求收集和UI/UX设计到前端开发和后端集成。我们构建符合您品牌形象、用户友好、功能齐全且响应迅速的网站，帮助您建立专业的在线形象并扩展业务渠道。',
          icon: 'tabler:world-www',
        },
        {
          title: '企业IT桌面运维',
          description:
            '为您的员工提供及时专业的IT桌面支持服务，包括硬件和软件安装、配置、故障排除、系统维护和升级。确保员工工作站稳定运行，解决日常问题，提高工作效率。',
          icon: 'tabler:device-desktop',
        },
        {
          title: '企业IT业务运维',
          description:
            '为您的关键业务系统（如服务器、数据库、应用程序、网络、存储等）提供持续监控、维护、事件响应、容量管理和性能优化服务。通过主动运维和快速响应机制，确保您的业务系统高可用、高性能和安全稳定运行。',
          icon: 'tabler:server',
        },
      ],
    },
    about: {
      title: '关于我们',
      tagline: '我们的故事',
      body: '球状星团科技软件有限公司是一家专注于提供高价值IT咨询、优化及运维服务的科技公司。我们致力于利用前沿技术和丰富的行业经验，帮助客户解决IT挑战，提升效率，降低成本，驱动业务创新和增长。',
    },
    contact: {
      title: '联系我们',
      subtitle: `我们在这里为您提供帮助。请随时联系我们，提出任何问题或咨询。邮箱：${SUPPORT_EMAIL}`,
      name: '姓名*',
      email: '邮箱*',
      phone: '电话号码',
      message: '消息*',
      subject: '联系表单提交',
      submit: '发送消息',
    },
    footer: {
      terms: '服务条款',
      refund: '退款政策',
      privacy: '隐私政策',
      rights: '保留所有权利。',
    },
    notFound: {
      title: '页面不存在',
      text: '抱歉，您访问的页面不存在。',
      button: '返回首页',
    },
  },
} as const;
