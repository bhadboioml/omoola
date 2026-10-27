'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
    setEmail('')
  }

  if (submitted) {
    return (
      <p className="text-sm tracking-label text-brand">
        YOU&apos;RE IN. WELCOME TO THE INNER CIRCLE.
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-3 border-b border-foreground pb-2">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="EMAIL ADDRESS"
        aria-label="Email address"
        className="w-full bg-transparent text-sm tracking-label placeholder:text-muted-foreground focus:outline-none"
      />
      <button
        type="submit"
        aria-label="Subscribe"
        className="shrink-0 text-foreground transition-colors hover:text-brand"
      >
        <ArrowRight className="size-5" />
      </button>
    </form>
  )
}
