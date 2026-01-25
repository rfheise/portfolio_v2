'use client'
import { type City, type Photo, PhotoDisplay, URL_ROUTE } from "./_components/Photo"
import { useMemo, useState, useEffect } from "react"
import Link from "next/link"
import DropDown from "./_components/DropDown"
import "./photo.css"

async function get(route:string) {
  const url = URL_ROUTE + route
  try {
    const response = await fetch(url)
    return await response.json()
  } catch {
    return null
  }
}

async function getCities():Promise<City[]> {
  const data = await get("/api/cities")
  if (!data) {
    return []
  }
  return data
}

async function getImages(query:string):Promise<Photo[]> {
  const data = await get("/api/photos?city="+encodeURIComponent(query))
  if (!data) {
    return []
  }
  return data
}

export default function Photos() {
  const [cities, setCities] = useState<City[]>([])
  const [selectedCity, setSelectedCity] = useState<string>("")
  const [images, setImages] = useState<Photo[]>([])
  const [isLoadingCities, setIsLoadingCities] = useState<boolean>(true)
  const [isLoadingPhotos, setIsLoadingPhotos] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const currentCity = useMemo(() => {
    return cities.find((city) => city.name === selectedCity) ?? null
  }, [cities, selectedCity])

  async function updateImages(city:string) {
    if (!city) return
    setError(null)
    setIsLoadingPhotos(true)
    setSelectedCity(city)

    try {
      const data = await getImages(city)
      setImages(data)
    } catch {
      setImages([])
      setError("Could not load photos right now.")
    } finally {
      setIsLoadingPhotos(false)
    }
  }

  useEffect(function(){
    (async function() {
      setIsLoadingCities(true)
      setError(null)
      const cities = await getCities()
      setCities(cities)
      setIsLoadingCities(false)

      if (cities.length !== 0) {
        updateImages(cities[0].name)
      } else {
        setSelectedCity("")
      }
    })()
  }, [])

  return (
    <div className="photos-page">
      <a className="skip-link" href="#gallery">Skip to gallery</a>

      <header className="photos-hero" aria-label="Photos">
        <div className="photos-hero-inner">
          <h1 className="photos-title">Photos</h1>
          <p className="photos-subtitle">
            Pictures I've Taken Along The Way
          </p>
        </div>

        <div className="photos-hero-actions">
          <Link className="btn btn-ghost" href="/">Back to home</Link>
        </div>
      </header>

      <main className="photos-shell" id="gallery">
        <aside className="photos-rail" aria-label="Gallery filters">
          <div className="photos-rail-panel">
            <div className="photos-rail-head">
              <h2 className="photos-rail-title">Browse</h2>
              <div className="photos-rail-meta">
                {isLoadingPhotos ? "Loading…" : `${images.length} photo${images.length === 1 ? "" : "s"}`}
              </div>
            </div>

            <label className="photos-label" htmlFor="photos-city">City</label>
            <DropDown
              id="photos-city"
              options={cities.map((city) => city.name)}
              value={selectedCity}
              onChange={updateImages}
              className="photos-select"
              ariaLabel="Select city"
              disabled={isLoadingCities || cities.length === 0}
              placeholder={isLoadingCities ? "Loading…" : "Select a city"}
            />

            {currentCity?.description ? (
              <p className="photos-city-desc">{currentCity.description}</p>
            ) : null}

            {error ? <p className="photos-error" role="status">{error}</p> : null}
          </div>

          <div className="photos-rail-panel photos-rail-panel--hint">
            <h3 className="photos-hint-title">Tip</h3>
            <p className="photos-hint-body">Click any photo to open it full-size.</p>
          </div>
        </aside>

        <section className="photos-grid" aria-label="Photo grid">
          {isLoadingCities ? (
            <div className="photos-empty">
              <div className="photos-empty-title">Loading cities…</div>
              <div className="photos-empty-body">Fetching the archive index.</div>
            </div>
          ) : null}

          {!isLoadingCities && cities.length === 0 ? (
            <div className="photos-empty">
              <div className="photos-empty-title">No cities found</div>
              <div className="photos-empty-body">The photo API didn’t return any locations.</div>
            </div>
          ) : null}

          {!isLoadingCities && cities.length !== 0 && images.length === 0 && !isLoadingPhotos ? (
            <div className="photos-empty">
              <div className="photos-empty-title">No photos yet</div>
              <div className="photos-empty-body">Try a different city.</div>
            </div>
          ) : null}

          {images.map((photo) => (<PhotoDisplay key={photo.image} {...photo} />))}
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
