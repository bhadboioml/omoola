import Image from 'next/image'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { PageHeader } from '@/components/page-header'
import { GalleryVideos } from '@/components/gallery-videos'

const PHOTOS = [
  { src: '/images/oml-mirror-wide.jpg', caption: 'The Mirror Game', span: 'md:col-span-2 md:row-span-2' },
  { src: '/images/oml-laugh.jpg', caption: 'Off guard' },
  { src: '/images/oml-profile.jpg', caption: 'OML — profile' },
  { src: '/images/oml-chair-down.jpg', caption: 'Checkmate' },
  { src: '/images/oml-arms-crossed.jpg', caption: 'The throne', span: 'md:col-span-2' },
  { src: '/images/oml-chess-lean.jpg', caption: 'Next move' },
  { src: '/images/oml-portrait.jpg', caption: 'Studio portrait' },
  { src: '/images/oml-mirror-sun.jpg', caption: 'Reflection', span: 'md:col-span-2' },
  { src: '/images/oml-laughing-wide.jpg', caption: 'Between takes' },
  { src: '/images/oml-chess-detail.jpg', caption: 'The pieces' },
  { src: '/images/oml-standing.jpg', caption: 'Full length', span: 'md:row-span-2' },
  { src: '/images/oml-mirror-sun2.jpg', caption: 'Quiet light', span: 'md:col-span-2' },
]

export default function GalleryPage() {
  return (
    <>
      <SiteNav />
      <main>
        <PageHeader
          label="VISUALS"
          title="GALLERY"
          intro="Stills and motion from the stage, the studio and the streets. A visual diary of the BhadBoi OML era."
        />

        {/* Photo grid */}
        <section className="px-5 pb-20 md:px-10">
          <div className="grid auto-rows-[220px] grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {PHOTOS.map((p) => (
              <figure
                key={p.src}
                className={`group relative overflow-hidden ${p.span || ''}`}
              >
                <Image
                  src={p.src || '/placeholder.svg'}
                  alt={p.caption}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <figcaption className="absolute bottom-0 left-0 right-0 bg-foreground/40 px-3 py-2 text-xs tracking-label text-background opacity-0 transition-opacity group-hover:opacity-100">
                  {p.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* Videos */}
        <section id="videos" className="scroll-mt-24 border-t border-border px-5 py-20 md:px-10">
          <div className="mb-12">
            <p className="mb-2 text-xs tracking-label text-brand">WATCH</p>
            <h2 className="font-display text-4xl tracking-tight md:text-6xl">
              VIDEOS
            </h2>
          </div>
          <GalleryVideos />
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
