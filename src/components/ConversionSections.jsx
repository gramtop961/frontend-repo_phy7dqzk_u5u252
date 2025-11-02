import { motion } from 'framer-motion'

export default function ConversionSections() {
  return (
    <div className="w-full bg-black text-white">
      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-7xl px-6 py-20">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center text-2xl font-semibold sm:text-3xl"
        >
          Choose Your Growth Mode
        </motion.h3>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { name: 'Starter ⚙️', price: '$499', perks: ['Content calendar setup', '2 automations', 'Email support'] },
            { name: 'Pro 🚀', price: '$1,499', perks: ['Multi-platform automations', 'Analytics dashboards', 'Priority support'] },
            { name: 'Elite 💼', price: '$3,499', perks: ['Custom AI workflows', 'Team onboarding', 'Dedicated success manager'] },
          ].map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-6"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-purple-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative z-[1]">
                <h4 className="text-lg font-semibold">{plan.name}</h4>
                <div className="mt-2 text-3xl font-extrabold">{plan.price}</div>
                <ul className="mt-4 space-y-2 text-sm text-white/80">
                  {plan.perks.map((p) => (
                    <li key={p} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <a
                    href="https://forms.gle/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:shadow-cyan-500/40"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="start" className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-purple-500/10 px-6 py-16 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-2xl font-bold sm:text-3xl"
        >
          Ready to Automate Your Brand?
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto mt-3 max-w-2xl text-white/80"
        >
          Fill out the form below — we’ll build your custom AI system within 24 hours.
        </motion.p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://forms.gle/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:shadow-cyan-500/40"
          >
            Start Now
          </a>
          <a
            href="https://www.notion.so/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            View Portfolio
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 border-t border-white/10 bg-black/60 py-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="text-center sm:text-left">
              <div className="text-lg font-semibold">Alpha AutoStudio</div>
              <div className="mt-1 text-xs text-white/60">Automate. Create. Scale.</div>
            </div>
            <div className="text-center text-sm text-white/70 sm:text-right">
              <div>
                <a href="mailto:alphaautostudio@gmail.com" className="hover:text-white">alphaautostudio@gmail.com</a>
              </div>
              <div className="mt-1">
                <a href="https://instagram.com/alphaautostudio.ai" target="_blank" rel="noreferrer" className="hover:text-white">@alphaautostudio.ai</a>
              </div>
              <div className="mt-1">
                <a href="https://www.notion.so/" target="_blank" rel="noreferrer" className="hover:text-white">Notion Portfolio</a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-xs text-white/50">© 2025 Alpha AutoStudio | Powered by Automation</div>
        </div>
      </footer>
    </div>
  )
}
