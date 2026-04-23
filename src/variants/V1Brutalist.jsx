export default function V1Brutalist() {
  return (
    <div className="min-h-screen bg-[#f5f2ea] text-[#0a0a0a] font-serif">
      <nav className="flex items-center justify-between border-b-[3px] border-black px-10 py-5">
        <div className="text-xl font-bold tracking-tight">MEHA — DAVE</div>
        <div className="flex gap-8 text-sm font-sans uppercase tracking-widest">
          <span>Index</span><span>Work</span><span>Notes</span><span>Contact</span>
        </div>
      </nav>

      <section className="relative px-10 py-16">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-8">
            <p className="mb-8 font-sans text-sm uppercase tracking-[0.3em]">Issue 007 — Senior Product Engineer</p>
            <h1 className="font-serif text-[11vw] leading-[0.9] tracking-tighter">
              Meha<br />
              <span className="italic">Dave.</span>
            </h1>
          </div>
          <div className="col-span-12 md:col-span-4 flex flex-col justify-end">
            <p className="font-sans text-sm leading-relaxed">
              A portfolio, bound loosely. Five years of shipping software that respects both the user and the engineer reading it six months later.
            </p>
            <div className="mt-6 flex gap-3">
              <button className="border-[2px] border-black px-5 py-2 text-xs font-sans uppercase tracking-widest">Selected Work →</button>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-12 gap-6 border-t-[2px] border-black pt-6">
          <div className="col-span-4 font-sans text-xs uppercase tracking-widest">01 / Touchbase</div>
          <div className="col-span-5 font-sans text-sm">Personal CRM — React · Postgres · Node</div>
          <div className="col-span-3 text-right font-sans text-xs">2026 →</div>
        </div>
        <div className="mt-3 grid grid-cols-12 gap-6 border-t border-black pt-3">
          <div className="col-span-4 font-sans text-xs uppercase tracking-widest">02 / Habitat</div>
          <div className="col-span-5 font-sans text-sm">Habit tracker — TypeScript · Supabase</div>
          <div className="col-span-3 text-right font-sans text-xs">2026 →</div>
        </div>
        <div className="mt-3 grid grid-cols-12 gap-6 border-t border-black pt-3">
          <div className="col-span-4 font-sans text-xs uppercase tracking-widest">03 / Flashify</div>
          <div className="col-span-5 font-sans text-sm">Instant commerce — React · Mongo · Redis</div>
          <div className="col-span-3 text-right font-sans text-xs">2024 →</div>
        </div>
      </section>
    </div>
  )
}
