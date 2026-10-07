import { useState } from 'react'
import data from './data/categories.json'
import { asset } from './content.js'

export default function ProductsPage() {
  const [active, setActive] = useState(data.categories[0].id)
  const cat = data.categories.find((c) => c.id === active)

  return (
    <main className="wrap products-page">
      <a className="back" href="#top">← Back to home</a>
      <h1>All Products</h1>

      <div className="tabs" role="tablist">
        {data.categories.map((c) => (
          <button key={c.id} role="tab" aria-selected={c.id === active} className={`tab ${c.id === active ? 'on' : ''}`} onClick={() => setActive(c.id)}>
            {c.icon && <img src={asset(c.icon)} alt="" />}
            <span>{c.title}</span>
          </button>
        ))}
      </div>

      <div className={`pgrid ${cat.items.some((i) => i.image) ? 'with-img' : 'text-only'}`}>
        {cat.items.map((item, i) =>
          item.image ? (
            <figure className="pcard" key={i}>
              <img loading="lazy" src={asset(item.image)} alt={item.name} />
              <figcaption>{item.name}</figcaption>
            </figure>
          ) : (
            <div className="ptext" key={i}>{item.name.trim()}</div>
          )
        )}
      </div>
    </main>
  )
}
