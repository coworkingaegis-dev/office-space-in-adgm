// ---------------------------------------------------------------------------
// Single source of truth for the "Office Space in ADGM" micro-site.
// Prices and facts come from www.aegiscoworking.ae (office-space page).
// Edit this file — not the components — when prices, FAQs or blogs change.
// ---------------------------------------------------------------------------

import heroImg from '../assets/office-space-in-adgm-addax-tower.webp'
import hotDeskImg from '../assets/hot-desk-office-space-adgm.webp'
import dedicatedDeskImg from '../assets/dedicated-desk-office-space-adgm.webp'
import privateOfficeImg from '../assets/private-office-space-adgm.webp'
import privateOfficeMediumImg from '../assets/private-office-medium-adgm.webp'
import virtualOfficeImg from '../assets/virtual-office-adgm.webp'
import meetingRoomImg from '../assets/meeting-room-adgm.webp'
import dayPassImg from '../assets/day-pass-office-adgm.webp'
import boardroomImg from '../assets/office-space-adgm-boardroom-view.webp'

export const SITE_URL = 'https://officespaceinadgm.com'
export const MAIN_SITE = 'https://www.aegiscoworking.ae'
export const PAGE_TITLE = 'Office Space in ADGM: Serviced vs Traditional Lease Costs'
export const PAGE_DESCRIPTION =
  'Office space in ADGM compared: a serviced office at Addax Tower vs a traditional ADGM lease — fit-out, deposit, utilities and monthly cost, from AED 1,000.'
export const DATE_PUBLISHED = '2026-10-06'
export const DATE_MODIFIED = '2026-10-06'

export const BUSINESS = {
  name: 'Aegis Coworking - ADGM',
  phoneDisplay: '+971 50 392 6316',
  phoneTel: 'tel:+971503926316',
  whatsapp: 'https://wa.me/971503926316',
  email: 'contact@aegiscoworking.ae',
  street: 'Addax Tower, 3812, Al Reem Island, RT3',
  city: 'Abu Dhabi',
  country: 'United Arab Emirates',
  lat: 24.4989303,
  lng: 54.4031693,
  mapsUrl: 'https://www.google.com/maps/place/Aegis+Coworking+Space+ADGM/@24.4989303,54.4031693,17z',
  mapsEmbed: 'https://www.google.com/maps?q=Aegis+Coworking+Space+ADGM,+Addax+Tower,+Al+Reem+Island,+Abu+Dhabi&ll=24.4989303,54.4031693&z=16&output=embed',
  sameAs: [
    'https://www.linkedin.com/company/aegis-coworking/',
    'https://www.instagram.com/aegis.coworking/',
    'https://www.facebook.com/aegis.coworking',
  ],
}

// Card links open WhatsApp instead of other websites
export const WA_INFO = `${BUSINESS.whatsapp}?text=${encodeURIComponent('Hi Aegis, I would like more details about your workspace.')}`

export const images = { heroImg, boardroomImg, privateOfficeMediumImg }

export const sections = [
  { id: 'offices', label: 'Office options' },
  { id: 'compare', label: 'Compare plans' },
  { id: 'serviced', label: 'Serviced vs lease' },
  { id: 'licence', label: 'ADGM licence' },
  { id: 'location', label: 'Location' },
  { id: 'faq', label: 'FAQ' },
]

// Keyword set: Aegis office page + client list + competitor terms.
// (Used in llms.txt; the visible copy works these in as sentences.)
export const keywords = [
  'Office space in ADGM', 'Office space for rent in ADGM', 'Office for rent ADGM',
  'Serviced office ADGM', 'Fully furnished office ADGM', 'Private office ADGM',
  'Flexible office space in ADGM', 'Office space provider in ADGM', 'Business centre ADGM',
  'Desk space in ADGM', 'Rent desk space in ADGM', 'Flexi desk in ADGM', 'Cheap desk space in ADGM',
  'Dedicated desk ADGM', 'Office space Addax Tower', 'Office space Al Reem Island',
  'Office space Abu Dhabi', 'ADGM registered business address', 'ADGM office rent',
]

// Floor-plan zones in the hero (ids match the office options below)
export const zones = [
  { id: 'private-office', label: 'Private office' },
  { id: 'dedicated-desk', label: 'Dedicated desk' },
  { id: 'hot-desk', label: 'Flexi desk' },
  { id: 'meeting-room', label: 'Meeting room' },
]

export const offices = [
  {
    id: 'dedicated-desk',
    tab: 'Dedicated desk',
    name: 'Dedicated Desk in ADGM',
    image: dedicatedDeskImg, imgW: 900, imgH: 675,
    alt: 'Dedicated desk office space in ADGM with registered business address, Aegis Coworking, Addax Tower',
    price: 'AED 1,150', unit: 'per month',
    priceNum: 1150, priceUnit: 'MONTH',
    lead: 'Your own permanent desk inside ADGM, with a registered ADGM business address for your licence. Only AED 150 more than a flexi desk.',
    features: ['Registered ADGM business address', 'ADGM-compliant lease, registered on AccessRP', '24/7 secure access and lockable storage', 'Meeting room access and business lounge'],
    note: 'Leases 12–36 months. One-time AED 1,200 due-diligence fee; ADGM fees separate.',
    href: WA_INFO,
    cta: 'Reserve a dedicated desk',
    popular: true,
  },
  {
    id: 'hot-desk',
    tab: 'Flexi desk',
    name: 'Flexi Desk (Hot Desk) in ADGM',
    image: hotDeskImg, imgW: 900, imgH: 675,
    alt: 'Flexi desk and hot desk office space in ADGM at Aegis Coworking, Al Reem Island',
    price: 'AED 1,000', unit: 'per month',
    priceNum: 1000, priceUnit: 'MONTH',
    lead: 'Cheap desk space in ADGM for freelancers, remote teams and SPVs — any open desk in the shared office, on a flexible monthly membership.',
    features: ['Any open desk in the shared office', 'High-speed WiFi, coffee and print/scan', 'Meeting room credits', 'No long-term commitment'],
    note: 'No deposit, no admin fees, no setup fees, free registration.',
    href: WA_INFO,
    cta: 'Rent a flexi desk',
  },
  {
    id: 'private-office',
    tab: 'Private office',
    name: 'Private Office in ADGM',
    image: privateOfficeImg, imgW: 900, imgH: 675,
    alt: 'Fully furnished private office for rent in ADGM with Al Reem Island views, Aegis Coworking',
    price: 'AED 4,500', unit: 'per month',
    priceNum: 4500, priceUnit: 'MONTH',
    lead: 'A fully furnished, lockable serviced office for teams of 1–20+, suitable for FSRA-regulated firms that need a private office in ADGM.',
    features: ['Lockable, fully furnished suite', 'Reception, mail handling and cleaning', 'Registered ADGM business address', '24/7 access and meeting room'],
    note: 'Sizes for 1–20+ people. Ask for current availability.',
    href: WA_INFO,
    cta: 'View private office',
  },
  {
    id: 'virtual-office',
    tab: 'Virtual office',
    name: 'Virtual Office in ADGM',
    image: virtualOfficeImg, imgW: 900, imgH: 675,
    alt: 'Virtual office with ADGM registered business address at Aegis Coworking reception',
    price: 'AED 292', unit: 'per month',
    priceNum: 292, priceUnit: 'MONTH',
    lead: 'An ADGM registered business address with mail handling, for company registration and licence renewal without a physical desk.',
    features: ['Registered ADGM business address', 'Mail handling and forwarding', 'Company directory listing', 'Upgrade to a desk or office any time'],
    note: 'Basic, Premium and Enterprise packages.',
    href: WA_INFO,
    cta: 'See virtual office plans',
  },
  {
    id: 'meeting-room',
    tab: 'Meeting room',
    name: 'Meeting Room in ADGM',
    image: meetingRoomImg, imgW: 900, imgH: 675,
    alt: 'Meeting room for hourly hire in ADGM at Aegis Coworking, Addax Tower',
    price: 'Hourly', unit: 'booking',
    lead: 'A professional meeting room in ADGM for client meetings, interviews and board meetings — open to members and non-members.',
    features: ['Book by the hour', 'Presentation screen and video calls', 'High-speed WiFi', 'Reception to greet your guests'],
    note: 'Members get meeting room credits with their plan.',
    href: WA_INFO,
    cta: 'Book a meeting room',
  },
  {
    id: 'day-pass',
    tab: 'Day pass',
    name: 'Office Day Pass in ADGM',
    image: dayPassImg, imgW: 900, imgH: 519,
    alt: 'Day pass office space in ADGM at Aegis Coworking, Abu Dhabi',
    price: 'AED 100', unit: 'per day',
    priceNum: 100, priceUnit: 'DAY',
    lead: 'A desk in ADGM for the day with no lease or commitment — AED 100 for 9 AM–6 PM, or AED 150 for 24 hours.',
    features: ['Hot desk access for the day', 'WiFi, coffee and print/scan', 'All amenities included', 'No membership needed'],
    note: 'Walk in or book on WhatsApp.',
    href: WA_INFO,
    cta: 'Book a day pass',
  },
]

// Quick comparison table (featured-snippet friendly)
export const compareRows = [
  { plan: 'Flexi desk', price: 'AED 1,000 / month', address: false, access: 'Business hours', licence: 'SPV / holding company' },
  { plan: 'Dedicated desk', price: 'AED 1,150 / month', address: true, access: '24/7', licence: 'Most operating licences' },
  { plan: 'Private office', price: 'From AED 4,500 / month', address: true, access: '24/7', licence: 'FSRA-regulated firms' },
  { plan: 'Virtual office', price: 'From AED 292 / month', address: true, access: 'Meeting room on request', licence: 'Address only' },
  { plan: 'Day pass', price: 'AED 100 / day', address: false, access: '9 AM–6 PM (AED 150 for 24h)', licence: 'No licence needed' },
]

// Serviced office vs traditional lease
export const serviced = [
  { label: 'Move-in time', aegis: 'Same week', lease: 'Months of fit-out' },
  { label: 'Furniture & IT', aegis: 'Fully furnished, WiFi ready', lease: 'You buy and install' },
  { label: 'Deposit & setup fees', aegis: 'None', lease: 'Deposit + fit-out costs' },
  { label: 'Utilities, cleaning, reception', aegis: 'Included', lease: 'Separate contracts' },
  { label: 'Lease length', aegis: '12–36 months, upgrade any time', lease: 'Usually multi-year' },
  { label: 'ADGM paperwork', aegis: 'AccessRP lease handled for you', lease: 'You arrange it' },
]

export const licenceMatch = [
  { licence: 'SPV or holding company', need: 'Flexi desk', plan: 'hot-desk' },
  { licence: 'Tech Start-Up and most operating licences', need: 'Dedicated desk', plan: 'dedicated-desk' },
  { licence: 'FSRA-regulated activity', need: 'Private office', plan: 'private-office' },
  { licence: 'Registered address only', need: 'Virtual office', plan: 'virtual-office' },
]

export const benefits = [
  { icon: 'pin', title: 'Inside ADGM', text: 'Addax Tower on Al Reem Island is within the ADGM jurisdiction — your office address is ADGM-compliant.' },
  { icon: 'doc', title: 'Licence-ready', text: 'Lease and membership documents accepted for ADGM company registration and renewal, registered on AccessRP.' },
  { icon: 'tag', title: 'Transparent pricing', text: 'No deposit, no admin or setup fees, free registration. Published prices, no hidden outgoings.' },
  { icon: 'key', title: '24/7 access', text: 'Dedicated desk and private office members get secure, round-the-clock access.' },
]

export const amenities = [
  { icon: 'wifi', title: 'High-speed fibre WiFi' },
  { icon: 'coffee', title: 'Premium coffee & tea' },
  { icon: 'video', title: 'Video conference rooms' },
  { icon: 'chair', title: 'Ergonomic furniture' },
  { icon: 'print', title: 'Print & scan' },
  { icon: 'mail', title: 'Mail & reception' },
  { icon: 'kitchen', title: 'Kitchen & lounge' },
  { icon: 'waves', title: 'Sea views, 38th floor' },
  { icon: 'shield', title: 'Secure building access' },
  { icon: 'broom', title: 'Daily cleaning' },
]

export const steps = [
  { title: 'Pick your office', text: 'Flexi desk, dedicated desk, private office or virtual office — based on your ADGM licence.' },
  { title: 'Book a free tour', text: 'Visit Addax Tower Monday–Friday, 9 AM–6 PM, or get a WhatsApp video walkthrough.' },
  { title: 'Sign and onboard', text: 'Quick KYC and due diligence; we register your lease on AccessRP.' },
  { title: 'Move in', text: 'Collect your access card. Furniture, WiFi and coffee are ready.' },
]

export const nearby = [
  'Short drive to ADGM Square',
  'Banks, restaurants and cafés on Al Reem Island',
  'Waterfront promenade and beach',
  'Easy parking and access to Abu Dhabi city',
]

// Two genuine member reviews, word for word — a different pair on each site
export const testimonials = [
  { quote: 'For businesses looking for a low cost office in ADGM, Aegis provides flexible office space and a professional seating. The team made the setup process very easy.', name: 'Haseeb Awan', role: 'Entrepreneur' },
  { quote: 'I was specifically looking for the cheapest coworking space in ADGM and wanted a privacy environment rather than just a desk. Aegis offered a good balance of price, location, and facilities.', name: 'Naveeda Haseeb', role: 'Startup Founder' },
]

export const guides = [
  { slug: 'low-cost-office-adgm-budget-friendly-workspace-solutions-in-abu-dhabi', title: 'What Is the Minimum Office You Need for an ADGM Licence?', tag: 'Licence' },
  { slug: 'private-office-rent-adgm-cost-what-to-expect-in-2026', title: 'What Drives Private Office Rent in ADGM? 2026 Cost Factors', tag: 'Private office' },
  { slug: 'adgm-office-cost-calculator', title: 'ADGM Office Cost Calculator: Estimate Your Monthly Workspace Cost', tag: 'Cost' },
  { slug: 'adgm-fsra-office-requirements', title: 'ADGM Office Requirements for FSRA-Regulated Firms', tag: 'FSRA' },
  { slug: 'accessrp-adgm-lease-registration', title: 'AccessRP in ADGM: How to Register, Renew & Modify a Lease', tag: 'Lease' },
  { slug: 'addax-tower-adgm-business-workspace', title: 'Addax Tower ADGM for Businesses: Workspace & Location', tag: 'Location' },
  { slug: 'adgm-tech-startup-licence-dedicated-desk', title: 'ADGM Tech Startup Licence: Dedicated Desk or Flexi Desk?', tag: 'Startups' },
  { slug: 'adgm-meeting-room-vs-private-office-client-meetings', title: 'ADGM Meeting Room or Private Office?', tag: 'Compare' },
  { slug: 'adgm-vs-difc-workspace-cost', title: 'ADGM vs DIFC: Which Is More Affordable for Workspace?', tag: 'Compare' },
].map((g) => ({ ...g, url: `${MAIN_SITE}/blog/${g.slug}` }))

export const faqs = [
  {
    q: 'How much does office space in ADGM cost?',
    a: 'At Aegis Coworking in Addax Tower, a flexi desk costs AED 1,000 per month, a dedicated desk AED 1,150 per month, a private office starts at AED 4,500 per month and a virtual office starts at AED 292 per month. A day pass is AED 100.',
    link: { text: 'ADGM office cost calculator', url: 'https://www.aegiscoworking.ae/blog/adgm-office-cost-calculator' },
  },
  {
    q: 'What is the difference between a dedicated desk and a flexi desk in ADGM?',
    a: 'A dedicated desk is your own permanent desk and includes a registered ADGM business address for your licence, for AED 1,150 per month. A flexi desk lets you use any open desk for AED 1,000 per month and suits individuals or companies without an ADGM licensing requirement.',
  },
  {
    q: 'Can I use this office space in ADGM to register my business?',
    a: 'Yes. A dedicated desk, private office or virtual office includes a registered ADGM business address that qualifies for your ADGM licence application, and we register your lease on AccessRP.',
  },
  {
    q: 'What is included in the one-time due-diligence fee?',
    a: 'The AED 1,200 due-diligence fee covers the compliance and background checks required by ADGM before your licence and registered address can be activated. It is a one-time cost, separate from your monthly rent.',
  },
  {
    q: 'Is a serviced office different from renting a traditional office in ADGM?',
    a: 'Yes. A traditional ADGM office lease gives you an empty unit to fit out yourself, usually with a deposit and a multi-year term. A serviced office at Aegis is fully furnished, with utilities, cleaning, reception and WiFi included, and you can move in the same week.',
    link: { text: 'Private office vs coworking in ADGM', url: 'https://www.aegiscoworking.ae/blog/private-office-vs-coworking-adgm-the-complete-cost-privacy-guide' },
  },
  {
    q: 'Is Addax Tower in ADGM?',
    a: 'Yes. Addax Tower is on Al Reem Island, which is part of the Abu Dhabi Global Market jurisdiction, so office space in Addax Tower is office space in ADGM.',
  },
  {
    q: 'What are the lease term options?',
    a: 'Desk and office leases run from 12 to 36 months, and you can upgrade from a flexi desk to a dedicated desk or private office at any time as your team grows.',
  },
  {
    q: 'Does the office space include 24/7 access?',
    a: 'Yes. Dedicated desk and private office members get secure building access around the clock, every day of the week.',
  },
  {
    q: 'What extra costs does a traditional ADGM office lease add?',
    a: 'With a traditional lease you usually pay for the fit-out, furniture, a security deposit and separate utility and internet contracts on top of the rent. A serviced office at Aegis includes furniture, utilities, internet, cleaning and reception in one monthly price, with no deposit.',
  },
  {
    q: 'When does a traditional lease make more sense than a serviced office?',
    a: 'A traditional lease can suit a large, established team that wants to design its own space and commit for many years. For startups and teams of 1–20+ people who want to move in quickly without a fit-out, a serviced office is usually simpler and more predictable.',
  },
]
