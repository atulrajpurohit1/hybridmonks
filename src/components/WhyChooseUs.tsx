"use client";

import { motion, type Variants } from "framer-motion";
import InkLandscape from "./InkLandscape";
import SectionHeading from "./SectionHeading";

const teachings = [
  {
    number: "一",
    title: "Begin with silence",
    text: "We listen before shaping the work, so every interface starts from a clear human need.",
  },
  {
    number: "二",
    title: "Cut away excess",
    text: "Every page, flow, and feature is reduced until only the useful and memorable remains.",
  },
  {
    number: "三",
    title: "Move with patience",
    text: "Strategy, design, and engineering progress in a calm rhythm with visible milestones.",
  },
  {
    number: "四",
    title: "Honor the craft",
    text: "We care for performance, accessibility, maintainability, and the tiny details people feel.",
  },
  {
    number: "五",
    title: "Stay after launch",
    text: "The work continues beyond release through support, refinement, and measured growth.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.14 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
};

export default function WhyChooseUs() {
  return (
    <section
      className="relative overflow-hidden px-5 py-28 md:px-8 md:py-40"
      id="why-us"
    >
      <div className="absolute inset-x-0 top-0 h-28 mist-band mist-drift opacity-45" />
      <div className="absolute -right-24 top-20 h-[32rem] w-[32rem] rounded-full border border-ink/5 opacity-60" />
      <div className="absolute inset-x-[-10%] top-[18%] h-[20rem] temple-silhouette opacity-[0.08]" />
      <InkLandscape
        className="absolute -bottom-28 left-0 h-[34rem] w-full opacity-[0.075]"
        mirror
        reflection
        temple={false}
        foregroundOpacity={0.46}
      />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-20 lg:grid-cols-[0.82fr_1.18fr] lg:gap-28">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="lg:sticky lg:top-32 lg:self-start"
        >
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Principles before polish."
            mark="道"
          />
          <p className="mt-8 max-w-xl text-xl text-inkMuted">
            Our work is guided like an old teaching: restrained, precise, and
            calm enough to reveal what matters.
          </p>
        </motion.div>

        <motion.ul
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          className="manuscript-field archive-grid space-y-0 px-5 py-6 md:px-10 md:py-10"
        >
          {teachings.map((teaching) => (
            <motion.li key={teaching.number} variants={itemVariants} className="group relative">
              <div className="brush-divider mb-10" />
              <div className="grid gap-8 py-4 transition-transform duration-700 group-hover:translate-x-2 md:grid-cols-[5rem_1fr]">
                <span className="font-jp text-5xl text-seal/80">
                  {teaching.number}
                </span>
                <div>
                  <h3 className="text-3xl font-light tracking-[0.08em] text-ink md:text-4xl">
                    {teaching.title}
                  </h3>
                  <p className="mt-5 max-w-2xl text-lg text-inkMuted">{teaching.text}</p>
                </div>
              </div>
            </motion.li>
          ))}
          <li aria-hidden="true" className="brush-divider mt-10" />
        </motion.ul>
      </div>
    </section>
  );
}
