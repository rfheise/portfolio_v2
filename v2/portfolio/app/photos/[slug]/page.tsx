import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getCities, getPhotosForCity } from "../data"
import { slugifyCityName } from "../slug"
import { type City, getImageURL, PhotoDisplay } from "../_components/Photo"
import Footer from '../_components/Footer'
import "../photo.css"
import { siteConfig } from "../../site"

type Props = {
  params: { slug: string }
}

function cleanCitySlug(slug:string) {
  return slug
  .split("-")
  .map(s => s[0].toUpperCase() + s.slice(1))
  .join(" ");
}

export async function generateStaticParams() {
  const cities = await getCities()
  return cities.map((city) => ({slug: slugifyCityName(city.name)}))
}

// export async function generateMetadata({params}:Props): Promise<Metadata> {
//   let slug = (await params).slug
//   const city = cleanCitySlug(slug)
//   if (!city) {
//     const title = "Photos"
//     const description = "City photo sets and highlights."

//     return {
//       title,
//       description,
//       alternates: {
//         canonical: "/photos",
//       },
//       openGraph: {
//         type: "website",
//         url: "/photos",
//         title,
//         description,
//         siteName: siteConfig.title,
//         locale: siteConfig.locale,
//         images: [
//           {
//             url: "/opengraph-image",
//             width: 1200,
//             height: 630,
//             alt: title,
//           },
//         ],
//       },
//       twitter: {
//         card: "summary_large_image",
//         title,
//         description,
//         images: ["/twitter-image"],
//       },
//     }
//   }

//   const title = `${city} Photos`
//   const description = `Photos from ${city}.`
//   const canonical = `/photos/${slug}`
//   const coverImage = null

//   return {
//     title,
//     description,
//     alternates: {
//       canonical,
//     },
//     openGraph: {
//       type: "website",
//       url: canonical,
//       title,
//       description,
//       siteName: siteConfig.title,
//       locale: siteConfig.locale,
//       images: coverImage
//         ? [{ url: coverImage, alt: `Photos from ${city}` }]
//         : [
//             {
//               url: "/opengraph-image",
//               width: 1200,
//               height: 630,
//               alt: title,
//             },
//           ],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title,
//       description,
//       images: coverImage ? [coverImage] : ["/twitter-image"],
//     },
//   }
// }

export default async function CityPhotosPage({params}: Props) {
  const city = cleanCitySlug((await params).slug)
  // if (!city) notFound()
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

      <Footer />
    </div>
  )
}
