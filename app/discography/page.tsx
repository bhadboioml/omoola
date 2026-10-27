import Image from 'next/image'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { PageHeader } from '@/components/page-header'
import { StreamingStrip } from '@/components/home/streaming-strip'
import { RELEASES } from '@/lib/site-data'

const COVERS: Record<string, string> = {
  'no-wam': '/images/no-wam.jpg',
  'bhadriyun-deluxe': '/images/bhadriyun-deluxe.webp',
  bhadriyun: '/images/bhadriyun.webp',
  kaizen: '/images/kaizen.webp',
  'bhad-boi-deluxe': '/images/bhad-boi-deluxe.jpeg',
  'bhad-boi': '/images/album-4.png',
  realize: '/images/realize.webp',
}

export default function DiscographyPage() {
  return (
    <>
      <SiteNav />
      <main>
        <PageHeader
          label="THE CATALOG"
          title="DISCOGRAPHY"
          intro="Every record, every era. From the debut single to the latest full-length — explore the complete body of work by BhadBoi OML."
        />
        <StreamingStrip />

        <div className="px-5 md:px-10">
          {RELEASES.map((r, i) => (
            <article
              key={r.id}
              id={r.id}
              className="grid scroll-mt-24 gap-8 border-b border-border py-16 md:grid-cols-[1fr_1fr] md:gap-16 md:py-24"
            >
              {/* Cover + meta */}
              <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                <div className="relative aspect-square w-full overflow-hidden">
                  <Image
                    src={COVERS[r.id] || '/placeholder.svg'}
                    alt={`${r.title} cover art`}
                    fill
                    className="object-cover"
                  />
                  <span className="absolute left-4 top-4 bg-background px-2 py-1 text-xs tracking-label">
                    {r.type} · {r.number}
                  </span>
                </div>
              </div>

              {/* Details */}
              <div className={i % 2 === 1 ? 'md:order-1' : ''}>
                <div className="flex items-baseline justify-between border-b border-border pb-4">
                  <span className="text-xs tracking-label text-brand">{r.year}</span>
                  <span className="text-xs tracking-label text-muted-foreground">
                    {r.tracks} TRACKS · {r.runtime}
                  </span>
                </div>
                <h2 className="mt-4 font-serif text-5xl leading-none md:text-6xl">
                  {r.title}
                </h2>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                  {r.description}
                </p>

                <ol className="mt-8">
                  {r.tracklist.map((track, idx) => (
                    <li
                      key={track}
                      className="flex items-center gap-4 border-b border-border/60 py-3 text-sm"
                    >
                      <span className="w-6 text-xs tracking-label text-muted-foreground">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span className="tracking-wide">{track}</span>
                    </li>
                  ))}
                </ol>

                <a
                  href="https://open.spotify.com/artist/7gCoPolzUpHjzOhp22ihoN"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-block bg-foreground px-6 py-3 text-xs tracking-label text-background transition-colors hover:bg-brand"
                >
                  STREAM {r.title.toUpperCase()}
                </a>
              </div>
            </article>
          ))}
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
