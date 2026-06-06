"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import InkLandscape from "./InkLandscape";
import SectionHeading from "./SectionHeading";

type SubmissionState = "idle" | "sending" | "sent" | "error";

const address = "Chand Colony, Sadri, 306702, Pali, Rajasthan (India)";
const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  address,
)}`;

const contactInfo = [
  {
    title: "Phone",
    value: "+91 87990 01675",
    href: "tel:+918799001675",
    isLink: true,
  },
  {
    title: "Email",
    value: "info@hybridmonks.com",
    href: "mailto:info@hybridmonks.com",
    isLink: true,
  },
  {
    title: "Address",
    value: address,
    href: googleMapsUrl,
    isLink: true,
    isExternal: true,
  },
];

export default function Contact() {
  const [submissionState, setSubmissionState] =
    useState<SubmissionState>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setSubmissionState("sending");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      const result = (await response.json().catch(() => null)) as {
        message?: string;
      } | null;

      if (!response.ok) {
        throw new Error(result?.message ?? "Unable to send message.");
      }

      setSubmissionState("sent");
      setStatusMessage(result?.message ?? "Message sent.");
      form.reset();
      setTimeout(() => {
        setSubmissionState("idle");
        setStatusMessage("");
      }, 5000);
    } catch (error) {
      setSubmissionState("error");
      setStatusMessage(
        error instanceof Error ? error.message : "Unable to send message.",
      );
    }
  };

  return (
    <section
      className="relative overflow-hidden px-5 py-28 md:px-8 md:py-40"
      id="contact"
    >
      <InkLandscape
        className="absolute bottom-0 left-0 h-56 w-full opacity-[0.065]"
        mirror
        temple={false}
        foregroundOpacity={0.34}
      />
      <div className="absolute inset-x-[-8%] bottom-0 h-[28rem] temple-silhouette opacity-[0.12]" />
      <div className="absolute inset-x-0 top-0 h-28 mist-band mist-drift opacity-38" />
      <div className="absolute right-0 top-20 hidden h-[36rem] w-[30rem] zen-garden opacity-30 lg:block" />

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
              <div
                key={item.title}
                className="group border-t border-ink/15 pt-6 transition-colors duration-700 hover:border-seal/40"
              >
                <h3 className="font-jp text-xs uppercase tracking-[0.38em] text-seal">
                  {item.title}
                </h3>
                {item.isLink ? (
                  <a
                    href={item.href}
                    target={item.isExternal ? "_blank" : undefined}
                    rel={item.isExternal ? "noreferrer" : undefined}
                    className="mt-3 block text-3xl font-light tracking-[0.05em] text-ink transition-colors duration-500 hover:text-seal"
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
            className="paper-card space-y-10 px-5 py-8 md:px-10 md:py-10"
          >
            <div className="grid gap-10 md:grid-cols-2">
              <label className="block">
                <span className="font-jp text-xs uppercase tracking-[0.34em] text-inkFaint">
                  Name
                </span>
                <input
                  name="name"
                  type="text"
                  maxLength={120}
                  autoComplete="name"
                  required
                  className="mt-4 w-full border-b border-ink/25 bg-transparent py-3 text-xl text-ink outline-none transition-colors duration-500 focus:border-seal"
                />
              </label>
              <label className="block">
                <span className="font-jp text-xs uppercase tracking-[0.34em] text-inkFaint">
                  Email
                </span>
                <input
                  name="email"
                  type="email"
                  maxLength={160}
                  autoComplete="email"
                  required
                  className="mt-4 w-full border-b border-ink/25 bg-transparent py-3 text-xl text-ink outline-none transition-colors duration-500 focus:border-seal"
                />
              </label>
            </div>

            <label className="block">
              <span className="font-jp text-xs uppercase tracking-[0.34em] text-inkFaint">
                Subject
              </span>
              <input
                name="subject"
                type="text"
                maxLength={160}
                required
                className="mt-4 w-full border-b border-ink/25 bg-transparent py-3 text-xl text-ink outline-none transition-colors duration-500 focus:border-seal"
              />
            </label>

            <label className="block">
              <span className="font-jp text-xs uppercase tracking-[0.34em] text-inkFaint">
                Message
              </span>
              <textarea
                name="message"
                required
                maxLength={4000}
                rows={5}
                className="mt-4 w-full resize-none border-b border-ink/25 bg-transparent py-3 text-xl text-ink outline-none transition-colors duration-500 focus:border-seal"
              />
            </label>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <button
                type="submit"
                disabled={submissionState === "sending"}
                className="luxury-button border border-ink/35 px-8 py-4 font-jp text-xs uppercase tracking-[0.36em] text-ink transition-colors duration-500 hover:border-seal hover:text-seal disabled:cursor-not-allowed disabled:opacity-55"
              >
                {submissionState === "sending"
                  ? "Sending..."
                  : submissionState === "sent"
                    ? "Message sent"
                    : "Send message"}
              </button>
              {statusMessage ? (
                <p
                  aria-live="polite"
                  className={`font-jp text-xs tracking-[0.2em] ${
                    submissionState === "error" ? "text-seal" : "text-inkMuted"
                  }`}
                >
                  {statusMessage}
                </p>
              ) : null}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
