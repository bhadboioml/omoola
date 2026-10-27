import { STREAMING, APPLE_MUSIC_PLAYLIST } from '@/lib/site-data'

export function StreamingStrip() {
  return (
    <section className="border-y border-border px-5 py-6 md:px-10">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-xs tracking-label text-brand">STREAM EVERYWHERE</p>
        <div className="flex flex-wrap gap-x-8 gap-y-2">
          {STREAMING.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="text-sm tracking-label transition-colors hover:text-brand"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>

      <a
        href={APPLE_MUSIC_PLAYLIST}
        target="_blank"
        rel="noreferrer"
        className="mt-6 flex flex-col gap-3 border border-border bg-card p-5 transition-colors hover:border-brand sm:flex-row sm:items-center sm:justify-between"
      >
        <div>
          <p className="text-xs tracking-label text-brand">APPLE MUSIC · EDITORIAL PLAYLIST</p>
          <p className="mt-1 font-serif text-xl">BhadBoi OML Essentials</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Every era in one place — stream the complete catalog on a single playlist.
          </p>
        </div>
        <span className="shrink-0 self-start bg-foreground px-6 py-3 text-xs tracking-label text-background transition-colors hover:bg-brand sm:self-auto">
          OPEN PLAYLIST
        </span>
      </a>
    </section>
  )
}
