import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Creator Portfolio',
    tag: 'Personal Brand',
    img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'SaaS Landing',
    tag: 'Startup',
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Ecom Concept',
    tag: 'Commerce',
    img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop',
  },
]

export default function Work() {
  return (
    <section id="work" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold text-white md:text-4xl">Recent work</h2>
            <p className="mt-3 text-slate-300">A few projects I can show publicly.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10">
            Book a project
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <motion.a
              key={p.title}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <img src={p.img} alt="" className="h-56 w-full object-cover opacity-90 transition duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="rounded-full bg-white/10 px-2 py-1 text-xs text-white backdrop-blur">
                  {p.tag}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-white">{p.title}</h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
