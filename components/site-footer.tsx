import Link from 'next/link'
import { NAV_LINKS, SOCIALS, STREAMING } from '@/lib/site-data'
import { NewsletterForm } from '@/components/newsletter-form'

export function SiteFooter() {
  return (
    <footer className="border-t border-border px-5 pb-10 pt-16 md:px-10 md:pt-20">
      <div className="mb-16 flex flex-col gap-12 md:flex-row md:justify-between">
        {/* Newsletter */}
        <div className="max-w-md">
          <p className="mb-2 text-xs tracking-label text-brand">NEWSLETTER</p>
          <h2 className="mb-6 font-serif text-3xl leading-tight text-pretty md:text-4xl">
            Join the inner circle for first access to drops and shows.
          </h2>
          <NewsletterForm />
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
          <FooterColumn title="EXPLORE">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-sm transition-colors hover:text-brand"
              >
                {link.label}
              </Link>
            ))}
          </FooterColumn>

          <FooterColumn title="LISTEN">
            {STREAMING.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="block text-sm transition-colors hover:text-brand"
              >
                {s.label}
              </a>
            ))}
          </FooterColumn>

          <FooterColumn title="FOLLOW">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="block text-sm transition-colors hover:text-brand"
              >
                {s.label}
              </a>
            ))}
          </FooterColumn>
        </div>
      </div>

      {/* Giant wordmark */}
      <div className="overflow-hidden border-t border-border pt-8">
        <p className="font-display text-[18vw] leading-[0.85] tracking-tight text-brand">
          BHADBOI OML
        </p>
      </div>

      <div className="mt-8 flex flex-col gap-2 text-xs tracking-label text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} BHADBOI OML. ALL RIGHTS RESERVED.</span>
        <span>LAGOS — WORLDWIDE</span>
      </div>

      <div className="mt-4 border-t border-border pt-4 text-center text-xs tracking-label text-muted-foreground">
        WEBSITE DESIGNED &amp; MANAGED BY{' '}
        <a
          href="https://www.thearrival.ca"
          target="_blank"
          rel="noreferrer"
          className="text-foreground transition-colors hover:text-brand"
        >
          ARRIVAL DIGITAL INC.
        </a>
      </div>
    </footer>
  )
}

function FooterColumn({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div>
      <p className="mb-4 text-xs tracking-label text-muted-foreground">{title}</p>
      <div className="flex flex-col gap-2">{children}</div>
    </div>
  )
}
