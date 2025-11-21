export default function CTA() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-blue-600/30 to-indigo-600/30 p-8 text-white shadow-[0_0_60px_rgba(59,130,246,0.25)] backdrop-blur">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-bold md:text-4xl">Let’s build something unreal</h2>
              <p className="mt-3 text-slate-100/80">
                Tell me about your project and I’ll reply within 24 hours with a quick game plan and estimate.
              </p>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="grid gap-3"
            >
              <input className="w-full rounded-lg border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="Your name" />
              <input className="w-full rounded-lg border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="Email or @handle" />
              <textarea rows={3} className="w-full rounded-lg border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="What are we building?" />
              <button className="inline-flex justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100">
                Send request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
