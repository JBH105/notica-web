import { asset, PHONE, WA_URL, about } from './content.js'
import { Icon } from './Sections.jsx'

const models = [
  {
    name: '14+3',
    tag: 'Works without electricity',
    points: [
      'Keeps serving even during a power cut',
      '150–200 glasses dispensing capacity after power interruption*',
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
  ['150–200', 'Glasses after power cut (14+3)*'],
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

        <section className="innov">
          <p className="innov-kicker">Innovation that keeps your business running.</p>
          <p>NOTICA has introduced an advanced soda dispensing innovation designed to maintain beverage service even during unexpected power interruptions. Our specially engineered soda machine can continue dispensing approximately 150–200 glasses of soda even after the electricity supply goes off, helping outlets minimize service interruptions and maintain a seamless customer experience.</p>
          <p>This innovative system is designed with built-in pressure and dispensing technology, allowing the machine to utilize stored system capacity efficiently without depending continuously on electricity for every glass.</p>
          <h3>Why It Matters</h3>
          <ul className="ticks">
            <li>150–200 glasses dispensing capacity after power interruption*</li>
            <li>Reduced dependency on continuous electricity</li>
            <li>Smooth and uninterrupted customer service</li>
            <li>Helps minimize downtime during power cuts</li>
            <li>Designed for high-volume beverage outlets</li>
            <li>Smart engineering focused on operational efficiency</li>
          </ul>
          <h3>Innovation That Keeps You Serving</h3>
          <p>At NOTICA, innovation is not just about creating great-tasting beverages—it is about developing smarter solutions for modern beverage businesses.</p>
          <p className="innov-quote">Power may go off.<br />But the NOTICA experience doesn’t have to.</p>
          <p className="innov-sign"><b>NOTICA SODA SHAKE</b><span>The Taste of Legends</span></p>
        </section>

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
