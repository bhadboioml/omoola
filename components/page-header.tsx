export function PageHeader({
  label,
  title,
  intro,
}: {
  label: string
  title: string
  intro?: string
}) {
  return (
    <section className="px-5 pb-10 pt-16 md:px-10 md:pb-16 md:pt-24">
      <p className="mb-4 text-xs tracking-label text-brand">{label}</p>
      <h1 className="font-display text-[18vw] leading-[0.85] tracking-tight text-foreground md:text-[12vw]">
        {title}
      </h1>
      {intro && (
        <p className="mt-6 max-w-xl text-sm leading-relaxed tracking-wide text-muted-foreground md:text-base">
          {intro}
        </p>
      )}
    </section>
  )
}
