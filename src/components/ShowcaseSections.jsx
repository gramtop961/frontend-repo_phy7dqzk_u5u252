import { motion } from 'framer-motion'

export default function ShowcaseSections() {
  return (
    <div className="w-full bg-black text-white">
      {/* Portfolio */}
      <section id="portfolio" className="mx-auto max-w-7xl px-6 py-20">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center text-2xl font-semibold sm:text-3xl"
        >
          Our Work in Action
        </motion.h3>

        {/* Simple auto-scrolling carousel using motion */}
        <div className="relative mt-10 overflow-hidden rounded-2xl border border-white/10 bg-black/40">
          <motion.div
            className="flex gap-4 p-6"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, duration: 16, ease: 'linear' }}
          >
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className="min-w-[280px] rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-4"
              >
                <div className="h-40 w-full rounded-lg bg-gradient-to-tr from-cyan-500/20 via-blue-500/10 to-purple-500/20" />
                <p className="mt-3 text-xs text-white/70">Automation visual #{i + 1}</p>
              </div>
            ))}
            {/* duplicate set for seamless loop */}
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={`d-${i}`}
                className="min-w-[280px] rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-4"
              >
                <div className="h-40 w-full rounded-lg bg-gradient-to-tr from-cyan-500/20 via-blue-500/10 to-purple-500/20" />
                <p className="mt-3 text-xs text-white/70">Automation visual #{i + 1}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="mt-6 text-center">
          <a
            href="https://www.notion.so/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            View Full Portfolio →
          </a>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="mx-auto max-w-7xl px-6 pb-20 pt-4">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center text-2xl font-semibold sm:text-3xl"
        >
          Loved by Creators and Brands
        </motion.h3>

        <div className="relative mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-4 overflow-hidden sm:grid-cols-2">
          <motion.div
            className="space-y-4"
            animate={{ y: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
          >
            {[1, 2, 3, 4, 5].map((i) => (
              <Quote key={i}>
                “Alpha AutoStudio completely changed how we manage content — what took hours, now takes minutes.”
              </Quote>
            ))}
            {[1, 2, 3].map((i) => (
              <Quote key={`a-${i}`}>
                “Smart, fast, and beautifully automated.”
              </Quote>
            ))}
          </motion.div>
          <motion.div
            className="hidden space-y-4 sm:block"
            animate={{ y: ['-50%', '0%'] }}
            transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
          >
            {[1, 2, 3, 4, 5].map((i) => (
              <Quote key={`b-${i}`}>
                “The systems just work. We publish more with less effort.”
              </Quote>
            ))}
            {[1, 2, 3].map((i) => (
              <Quote key={`c-${i}`}>
                “Our team finally has time to focus on growth.”
              </Quote>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

function Quote({ children }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
      <p className="text-sm text-white/90">{children}</p>
      <div className="mt-3 flex items-center gap-3">
        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-cyan-500/40 to-purple-500/40" />
        <div className="text-xs text-white/60">Creator • Alpha AutoStudio client</div>
      </div>
    </div>
  )
}
