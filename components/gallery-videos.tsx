'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Play, X } from 'lucide-react'

type Video = {
  title: string
  meta: string
  img: string
  youtubeId: string
}

const VIDEOS: Video[] = [
  {
    title: 'No Wam (Official Video)',
    meta: 'MUSIC VIDEO · 2026',
    img: '/images/oml-mirror-sun.jpg',
    youtubeId: 'WfKWDBsDylM',
  },
  {
    title: 'Bhadriyun — Live Session',
    meta: 'LIVE · 2025',
    img: '/images/oml-laughing-wide.jpg',
    youtubeId: 'cb3hF-5JRE4',
  },
  {
    title: 'The Mirror Game — Behind the Shoot',
    meta: 'DOCUMENTARY · 2025',
    img: '/images/oml-chess-lean.jpg',
    youtubeId: 'PP5kcoa4kWI',
  },
  {
    title: 'Bhad Boi — Visualizer',
    meta: 'VISUALIZER · 2026',
    img: '/images/oml-profile.jpg',
    youtubeId: 'MNf2swk4o8c',
  },
]

export function GalleryVideos() {
  const [active, setActive] = useState<Video | null>(null)

  useEffect(() => {
    if (!active) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [active])

  return (
    <>
      <div className="grid gap-8 md:grid-cols-3">
        {VIDEOS.map((v) => (
          <button
            key={v.title}
            className="group text-left"
            type="button"
            onClick={() => setActive(v)}
            aria-label={`Play ${v.title}`}
          >
            <div className="relative aspect-video w-full overflow-hidden">
              <Image
                src={v.img || '/placeholder.svg'}
                alt={v.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-foreground/20 transition-colors group-hover:bg-foreground/40">
                <span className="flex size-14 items-center justify-center rounded-full bg-brand text-brand-foreground">
                  <Play className="size-5 fill-current" />
                </span>
              </span>
            </div>
            <p className="mt-3 text-xs tracking-label text-brand">{v.meta}</p>
            <h3 className="mt-1 font-serif text-xl md:text-2xl">{v.title}</h3>
          </button>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={() => setActive(null)}
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="Close video"
              className="absolute -top-12 right-0 flex size-10 items-center justify-center rounded-full bg-background text-foreground transition-colors hover:bg-brand hover:text-brand-foreground"
            >
              <X className="size-5" />
            </button>
            <div className="relative aspect-video w-full overflow-hidden bg-foreground">
              <iframe
                src={`https://www.youtube.com/embed/${active.youtubeId}?autoplay=1`}
                title={active.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
            <p className="mt-3 text-xs tracking-label text-brand">{active.meta}</p>
            <h3 className="mt-1 font-serif text-xl text-background md:text-2xl">
              {active.title}
            </h3>
          </div>
        </div>
      )}
    </>
  )
}
