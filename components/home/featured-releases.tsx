import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
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

export function FeaturedReleases() {
  const featured = RELEASES.slice(0, 2)

  return (
    <section className="px-5 py-16 md:px-10 md:py-24">
      <div className="mb-10 flex items-end justify-between border-b border-border pb-6">
        <div>
          <p className="mb-2 text-xs tracking-label text-brand">DISCOGRAPHY</p>
          <h2 className="font-display text-4xl tracking-tight md:text-6xl">
            LATEST RELEASES
          </h2>
        </div>
        <Link
          href="/discography"
          className="hidden items-center gap-1 text-xs tracking-label transition-colors hover:text-brand md:flex"
        >
          VIEW ALL <ArrowUpRight className="size-4" />
        </Link>
      </div>

      <div className="grid gap-10 md:grid-cols-2">
        {featured.map((r) => (
          <Link key={r.id} href={`/discography#${r.id}`} className="group block">
            <div className="relative aspect-square w-full overflow-hidden">
              <Image
                src={COVERS[r.id] || '/placeholder.svg'}
                alt={`${r.title} cover art`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute left-4 top-4 bg-background px-2 py-1 text-xs tracking-label">
                FILM: {r.number}
              </span>
            </div>
            <div className="mt-4 flex items-baseline justify-between">
              <h3 className="font-serif text-3xl leading-tight md:text-4xl">
                {r.title}
              </h3>
              <span className="text-xs tracking-label text-muted-foreground">
                {r.type} · {r.year}
              </span>
            </div>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
              {r.description}
            </p>
          </Link>
        ))}
      </div>

      <Link
        href="/discography"
        className="mt-10 flex items-center gap-1 text-xs tracking-label transition-colors hover:text-brand md:hidden"
      >
        VIEW ALL <ArrowUpRight className="size-4" />
      </Link>
    </section>
  )
}
