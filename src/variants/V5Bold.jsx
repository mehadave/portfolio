export default function V5Bold() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#0a0a0a] text-[#f5f5f0]">
      <nav className="flex items-center justify-between px-10 py-6">
        <span className="text-sm font-bold tracking-widest">✦ MD</span>
        <div className="flex items-center gap-5 text-xs uppercase tracking-widest text-[#888]">
          <span>01 Work</span><span>02 About</span><span>03 Contact</span>
          <button className="rounded-full bg-[#ff5b1f] px-4 py-2 text-[#0a0a0a]">Let's talk →</button>
        </div>
      </nav>

      <section className="relative px-10 pt-10">
        <p className="mb-6 text-xs uppercase tracking-[0.4em] text-[#888]">— Portfolio / 2026</p>

        <h1 className="font-sans font-black leading-[0.82] tracking-tighter text-[18vw]">
          BUILDING<br />
          <span className="italic font-serif font-normal" style={{ fontFamily: '"Playfair Display", serif' }}>software</span><br />
          THAT STICKS.
        </h1>

        <div className="mt-10 flex items-end justify-between">
          <div className="max-w-md">
            <p className="text-lg leading-snug text-[#bbb]">
              <span className="text-[#ff5b1f]">Meha Dave</span> — Senior Product Engineer. Five years shipping consumer products that people actually keep using.
            </p>
          </div>
          <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-[#888]">
            <span>Scroll</span>
            <span className="text-2xl">↓</span>
          </div>
        </div>

        <div className="mt-12 flex gap-4 overflow-hidden border-t border-[#1e1e1e] pt-6 text-sm text-[#888]">
          <span className="text-[#ff5b1f]">●</span> Now: Freelance · Remote · Open to select engagements <span className="mx-4">/</span>
          <span className="text-[#ff5b1f]">●</span> Recently: Touchbase, Habitat, Flashify <span className="mx-4">/</span>
          <span className="text-[#ff5b1f]">●</span> Stack: React · TS · Node · Postgres
        </div>
      </section>
    </div>
  )
}
