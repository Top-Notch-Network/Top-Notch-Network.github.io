// Page meta copy. Approved CMO copy is marked; others are interim defaults (no CMO copy yet).
import { SITE } from './blog';
import type { BlogTag } from './tags';

export const SEO = {
  home: {
    // CMO — must stay exact (browser tab + search snippet).
    title: 'Top-Notch Network | IT, AI & Leadership Consulting',
    description:
      'Top-Notch Network helps businesses and leaders with IT, security, websites, and AI. Elevating those who elevate the world. Book a 15-minute review.', // CMO
  },
  services: {
    title: 'IT, AI & Leadership Consulting Services | Top-Notch Network',
    description:
      'IT and security checkups, website rebuilds, Google listings, business email, AI setup, and stewardship consulting for businesses anywhere.', // CMO
  },
  contact: {
    title: 'Top-Notch Network | Contact Us',
    description:
      'Contact Top-Notch Network. Email contact@top-notchnetwork.com or use the form to book a 15-minute review of your setup.', // CMO
  },
  blog: {
    // Full document title (BlogLayout will not re-suffix when documentTitle is set).
    title: 'IT, AI & Leadership Insights | Top-Notch Network Blog',
    description:
      'Practical IT, security, and leadership insights from Top-Notch Network. Plain-language tips to help businesses and leaders serve people well.', // CMO
  },
  about: {
    title: 'About Top-Notch Network | Stewardship-Led Consulting',
    // DEFAULT, pending CMO copy
    description:
      'About Top-Notch Network: a consulting company focused on stewardship, leadership and dependable technology for service-driven organizations.',
  },
  default: {
    // DEFAULT, pending CMO copy
    description:
      'Top-Notch Network: stewardship, leadership and IT consulting for service-driven organizations.',
  },
};

export const LOGO_SQUARE = '/tnn-logo-square.png'; // 256x256, generated from the N favicon
export const CONTACT_EMAIL = 'contact@top-notchnetwork.com';
export const ORG_ID = `${SITE.url}/#organization`;
export const WEBSITE_ID = `${SITE.url}/#website`;

/** One-sentence meta descriptions for tag pages (prefer over noindex while thin). */
export const TAG_META: Record<BlogTag, string> = {
  Leadership:
    'Leadership insights from Top-Notch Network on stewardship, executive coaching, and leading service-driven teams.',
  Governance:
    'Governance posts from Top-Notch Network on accountability, ITSM, and frameworks that keep organizations steady.',
  Security:
    'Security guidance from Top-Notch Network on patching, posture, and protecting the people you serve.',
  Cloud:
    'Cloud and infrastructure notes from Top-Notch Network on hybrid design, availability, and practical migrations.',
  AI: 'AI consulting insights from Top-Notch Network on readiness, governance, and responsible automation.',
  ITSM: 'ITSM and process posts from Top-Notch Network on ITIL practices and streamlining IT delivery.',
  'Network Update': 'Company news and network updates from Top-Notch Network.',
};

export const organizationLd = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'ProfessionalService'],
  '@id': ORG_ID,
  name: SITE.name,
  alternateName: 'TNN',
  url: `${SITE.url}/`,
  logo: `${SITE.url}${LOGO_SQUARE}`,
  slogan: 'Elevating those who elevate the world.',
  email: CONTACT_EMAIL,
  areaServed: { '@type': 'Country', name: 'United States' },
  knowsAbout: [
    'IT consulting',
    'AI consulting',
    'leadership consulting',
    'security auditing',
    'cloud architecture',
    'ITSM',
  ],
  sameAs: [
    'https://www.youtube.com/@Top-NotchNetwork',
    'https://open.spotify.com/show/3ZTzWnAOyxxd4Itx6fjsTR',
    'https://www.instagram.com/top_notch_network',
    'https://www.linkedin.com/company/tnn-llc',
    'https://clutch.co/profile/top-notch-network',
  ],
};

export const websiteLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  name: SITE.name,
  alternateName: 'TNN',
  url: `${SITE.url}/`,
  publisher: { '@id': ORG_ID },
};

/** BreadcrumbList for inner pages. items: [{ name, path }] in order; last may omit path (current page). */
export function breadcrumbLd(items: { name: string; path?: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      ...(item.path
        ? { item: new URL(item.path, SITE.url).href }
        : {}),
    })),
  };
}

/** Service offerings on /services/, matching page categories. */
export function servicesPageLd() {
  const provider = { '@id': ORG_ID };
  const services = [
    {
      '@type': 'Service',
      '@id': `${SITE.url}/services/#leadership-consulting`,
      name: 'Executive & Leadership Consulting',
      serviceType: 'Leadership consulting',
      description:
        'Executive stewardship and coaching plus organizational governance advisory for service-driven leaders.',
      provider,
      url: `${SITE.url}/services/`,
      areaServed: { '@type': 'Country', name: 'United States' },
    },
    {
      '@type': 'Service',
      '@id': `${SITE.url}/services/#it-consulting`,
      name: 'IT Infrastructure & Systems Consulting',
      serviceType: 'IT consulting',
      description:
        'Hardware and systems consulting, hybrid cloud migration strategy, and high-availability system design.',
      provider,
      url: `${SITE.url}/services/`,
      areaServed: { '@type': 'Country', name: 'United States' },
    },
    {
      '@type': 'Service',
      '@id': `${SITE.url}/services/#security-auditing`,
      name: 'Security & Process Governance',
      serviceType: 'Security auditing',
      description:
        'Impact and security posture auditing plus ITIL and ITSM process architecture.',
      provider,
      url: `${SITE.url}/services/`,
      areaServed: { '@type': 'Country', name: 'United States' },
    },
    {
      '@type': 'Service',
      '@id': `${SITE.url}/services/#ai-consulting`,
      name: 'AI & Automation Consulting',
      serviceType: 'AI consulting',
      description:
        'AI stewardship and automation strategy, including workflow automation and responsible AI governance.',
      provider,
      url: `${SITE.url}/services/`,
      areaServed: { '@type': 'Country', name: 'United States' },
    },
  ];
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      '@id': `${SITE.url}/services/#webpage`,
      url: `${SITE.url}/services/`,
      name: SEO.services.title,
      description: SEO.services.description,
      isPartOf: { '@id': WEBSITE_ID },
      about: services.map((s) => ({ '@id': s['@id'] })),
      mainEntity: services,
    },
    breadcrumbLd([
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/services/' },
    ]),
  ];
}

export function aboutPageLd() {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      '@id': `${SITE.url}/about/#webpage`,
      url: `${SITE.url}/about/`,
      name: SEO.about.title,
      description: SEO.about.description,
      isPartOf: { '@id': WEBSITE_ID },
      mainEntity: { '@id': ORG_ID },
    },
    breadcrumbLd([
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about/' },
    ]),
  ];
}

export function contactPageLd() {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      '@id': `${SITE.url}/contact/#webpage`,
      url: `${SITE.url}/contact/`,
      name: SEO.contact.title,
      description: SEO.contact.description,
      isPartOf: { '@id': WEBSITE_ID },
      mainEntity: {
        '@type': 'Organization',
        '@id': ORG_ID,
        name: SITE.name,
        email: CONTACT_EMAIL,
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'customer service',
          email: CONTACT_EMAIL,
          url: `${SITE.url}/contact/`,
          availableLanguage: 'English',
        },
      },
    },
    breadcrumbLd([
      { name: 'Home', path: '/' },
      { name: 'Contact', path: '/contact/' },
    ]),
  ];
}
