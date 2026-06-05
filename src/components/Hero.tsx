"use client";

import { motion } from "framer-motion";
import InkLandscape from "./InkLandscape";

export default function Hero() {
  return (
    <section
      className="relative min-h-[124svh] overflow-hidden px-5 pt-24 md:px-8"
      id="hero"
    >
      <div className="absolute left-0 right-0 top-[12%] h-28 mist-band mist-drift opacity-30" />
      <div className="absolute left-0 right-0 top-[45%] h-40 mist-band mist-drift opacity-45" />
      <div className="absolute left-0 right-0 top-[61%] h-28 mist-band mist-drift opacity-40" />
      <InkLandscape
        className="absolute bottom-[12vh] left-0 h-[56vh] w-full opacity-[0.055] md:h-[62vh]"
        temple={false}
        foregroundOpacity={0.34}
      />
      <InkLandscape
        className="absolute bottom-0 left-0 h-[76vh] w-full opacity-[0.075] md:h-[86vh]"
        reflection
        templeX={870}
        templeY={334}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.25, ease: "easeOut" }}
          className="max-w-3xl pt-[21vh] md:ml-[7vw] md:pt-[24vh]"
        >
          <div className="mb-8 flex items-center gap-5">
            <span className="h-px w-16 bg-ink/30" />
            <span className="font-jp text-xs uppercase tracking-[0.46em] text-seal">
              禅 Ancient Wisdom
            </span>
          </div>

          <h1 className="ink-shadow max-w-4xl text-6xl font-light leading-[0.96] tracking-[0.06em] text-ink md:text-8xl lg:text-9xl">
            Digital craft
            <span className="block italic text-inkMuted">in quiet ink.</span>
          </h1>

          <p className="mt-10 max-w-2xl text-xl leading-9 text-inkMuted md:text-2xl">
            HybridMonks shapes websites, products, and digital systems with the
            patience of a scroll painter: deliberate, spare, and built to endure.
          </p>

          <div className="mt-12 flex items-center gap-8">
            <a
              href="#contact"
              className="border border-ink/40 px-8 py-4 font-jp text-xs uppercase tracking-[0.36em] text-ink transition-colors duration-300 hover:border-seal hover:text-seal"
            >
              Begin
            </a>
            <a
              href="#services"
              className="font-jp text-xs uppercase tracking-[0.36em] text-inkMuted transition-colors duration-300 hover:text-ink"
            >
              Read the scroll
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.2, delay: 0.4 }}
          className="vertical-ink absolute right-0 top-10 hidden font-jp text-8xl font-light text-ink/[0.08] md:block"
          aria-hidden="true"
        >
          静
        </motion.div>
      </div>
    </section>
  );
}
