import { useEffect, useState } from 'react'
import { asset, nav, footer, social, PHONE, WA_URL } from './content.js'
import {
  Icon, Hero, Process, About, Machine, Roi, Kit, Support, Apply, Products, Videos,
  Locations, Reviews, Marketing, Booking,
} from './Sections.jsx'
import ProductsPage from './ProductsPage.jsx'

const getRoute = () => (window.location.hash === '#/products' ? 'products' : 'home')

export default function App() {
  const [route, setRoute] = useState(getRoute())
  const productsView = route !== 'home'
  const [menu, setMenu] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onHash = () => {
      const r = getRoute()
      setRoute(r)
      setMenu(false)
      setTimeout(() => {
        const id = window.location.hash.replace('#', '')
        const el = r === 'home' && id && !id.startsWith('/') ? document.getElementById(id) : null
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        else window.scrollTo(0, 0)
      }, 60)
    }
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('hashchange', onHash)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('hashchange', onHash)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = menu ? 'hidden' : ''
  }, [menu])

  return (
    <>
      <header className={`topbar ${scrolled || productsView ? 'solid' : ''}`}>
        <div className="wrap topbar-in">
          <a href="#top" className="brand" aria-label="Notica home">
            <img src={asset('assets/notica-logo.png')} alt="Notica" />
          </a>
          <nav className="desk-nav" aria-label="Primary">
            {nav.map((n) => <a key={n.href} href={n.href}>{n.label}</a>)}
          </nav>
          <a className="btn btn-red btn-sm top-cta" href={WA_URL} target="_blank" rel="noopener noreferrer">Apply Now</a>
          <button className={`burger ${menu ? 'open' : ''}`} onClick={() => setMenu(!menu)} aria-label="Menu" aria-expanded={menu}>
            <span /><span /><span />
          </button>
        </div>
      </header>

      <div className={`drawer ${menu ? 'open' : ''}`} onClick={() => setMenu(false)} aria-hidden={!menu}>
        <nav onClick={(e) => e.stopPropagation()} aria-label="Mobile">
          {nav.map((n) => <a key={n.href} href={n.href} onClick={() => setMenu(false)}>{n.label}</a>)}
          <div className="drawer-social">
            <a href={social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">{Icon.fb}</a>
            <a href={social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">{Icon.ig}</a>
            <a href={social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">{Icon.yt}</a>
          </div>
        </nav>
      </div>

      {route === 'products' ? (
        <ProductsPage />
      ) : (
        <main>
          <Hero />
          <Process />
          <About />
          <Machine />
          <Roi />
          <Kit />
          <Support />
          <Apply />
          <Products />
          <Videos />
          <Locations />
          <Reviews />
          <Marketing />
          <Booking />
        </main>
      )}

      <footer className="footer" id="contact">
        <div className="wrap footer-in">
          <img className="footer-family" src={asset('assets/family-soda.svg')} alt="A family enjoying Notica soda" loading="lazy" />
          <img className="footer-logo" src={asset('assets/noticaWhiteLogo.webp')} alt="Notica" loading="lazy" />
          <h5>{footer.company}</h5>
          <p>{footer.address}</p>
          <p className="footer-phones">
            {footer.phones.map((p, i) => (
              <span key={p}>{i > 0 && ' | '}<a href={`tel:${p.replace(/\s/g, '')}`}>{p}</a></span>
            ))}
          </p>
          <div className="footer-social">
            <a href={social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">{Icon.fb}</a>
            <a href={social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">{Icon.ig}</a>
            <a href={social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">{Icon.yt}</a>
          </div>
        </div>
      </footer>

      <div className="dock" role="group" aria-label="Quick contact">
        <a className="dock-call" href={`tel:${PHONE}`}>{Icon.phone} Call</a>
        <a className="dock-wa" href={WA_URL} target="_blank" rel="noopener noreferrer">{Icon.wa} WhatsApp</a>
      </div>
    </>
  )
}
