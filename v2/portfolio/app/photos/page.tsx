import Link from "next/link"
import CityCard from "./_components/CityCard"
import { getCities } from "./data"
import "./photo.css"

export const metadata = {
  title: "Photos",
  description: "City photo sets and highlights.",
}

export default async function Photos() {
  const cities = await getCities()
  return (
    <div className="photos-page">
      <a className="skip-link" href="#gallery">Skip to gallery</a>

      <header className="photos-hero" aria-label="Photos">
        <div className="photos-hero-inner">
          <p className="photos-kicker">Photography</p>
          <h1 className="photos-title">Photos</h1>
          <p className="photos-subtitle">
            Click On Each Photo Album To View It
          </p>
        </div>

        <div className="photos-hero-actions">
          <Link className="btn btn-ghost" href="/">Back to home</Link>
        </div>
      </header>

      <main className="photos-shell" id="gallery">
        <section className="photos-grid photos-grid--cities" aria-label="Cities">
          {cities.length === 0 ? (
            <div className="photos-empty">
              <div className="photos-empty-title">No cities found</div>
              <div className="photos-empty-body">The photo API didn’t return any locations.</div>
            </div>
          ) : null}
          {cities.map((city) => (
            <CityCard key={city.name} city={city} />
          ))}
        </section>
      </main>

      <footer className="photos-footer">
        <div className="photos-footer-inner">
          <div>© 2026 Ryan Heise</div>
        </div>
      </footer>
    </div>
  )
}
