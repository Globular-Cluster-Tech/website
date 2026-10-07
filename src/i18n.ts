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
      'AI consulting, cloud cost optimization and IT operations for businesses — from strategy to production.',
    nav: {
      ai: 'AI Consulting',
      services: 'Cloud & IT',
      process: 'How We Work',
      about: 'About',
      contact: 'Contact',
      switchLang: '中文',
    },
    hero: {
      badge: 'AI · Cloud · IT Operations',
      titleBefore: 'Put ',
      titleHighlight: 'AI',
      titleAfter: ' to work in your business',
      subtitle:
        'We help businesses plan, build and run practical AI solutions — on top of cost-efficient cloud and reliable IT operations.',
      primary: 'Explore AI services',
      secondary: 'Talk to us',
    },
    ai: {
      tagline: 'New',
      title: 'AI Consulting',
      subtitle: 'From strategy to production — AI that fits your business, budget and compliance needs.',
      items: [
        {
          title: 'AI Strategy & Roadmap',
          description:
            'We assess where AI can create real value in your business, compare models and platforms, and deliver a prioritized roadmap with clear scope, cost and risk.',
          icon: 'tabler:route',
        },
        {
          title: 'LLM Application Development',
          description:
            'AI assistants, knowledge-base Q&A (RAG), AI agents and workflow automation, built on leading large language models and integrated with your existing systems.',
          icon: 'tabler:message-chatbot',
        },
        {
          title: 'AI Tools Adoption & Training',
          description:
            'Roll out AI productivity and coding tools across your team, set usage guidelines, and train staff to use them effectively and safely.',
          icon: 'tabler:school',
        },
        {
          title: 'AI Cloud Cost & Security Compliance',
          description:
            'Optimize the cloud cost of AI workloads, and put data protection, access control and privacy compliance in place for your AI systems.',
          icon: 'tabler:shield-lock',
        },
      ],
    },
    services: {
      tagline: 'Foundation',
      title: 'Cloud & IT Services',
      subtitle: 'The foundation AI runs on: efficient cloud, streamlined IT and dependable operations.',
      items: [
        {
          title: 'AWS Cloud Cost Optimization',
          description:
            'In-depth analysis of your AWS usage, using reserved and spot instances, auto scaling and rightsizing to cut cloud spend without sacrificing performance or availability.',
          icon: 'tabler:cloud-dollar',
        },
        {
          title: 'IT Business Optimization',
          description:
            'We assess your IT infrastructure and processes and remove bottlenecks with automation, standardization and new technology, so IT better supports growth.',
          icon: 'tabler:chart-arrows-vertical',
        },
        {
          title: 'Website Design & Development',
          description:
            'From requirements and UI/UX design to front-end and back-end development — responsive websites that match your brand and grow your business.',
          icon: 'tabler:world-www',
        },
        {
          title: 'IT Desktop Support',
          description:
            'Installation, configuration, troubleshooting, maintenance and upgrades for employee hardware and software, keeping workstations stable and staff productive.',
          icon: 'tabler:device-desktop',
        },
        {
          title: 'Business Systems Operations',
          description:
            'Monitoring, maintenance, incident response, capacity management and performance tuning for servers, databases, applications, networks and storage.',
          icon: 'tabler:server',
        },
      ],
    },
    process: {
      tagline: 'Process',
      title: 'How We Work',
      steps: [
        { title: 'Assess', description: 'Understand your goals, systems and constraints.' },
        { title: 'Design', description: 'Propose a solution with clear scope, cost and timeline.' },
        { title: 'Build', description: 'Implement, integrate and test together with your team.' },
        { title: 'Operate', description: 'Monitor, optimize and support after launch.' },
      ],
    },
    about: {
      title: 'About Us',
      tagline: 'Our story',
      body: 'Globular Cluster Technology Software Limited is a technology company based in Vancouver, Canada. We combine AI, cloud and IT operations expertise to help businesses solve real problems, improve efficiency, reduce costs, and drive innovation and growth.',
    },
    contact: {
      tagline: 'Contact',
      title: 'Start a Conversation',
      subtitle: `Tell us about your project or question. We will get back to you by email. You can also write to ${SUPPORT_EMAIL}.`,
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
    description: '为企业提供 AI 咨询、云成本优化与 IT 运维服务，从战略规划到落地运行。',
    nav: {
      ai: 'AI 咨询',
      services: '云与 IT',
      process: '合作方式',
      about: '关于我们',
      contact: '联系我们',
      switchLang: 'English',
    },
    hero: {
      badge: 'AI · 云 · IT 运维',
      titleBefore: '让 ',
      titleHighlight: 'AI',
      titleAfter: ' 真正为您的业务所用',
      subtitle: '我们帮助企业规划、构建并运行切实可行的 AI 解决方案，并以高性价比的云平台和稳定的 IT 运维作为支撑。',
      primary: '了解 AI 服务',
      secondary: '联系我们',
    },
    ai: {
      tagline: '新服务',
      title: 'AI 咨询',
      subtitle: '从战略到上线，打造契合业务、预算与合规要求的 AI 方案。',
      items: [
        {
          title: 'AI 战略与落地规划',
          description:
            '评估 AI 在您业务中真正能创造价值的场景，对比模型与平台，制定范围、成本和风险清晰、按优先级排列的落地路线图。',
          icon: 'tabler:route',
        },
        {
          title: '大模型应用开发',
          description:
            '基于主流大模型，开发智能助手、企业知识库问答（RAG）、AI Agent 和流程自动化，并与您现有的系统集成。',
          icon: 'tabler:message-chatbot',
        },
        {
          title: 'AI 工具引入与培训',
          description: '为团队部署 AI 办公与编程工具，制定使用规范，并开展培训，让员工高效、安全地使用 AI。',
          icon: 'tabler:school',
        },
        {
          title: 'AI 云成本与安全合规',
          description: '优化 AI 工作负载的云成本，为 AI 系统落实数据保护、访问控制与隐私合规。',
          icon: 'tabler:shield-lock',
        },
      ],
    },
    services: {
      tagline: '基础服务',
      title: '云与 IT 服务',
      subtitle: 'AI 运行的基础：高效的云、精简的 IT 与可靠的运维。',
      items: [
        {
          title: 'AWS 云成本优化',
          description:
            '深入分析 AWS 使用情况，通过预留实例、竞价实例、自动扩展和规格优化等手段，在不牺牲性能和可用性的前提下降低云支出。',
          icon: 'tabler:cloud-dollar',
        },
        {
          title: 'IT 业务优化',
          description: '评估 IT 基础设施与业务流程，通过自动化、流程标准化和新技术消除瓶颈，让 IT 更好地支撑业务增长。',
          icon: 'tabler:chart-arrows-vertical',
        },
        {
          title: '网站设计与开发',
          description: '从需求梳理、UI/UX 设计到前后端开发，打造契合品牌、响应式的企业网站，拓展业务渠道。',
          icon: 'tabler:world-www',
        },
        {
          title: 'IT 桌面运维',
          description: '为员工提供软硬件安装、配置、故障排除、维护和升级，保障工作站稳定运行，提升工作效率。',
          icon: 'tabler:device-desktop',
        },
        {
          title: '业务系统运维',
          description: '为服务器、数据库、应用、网络和存储提供监控、维护、事件响应、容量管理和性能优化。',
          icon: 'tabler:server',
        },
      ],
    },
    process: {
      tagline: '流程',
      title: '合作方式',
      steps: [
        { title: '评估', description: '了解您的目标、现有系统与约束条件。' },
        { title: '设计', description: '提出范围、成本和周期清晰的方案。' },
        { title: '实施', description: '与您的团队一起实施、集成和测试。' },
        { title: '运营', description: '上线后持续监控、优化和支持。' },
      ],
    },
    about: {
      title: '关于我们',
      tagline: '我们的故事',
      body: '球状星团科技软件有限公司是一家位于加拿大温哥华的科技公司。我们融合 AI、云计算与 IT 运维经验，帮助企业解决实际问题、提升效率、降低成本，驱动业务创新与增长。',
    },
    contact: {
      tagline: '联系',
      title: '开始沟通',
      subtitle: `告诉我们您的项目或问题，我们会通过邮件回复您。也可以直接发邮件至 ${SUPPORT_EMAIL}。`,
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
