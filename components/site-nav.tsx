'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '@/lib/site-data'
import { cn } from '@/lib/utils'

export function SiteNav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  // Split nav into left / right of the centered wordmark
  const left = NAV_LINKS.slice(0, 3)
  const right = NAV_LINKS.slice(3)

  return (
    <header className="sticky top-0 z-50 bg-background/85 backdrop-blur-sm">
      <nav className="relative flex items-center justify-between px-5 py-5 md:px-10">
        {/* Desktop left links */}
        <div className="hidden items-center gap-8 md:flex">
          {left.map((link) => (
            <NavItem key={link.href} link={link} active={pathname === link.href} />
          ))}
        </div>

        {/* Wordmark */}
        <Link
          href="/"
          className="font-display text-xl leading-none tracking-tight text-brand md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:text-2xl"
          aria-label="BhadBoi OML home"
        >
          BHADBOI
          <br className="hidden md:block" />
          <span className="md:block">OML</span>
        </Link>

        {/* Desktop right links */}
        <div className="hidden items-center gap-8 md:flex">
          {right.map((link) => (
            <NavItem key={link.href} link={link} active={pathname === link.href} />
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-brand md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-background px-5 pb-8 pt-4 md:hidden">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'block py-2 font-display text-3xl tracking-tight',
                    pathname === link.href ? 'text-brand' : 'text-foreground',
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

function NavItem({
  link,
  active,
}: {
  link: { label: string; href: string }
  active: boolean
}) {
  return (
    <Link
      href={link.href}
      className={cn(
        'text-xs tracking-label transition-colors hover:text-brand',
        active ? 'text-brand' : 'text-foreground',
      )}
    >
      {link.label}
    </Link>
  )
}
