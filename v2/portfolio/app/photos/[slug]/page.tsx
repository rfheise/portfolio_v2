import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getCities, getPhotosForCity } from "../data"
import { slugifyCityName } from "../slug"
import { PhotoDisplay } from "../_components/Photo"
import "../photo.css"

type Props = {
  params: { slug: string }
}

export async function generateStaticParams() {
  let cities = await getCities()
  return cities.map((city) => ({slug: slugifyCityName(city.name)}))
}

function cleanCityName(city:string){
  return city
  .split("-")
  .map(s => (s ? s[0].toUpperCase() + s.slice(1) : s))
  .join(" ");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {

  let city = (await params).slug
  if (!city) return { title: "Photos" }
  city = cleanCityName(city)

  return {
    title: `${city} Photos`,
    description: `Photos from ${city}.`,
  }
}

export default async function CityPhotosPage({params}: Props) {

  const { slug } = await params

  let city = slug
  city = cleanCityName(city)
  if (!city) notFound()

  const photos = await getPhotosForCity(city)

  return (
    <div className="photos-page">
      <a className="skip-link" href="#gallery">Skip to gallery</a>

      <header className="photos-hero" aria-label={`Photos from ${city}`}>
        <div className="photos-hero-inner">
          <p className="photos-kicker">City set</p>
          <h1 className="photos-title">{city}</h1>
        </div>

        <div className="photos-hero-actions">
          <Link className="btn btn-ghost" href="/photos">All cities</Link>
          <Link className="btn btn-ghost" href="/">Home</Link>
        </div>
      </header>

      <main className="photos-shell" id="gallery">
        <section className="photos-grid photos-grid--photos" aria-label={`Photos from ${city}`}>
          {photos.length === 0 ? (
            <div className="photos-empty">
              <div className="photos-empty-title">No photos found</div>
              <div className="photos-empty-body">This city doesn’t have any photos yet.</div>
            </div>
          ) : null}
          {photos.map((photo) => (
            <PhotoDisplay key={photo.image} {...photo} />
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
