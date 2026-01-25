export const URL_ROUTE = "https://api.meter.heise.ai"

export interface City {
  name: string
  description: string
  first_image: string
}
export interface Photo {
  location: City
  description: string
  image: string
}

export function getImageURL(imagePath: string) {
  if (!imagePath) return ""
  if (imagePath.startsWith("http://") || imagePath.startsWith("https://")) return imagePath
  if (!imagePath.startsWith("/")) return `${URL_ROUTE}/${imagePath}`
  return `${URL_ROUTE}${imagePath}`
}

export function PhotoDisplay(props:Photo) {
  const imageUrl = getImageURL(props.image)
  const description = props.description?.trim() ?? ""
  const alt = description || "Photo"

  return (
    <a className="photo-card" href={imageUrl} target="_blank" rel="noreferrer">
      <div className="photo-frame" aria-hidden="true" />
      <img className="photo-img" src={imageUrl} alt={alt} loading="lazy" decoding="async" />
      <div className="photo-meta">
        {description ? <p className="photo-desc">{description}</p> : null}
      </div>
    </a>
  )
}
