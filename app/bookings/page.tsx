import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { PageHeader } from '@/components/page-header'
import { BookingForm } from '@/components/booking-form'
import { SOCIALS } from '@/lib/site-data'

const CONTACTS = [
  { role: 'BOOKINGS & MANAGEMENT', name: 'OML Entertainment', email: 'bookings@bhadboioml.com' },
  { role: 'PRESS & MEDIA', name: 'Press Office', email: 'press@bhadboioml.com' },
  { role: 'GENERAL', name: 'Front Desk', email: 'hello@bhadboioml.com' },
]

export default function BookingsPage() {
  return (
    <>
      <SiteNav />
      <main>
        <PageHeader
          label="WORK WITH BHADBOI"
          title="BOOKINGS"
          intro="For live shows, festivals, features and press, reach out below. Every inquiry is reviewed by the management team directly."
        />

        <section className="grid gap-12 px-5 pb-24 md:grid-cols-[1fr_340px] md:gap-16 md:px-10">
          {/* Form */}
          <div>
            <BookingForm />
          </div>

          {/* Contacts sidebar */}
          <aside className="flex flex-col gap-10">
            <div className="flex flex-col gap-8">
              {CONTACTS.map((c) => (
                <div key={c.role} className="border-t border-border pt-4">
                  <p className="text-xs tracking-label text-brand">{c.role}</p>
                  <p className="mt-2 font-serif text-xl">{c.name}</p>
                  <a
                    href={`mailto:${c.email}`}
                    className="mt-1 block text-sm tracking-wide text-muted-foreground transition-colors hover:text-brand"
                  >
                    {c.email}
                  </a>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-4">
              <p className="mb-3 text-xs tracking-label text-brand">SOCIAL</p>
              <div className="flex flex-col gap-2">
                {SOCIALS.map((s) => (
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

            <div className="border-t border-border pt-4">
              <p className="text-xs tracking-label text-brand">BASED IN</p>
              <p className="mt-2 font-serif text-xl">Lagos, Nigeria</p>
              <p className="text-sm tracking-wide text-muted-foreground">
                Available worldwide
              </p>
            </div>
          </aside>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
