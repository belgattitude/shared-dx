import type { ReadonlyDeep } from 'type-fest';

type NavLink = {
  href: string;
  title: string;
};

export type BaseSiteConfig = {
  defaultHtmlLang: 'en' | 'fr';
  mainNavLinks: NavLink[];
};

export const siteConfig = {
  defaultHtmlLang: 'en',
  mainNavLinks: [
    { title: 'Accueil', href: '/' },
    { title: 'Blog', href: '/blog' },
  ],
} as const satisfies ReadonlyDeep<BaseSiteConfig>;

export type SiteConfig = typeof siteConfig;
