import { useEffect, useMemo, useRef, useState } from 'react'
import {
  asset, whatIs, GOOGLE_REVIEWS_URL, about, roi, kit, support, terms, featuredProducts, videos, marketing,
  booking, phases, social, PHONE, WA_URL,
} from './content.js'
import { locations } from './data/locations.js'
import reviews from './data/reviews.json'

/* ---------- small helpers ---------- */

export function Reveal({ children, className = '', as: Tag = 'div', ...rest }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) { setShown(true); return }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setShown(true); io.disconnect() }
    }, { threshold: 0.12 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return <Tag ref={ref} className={`reveal ${shown ? 'in' : ''} ${className}`} {...rest}>{children}</Tag>
}

const Icon = {
  wa: (<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M20.5 3.5A11.9 11.9 0 0 0 12 0C5.4 0 .1 5.3.1 11.9c0 2.1.6 4.1 1.6 5.9L0 24l6.4-1.7a11.9 11.9 0 0 0 5.6 1.4c6.6 0 11.9-5.3 11.9-11.9 0-3.2-1.2-6.2-3.4-8.3zM12 21.7a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.8 1 1-3.7-.2-.4a9.8 9.8 0 0 1-1.5-5.2C2.1 6.5 6.5 2.1 12 2.1c2.6 0 5.1 1 6.9 2.9a9.7 9.7 0 0 1 2.9 6.9c0 5.4-4.4 9.8-9.8 9.8zm5.4-7.3c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1l-.9 1.1c-.2.2-.3.2-.6.1a8 8 0 0 1-4-3.5c-.3-.5.3-.5.9-1.6.1-.2.1-.4 0-.5l-.9-2.1c-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3 1.8.8 2.5.9 3.4.7.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3z"/></svg>),
  phone: (<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z"/></svg>),
  dl: (<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3v12m0 0-4-4m4 4 4-4M4 21h16"/></svg>),
  pin: (<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/></svg>),
  star: (<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="m12 2 3 6.9 7.5.7-5.7 5 1.7 7.4L12 18l-6.5 4 1.7-7.4-5.7-5L9 8.9z"/></svg>),
  fb: (<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M12 2C6.5 2 2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7C18.3 21.1 22 17 22 12c0-5.5-4.5-10-10-10z"/></svg>),
  ig: (<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>),
  yt: (<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2C.5 9.1.5 12 .5 12s0 2.9.5 4.8a3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-4.8.5-4.8s0-2.9-.5-4.8zM9.8 15.5v-7l6 3.5z"/></svg>),
}
export { Icon }

const SectionHead = ({ kicker, title, children }) => (
  <Reveal className="sec-head">
    {kicker && <span className="kicker">{kicker}</span>}
    <h2>{title}</h2>
    {children}
  </Reveal>
)

/* ---------- Hero ---------- */

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-bg" aria-hidden="true" />
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="hero-eyebrow">THE TASTE OF LEGENDS</p>
          <h1>
            Soda Shake<sup>TM</sup>
            <span>Franchise</span>
          </h1>
          <div className="hero-actions">
            <a className="btn btn-light" href={WA_URL} target="_blank" rel="noopener noreferrer">{Icon.wa} WhatsApp Us</a>
            <a className="btn btn-ghost" href={`tel:${PHONE}`}>{Icon.phone} Call Now</a>
          </div>
        </div>
        <div className="hero-art">
          <img className="hero-main" src={asset('assets/hero/juice-9-2.webp')} width="700" height="724" alt="Notica soda shake" fetchPriority="high" decoding="async" />
          <img className="hero-leaf l1" src={asset('assets/hero/s10-mint-1.webp')} alt="" aria-hidden="true" />
          <img className="hero-leaf l2" src={asset('assets/hero/s10-lemmon-2.webp')} alt="" aria-hidden="true" />
        </div>
      </div>
      <ul className="hero-stats wrap">
        <li><b>50-60%</b><span>Profit margin</span></li>
        <li><b>6-12</b><span>Months ROI</span></li>
        <li><b>No</b><span>Royalty model</span></li>
        <li><b>60</b><span>Stores</span></li>
      </ul>
      <svg className="hero-wave" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true"><path d="M0 40c240 50 480 50 720 20s480-40 720 10V80H0z" /></svg>
    </section>
  )
}

/* ---------- What is Notica ---------- */

const whatIcons = [
  <svg key="a" viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" /><path d="M19 17l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z" /></svg>,
  <svg key="b" viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 2l2.4 2 3.1-.2 1 3 2.6 1.8-1 3 1 3-2.6 1.8-1 3-3.1-.2L12 22l-2.4-2-3.1.2-1-3L3 15.4l1-3-1-3L5.5 7.6l1-3 3.1.2z" /><path d="M8.5 12l2.4 2.4 4.6-4.8" /></svg>,
  <svg key="c" viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3s6 6.2 6 10.5A6 6 0 0 1 6 13.5C6 9.2 12 3 12 3z" /><path d="M9.5 14a2.6 2.6 0 0 0 2.5 2.5" /></svg>,
  <svg key="d" viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 17l6-6 4 4 8-8" /><path d="M15 7h6v6" /></svg>,
]

export function WhatIs() {
  return (
    <section className="sec whatis" id="what-is-notica">
      <div className="wrap whatis-grid">
        <Reveal className="whatis-copy">
          <span className="kicker">{whatIs.kicker}</span>
          <h2>{whatIs.title}</h2>
          {whatIs.paras.map((t) => <p key={t}>{t}</p>)}
        </Reveal>
        <div className="whatis-cards">
          {whatIs.cards.map(([t, d], i) => (
            <Reveal className="wi-card" key={t} style={{ transitionDelay: `${i * 80}ms` }}>
              <span className="wi-ico">{whatIcons[i]}</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- Setup process ---------- */

export function Process() {
  return (
    <section className="sec" id="process">
      <div className="wrap">
        <SectionHead kicker="How it works" title="Franchise Application Setup Process" />
        <ol className="steps">
          {phases.map((p) => (
            <Reveal as="li" key={p.n} className="step">
              <span className="step-n">{p.n}</span>
              <div>
                <h3>Phase {p.n}</h3>
                <p>{p.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

/* ---------- About ---------- */

// Every line below restates something already on this site (terms, support, ROI, phases).
const promises = [
  ['No Royalty Model', 'No Royalty Model with 100% Transparency in Terms.'],
  ['24-Hour Query Resolution', 'Resolution to Any Query Within 24 Hours, with a dedicated helpline for every franchise.'],
  ['Chef Training with SOP', 'Chef Training is Done with Standard Operations Procedures (SOP).'],
  ['One Year Warranty', 'One year warranty for Notica shop service.'],
  ['Monthly Monitoring', 'Monthly monitoring with a helpline executive assigned from the date of Inauguration.'],
  ['Complete Setup Available', 'Complete Setup by NOTICA team is also offered, interior and exterior.'],
]

export function About() {
  return (
    <section className="sec sec-cream" id="about">
      <div className="wrap">
        <SectionHead title="About Us" />
        <Reveal className="about-top">
          <img className="about-img" loading="lazy" src={asset('assets/About-Cert/new image.png')} alt="Glass of Beverage" />
          <div>
            {about.paras.map((t) => <p key={t}>{t}</p>)}
          </div>
        </Reveal>
        <Reveal as="ul" className="ticks">
          {about.points.map((t) => <li key={t}>{t}</li>)}
        </Reveal>
        <div className="vm">
          <Reveal className="card vm-card"><h3>Our Vision</h3><p>{about.vision}</p></Reveal>
          <Reveal className="card vm-card"><h3>Our Mission</h3><p>{about.mission}</p></Reveal>
        </div>

        <SectionHead title={about.whyTitle} />
        <div className="why">
          {about.why.map(([t, d]) => (
            <Reveal className="card why-card" key={t}><h3>{t}</h3><p>{d}</p></Reveal>
          ))}
        </div>
        <Reveal className="glance">
          <h3>NOTICA at a Glance</h3>
          <ul>
            <li><b>{locations.length}</b><span>Outlets</span></li>
            <li><b>{new Set(locations.map((l) => l.area.trim().toLowerCase())).size}</b><span>Cities</span></li>
            <li><b>50-60%</b><span>Gross profit margin</span></li>
            <li><b>6-12</b><span>Months to ROI</span></li>
          </ul>
        </Reveal>
        <div className="promise">
          {promises.map(([t, d]) => (
            <Reveal className="promise-item" key={t}><span className="pr-tick">✓</span><div><h4>{t}</h4><p>{d}</p></div></Reveal>
          ))}
        </div>

        <Reveal className="closing">
          {about.closing.map((t) => <p key={t}>{t}</p>)}
        </Reveal>

        <Reveal className="certs">
          <h3>Our Certifications</h3>
          <div className="cert-row">
            {about.certs.map(([src, alt]) => (
              <div className="cert" key={src}><img loading="lazy" src={asset(`assets/${src}`)} alt={alt} /></div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------- Machine ---------- */

const basicPoints = [
  'Semi-automated dispensing system',
  'Minimal training for staff',
  'Maximum output within minimal space',
  'Bold red NOTICA aesthetic with premium branding',
]
const proPoints = [
  'Everything in Basic',
  '150–200 glasses dispensing capacity after power interruption*',
  'Built-in pressure and dispensing technology',
  'Smooth service even during power cuts',
]
const whyMatters = [
  '150–200 glasses dispensing capacity after power interruption*',
  'Reduced dependency on continuous electricity',
  'Smooth and uninterrupted customer service',
  'Helps minimize downtime during power cuts',
  'Designed for high-volume beverage outlets',
  'Smart engineering focused on operational efficiency',
]

export function Machine() {
  return (
    <section className="sec machine" id="machine">
      <div className="wrap">
        <div className="mach-top">
          <Reveal className="mach-copy">
            <span className="kicker">The Machine</span>
            <h2>14+3 <em>Soda Fountain Machine</em></h2>
            <p>{about.why[2][1]}</p>
            <p>{about.closing[1]}</p>
            <div className="hero-actions">
              <a className="btn btn-light" href={WA_URL} target="_blank" rel="noopener noreferrer">{Icon.wa} Enquire on WhatsApp</a>
              <a className="btn btn-ghost" href={`tel:${PHONE}`}>{Icon.phone} Call Now</a>
            </div>
          </Reveal>
          <Reveal className="mach-photo">
            <div className="mach-glow" aria-hidden="true" />
            <img loading="lazy" src={asset('assets/Services/FountainMachine.png')} alt="Notica 14+3 Soda Fountain Machine" />
          </Reveal>
        </div>

        <ul className="mach-stats">
          <li><b>14+3</b><span>Dispensing taps</span></li>
          <li><b>150–200</b><span>Glasses after a power cut*</span></li>
          <li><b>Semi</b><span>Automated operation</span></li>
          <li><b>Min.</b><span>Training needed</span></li>
        </ul>

        <h3 className="mach-h">Choose your plan</h3>
        <div className="plans">
          <Reveal className="plan">
            <p className="plan-name">Basic</p>
            <p className="plan-price">₹8,00,000<small> + GST</small></p>
            <p className="plan-sub">14+3 Soda Fountain Machine</p>
            <ul>{basicPoints.map((p) => <li key={p}>{p}</li>)}</ul>
            <a className="btn btn-ghost" href={WA_URL} target="_blank" rel="noopener noreferrer">Choose Basic</a>
          </Reveal>
          <Reveal className="plan pro">
            <span className="plan-badge">Power-cut ready</span>
            <p className="plan-name">Pro</p>
            <p className="plan-price">₹8,50,000<small> + GST</small></p>
            <p className="plan-sub">14+3 Soda Fountain Machine</p>
            <ul>{proPoints.map((p) => <li key={p}>{p}</li>)}</ul>
            <a className="btn btn-light" href={WA_URL} target="_blank" rel="noopener noreferrer">Choose Pro</a>
          </Reveal>
        </div>

        <Reveal className="innov">
          <p className="innov-kicker">Innovation that keeps your business running.</p>
          <p>NOTICA has introduced an advanced soda dispensing innovation designed to maintain beverage service even during unexpected power interruptions. Our specially engineered soda machine can continue dispensing approximately 150–200 glasses of soda even after the electricity supply goes off, helping outlets minimize service interruptions and maintain a seamless customer experience.</p>
          <p>This innovative system is designed with built-in pressure and dispensing technology, allowing the machine to utilize stored system capacity efficiently without depending continuously on electricity for every glass.</p>
          <h3>Why It Matters</h3>
          <ul className="why-grid">
            {whyMatters.map((t, i) => <li key={t}><span>{String(i + 1).padStart(2, '0')}</span>{t}</li>)}
          </ul>
          <h3>Innovation That Keeps You Serving</h3>
          <p>At NOTICA, innovation is not just about creating great-tasting beverages—it is about developing smarter solutions for modern beverage businesses.</p>
          <p className="innov-quote">Power may go off.<br />But the NOTICA experience doesn’t have to.</p>
          <p className="innov-sign"><b>NOTICA SODA SHAKE</b><span>The Taste of Legends</span></p>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------- ROI ---------- */

export function Roi() {
  return (
    <section className="sec roi" id="roi">
      <div className="wrap">
        <Reveal className="roi-hero">
          <p className="roi-title">{roi.title}</p>
          <div className="roi-percent">{roi.percent}</div>
          <p className="roi-label">{roi.label}</p>
          <p className="roi-desc">{roi.desc}</p>
          <p className="roi-time">{roi.timeline}</p>
          <p className="roi-tag">{roi.tag}</p>
          <a className="btn btn-light" href={asset('Notica-The-Taste-of-Legends.pdf')} download="Notica-The-Taste-of-Legends.pdf">{Icon.dl} Get Started Today</a>
        </Reveal>

        <SectionHead title={roi.projectionTitle}><p className="muted">{roi.projectionText}</p></SectionHead>
        <div className="cases">
          {roi.cases.map((c, i) => (
            <Reveal className={`case ${i === 2 ? 'best' : ''}`} key={c.name}>
              <header><h3>{c.name}</h3><span>{c.time}</span></header>
              <dl>
                <div><dt>Daily Sale:</dt><dd>{c.sale}</dd></div>
                <div><dt>Revenue:</dt><dd>{c.revenue}</dd></div>
                <div><dt>Expenses:</dt><dd>{c.expenses}</dd></div>
                <div className="profit"><dt>Profit:</dt><dd>{c.profit}</dd></div>
              </dl>
            </Reveal>
          ))}
        </div>
        <p className="disclaimer"><b>Disclaimer:</b>{roi.disclaimer}</p>
      </div>
    </section>
  )
}

/* ---------- Franchise kit + training ---------- */

export function Kit() {
  return (
    <section className="sec" id="kit">
      <div className="wrap">
        <SectionHead title={<>Startup <em>Franchise Kit</em></>}>
          <p className="muted">{kit.intro}</p>
          <a className="btn btn-red" href={asset('Notica-The-Taste-of-Legends.pdf')} download="Notica-The-Taste-of-Legends.pdf">{Icon.dl} Download PDF</a>
        </SectionHead>
        <div className="kit-grid">
          {kit.items.map(([src, label]) => (
            <Reveal className="kit-item" key={label}>
              <div className="kit-img"><img loading="lazy" src={asset(`assets/${src}`)} alt={label} /></div>
              <span>{label}</span>
            </Reveal>
          ))}
        </div>

        <Reveal className="train">
          <div className="card train-card"><h2>Owner Training</h2></div>
          <div className="card hire-card">
            <h2>We Help You Hire</h2>
            <h3>Complete Guide On</h3>
            <ul className="ticks">{kit.hireList.map((t) => <li key={t}>{t}</li>)}</ul>
          </div>
          <div className="card planner-card">
            <h3>Cafe Maintenance Planner</h3>
            <p>{kit.planner}</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------- Support ---------- */

export function Support() {
  return (
    <section className="sec sec-cream" id="support">
      <div className="wrap support">
        <Reveal>
          <h2>{support.title}</h2>
          <h3 className="support-sub">{support.sub}</h3>
          <p>{support.text}</p>
          <div className="support-actions">
            <a className="btn btn-red" href={`tel:${PHONE}`}>{Icon.phone} Phone Support</a>
            <a className="btn btn-wa" href={WA_URL} target="_blank" rel="noopener noreferrer">{Icon.wa} WhatsApp</a>
          </div>
          <p className="hours">{support.hours}</p>
        </Reveal>
        <Reveal className="support-art"><img loading="lazy" src={asset('assets/help/help.webp')} alt="Franchise support" /></Reveal>
      </div>
    </section>
  )
}

/* ---------- Price + Terms ---------- */

export function Apply() {
  const [open, setOpen] = useState(false)
  return (
    <section className="sec apply" id="terms">
      <div className="wrap">
        <Reveal className="price-card">
          <p className="price-lead">Apply Now &amp;<br />Get All This at Only</p>
          <div className="price-plans">
            <div><span>Basic</span><b>₹8,00,000</b></div>
            <div className="pro"><span>Pro</span><b>₹8,50,000</b></div>
          </div>
          <p className="price-gst">+ GST *</p>
          <p className="price-note">*GST applicable as per government norms.</p>
          <a className="btn btn-light" href={`tel:${PHONE}`}>{Icon.phone} Franchise Helpline | {PHONE}</a>
        </Reveal>

        <Reveal className="terms">
          <h3 className="terms-title">Terms &amp; Conditions</h3>
          <ul className={`terms-list ${open ? 'open' : ''}`}>
            {terms.map((t, i) => <li key={t}><span>{i + 1}</span><p>{t}</p></li>)}
          </ul>
          <button className="link-btn" onClick={() => setOpen(!open)} aria-expanded={open}>
            {open ? 'Show less' : 'Read all terms'}
          </button>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------- Products teaser ---------- */

export function Products() {
  return (
    <section className="sec sec-cream" id="products">
      <div className="wrap">
        <SectionHead title="Our Products" />
        <div className="prod-grid">
          {featuredProducts.map(([src, name, href]) => {
            const body = (
              <>
                <div className="prod-img"><img loading="lazy" src={asset(`assets/${src}`)} alt={name} /></div>
                <h3>{name}</h3>
                {href && <span className="prod-more">View machine details →</span>}
              </>
            )
            return (
              <Reveal className="prod" key={name}>
                {href ? <a className="prod-link" href={href}>{body}</a> : body}
              </Reveal>
            )
          })}
        </div>
        <div className="center"><a className="btn btn-red" href="#/products">Show More</a></div>
      </div>
    </section>
  )
}

/* ---------- Video story ---------- */

function VideoCard({ src, text }) {
  const [playing, setPlaying] = useState(false)
  const ref = useRef(null)
  useEffect(() => { if (playing && ref.current) ref.current.play().catch(() => {}) }, [playing])
  return (
    <figure className="video-card">
      <div className="video-box">
        {playing ? (
          <video ref={ref} src={asset(src)} controls playsInline loop preload="auto" poster={asset('assets/media/vedioPartImage.webp')} />
        ) : (
          <button className="video-poster" onClick={() => setPlaying(true)} aria-label="Play video">
            <img loading="lazy" src={asset('assets/media/vedioPartImage.webp')} alt="Soda Franchise Image" />
            <span className="play" aria-hidden="true"><svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor"><path d="M8 5v14l11-7z" /></svg></span>
          </button>
        )}
      </div>
      <figcaption>{text}</figcaption>
    </figure>
  )
}

export function Videos() {
  return (
    <section className="sec" id="story">
      <div className="wrap">
        <SectionHead title="Our Soda Franchise Story" />
      </div>
      <div className="snap videos">
        {videos.map((v, i) => <VideoCard key={i} {...v} />)}
      </div>
    </section>
  )
}

/* ---------- Locations ---------- */

const formatArea = (a) => a.replace(/[-_]+/g, ' ').replace(/\s+/g, ' ').trim().replace(/\b\w/g, (c) => c.toUpperCase())
const PAGE = 6

function Store({ loc }) {
  const [map, setMap] = useState(false)
  const owner = (loc.owner || '').trim()
  return (
    <article className="store">
      <div className="store-info">
        <span className="store-pin">{Icon.pin}</span>
        <div>
          <h3>{loc.title}</h3>
          {owner && <p>Owner: {owner}</p>}
        </div>
      </div>
      {map ? (
        <iframe title={loc.title} src={loc.iframeSrc} loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade" />
      ) : (
        <button className="map-btn" onClick={() => setMap(true)}>View map</button>
      )}
    </article>
  )
}

export function Locations() {
  const [area, setArea] = useState('__all__')
  const [limit, setLimit] = useState(PAGE)

  const areas = useMemo(() => {
    const m = new Map()
    locations.forEach((l) => {
      const a = l.area || 'Other'
      m.set(a, (m.get(a) || 0) + 1)
    })
    return [...m.entries()].sort((a, b) => b[1] - a[1] || formatArea(a[0]).localeCompare(formatArea(b[0])))
  }, [])

  const items = area === '__all__' ? locations : locations.filter((l) => (l.area || 'Other') === area)
  const pick = (a) => { setArea(a); setLimit(PAGE) }

  return (
    <section className="sec sec-cream" id="locations">
      <div className="wrap">
        <SectionHead title="Our Locations"><p className="muted">Explore our key locations with interactive maps</p></SectionHead>
      </div>
      <div className="chips" role="group" aria-label="Filter locations by area">
        {[['__all__', locations.length], ...areas].map(([a, n]) => (
          <button key={a} className={`chip ${a === area ? 'on' : ''}`} aria-pressed={a === area} onClick={() => pick(a)}>
            {a === '__all__' ? 'All Locations' : formatArea(a)} <b>{n}</b>
          </button>
        ))}
      </div>
      <div className="wrap">
        <div className="stores">
          {items.slice(0, limit).map((l) => <Store key={l.id} loc={l} />)}
        </div>
        {limit < items.length && (
          <div className="center"><button className="btn btn-red" onClick={() => setLimit(limit + PAGE)}>Show more ({items.length - limit})</button></div>
        )}
      </div>
    </section>
  )
}

/* ---------- Reviews ---------- */

const Stars = ({ n }) => (
  <span className="stars" aria-label={`${n} out of 5`}>
    {[1, 2, 3, 4, 5].map((i) => <i key={i} className={n >= i ? 'full' : n >= i - 0.5 ? 'half' : ''}>{Icon.star}</i>)}
  </span>
)

export function Reviews() {
  return (
    <section className="sec" id="reviews">
      <div className="wrap">
        <Reveal className="rating-card">
          <div className="rating-big">
            <p className="g-badge">
              <svg viewBox="0 0 48 48" width="22" height="22" aria-hidden="true"><path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9.1 3.6l6.8-6.8C35.8 2.4 30.3 0 24 0 14.6 0 6.5 5.4 2.6 13.2l7.9 6.1C12.4 13.6 17.7 9.5 24 9.5z"/><path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.7c-.6 3-2.3 5.5-4.8 7.2l7.6 5.9c4.4-4.1 7-10.1 7-17.6z"/><path fill="#FBBC05" d="M10.5 28.7A14.5 14.5 0 0 1 9.5 24c0-1.6.3-3.2.9-4.7l-7.9-6.1A24 24 0 0 0 0 24c0 3.9.9 7.5 2.6 10.8l7.9-6.1z"/><path fill="#34A853" d="M24 48c6.5 0 12-2.1 16-5.8l-7.6-5.9c-2.1 1.4-4.9 2.3-8.4 2.3-6.3 0-11.6-4.1-13.5-9.8l-7.9 6.1C6.5 42.6 14.6 48 24 48z"/></svg>
              Google Reviews
            </p>
            <b>4.9</b><Stars n={5} /><span>Based on 38+ reviews</span>
            {GOOGLE_REVIEWS_URL && <a className="g-link" href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer">Write a review on Google →</a>}
          </div>
          <div className="bars">
            {[[5, 95], [4, 5], [3, 0], [2, 0], [1, 0]].map(([s, p]) => (
              <div className="bar" key={s}><span>{s}</span><div><i style={{ width: `${p}%` }} /></div><span>{p}%</span></div>
            ))}
          </div>
        </Reveal>
      </div>
      <div className="snap reviews">
        {reviews.map((r, i) => (
          <blockquote className="review" key={i}>
            <Stars n={r.stars} />
            <p>“{r.text}”</p>
            <footer>{r.name ? `- ${r.name}` : '-'}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  )
}

/* ---------- Marketing ---------- */

export function Marketing() {
  return (
    <section className="sec sec-cream" id="reel">
      <div className="wrap reel">
        <Reveal className="card reel-card">
          <h2>{marketing.title}</h2>
          <p>{marketing.text}</p>
          <a className="btn btn-red" href={social.facebook} target="_blank" rel="noopener noreferrer">{marketing.cta}</a>
        </Reveal>
        <Reveal className="card reel-card">
          <h3>{marketing.inspoTitle}</h3>
          <p>{marketing.inspoText}</p>
          <div className="reel-links">
            <a href={social.instagram} target="_blank" rel="noopener noreferrer">{Icon.ig} beverages_notica</a>
            <a href={social.youtube} target="_blank" rel="noopener noreferrer">{Icon.yt} Notica</a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------- Booking ---------- */

function CopyRow({ label, value }) {
  const [ok, setOk] = useState(false)
  const copy = async () => {
    try { await navigator.clipboard.writeText(value); setOk(true); setTimeout(() => setOk(false), 1400) } catch { /* clipboard unavailable */ }
  }
  return (
    <div className="acc-row">
      <div><dt>{label}</dt><dd>{value}</dd></div>
      <button onClick={copy} aria-label={`Copy ${label}`}>{ok ? 'Copied' : 'Copy'}</button>
    </div>
  )
}

export function Booking() {
  return (
    <section className="sec" id="booking">
      <div className="wrap">
        <SectionHead title={booking.title} />
        <Reveal className="card acc">
          <h3>{booking.heading}</h3>
          <p className="acc-sub">{booking.sub}</p>
          <dl>{booking.rows.map(([k, v]) => <CopyRow key={k} label={k} value={v} />)}</dl>
        </Reveal>
        <Reveal className="accept">
          <h3>WE ALSO ACCEPT</h3>
          <div className="logos">
            {booking.accept.map(([f, alt]) => <div key={f}><img loading="lazy" src={asset(`assets/Bank-Logos/${f}`)} alt={`${alt} logo`} /></div>)}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
