'use client'

import { useState } from 'react'
import { ValidationError, useForm } from '@formspree/react'

const INQUIRY_TYPES = ['Live Show', 'Festival', 'Private Event', 'Feature / Collab', 'Press', 'Other']

export function BookingForm() {
  const [state, handleSubmit] = useForm('xoeedzgj')
  const [type, setType] = useState('Live Show')

  if (state.succeeded) {
    return (
      <div className="border border-border p-10 text-center">
        <p className="mb-2 text-xs tracking-label text-brand">RECEIVED</p>
        <h3 className="font-serif text-3xl">Thank you.</h3>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
          Your booking inquiry has been sent to the management team. We&apos;ll
          be in touch within 2&ndash;3 business days.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      {/* Inquiry type */}
      <input type="hidden" name="inquiry_type" value={type} />
      <fieldset>
        <legend className="mb-3 text-xs tracking-label text-muted-foreground">
          INQUIRY TYPE
        </legend>
        <div className="flex flex-wrap gap-2">
          {INQUIRY_TYPES.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setType(t)}
              className={`border px-4 py-2 text-xs tracking-label transition-colors ${
                type === t
                  ? 'border-brand bg-brand text-brand-foreground'
                  : 'border-border hover:border-foreground'
              }`}
            >
              {t.toUpperCase()}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-8 sm:grid-cols-2">
        <Field label="NAME*" name="name" required />
        <Field label="ORGANIZATION" name="org" />
        <Field label="EMAIL*" name="email" type="email" required />
        <Field label="PHONE" name="phone" type="tel" />
        <Field label="EVENT DATE" name="date" type="date" />
        <Field label="CITY / VENUE" name="venue" />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-xs tracking-label text-muted-foreground"
        >
          MESSAGE*
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Tell us about your event, budget and expected audience..."
          className="w-full border-b border-foreground bg-transparent py-2 text-sm tracking-wide placeholder:text-muted-foreground focus:outline-none"
        />
      </div>

      <ValidationError
        errors={state.errors}
        className="text-sm text-destructive"
      />
      <button
        type="submit"
        disabled={state.submitting}
        className="self-start bg-foreground px-8 py-4 text-xs tracking-label text-background transition-colors hover:bg-brand disabled:cursor-not-allowed disabled:opacity-60"
      >
        {state.submitting ? 'SENDING...' : 'SEND INQUIRY'}
      </button>
    </form>
  )
}

function Field({
  label,
  name,
  type = 'text',
  required = false,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-xs tracking-label text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full border-b border-foreground bg-transparent py-2 text-sm tracking-wide focus:outline-none"
      />
    </div>
  )
}
