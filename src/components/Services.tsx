"use client";

import { motion, type Variants } from "framer-motion";
import InkLandscape from "./InkLandscape";
import SectionHeading from "./SectionHeading";

const services = [
  {
    num: "一",
    title: "Web Development",
    desc: "Responsive websites and web applications composed with speed, clarity, and a quiet editorial rhythm.",
    icon: "web",
  },
  {
    num: "二",
    title: "App Development",
    desc: "Mobile experiences shaped for daily use: steady, intuitive, and carefully carried across devices.",
    icon: "app",
  },
  {
    num: "三",
    title: "UI/UX Design",
    desc: "Research, structure, and visual systems that make digital journeys feel natural and remembered.",
    icon: "design",
  },
  {
    num: "四",
    title: "Digital Marketing",
    desc: "Search, content, and campaign strategy planned with discipline rather than noise.",
    icon: "path",
  },
  {
    num: "五",
    title: "Cloud Solutions",
    desc: "Scalable infrastructure, migration, and operations arranged for reliability and long-term ease.",
    icon: "cloud",
  },
  {
    num: "六",
    title: "Cyber Security",
    desc: "Audits, hardening, and protection practices that keep the gate strong without disturbing the flow.",
    icon: "guard",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

function InkIcon({ name }: { name: string }) {
  const paths: Record<string, string[]> = {
    web: ["M7 31 C15 13 33 11 43 29", "M12 34 L45 34", "M20 22 L34 22"],
    app: ["M18 9 L40 9 L40 47 L18 47 Z", "M24 16 L34 16", "M27 41 L31 41"],
    design: ["M10 40 C21 16 35 13 45 18", "M14 43 C24 38 34 35 44 28", "M31 13 L45 28"],
    path: ["M9 39 C18 21 28 47 38 25 C42 16 48 15 52 20", "M13 30 L19 30", "M38 25 L48 25"],
    cloud: ["M13 36 C11 26 21 22 28 27 C32 15 49 20 47 34 C55 34 57 45 47 46 L18 46 C10 46 8 39 13 36 Z"],
    guard: ["M29 8 L48 16 C47 32 41 43 29 50 C17 43 11 32 10 16 Z", "M29 17 L29 39", "M20 29 L38 29"],
  };

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 60 60"
      className="h-14 w-14 overflow-visible text-inkMuted transition-colors duration-500 group-hover:text-seal"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.2"
    >
      {(paths[name] ?? paths.web).map((path) => (
        <path key={path} d={path} opacity="0.72" />
      ))}
    </svg>
  );
}

export default function Services() {
  return (
    <section
      className="relative overflow-hidden px-5 py-28 md:px-8 md:py-44"
      id="services"
    >
      <div className="absolute inset-x-0 top-1/3 h-32 mist-band mist-drift opacity-40" />
      <div className="absolute inset-x-[-8%] top-20 h-[26rem] temple-silhouette opacity-[0.1]" />
      <div className="absolute inset-x-0 bottom-0 h-[32rem] zen-garden opacity-35" />
      <InkLandscape
        className="absolute left-0 top-0 h-72 w-full opacity-[0.06]"
        temple={false}
        foregroundOpacity={0.28}
      />
      <InkLandscape
        className="absolute -bottom-28 left-0 h-[34rem] w-full opacity-[0.055]"
        mirror
        reflection
        temple={false}
        foregroundOpacity={0.4}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="mb-24 max-w-3xl md:ml-[11vw]"
        >
          <SectionHeading
            eyebrow="Our Services"
            title="Six paths of deliberate making."
            mark="禅"
          />
          <p className="mt-8 max-w-2xl text-xl text-inkMuted">
            Each discipline is handled like a manuscript: measured, legible, and
            made with respect for the space around it.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          className="relative grid gap-x-24 md:grid-cols-2"
        >
          {services.map((service, index) => (
            <motion.article
              key={service.num}
              variants={itemVariants}
              className={`group relative border-t border-ink/15 px-3 py-12 transition-colors duration-700 hover:border-seal/45 ${
                index % 2 === 1 ? "md:translate-y-20" : ""
              }`}
            >
              <span
                className="absolute right-3 top-5 h-10 w-10 border border-seal/25 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                aria-hidden="true"
              />
              <div className="grid grid-cols-[4.5rem_1fr] gap-6">
                <div className="flex flex-col items-center gap-5">
                  <span className="font-jp text-3xl text-seal/85">
                    {service.num}
                  </span>
                  <InkIcon name={service.icon} />
                </div>
                <div>
                  <h3 className="text-3xl font-light tracking-[0.08em] text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-5 text-lg text-inkMuted">{service.desc}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
