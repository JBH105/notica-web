import { asset, PHONE, WA_URL, about } from './content.js'
import { Icon } from './Sections.jsx'

const models = [
  {
    name: '14+3',
    tag: 'Works without electricity',
    points: [
      'No light? No problem — keeps serving even during a power cut',
      'Fills up to 200 glasses without electricity',
      'Same semi-automated dispensing, minimal training for staff',
    ],
    hero: true,
  },
  {
    name: '14+2',
    tag: 'Standard model',
    points: [
      'Semi-automated dispensing system',
      'Minimal training for staff',
      'Maximum output within minimal space',
    ],
  },
]

const highlights = [
  ['200', 'Glasses without electricity (14+3)'],
  ['Semi', 'Automated operation'],
  ['Min.', 'Training needed'],
  ['Small', 'Space, big output'],
]

export default function MachinePage() {
  return (
    <main className="machine">
      <section className="machine-hero">
        <div className="wrap machine-hero-in">
          <div>
            <a className="back back-light" href="#products">← Back to products</a>
            <p className="hero-eyebrow">SODA FOUNTAIN MACHINE</p>
            <h1>14+3 <span>Soda Fountain Machine</span></h1>
            <p className="machine-lead">{about.why[2][1]}</p>
            <div className="hero-actions">
              <a className="btn btn-light" href={WA_URL} target="_blank" rel="noopener noreferrer">{Icon.wa} Enquire on WhatsApp</a>
              <a className="btn btn-ghost" href={`tel:${PHONE}`}>{Icon.phone} Call Now</a>
            </div>
          </div>
          <div className="machine-photo">
            <img src={asset('assets/Services/FountainMachine.png')} alt="Notica 14+3 Soda Fountain Machine" />
          </div>
        </div>
      </section>

      <section className="wrap machine-body">
        <ul className="m-stats">
          {highlights.map(([b, s]) => <li key={s}><b>{b}</b><span>{s}</span></li>)}
        </ul>

        <h2 className="m-title">Choose your model</h2>
        <div className="m-models">
          {models.map((m) => (
            <article key={m.name} className={`m-model ${m.hero ? 'feat' : ''}`}>
              {m.hero && <span className="m-badge">Light-free</span>}
              <h3>{m.name} <small>Soda Fountain Machine</small></h3>
              <p className="m-tag">{m.tag}</p>
              <ul className="ticks">
                {m.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </article>
          ))}
        </div>

        <h2 className="m-title">About the machine</h2>
        <div className="card m-about">
          <p>{about.closing[1]}</p>
        </div>

        <div className="m-cta">
          <h3>Want to know more about the machine?</h3>
          <p>Talk to our franchise team — Franchise Helpline | {PHONE}</p>
          <div className="support-actions">
            <a className="btn btn-light" href={`tel:${PHONE}`}>{Icon.phone} Call Now</a>
            <a className="btn btn-wa" href={WA_URL} target="_blank" rel="noopener noreferrer">{Icon.wa} WhatsApp</a>
          </div>
        </div>
      </section>
    </main>
  )
}
