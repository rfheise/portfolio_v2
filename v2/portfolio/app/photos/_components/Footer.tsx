import { cacheLife } from "next/cache"


async function getYear() {
  'use cache'
  cacheLife({'stale':3600*24, 'revalidate': 3600*7*24, 'expire': 3600 *30*24})
  return (new Date()).getFullYear()
}


export default async function Footer(){ 
  const year = await getYear()
    return (
    <footer className="photos-footer">
        <div className="photos-footer-inner">
          <div>© {year} Ryan Heise</div>
        </div>
      </footer>
    )

}
