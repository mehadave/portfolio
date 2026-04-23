export default function V4Terminal() {
  return (
    <div className="min-h-screen bg-[#0c0d10] text-[#d4d4d4] font-mono text-sm">
      <nav className="flex items-center justify-between border-b border-[#1a1b1f] px-6 py-3">
        <div className="flex items-center gap-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
          <span className="ml-4 text-[#666]">~/meha — zsh</span>
        </div>
        <span className="text-[#666] text-xs">⌘ K</span>
      </nav>

      <section className="mx-auto max-w-3xl px-8 py-14">
        <div className="space-y-1">
          <p><span className="text-[#27c93f]">meha@dev</span><span className="text-[#666]">:~$</span> whoami</p>
          <p className="pl-0 text-[#d4d4d4]">Meha Dave — Senior Product Engineer</p>
          <p className="mt-4"><span className="text-[#27c93f]">meha@dev</span><span className="text-[#666]">:~$</span> cat bio.txt</p>
          <p className="text-[#a0a0a0] leading-relaxed">
            Five years shipping consumer software end-to-end.<br />
            React · TypeScript · Node · Postgres · Figma.<br />
            Currently open to freelance and long-term engagements.
          </p>

          <p className="mt-6"><span className="text-[#27c93f]">meha@dev</span><span className="text-[#666]">:~$</span> ls ./projects</p>
          <div className="grid grid-cols-[auto_1fr_auto] gap-x-6 gap-y-1 pl-0 text-[#a0a0a0]">
            <span className="text-[#4fc3f7]">touchbase/</span><span>personal CRM · react · postgres</span><span className="text-[#666]">live ↗</span>
            <span className="text-[#4fc3f7]">habitat/</span><span>habit tracker · typescript · supabase</span><span className="text-[#666]">live ↗</span>
            <span className="text-[#4fc3f7]">flashify/</span><span>instant commerce · react · mongo</span><span className="text-[#666]">repo ↗</span>
          </div>

          <p className="mt-6"><span className="text-[#27c93f]">meha@dev</span><span className="text-[#666]">:~$</span> contact --email</p>
          <p className="text-[#c9a84c]">mehadave2@gmail.com</p>

          <p className="mt-6"><span className="text-[#27c93f]">meha@dev</span><span className="text-[#666]">:~$</span> <span className="inline-block h-4 w-2 animate-pulse bg-[#d4d4d4]" /></p>
        </div>

        <div className="mt-12 rounded border border-[#1a1b1f] bg-[#111216] p-3 text-xs text-[#666]">
          <span className="text-[#27c93f]">tip</span> — press <kbd className="rounded bg-[#1a1b1f] px-1.5 py-0.5 text-[#d4d4d4]">⌘K</kbd> to open the command palette, <kbd className="rounded bg-[#1a1b1f] px-1.5 py-0.5 text-[#d4d4d4]">g w</kbd> to jump to work
        </div>
      </section>
    </div>
  )
}
