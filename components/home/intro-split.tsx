export function IntroSplit() {
  return (
    <section className="px-5 py-24 md:px-10 md:py-40">
      <div className="grid items-center gap-12 md:grid-cols-[1fr_auto_1fr] md:gap-8">
        {/* Left */}
        <div className="md:max-w-sm md:justify-self-end md:text-right">
          <div className="mb-1 flex items-center justify-between text-xs tracking-label text-brand md:flex-row-reverse">
            <span>MEANING:</span>
            <span>BHADBOI</span>
          </div>
          <h2 className="font-serif text-6xl italic leading-none text-brand md:text-7xl">
            The Bhad
          </h2>
          <p className="mt-5 text-sm leading-relaxed tracking-wide text-foreground md:ml-auto md:max-w-xs">
            UNAPOLOGETIC, FEARLESS AND ROOTED IN CULTURE — A VOICE THAT REFUSES
            TO BLEND INTO THE NOISE OF THE INDUSTRY.
          </p>
        </div>

        {/* Center divider */}
        <div
          className="mx-auto h-40 w-1.5 rotate-12 bg-brand md:h-64"
          aria-hidden="true"
        />

        {/* Right */}
        <div className="md:max-w-sm">
          <div className="mb-1 flex items-center justify-between text-xs tracking-label text-brand">
            <span>AFROBEATS</span>
            <span>ARTIST</span>
          </div>
          <h2 className="font-serif text-6xl italic leading-none text-brand md:text-7xl">
            OML
          </h2>
          <p className="mt-5 max-w-xs text-sm leading-relaxed tracking-wide text-foreground">
            &ldquo;ON MY LIFE&rdquo; — A PROMISE OF AUTHENTICITY IN EVERY RECORD,
            CONNECTING RAW EMOTION WITH MELODY, GROOVE AND TRUTH.
          </p>
        </div>
      </div>
    </section>
  )
}
