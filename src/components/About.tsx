"use client";

import { motion } from "framer-motion";
import InkLandscape from "./InkLandscape";
import SectionHeading from "./SectionHeading";

const principles = [
  "Architecture before ornament",
  "Measured releases over rushed noise",
  "Interfaces that leave room to breathe",
  "Support that continues after launch",
];

export default function About() {
  return (
    <section className="relative overflow-hidden px-5 py-28 md:px-8 md:py-44" id="about">
      <div className="absolute inset-x-0 top-20 h-32 mist-band mist-drift opacity-38" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative min-h-[520px] overflow-hidden md:min-h-[680px]"
        >
          <InkLandscape
            className="absolute bottom-0 left-[-14%] h-[82%] w-[128%] opacity-[0.07]"
            reflection
            templeX={815}
            templeY={350}
          />
          <div className="absolute left-6 top-8 font-jp text-8xl text-ink/[0.06]" aria-hidden="true">
            和
          </div>
          <div className="absolute bottom-20 left-0 max-w-sm border-l border-ink/20 pl-6">
            <p className="text-lg italic text-inkMuted">
              A studio should feel less like a factory and more like a quiet
              room where decisions become clear.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 1, delay: 0.12, ease: "easeOut" }}
          className="self-center"
        >
          <SectionHeading
            eyebrow="Our Story"
            title="A monastery for careful digital work."
            mark="静"
          />

          <div className="mt-10 space-y-7 text-xl text-inkMuted">
            <p>
              HybridMonks exists for businesses that want technology without the
              frenzy around it. We bring strategy, design, and engineering into
              a slower, more attentive process.
            </p>
            <p>
              The result is still practical: websites that load quickly,
              products that feel natural, and systems that can be maintained
              without losing their calm.
            </p>
          </div>

          <div className="mt-12 space-y-5">
            {principles.map((principle) => (
              <div key={principle} className="flex items-center gap-5">
                <span className="h-px w-10 bg-seal/60" />
                <span className="font-jp text-sm uppercase tracking-[0.28em] text-inkMuted">
                  {principle}
                </span>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="mt-14 inline-block border-b border-seal pb-2 font-jp text-xs uppercase tracking-[0.38em] text-seal transition-colors hover:text-ink"
          >
            Work with us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
