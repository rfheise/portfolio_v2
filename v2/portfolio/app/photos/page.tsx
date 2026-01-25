import Link from "next/link"
import type { Metadata } from "next"
import CityCard from "./_components/CityCard"
import { getCities } from "./data"
import Footer from './_components/Footer'
import "./photo.css"
import { siteConfig } from "../site"

const title = "Photos"
const description = "City photo sets and highlights."

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/photos",
  },
  openGraph: {
    type: "website",
    url: "/photos",
    title,
    description,
    siteName: siteConfig.title,
    locale: siteConfig.locale,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/twitter-image"],
  },
}

export default async function Photos() {
  const cities = await getCities()
  return (
    <div className="photos-page">
      <a className="skip-link" href="#gallery">Skip to gallery</a>

      <header className="photos-hero" aria-label="Photos">
        <div className="photos-hero-inner">
          {/* <p className="photos-kicker">Photography</p> */}
          <h1 className="photos-title">Photos</h1>
          <p className="photos-subtitle">
            It&apos;s not the years, honey, it&apos;s the mileage
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

     <Footer />
    </div>
  )
}
