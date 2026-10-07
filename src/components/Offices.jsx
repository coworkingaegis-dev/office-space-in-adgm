import { Reveal } from './Motion'
import Icon from './Icon'
import { offices, compareRows, serviced, licenceMatch, sections, MAIN_SITE } from '../data/content'

export function Intro() {
  return (
    <section className="intro sec" aria-labelledby="what-is">
      <div className="wrap intro-grid">
        <div>
          <h2 id="what-is">What is office space in ADGM?</h2>
          <p className="answer">
            Office space in ADGM is any workspace inside the Abu Dhabi Global Market jurisdiction, including
            Al Reem Island, that can be used as your company's registered address for an
            ADGM licence. It ranges from a flexi desk or dedicated desk in a serviced business centre to a
            fully furnished private office or a traditional office lease you fit out yourself.
          </p>
          <p>
            Aegis Coworking offers flexible office space in ADGM on the 38th floor of{' '}
            Addax Tower. Every desk and office comes
            furnished, with WiFi, reception, cleaning and utilities included, and ADGM-ready lease paperwork —
            so you can rent desk space in ADGM and start working the same week.
          </p>
        </div>
        <nav className="toc" aria-label="On this page">
          <p>On this page</p>
          <ul>{sections.map((s) => <li key={s.id}><a href={`#${s.id}`}>{s.label}</a></li>)}</ul>
        </nav>
      </div>
    </section>
  )
}

export function Offices({ active, setActive }) {
  const o = offices.find((x) => x.id === active) || offices[0]
  return (
    <section className="offices sec" id="offices" aria-labelledby="offices-title">
      <div className="wrap">
        <div className="head">
          <h2 id="offices-title">Office space for rent in ADGM</h2>
          <p>Six ways to work from Addax Tower. Choose an option to see prices and what's included.</p>
        </div>

        <div className="tabs" role="tablist" aria-label="Office types">
          {offices.map((x) => (
            <button key={x.id} id={`tab-${x.id}`} role="tab" type="button" aria-selected={x.id === o.id}
              aria-controls={`panel-${x.id}`} className={x.id === o.id ? 'on' : ''} onClick={() => setActive(x.id)}>
              {x.tab}
            </button>
          ))}
        </div>

        {offices.map((x) => (
          <div key={x.id} className="office-panel" id={`panel-${x.id}`} role="tabpanel"
            aria-labelledby={`tab-${x.id}`} hidden={x.id !== o.id}>
            <div className="op-media">
              <img src={x.image} alt={x.alt} width={x.imgW} height={x.imgH} loading="lazy" decoding="async" />
              {x.popular && <span className="op-flag">Most chosen for ADGM licences</span>}
            </div>
            <div className="op-body">
              <h3>{x.name}</h3>
              <p className="op-price"><b>{x.price}</b> <span>{x.unit}</span></p>
              <p className="op-lead">{x.lead}</p>
              <ul className="op-list">
                {x.features.map((f) => <li key={f}><Icon name="check" size={16} strokeWidth={2.2} />{f}</li>)}
              </ul>
              <p className="op-note">{x.note}</p>
              <a className="btn btn-green" href={x.href}>{x.cta}</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export function Compare({ setActive }) {
  return (
    <section className="compare sec" id="compare" aria-labelledby="compare-title">
      <div className="wrap">
        <div className="head">
          <h2 id="compare-title">Compare office plans in ADGM</h2>
          <p>Published prices with no deposit, no setup fees and free registration.</p>
        </div>
        <Reveal className="table-wrap">
          <table className="ctable">
            <thead>
              <tr><th scope="col">Plan</th><th scope="col">Price</th><th scope="col">ADGM business address</th><th scope="col">Typically suits</th></tr>
            </thead>
            <tbody>
              {compareRows.map((r) => (
                <tr key={r.plan}>
                  <th scope="row">{r.plan}</th>
                  <td data-label="Price">{r.price}</td>
                  <td data-label="ADGM address">{r.address ? <span className="yes">Included</span> : <span className="no">Not included</span>}</td>
                  <td data-label="Suits">{r.licence}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
        <p className="fine">
          A one-time AED 1,200 due-diligence fee applies to the dedicated desk; ADGM government fees are separate.
          Ask us on WhatsApp for current offers.{' '}
          <button type="button" className="link-btn" onClick={() => setActive('dedicated-desk')}>View the dedicated desk</button>
        </p>
      </div>
    </section>
  )
}

export function Serviced() {
  return (
    <section className="serviced sec" id="serviced" aria-labelledby="serviced-title">
      <div className="wrap serviced-grid">
        <div className="head left">
          <h2 id="serviced-title">Serviced office vs traditional office lease in ADGM</h2>
          <p>
            Most ADGM towers lease empty units that you fit out yourself. A serviced, fully furnished office
            from an office space provider in ADGM skips the fit-out, the deposit and the separate utility
            contracts.
          </p>
        </div>
        <Reveal className="vs">
          <div className="vs-head" aria-hidden="true"><span /><span className="vs-a">Aegis serviced office</span><span>Traditional lease</span></div>
          <dl>
            {serviced.map((s) => (
              <div key={s.label} className="vs-row">
                <dt>{s.label}</dt>
                <dd className="vs-a"><span className="sr-only">Aegis serviced office: </span>{s.aegis}</dd>
                <dd><span className="sr-only">Traditional lease: </span>{s.lease}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}

export function Licence({ setActive }) {
  return (
    <section className="licence sec" id="licence" aria-labelledby="licence-title">
      <div className="wrap">
        <div className="head">
          <h2 id="licence-title">Which office does your ADGM licence need?</h2>
          <p>ADGM links your workspace to your licence type. Choose your licence to jump to the matching plan.</p>
        </div>
        <ul className="lic-grid">
          {licenceMatch.map((l, i) => (
            <Reveal as="li" key={l.licence} delay={i * 70}>
              <button type="button" className="lic" onClick={() => setActive(l.plan)}>
                <span className="lic-for">{l.licence}</span>
                <span className="lic-need">{l.need}</span>
                <span className="lic-go">See plan <Icon name="arrow" size={15} /></span>
              </button>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
