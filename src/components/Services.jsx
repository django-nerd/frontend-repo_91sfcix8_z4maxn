import { Code2, Rocket, Search, Gauge } from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'Custom Dev',
    desc: 'Modern, maintainable codebases using React, Tailwind, and best practices.'
  },
  {
    icon: Rocket,
    title: 'Launch Ready',
    desc: 'From domain to deployment. I set up analytics, SEO, and blazing hosting.'
  },
  {
    icon: Search,
    title: 'SEO/Content',
    desc: 'Smart structure, fast loads, and content strategy that actually ranks.'
  },
  {
    icon: Gauge,
    title: 'Performance',
    desc: 'Lighthouse 95+ scores. Image optimization, caching, and accessibility.'
  }
]

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Services that go hard
          </h2>
          <p className="mt-3 text-slate-300">
            Everything you need to plan, design, build and ship a site that hits.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white shadow-[0_0_30px_rgba(59,130,246,0.08)] backdrop-blur transition-transform hover:-translate-y-1"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600">
                <Icon size={20} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
