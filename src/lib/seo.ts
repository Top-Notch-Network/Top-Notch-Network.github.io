// Page meta copy. Approved CMO copy is marked; others are interim defaults (no CMO copy yet).
import { SITE } from './blog';

export const SEO = {
  home: {
    title: 'Top-Notch Network | IT, AI & Leadership Consulting', // CMO
    description: 'Top-Notch Network helps businesses and leaders with IT, security, websites, and AI. Elevating those who elevate the world. Book a 15-minute review.', // CMO
  },
  services: {
    description: 'IT and security checkups, website rebuilds, Google listings, business email, AI setup, and stewardship consulting for businesses anywhere.', // CMO
  },
  contact: {
    description: 'Contact Top-Notch Network. Email contact@top-notchnetwork.com or use the form to book a 15-minute review of your setup.', // CMO
  },
  blog: {
    description: 'Practical IT, security, and leadership insights from Top-Notch Network. Plain-language tips to help businesses and leaders serve people well.', // CMO
  },
  about: {
    // DEFAULT, pending CMO copy
    description: 'About Top-Notch Network: a consulting firm focused on stewardship, leadership and dependable technology for service-driven organizations.',
  },
  default: {
    // DEFAULT, pending CMO copy
    description: 'Top-Notch Network: stewardship, leadership and IT consulting for service-driven organizations.',
  },
};

export const LOGO_SQUARE = '/tnn-logo-square.png'; // 256x256, generated from the N favicon

export const organizationLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE.url}/#organization`,
  name: SITE.name,
  alternateName: 'TNN',
  url: `${SITE.url}/`,
  logo: `${SITE.url}${LOGO_SQUARE}`,
  sameAs: [
    'https://www.youtube.com/@Top-NotchNetwork',
    'https://open.spotify.com/show/3ZTzWnAOyxxd4Itx6fjsTR',
    'https://www.instagram.com/top_notch_network',
  ],
};

export const websiteLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE.url}/#website`,
  name: SITE.name,
  alternateName: 'TNN',
  url: `${SITE.url}/`,
  publisher: { '@id': `${SITE.url}/#organization` },
};
