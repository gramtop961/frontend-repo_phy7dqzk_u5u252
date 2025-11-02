import { motion } from 'framer-motion'
import { Settings, Sparkles, Timer } from 'lucide-react'

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.08 } }),
}

export default function ContentSections() {
  return (
    <div className="relative w-full overflow-hidden bg-black">
      {/* About */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-20 text-white">
        <motion.h2
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center text-3xl font-bold sm:text-4xl"
        >
          The Future of Content Creation is Automated.
        </motion.h2>
        <motion.p
          variants={fadeIn}
          custom={1}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto mt-4 max-w-3xl text-center text-white/80"
        >
          At Alpha AutoStudio, we combine creativity and automation to help creators scale effortlessly. From content ideation to publishing — everything runs automatically, powered by AI.
        </motion.p>

        {/* Illustration mock */}
        <motion.div
          variants={fadeIn}
          custom={2}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto mt-10 w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-purple-500/10 p-6"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-black/40 p-4">
              <p className="text-sm text-white/70">Ideation</p>
              <p className="mt-1 text-xs text-white/50">AI suggests topics, hooks, and formats</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/40 p-4">
              <p className="text-sm text-white/70">Creation</p>
              <p className="mt-1 text-xs text-white/50">Auto-generate copy, visuals, and captions</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/40 p-4">
              <p className="text-sm text-white/70">Publishing</p>
              <p className="mt-1 text-xs text-white/50">Scheduled posts across platforms</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-6 pb-8 text-white">
        <motion.h3
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center text-2xl font-semibold sm:text-3xl"
        >
          Services
        </motion.h3>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Content Automation',
              desc: 'Auto-generate and schedule posts, captions, and designs.',
              Icon: Sparkles,
              glow: 'from-cyan-500/30 to-blue-500/30',
            },
            {
              title: 'Analytics Automation',
              desc: 'Auto-track performance and deliver AI-generated insights.',
              Icon: Timer,
              glow: 'from-purple-500/30 to-fuchsia-500/30',
            },
            {
              title: 'Onboarding Automation',
              desc: 'Streamline client setup with instant forms and workflows.',
              Icon: Settings,
              glow: 'from-amber-500/30 to-pink-500/30',
            },
          ].map(({ title, desc, Icon, glow }, i) => (
            <motion.div
              key={title}
              variants={fadeIn}
              custom={i * 0.6}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-6 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className={`pointer-events-none absolute inset-0 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br ${glow}`} />
              <div className="relative z-[1]">
                <Icon className="h-6 w-6 text-white/90" />
                <h4 className="mt-4 text-lg font-semibold">{title}</h4>
                <p className="mt-2 text-sm text-white/70">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section id="process" className="mx-auto max-w-7xl px-6 py-20 text-white">
        <motion.h3
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center text-2xl font-semibold sm:text-3xl"
        >
          How It Works
        </motion.h3>

        <div className="relative mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
          {/* Connector line */}
          <div className="pointer-events-none absolute left-1/2 top-[68px] hidden h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent sm:block" />

          {[
            { step: '1', title: 'Share your goals' },
            { step: '2', title: 'We build your system' },
            { step: '3', title: 'Scale effortlessly' },
          ].map((s, i) => (
            <motion.div
              key={s.step}
              variants={fadeIn}
              custom={i * 0.5}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="relative rounded-2xl border border-white/10 bg-black/40 p-6 text-center"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500/40 to-blue-500/40 text-lg font-bold">
                {s.step}
              </div>
              <p className="mt-3 text-sm text-white/80">{s.title}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
