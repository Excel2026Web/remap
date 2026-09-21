import { JetBrains_Mono, Space_Grotesk } from 'next/font/google';
import './globals.css';
import type { Metadata } from 'next';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

const SITE_URL = 'https://remap.excelmec.org';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'REMAP 3.0 — All Kerala Hardware Convention | Excel 2026',
    template: '%s | REMAP 3.0',
  },
  description:
    'REMAP 3.0 is an overnight All-Kerala Hardware Convention at Model Engineering College, Thrikkakara, part of Excel 2026. B.Tech students explore electronics, CAD, prototyping and project-building alongside an industrial visit to Kerala Startup Mission (KSUM).',
  keywords: [
    'REMAP 3.0',
    'All Kerala Hardware Convention',
    'Excel 2026',
    'Model Engineering College',
    'MEC Thrikkakara',
    'hardware hackathon Kerala',
    'B.Tech hardware event',
    'electronics workshop Kerala',
    'CAD session',
    'prototyping event Kerala',
    'KSUM industrial visit',
    'overnight hardware event',
    'Kerala engineering fest 2026',
  ],
  authors: [{ name: 'Excel MEC', url: 'https://excelmec.org' }],
  creator: 'Excel MEC',
  publisher: 'Excel MEC',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: 'REMAP 3.0 — Excel 2026',
    title: 'REMAP 3.0 — All Kerala Hardware Convention | Excel 2026',
    description:
      'Join 1st–4th year B.Tech students for an overnight hardware experience: electronics, CAD, prototyping, project-building & a visit to KSUM. Sept 19–20, 2026 · Model Engineering College, Thrikkakara.',
    images: [
      {
        url: '/hero.png',
        width: 1200,
        height: 630,
        alt: 'REMAP 3.0 — All Kerala Hardware Convention at Model Engineering College, Thrikkakara',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'REMAP 3.0 — All Kerala Hardware Convention | Excel 2026',
    description:
      'Overnight hardware convention for B.Tech students · Electronics, CAD, prototyping & KSUM visit · Sept 19–20, 2026 · MEC Thrikkakara',
    images: ['/hero.png'],
    creator: '@excelmec',
    site: '@excelmec',
  },
  alternates: {
    canonical: SITE_URL,
  },
  category: 'technology',
  other: {
    'theme-color': '#07080a',
  },
};

// JSON-LD Event structured data for Google rich results
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'REMAP 3.0 — All Kerala Hardware Convention',
  description:
    'An overnight hardware convention for B.Tech students featuring electronics, CAD, prototyping, project-building sessions, and an industrial visit to Kerala Startup Mission (KSUM). Part of Excel 2026 at Model Engineering College, Thrikkakara.',
  startDate: '2026-09-19T09:00:00+05:30',
  endDate: '2026-09-20T10:30:00+05:30',
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  location: {
    '@type': 'Place',
    name: 'Government Model Engineering College',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Thrikkakara',
      addressLocality: 'Kochi',
      addressRegion: 'Kerala',
      postalCode: '682021',
      addressCountry: 'IN',
    },
  },
  organizer: {
    '@type': 'Organization',
    name: 'Excel MEC',
    url: 'https://excelmec.org',
  },
  offers: {
    '@type': 'Offer',
    price: '999',
    priceCurrency: 'INR',
    availability: 'https://schema.org/InStock',
    url: 'https://docs.google.com/forms/d/e/1FAIpQLSe4iPaS7BO9UhEDcqssqP7z12Xtt0Adty6XOY45l37Y5xCgZw/viewform',
    validFrom: '2026-09-01T00:00:00+05:30',
  },
  image: [`${SITE_URL}/hero.png`],
  url: SITE_URL,
  typicalAgeRange: '18-25',
  audience: {
    '@type': 'EducationalAudience',
    educationalRole: 'student',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
