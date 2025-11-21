import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Work from './components/Work'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      <main>
        <Hero />
        <Services />
        <Work />
        <CTA />
      </main>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-slate-400">© {new Date().getFullYear()} YourDev Studio. All rights reserved.</p>
            <div className="text-sm text-slate-400">Built with love, caffeine, and clean code.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
