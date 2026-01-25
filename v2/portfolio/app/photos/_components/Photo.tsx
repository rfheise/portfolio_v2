'use client'

export const URL_ROUTE = "https://api.meter.heise.ai"

export interface City {
  name: string
  description: string
}
export interface Photo {
  location: City
  description: string
  image: string
}
function getImageURL(image_path:string) {
  return URL_ROUTE + image_path
}

export function PhotoDisplay(props:Photo) {
  const imageUrl = getImageURL(props.image)
  const cityName = props.location?.name ?? ""
  const description = props.description?.trim() ?? ""
  const alt = description || (cityName ? `Photo from ${cityName}` : "Photo")

  return (
    <a className="photo-card" href={imageUrl} target="_blank" rel="noreferrer">
      <div className="photo-frame" aria-hidden="true" />
      <img className="photo-img" src={imageUrl} alt={alt} loading="lazy" decoding="async" />
      <div className="photo-meta">
        <div className="photo-meta-top">
          {cityName ? <span className="photo-city">{cityName}</span> : <span />}
        </div>
        {description ? <p className="photo-desc">{description}</p> : null}
      </div>
    </a>
  )
}
