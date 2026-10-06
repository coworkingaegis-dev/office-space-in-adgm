import { useState } from 'react'
import { Reveal } from './Motion'
import Icon from './Icon'
import { benefits, amenities, steps, nearby, testimonials, guides, faqs, images, BUSINESS, MAIN_SITE } from '../data/content'

export function Why() {
  return (
    <section className="why sec" aria-labelledby="why-title">
      <div className="wrap why-grid">
        <Reveal className="why-photo">
          <img src={images.boardroomImg} alt="Boardroom with Abu Dhabi skyline views in Aegis Coworking business centre, ADGM" width="1024" height="683" loading="lazy" decoding="async" />
        </Reveal>
        <div>
          <h2 id="why-title">Why rent office space in ADGM with Aegis</h2>
          <p className="why-sub">A business centre in ADGM built around licensing: compliant paperwork, honest prices and a furnished office with a view.</p>
          <ul className="ben">
            {benefits.map((b) => (
              <li key={b.title}>
                <span className="ben-ic"><Icon name={b.icon} size={20} strokeWidth={1.6} /></span>
                <div><h3>{b.title}</h3><p>{b.text}</p></div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="wrap">
        <h3 className="amen-title">Included in every office and desk</h3>
        <ul className="amen">
          {amenities.map((a) => <li key={a.title}><Icon name={a.icon} size={18} strokeWidth={1.6} />{a.title}</li>)}
        </ul>
      </div>
    </section>
  )
}

export function Steps() {
  return (
    <section className="steps sec" aria-labelledby="steps-title">
      <div className="wrap">
        <div className="head"><h2 id="steps-title">Move into your ADGM office in four steps</h2></div>
        <Reveal as="ol" className="step-list">
          {steps.map((s, i) => (
            <li key={s.title} style={{ '--i': i }}>
              <span className="step-n" aria-hidden="true">{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

export function Location() {
  const [mapOn, setMapOn] = useState(false)
  return (
    <section className="location sec" id="location" aria-labelledby="loc-title">
      <div className="wrap loc-grid">
        <div>
          <h2 id="loc-title">Office space in Addax Tower, Al Reem Island</h2>
          <p className="loc-sub">
            Addax Tower sits inside the ADGM jurisdiction on Al Reem Island — a quieter, better-value
            alternative to the towers on ADGM Square.{' '}
            <a href={`${MAIN_SITE}/blog/addax-tower-adgm-business-workspace`}>Addax Tower for businesses</a>
          </p>
          <dl className="nap">
            <div><dt>Address</dt><dd>{BUSINESS.name}, {BUSINESS.street}, {BUSINESS.city}, {BUSINESS.country}</dd></div>
            <div><dt>Phone</dt><dd><a href={BUSINESS.phoneTel}>{BUSINESS.phoneDisplay}</a></dd></div>
            <div><dt>Email</dt><dd><a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a></dd></div>
            <div><dt>Hours</dt><dd>24/7 for members, tours Monday–Friday 9:00 AM–6:00 PM</dd></div>
          </dl>
          <ul className="nearby">{nearby.map((n) => <li key={n}>{n}</li>)}</ul>
          <a className="btn btn-green" href={BUSINESS.mapsUrl} target="_blank" rel="noopener noreferrer">Get directions</a>
        </div>
        <div className="map">
          {mapOn ? (
            <iframe title="Map of Aegis Coworking office space, Addax Tower, Al Reem Island, ADGM" src={BUSINESS.mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
          ) : (
            <button type="button" className="map-facade" onClick={() => setMapOn(true)} aria-label="Load interactive map of Aegis Coworking in Addax Tower">
              <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                <rect width="400" height="300" className="m-water" />
                <path className="m-land" d="M40 70c60-40 180-50 260-20s80 90 60 150-90 90-180 80S30 230 30 160 20 90 40 70z" />
                <path className="m-road" d="M70 120c80 10 160-5 240 30M90 220c60-30 140-40 230-15M190 60c-10 70 0 140 20 210" />
                <circle className="m-ring" cx="198" cy="160" r="26" />
                <circle className="m-dot" cx="198" cy="160" r="6" />
              </svg>
              <span className="map-tag"><b>Addax Tower, Unit 3812</b><small>Al Reem Island, ADGM</small></span>
              <span className="map-load">Load interactive map</span>
            </button>
          )}
        </div>
      </div>
    </section>
  )
}

export function Reviews() {
  return (
    <section className="reviews sec" aria-labelledby="rev-title">
      <div className="wrap">
        <div className="head"><h2 id="rev-title">What our office members say</h2></div>
        <ul className="rev-list">
          {testimonials.map((t, i) => (
            <Reveal as="li" key={t.name} delay={i * 80}>
              <figure>
                <blockquote><p>{t.quote}</p></blockquote>
                <figcaption><b>{t.name}</b><span>{t.role}</span></figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function Guides() {
  return (
    <section className="guides sec" id="guides" aria-labelledby="guides-title">
      <div className="wrap">
        <div className="head head-split">
          <h2 id="guides-title">ADGM office guides</h2>
          <p>Costs, licence rules and lease registration, from the Aegis Coworking blog. <a href={`${MAIN_SITE}/blogs`}>All articles</a></p>
        </div>
        <ul className="g-grid">
          {guides.map((g) => (
            <li key={g.slug}>
              <a href={g.url}>
                <span className="g-tag">{g.tag}</span>
                <span className="g-title">{g.title}</span>
                <span className="g-go" aria-hidden="true"><Icon name="arrow" size={16} /></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function FAQ() {
  return (
    <section className="faq sec" id="faq" aria-labelledby="faq-title">
      <div className="wrap faq-grid">
        <div className="faq-head">
          <h2 id="faq-title">Office space in ADGM: questions answered</h2>
          <p>Need something else? Message us on WhatsApp and we'll reply within the hour during business hours.</p>
          <a className="btn btn-line" href={BUSINESS.whatsapp} target="_blank" rel="noopener noreferrer">Ask on WhatsApp</a>
        </div>
        <div className="faq-list">
          {faqs.map((f, i) => (
            <details key={f.q} open={i === 0 ? true : undefined}>
              <summary><h3>{f.q}</h3><span className="fq-ic" aria-hidden="true" /></summary>
              <div className="fq-body">
                <p>{f.a}</p>
                {f.link && <p><a href={f.link.url}>{f.link.text}</a></p>}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export function FinalCTA() {
  return (
    <section className="final" aria-labelledby="final-title">
      <div className="wrap">
        <Reveal className="final-card">
          <svg className="final-plan" viewBox="0 0 300 200" aria-hidden="true">
            <rect x="10" y="10" width="280" height="180" /><path d="M10 80h120v110M130 10v70M200 10v70h90M200 120h90" />
          </svg>
          <h2 id="final-title">Your office in ADGM is ready</h2>
          <p>Tour the 38th floor of Addax Tower, or get a video walkthrough on WhatsApp today.</p>
          <div className="final-actions">
            <a className="btn btn-green" href={`${BUSINESS.whatsapp}?text=${encodeURIComponent('Hi Aegis, I would like to book a tour of your office space in ADGM.')}`} target="_blank" rel="noopener noreferrer">Book a tour on WhatsApp</a>
            <a className="btn btn-line" href={BUSINESS.phoneTel}>Call {BUSINESS.phoneDisplay}</a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export function WhatsAppFab() {
  return (
    <a className="wa-fab" href={BUSINESS.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Chat with Aegis Coworking on WhatsApp">
      <svg width="26" height="26" viewBox="0 0 32 32" aria-hidden="true">
        <path fill="currentColor" d="M16 3a13 13 0 0 0-11.2 19.6L3 29l6.6-1.7A13 13 0 1 0 16 3zm0 23.7c-2 0-4-.5-5.7-1.6l-.4-.2-3.9 1 1-3.8-.3-.4A10.7 10.7 0 1 1 16 26.7zm5.9-8c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2l-1 1.2c-.2.2-.4.2-.7.1a8.8 8.8 0 0 1-4.4-3.8c-.3-.6.3-.5.9-1.7.1-.2 0-.4 0-.5l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.7s1.2 3.2 1.3 3.4c.2.2 2.3 3.5 5.5 4.9 2 .9 2.8.9 3.8.8.6-.1 1.9-.8 2.2-1.5.3-.8.3-1.4.2-1.5-.1-.2-.3-.3-.6-.4z" />
      </svg>
    </a>
  )
}
