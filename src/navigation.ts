import { getAlternatePath, ui, type Lang } from './i18n';

export const getHeaderData = (lang: Lang, pathname: string) => {
  const t = ui[lang];
  const otherLang: Lang = lang === 'en' ? 'zh' : 'en';
  return {
    links: [
      { text: t.nav.services, href: `/${lang}/#services` },
      { text: t.nav.about, href: `/${lang}/#about` },
      { text: t.nav.contact, href: `/${lang}/#contact` },
      { text: t.nav.switchLang, href: getAlternatePath(pathname, otherLang) },
    ],
    actions: [],
  };
};

export const getFooterData = (lang: Lang) => {
  const t = ui[lang];
  return {
    links: [],
    secondaryLinks: [
      { text: t.footer.terms, href: `/${lang}/terms/` },
      { text: t.footer.refund, href: `/${lang}/refund/` },
      { text: t.footer.privacy, href: `/${lang}/privacy/` },
    ],
    socialLinks: [{ ariaLabel: 'Email', icon: 'tabler:mail', href: 'mailto:support@globularcluster.ca' }],
    footNote: `© ${new Date().getFullYear()} ${t.siteName} · ${t.footer.rights}`,
  };
};
