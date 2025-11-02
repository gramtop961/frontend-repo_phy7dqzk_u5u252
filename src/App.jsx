import Hero from './components/Hero'
import ContentSections from './components/ContentSections'
import ShowcaseSections from './components/ShowcaseSections'
import ConversionSections from './components/ConversionSections'

function App() {
  return (
    <div className="scroll-smooth bg-black text-white">
      {/* Navigation */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 text-sm">
          <a href="#top" className="font-semibold tracking-tight">Alpha AutoStudio</a>
          <div className="hidden gap-6 text-white/80 sm:flex">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#process" className="hover:text-white">Process</a>
            <a href="#portfolio" className="hover:text-white">Portfolio</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
          </div>
          <a
            href="#start"
            className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 font-medium text-white shadow-cyan-500/20 hover:shadow-lg"
          >
            Start Now
          </a>
        </nav>
      </header>

      <main>
        <Hero />
        <ContentSections />
        <ShowcaseSections />
        <ConversionSections />
      </main>
    </div>
  )
}

export default App
