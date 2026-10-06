import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import { Intro, Offices, Compare, Serviced, Licence } from '../components/Offices'
import { Why, Steps, Location, Reviews, Guides, FAQ, FinalCTA, WhatsAppFab } from '../components/More'
import {
  SITE_URL, MAIN_SITE, PAGE_TITLE, PAGE_DESCRIPTION, DATE_PUBLISHED, DATE_MODIFIED,
  BUSINESS, offices, faqs, guides, keywords,
} from '../data/content'

const OG_IMAGE = `${SITE_URL}/og-image.jpg`
const BUSINESS_ID = `${MAIN_SITE}/#business`
const priceValidUntil = `${new Date().getFullYear()}-12-31`

const schemaGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite', '@id': `${SITE_URL}/#website`, url: `${SITE_URL}/`,
      name: 'Office Space in ADGM — Aegis Coworking', inLanguage: 'en-AE',
      publisher: { '@id': `${MAIN_SITE}/#organization` },
    },
    {
      '@type': 'WebPage', '@id': `${SITE_URL}/#webpage`, url: `${SITE_URL}/`,
      name: PAGE_TITLE, description: PAGE_DESCRIPTION, inLanguage: 'en-AE',
      isPartOf: { '@id': `${SITE_URL}/#website` }, about: { '@id': BUSINESS_ID },
      primaryImageOfPage: OG_IMAGE, datePublished: DATE_PUBLISHED, dateModified: DATE_MODIFIED,
      breadcrumb: { '@id': `${SITE_URL}/#breadcrumb` },
      keywords: keywords.join(', '),
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['#hero-title', '.answer'] },
    },
    {
      '@type': 'BreadcrumbList', '@id': `${SITE_URL}/#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Aegis Coworking', item: `${MAIN_SITE}/` },
        { '@type': 'ListItem', position: 2, name: 'Office Space in ADGM', item: `${SITE_URL}/` },
      ],
    },
    {
      '@type': 'Organization', '@id': `${MAIN_SITE}/#organization`, name: BUSINESS.name,
      url: MAIN_SITE, logo: `${MAIN_SITE}/logo.png`, sameAs: BUSINESS.sameAs,
    },
    {
      '@type': 'LocalBusiness', '@id': BUSINESS_ID, name: BUSINESS.name, alternateName: 'Aegis Coworking',
      description: 'Office space provider and business centre in ADGM, Addax Tower, Al Reem Island, Abu Dhabi — serviced office, private office, dedicated desk, flexi desk, virtual office and meeting room.',
      url: MAIN_SITE, logo: `${MAIN_SITE}/logo.png`, image: [OG_IMAGE], telephone: '+971503926316',
      email: BUSINESS.email, priceRange: 'AED 100 – AED 4,500', currenciesAccepted: 'AED',
      address: { '@type': 'PostalAddress', streetAddress: BUSINESS.street, addressLocality: 'Abu Dhabi', addressRegion: 'Abu Dhabi', addressCountry: 'AE' },
      geo: { '@type': 'GeoCoordinates', latitude: BUSINESS.lat, longitude: BUSINESS.lng },
      hasMap: BUSINESS.mapsUrl,
      openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], opens: '00:00', closes: '23:59' }],
      areaServed: [{ '@type': 'Place', name: 'Abu Dhabi Global Market (ADGM)' }, { '@type': 'Place', name: 'Al Reem Island' }, { '@type': 'City', name: 'Abu Dhabi' }],
      sameAs: BUSINESS.sameAs,
    },
    {
      '@type': 'Service', '@id': `${SITE_URL}/#service`, name: 'Office Space in ADGM',
      serviceType: 'Serviced office space', provider: { '@id': BUSINESS_ID },
      areaServed: { '@type': 'Place', name: 'Abu Dhabi Global Market (ADGM), Abu Dhabi' },
      description: PAGE_DESCRIPTION,
      hasOfferCatalog: {
        '@type': 'OfferCatalog', name: 'Office space for rent in ADGM',
        itemListElement: offices.map((o) => ({
          '@type': 'Offer', name: o.name, url: o.href,
          ...(o.priceNum ? {
            price: o.priceNum, priceCurrency: 'AED', priceValidUntil,
            priceSpecification: { '@type': 'UnitPriceSpecification', price: o.priceNum, priceCurrency: 'AED', unitText: o.priceUnit },
          } : {}),
          availability: 'https://schema.org/InStock',
          itemOffered: { '@type': 'Service', name: o.name },
        })),
      },
    },
    {
      '@type': 'FAQPage', '@id': `${SITE_URL}/#faq`,
      mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
    {
      '@type': 'ItemList', '@id': `${SITE_URL}/#guides`, name: 'ADGM office guides',
      itemListElement: guides.map((g, i) => ({ '@type': 'ListItem', position: i + 1, name: g.title, url: g.url })),
    },
  ],
}

function OfficeSpacePage() {
  const [active, setActive] = useState('dedicated-desk')

  // Pick an office (from the floor plan, licence guide or table) and bring the tabs into view
  const pick = (id) => {
    setActive(id)
    if (typeof document !== 'undefined') {
      document.getElementById('offices')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      <Helmet>
        <html lang="en-AE" />
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
        <link rel="canonical" href={`${SITE_URL}/`} />
        <link rel="alternate" hrefLang="en-ae" href={`${SITE_URL}/`} />
        <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/`} />
        <meta name="geo.region" content="AE-AZ" />
        <meta name="geo.placename" content="Al Reem Island, Abu Dhabi" />
        <meta name="geo.position" content={`${BUSINESS.lat};${BUSINESS.lng}`} />
        <meta name="ICBM" content={`${BUSINESS.lat}, ${BUSINESS.lng}`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Aegis Coworking" />
        <meta property="og:locale" content="en_AE" />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESCRIPTION} />
        <meta property="og:url" content={`${SITE_URL}/`} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:alt" content="Aegis Coworking office space in ADGM, Addax Tower, Al Reem Island" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_TITLE} />
        <meta name="twitter:description" content={PAGE_DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE} />
        <script type="application/ld+json">{JSON.stringify(schemaGraph)}</script>
      </Helmet>

      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero onPick={pick} />
        <Intro />
        <Offices active={active} setActive={setActive} />
        <Compare setActive={pick} />
        <Serviced />
        <Licence setActive={pick} />
        <Why />
        <Steps />
        <Location />
        <Reviews />
        <Guides />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  )
}

export default OfficeSpacePage
