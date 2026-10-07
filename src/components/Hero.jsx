import { useState } from 'react'
import { images, zones, BUSINESS } from '../data/content'

// Desk grids for the floor plan
const deskRows = (x0, y0, cols, rows, w, h, gx, gy) => {
  const out = []
  for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) out.push({ x: x0 + c * (w + gx), y: y0 + r * (h + gy), w, h })
  return out
}
const dedicated = deskRows(44, 196, 4, 4, 38, 22, 14, 18)
const flexi = [{ x: 300, y: 204, w: 176, h: 26 }, { x: 300, y: 262, w: 176, h: 26 }, { x: 300, y: 320, w: 176, h: 26 }]

function FloorPlan({ hover, setHover, onPick }) {
  const zoneProps = (id) => ({
    className: `fp-zone ${hover === id ? 'is-hot' : ''}`,
    onMouseEnter: () => setHover(id),
    onMouseLeave: () => setHover(null),
    onClick: () => onPick(id),
  })
  return (
    <svg className="fp" viewBox="0 0 520 400" role="img" aria-labelledby="fp-title">
      <title id="fp-title">Floor plan of Aegis Coworking office space on the 38th floor of Addax Tower, ADGM</title>
      <defs>
        <pattern id="fp-grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20 0H0V20" fill="none" stroke="currentColor" strokeWidth=".5" opacity=".18" />
        </pattern>
      </defs>
      <rect x="0" y="0" width="520" height="400" fill="url(#fp-grid)" className="fp-paper" />

      {/* Zones (filled on hover) */}
      <g {...zoneProps('private-office')}>
        <rect x="20" y="20" width="240" height="130" className="fp-fill" />
        {[20, 100, 180].map((x) => <rect key={x} x={x} y="20" width="80" height="130" className="fp-wall" pathLength="1" />)}
        {[60, 140, 220].map((x) => (
          <g key={x} className="fp-furn"><rect x={x - 20} y="62" width="40" height="18" rx="3" /><circle cx={x} cy="96" r="7" /></g>
        ))}
        <text x="140" y="138" className="fp-label">Private office</text>
      </g>

      <g {...zoneProps('meeting-room')}>
        <rect x="260" y="20" width="130" height="130" className="fp-fill" />
        <rect x="260" y="20" width="130" height="130" className="fp-wall" pathLength="1" />
        <g className="fp-furn">
          <rect x="290" y="60" width="70" height="36" rx="18" />
          {[300, 325, 350].map((x) => <g key={x}><circle cx={x} cy="50" r="6" /><circle cx={x} cy="106" r="6" /></g>)}
        </g>
        <text x="325" y="138" className="fp-label">Meeting room</text>
      </g>

      <g className="fp-static">
        <rect x="390" y="20" width="110" height="130" className="fp-wall" pathLength="1" />
        <g className="fp-furn"><rect x="410" y="52" width="70" height="20" rx="10" /><circle cx="430" cy="100" r="9" /><circle cx="460" cy="100" r="9" /></g>
        <text x="445" y="138" className="fp-label fp-muted">Reception</text>
      </g>

      <g {...zoneProps('dedicated-desk')}>
        <rect x="20" y="170" width="240" height="210" className="fp-fill" />
        <rect x="20" y="170" width="240" height="210" className="fp-wall" pathLength="1" />
        <g className="fp-furn">{dedicated.map((d, i) => <rect key={i} x={d.x} y={d.y} width={d.w} height={d.h} rx="2" />)}</g>
        <text x="140" y="368" className="fp-label">Dedicated desk</text>
      </g>

      <g {...zoneProps('hot-desk')}>
        <rect x="280" y="170" width="220" height="210" className="fp-fill" />
        <rect x="280" y="170" width="220" height="210" className="fp-wall" pathLength="1" />
        <g className="fp-furn">
          {flexi.map((d, i) => <rect key={i} x={d.x} y={d.y} width={d.w} height={d.h} rx="13" />)}
        </g>
        <text x="390" y="368" className="fp-label">Flexi desk</text>
      </g>

      {/* Window line facing the sea */}
      <path d="M20 392 H500" className="fp-window" pathLength="1" />
      <text x="500" y="14" className="fp-north" textAnchor="end">N ↑  Level 38, Addax Tower</text>
    </svg>
  )
}

function Hero({ onPick }) {
  const [hover, setHover] = useState(null)

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="hero-kicker hl" style={{ '--d': 0 }}><span className="dot" aria-hidden="true" />Addax Tower, Al Reem Island, ADGM</p>
          <h1 id="hero-title" className="hero-title hl" style={{ '--d': 1 }}>
            Office space in ADGM: serviced vs traditional lease
          </h1>
          <p className="hero-lead hl" style={{ '--d': 2 }}>
            Before you sign for office space in ADGM, compare the real cost. A traditional lease usually means an
            empty unit, fit-out, a deposit and separate utility contracts; a serviced office at Addax Tower is
            furnished, with utilities, cleaning and reception included — from a flexi desk at AED 1,000 to a
            private office for growing teams.
          </p>
          <div className="hero-ctas hl" style={{ '--d': 3 }}>
            <a className="btn btn-green" href={`${BUSINESS.whatsapp}?text=${encodeURIComponent('Hi Aegis, I would like to book a tour of your office space in ADGM.')}`} target="_blank" rel="noopener noreferrer">Book a free tour</a>
            <a className="btn btn-line" href="#offices">See office options</a>
          </div>
          <ul className="hero-facts hl" style={{ '--d': 4 }}>
            <li><b>AED 1,000</b><span>flexi desk / month</span></li>
            <li><b>AED 1,150</b><span>dedicated desk / month</span></li>
            <li><b>No deposit</b><span>no setup or admin fees</span></li>
          </ul>
        </div>

        <div className="hero-visual">
          <div className="plan-card">
            <FloorPlan hover={hover} setHover={setHover} onPick={onPick} />
            <div className="plan-legend" role="group" aria-label="Explore office types on the floor plan">
              {zones.map((z) => (
                <button key={z.id} type="button" className={hover === z.id ? 'is-hot' : ''}
                  onMouseEnter={() => setHover(z.id)} onMouseLeave={() => setHover(null)}
                  onFocus={() => setHover(z.id)} onBlur={() => setHover(null)}
                  onClick={() => onPick(z.id)}>
                  {z.label}
                </button>
              ))}
            </div>
          </div>
          <figure className="hero-photo">
            <img src={images.heroImg} alt="Fully furnished private office space in ADGM with Al Reem Island views, Aegis Coworking, Addax Tower"
              width="1200" height="900" fetchPriority="high" decoding="async" />
            <figcaption>
              <b>38th floor, sea views</b>
              <span>Furnished private office from AED 4,500 a month, with reception and 24/7 access.</span>
            </figcaption>
          </figure>
        </div>
      </div>

      <div className="wrap hero-note">
        <p>
          Aegis Coworking is an office space provider in ADGM and a business centre in Addax Tower. Rent
          desk space in ADGM by the day or month, choose a flexi desk in ADGM, or find cheap desk space in
          ADGM with a day pass from AED 100 — all inside the Abu Dhabi Global Market jurisdiction.
        </p>
      </div>
    </section>
  )
}

export default Hero
