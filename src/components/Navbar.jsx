import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Process', href: '#process' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#" className="group inline-flex items-center gap-2">
              <div className="relative">
                <span className="absolute inset-0 rounded-md bg-blue-500/40 blur-md" />
                <span className="relative grid h-9 w-9 place-items-center rounded-md bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg">
                  <Sparkles size={18} />
                </span>
              </div>
              <span className="text-white text-lg font-semibold tracking-tight">
                YourDev Studio
              </span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm text-slate-200/80 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-blue-500/40 bg-blue-500/20 px-4 py-2 text-sm font-medium text-white shadow-[0_0_20px_rgba(59,130,246,0.25)] hover:bg-blue-500/30 transition-colors"
              >
                Get a Quote
              </a>
            </nav>

            <button
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-6 py-4">
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-sm text-slate-200/80 hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-blue-500/40 bg-blue-500/20 px-4 py-2 text-sm font-medium text-white shadow-[0_0_20px_rgba(59,130,246,0.25)] hover:bg-blue-500/30 transition-colors"
                >
                  Get a Quote
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
