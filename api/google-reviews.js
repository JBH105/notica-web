// Vercel serverless function: returns the live Google rating and review count.
// Set these in Vercel > Project > Settings > Environment Variables:
//   GOOGLE_PLACES_API_KEY  - Google Cloud API key with "Places API (New)" enabled
//   GOOGLE_PLACE_ID        - the Place ID of the Notica Google Business listing
export default async function handler(req, res) {
  const key = process.env.GOOGLE_PLACES_API_KEY
  const placeId = process.env.GOOGLE_PLACE_ID

  if (!key || !placeId) {
    res.status(503).json({ error: 'Google Places is not configured' })
    return
  }

  try {
    const r = await fetch(`https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`, {
      headers: { 'X-Goog-Api-Key': key, 'X-Goog-FieldMask': 'rating,userRatingCount' },
    })
    if (!r.ok) {
      res.status(502).json({ error: 'Google Places request failed' })
      return
    }
    const j = await r.json()
    // Google's numbers change slowly: let the CDN cache them for an hour.
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400')
    res.status(200).json({ rating: j.rating ?? null, count: j.userRatingCount ?? null })
  } catch {
    res.status(502).json({ error: 'Google Places request failed' })
  }
}
