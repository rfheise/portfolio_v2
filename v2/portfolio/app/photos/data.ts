import { cacheLife } from "next/cache"
import { URL_ROUTE, type City, type Photo } from "./_components/Photo"

function buildApiUrl(path: string): string {
  if (!path.startsWith("/")) return `${URL_ROUTE}/${path}`
  return `${URL_ROUTE}${path}`
}

const cache_life = { stale: 15 * 60, revalidate: 30 * 60, expire: 3600 * 24 }
export async function getCities(): Promise<City[]> {
  "use cache"
  cacheLife(cache_life)

  try {
    const response = await fetch(buildApiUrl("/api/cities"))
    if (!response.ok) return []
    return (await response.json()) as City[]
  } catch {
    return []
  }
}

export async function getPhotosForCity(cityName: string): Promise<Photo[]> {
  "use cache"
  cacheLife(cache_life)

  if (!cityName) return []

  try {
    const response = await fetch(buildApiUrl(`/api/photos?city=${encodeURIComponent(cityName)}`))
    if (!response.ok) return []
    return (await response.json()) as Photo[]
  } catch {
    return []
  }
}
