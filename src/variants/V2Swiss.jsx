export default function V2Swiss() {
  return (
    <div className="min-h-screen bg-white text-[#111] font-mono text-sm">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-8 py-8">
        <span className="font-semibold">meha dave</span>
        <div className="flex gap-6 text-[#777]">
          <span>about</span><span>work</span><span>writing</span><span>contact</span>
        </div>
      </nav>

      <section className="mx-auto max-w-3xl px-8 py-16">
        <h1 className="mb-2 text-base font-semibold">Meha Dave</h1>
        <p className="mb-8 text-[#777]">Senior Product Engineer. Building consumer software end-to-end.</p>

        <p className="mb-10 leading-relaxed text-[#444]">
          I care about the full picture — system architecture, product thinking, and interface craft — and work best when those concerns are treated as one. Currently available for select engagements.
        </p>

        <div className="mb-12">
          <div className="mb-4 text-[#999] text-xs uppercase tracking-wider">selected work</div>
          <div className="space-y-3">
            <div className="flex items-baseline justify-between border-b border-[#eee] pb-3">
              <div><span className="font-semibold">Touchbase</span> <span className="text-[#777]">— personal CRM</span></div>
              <span className="text-[#999]">2026 ↗</span>
            </div>
            <div className="flex items-baseline justify-between border-b border-[#eee] pb-3">
              <div><span className="font-semibold">Habitat</span> <span className="text-[#777]">— habit tracker</span></div>
              <span className="text-[#999]">2026 ↗</span>
            </div>
            <div className="flex items-baseline justify-between border-b border-[#eee] pb-3">
              <div><span className="font-semibold">Flashify</span> <span className="text-[#777]">— instant commerce</span></div>
              <span className="text-[#999]">2024 ↗</span>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <div className="mb-4 text-[#999] text-xs uppercase tracking-wider">stack</div>
          <p className="text-[#444] leading-relaxed">react · typescript · node · postgres · tailwind · figma</p>
        </div>

        <div>
          <div className="mb-4 text-[#999] text-xs uppercase tracking-wider">elsewhere</div>
          <div className="flex gap-5 text-[#444] underline underline-offset-4">
            <span>github</span><span>linkedin</span><span>email</span>
          </div>
        </div>
      </section>
    </div>
  )
}
