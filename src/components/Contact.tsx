"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import InkLandscape from "./InkLandscape";
import SectionHeading from "./SectionHeading";

const contactInfo = [
  {
    title: "Phone",
    value: "+91 XXXXX XXXXX",
    href: "tel:+91XXXXXXXXXX",
    isLink: true,
  },
  {
    title: "Email",
    value: "info@example.com",
    href: "mailto:info@example.com",
    isLink: true,
  },
  {
    title: "Address",
    value: "Purohitvas Gangadham Wasada",
    href: "",
    isLink: false,
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    event.currentTarget.reset();
  };

  return (
    <section className="relative overflow-hidden px-5 py-28 md:px-8 md:py-40" id="contact">
      <InkLandscape
        className="absolute bottom-0 left-0 h-48 w-full opacity-[0.04]"
        mirror
        temple={false}
        foregroundOpacity={0.34}
      />
      <div className="absolute inset-x-0 top-0 h-28 mist-band mist-drift opacity-30" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <SectionHeading
            eyebrow="Contact"
            title="Send a note across the paper."
            mark="和"
          />
          <p className="mt-8 max-w-2xl text-xl text-inkMuted">
            Bring a direction, a rough idea, or a quiet problem. We will respond
            with care and a clear next step.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="space-y-10"
          >
            {contactInfo.map((item) => (
              <div key={item.title} className="border-t border-ink/15 pt-6">
                <h3 className="font-jp text-xs uppercase tracking-[0.38em] text-seal">
                  {item.title}
                </h3>
                {item.isLink ? (
                  <a
                    href={item.href}
                    className="mt-3 block text-3xl font-light tracking-[0.05em] text-ink transition-colors hover:text-seal"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-3 max-w-sm text-3xl font-light tracking-[0.05em] text-ink">
                    {item.value}
                  </p>
                )}
              </div>
            ))}
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.9, delay: 0.12, ease: "easeOut" }}
            className="space-y-10 border-t border-ink/20 pt-8"
          >
            <div className="grid gap-10 md:grid-cols-2">
              <label className="block">
                <span className="font-jp text-xs uppercase tracking-[0.34em] text-inkFaint">
                  Name
                </span>
                <input
                  type="text"
                  required
                  className="mt-4 w-full border-b border-ink/25 bg-transparent py-3 text-xl text-ink outline-none transition-colors focus:border-seal"
                />
              </label>
              <label className="block">
                <span className="font-jp text-xs uppercase tracking-[0.34em] text-inkFaint">
                  Email
                </span>
                <input
                  type="email"
                  required
                  className="mt-4 w-full border-b border-ink/25 bg-transparent py-3 text-xl text-ink outline-none transition-colors focus:border-seal"
                />
              </label>
            </div>

            <label className="block">
              <span className="font-jp text-xs uppercase tracking-[0.34em] text-inkFaint">
                Subject
              </span>
              <input
                type="text"
                required
                className="mt-4 w-full border-b border-ink/25 bg-transparent py-3 text-xl text-ink outline-none transition-colors focus:border-seal"
              />
            </label>

            <label className="block">
              <span className="font-jp text-xs uppercase tracking-[0.34em] text-inkFaint">
                Message
              </span>
              <textarea
                required
                rows={5}
                className="mt-4 w-full resize-none border-b border-ink/25 bg-transparent py-3 text-xl text-ink outline-none transition-colors focus:border-seal"
              />
            </label>

            <button
              type="submit"
              className="border border-ink/35 px-8 py-4 font-jp text-xs uppercase tracking-[0.36em] text-ink transition-colors hover:border-seal hover:text-seal"
            >
              {submitted ? "Message sent" : "Send message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
