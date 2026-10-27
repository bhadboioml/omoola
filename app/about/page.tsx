import Image from 'next/image'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { PageHeader } from '@/components/page-header'

const STATS = [
  { value: '50M+', label: 'STREAMS' },
  { value: '4', label: 'RELEASES' },
  { value: '20+', label: 'CITIES TOURED' },
  { value: '2022', label: 'DEBUT YEAR' },
]

const MILESTONES = [
  {
    year: '2022',
    title: 'First Light',
    text: 'Released his debut single from a home setup in Surulere, Lagos — quickly catching the ear of local tastemakers.',
  },
  {
    year: '2023',
    title: 'Palmwine Tales',
    text: 'An acoustic-leaning EP rooted in storytelling that established his signature blend of tradition and modern groove.',
  },
  {
    year: '2024',
    title: 'Soft Life',
    text: 'A breakout EP and festival run that took the BhadBoi OML sound across West Africa and into Europe.',
  },
  {
    year: '2025',
    title: 'No Comparison',
    text: 'His most ambitious full-length to date — a confident statement record and a world tour to match.',
  },
]

export default function AboutPage() {
  return (
    <>
      <SiteNav />
      <main>
        <PageHeader label="THE ARTIST" title="ABOUT" />

        {/* Portrait + bio split */}
        <section className="grid gap-10 px-5 pb-20 md:grid-cols-[1fr_1fr] md:gap-16 md:px-10">
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src="/images/oml-mirror.jpg"
              alt="BhadBoi OML seated in a leather jacket facing a mirror with a chess set"
              fill
              className="object-cover object-[center_25%]"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="font-serif text-3xl leading-snug text-pretty md:text-4xl">
              An Afrobeats voice carrying the spirit of Lagos to the rest of the
              world.
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-relaxed tracking-wide text-muted-foreground">
              <p>
                BhadBoi OML is a Nigerian singer and songwriter whose sound sits
                at the crossroads of Afrobeats, highlife and amapiano. Raised on
                a diet of fuji, gospel and street-pop, he writes melodies that
                feel both deeply local and effortlessly global.
              </p>
              <p>
                His music is unhurried and honest — songs about love, faith,
                hustle and the soft life he and his community are building. On
                record and on stage, the goal stays the same: connection over
                perfection.
              </p>
              <p>
                Since his 2022 debut, he has grown from bedroom recordings into
                sold-out rooms across three continents, all while staying rooted
                in the city that made him.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="grid grid-cols-2 border-y border-border md:grid-cols-4">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="border-border px-5 py-10 text-center [&:not(:nth-child(2n))]:border-r md:[&:not(:last-child)]:border-r"
            >
              <p className="font-display text-5xl tracking-tight text-brand md:text-6xl">
                {s.value}
              </p>
              <p className="mt-2 text-xs tracking-label text-muted-foreground">
                {s.label}
              </p>
            </div>
          ))}
        </section>

        {/* Timeline */}
        <section className="px-5 py-20 md:px-10">
          <div className="mb-12">
            <p className="mb-2 text-xs tracking-label text-brand">THE JOURNEY</p>
            <h2 className="font-display text-4xl tracking-tight md:text-6xl">
              MILESTONES
            </h2>
          </div>
          <div>
            {MILESTONES.map((m) => (
              <div
                key={m.year}
                className="grid gap-4 border-b border-border py-10 md:grid-cols-[140px_1fr] md:gap-12"
              >
                <span className="font-display text-3xl tracking-tight text-brand md:text-4xl">
                  {m.year}
                </span>
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl">{m.title}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                    {m.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
