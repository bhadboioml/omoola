import Image from 'next/image'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="px-5 pb-10 pt-6 md:px-10">
      {/* Top label row */}
      <div className="mb-6 flex items-end justify-between">
        <p className="max-w-xs text-xs leading-relaxed tracking-label text-muted-foreground">
          NIGERIAN AFROBEATS — SINGER, SONGWRITER &amp; PERFORMER BASED IN LAGOS.
        </p>
        <p className="hidden text-xs tracking-label text-brand md:block">EST. 2022</p>
      </div>

      {/* Big image with headline beneath */}
      <div className="relative">
        <div className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-[16/12] md:aspect-[16/9]">
          <Image
            src="/images/oml-mirror.jpg"
            alt="BhadBoi OML seated in a leather jacket facing a mirror with a chess set"
            fill
            priority
            className="object-cover object-[center_30%]"
          />
        </div>

        <h1 className="mt-4 font-display text-[15vw] leading-[0.82] tracking-tight text-brand md:text-[13vw]">
          BHADBOI OML
        </h1>
      </div>

      {/* Bottom row */}
      <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <p className="max-w-md font-serif text-2xl leading-snug text-pretty md:text-3xl">
          Rhythm from the streets of Lagos, songs for the whole world.
        </p>
        <div className="flex gap-4">
          <Link
            href="/discography"
            className="bg-foreground px-6 py-3 text-xs tracking-label text-background transition-colors hover:bg-brand"
          >
            LISTEN NOW
          </Link>
          <Link
            href="/bookings"
            className="border border-foreground px-6 py-3 text-xs tracking-label transition-colors hover:border-brand hover:text-brand"
          >
            BOOK BHADBOI
          </Link>
        </div>
      </div>
    </section>
  )
}
