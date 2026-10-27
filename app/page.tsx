import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { Hero } from '@/components/home/hero'
import { StreamingStrip } from '@/components/home/streaming-strip'
import { IntroSplit } from '@/components/home/intro-split'
import { FeaturedReleases } from '@/components/home/featured-releases'
import { GalleryVideos } from '@/components/gallery-videos'
import { TourList } from '@/components/tour-list'
import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <StreamingStrip />
        <IntroSplit />
        <FeaturedReleases />

        {/* Videos */}
        <section className="border-t border-border px-5 py-20 md:px-10">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-2 text-xs tracking-label text-brand">WATCH</p>
              <h2 className="font-display text-4xl tracking-tight md:text-6xl">
                VIDEOS
              </h2>
            </div>
            <Link
              href="/gallery#videos"
              className="text-xs tracking-label text-foreground transition-colors hover:text-brand"
            >
              VIEW ALL IN GALLERY
            </Link>
          </div>
          <GalleryVideos />
        </section>

        {/* Full-bleed live band */}
        <section className="relative aspect-[16/9] w-full overflow-hidden md:aspect-[21/9]">
          <Image
            src="/images/live-performance.png"
            alt="BhadBoi OML performing live"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-foreground/30 text-center">
            <p className="font-display text-[12vw] leading-none tracking-tight text-background md:text-[8vw]">
              LIVE &amp; DIRECT
            </p>
            <Link
              href="/gallery"
              className="border border-background px-6 py-3 text-xs tracking-label text-background transition-colors hover:bg-background hover:text-foreground"
            >
              ENTER THE GALLERY
            </Link>
          </div>
        </section>

        <TourList dates={undefined} showHeader />
      </main>
      <SiteFooter />
    </>
  )
}
