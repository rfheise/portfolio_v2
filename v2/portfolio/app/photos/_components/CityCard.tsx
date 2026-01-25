import Link from "next/link"
import { type City, getImageURL } from "./Photo"
import { slugifyCityName } from "../slug"

type Props = {
  city: City
}

export default function CityCard({ city }: Props) {
  const href = `/photos/${slugifyCityName(city.name)}`
  const imageUrl = getImageURL(city.first_image)
  const alt = city.name ? `Photos from ${city.name}` : "City photos"

  return (
    <Link className="city-card" href={href} aria-label={`View photos from ${city.name}`}>
      <div className="city-frame" aria-hidden="true" />
      <img className="city-img" src={imageUrl} alt={alt} loading="lazy" decoding="async" />
      <div className="city-meta">
        <h2 className="city-title">{city.name}</h2>
        {city.description ? <p className="city-desc">{city.description}</p> : null}
      </div>
    </Link>
  )
}

