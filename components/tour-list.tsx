import Link from 'next/link'
import { TOUR_DATES, type TourDate } from '@/lib/site-data'
import { cn } from '@/lib/utils'

export function TourList({
  dates = TOUR_DATES,
  showHeader = true,
}: {
  dates?: TourDate[]
  showHeader?: boolean
}) {
  return (
    <section className="px-5 py-16 md:px-10 md:py-24">
      {showHeader && (
        <div className="mb-10 flex items-end justify-between border-b border-border pb-6">
          <div>
            <p className="mb-2 text-xs tracking-label text-brand">LIVE</p>
            <h2 className="font-display text-4xl tracking-tight md:text-6xl">
              TOUR DATES
            </h2>
          </div>
        </div>
      )}

      <ul>
        {dates.length === 0 ? (
          <li className="border-y border-border py-20 text-center">
            <p className="font-display text-5xl tracking-tight md:text-7xl">TBA</p>
            <p className="mt-4 text-sm tracking-wide text-muted-foreground">
              New tour dates and cities to be announced. Check back soon.
            </p>
            <Link
              href="/bookings"
              className="mt-8 inline-block text-xs tracking-label text-foreground transition-colors hover:text-brand"
            >
              GET NOTIFIED →
            </Link>
          </li>
        ) : (
          dates.map((d) => (
            <li
              key={d.date}
              className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 border-b border-border py-6 md:grid-cols-[140px_1fr_1fr_auto] md:gap-8"
            >
              <div className="flex items-baseline gap-2">
                <span className="font-display text-3xl tracking-tight md:text-4xl">
                  {d.day}
                </span>
                <span className="text-xs tracking-label text-muted-foreground">
                  {d.month}
                </span>
              </div>

              <div>
                <p className="font-serif text-xl md:text-2xl">
                  {d.city}, {d.country}
                </p>
                <p className="text-xs tracking-label text-muted-foreground md:hidden">
                  {d.venue}
                </p>
              </div>

              <p className="hidden text-sm tracking-wide text-muted-foreground md:block">
                {d.venue}
              </p>

              <TicketButton status={d.status} />
            </li>
          ))
        )}
      </ul>
    </section>
  )
}

function TicketButton({ status }: { status: TourDate['status'] }) {
  if (status === 'SOLD OUT') {
    return (
      <span className="text-xs tracking-label text-muted-foreground">SOLD OUT</span>
    )
  }
  return (
    <Link
      href="/bookings"
      className={cn(
        'text-xs tracking-label transition-colors hover:text-brand',
        'text-foreground',
      )}
    >
      {status} →
    </Link>
  )
}
