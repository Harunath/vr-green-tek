"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import {
  FaDraftingCompass,
  FaIndustry,
  FaTruck,
  FaTools,
  FaCheckCircle,
  FaClipboardCheck,
} from "react-icons/fa";

/** ✅ FIX: properly typed Variants (TS-safe) */
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.08 * i },
  }),
} satisfies Variants;

const STEPS = [
  {
    title: "Design",
    desc: "Customized engineering design and right-sizing for performance and ROI.",
    icon: FaDraftingCompass,
  },
  {
    title: "Manufacture",
    desc: "In-house manufacturing & assembly for panels, controls, and protection.",
    icon: FaIndustry,
  },
  {
    title: "Supply",
    desc: "Coordinated procurement and delivery with quality checks and traceability.",
    icon: FaTruck,
  },
  {
    title: "Installation",
    desc: "Safety-first execution with clean routing, labeling, and discipline.",
    icon: FaTools,
  },
  {
    title: "Commissioning",
    desc: "Testing, documentation, and compliance-ready handover support.",
    icon: FaClipboardCheck,
  },
] as const;

const POINTS = [
  "Customized engineering design",
  "In-house manufacturing & assembly",
  "Safety-first site execution",
  "Testing, documentation & compliance support",
] as const;

export default function Approach() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Subtle pattern + glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-10 h-72 w-72 rounded-full bg-green-600/15 blur-3xl" />
        <div className="absolute -bottom-28 right-0 h-80 w-80 rounded-full bg-green-600/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(2,6,23,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(2,6,23,0.06) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.p
            variants={fadeUp}
            custom={0}
            className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-3 py-1 text-xs font-semibold tracking-widest text-green-800"
          >
            OUR APPROACH
          </motion.p>

          <motion.h2
            variants={fadeUp}
            custom={1}
            className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl"
          >
            Design → Manufacture → Supply → Installation →{" "}
            <span className="text-green-600">Commissioning</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="mt-4 text-base leading-relaxed text-slate-600"
          >
            VR Greentek follows a turnkey execution model, ensuring seamless
            coordination from concept to handover.
          </motion.p>
        </motion.div>

        {/* Steps */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5"
        >
          {STEPS.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                variants={fadeUp}
                custom={i}
                className="group relative rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                {/* Green glow on hover */}
                <div className="pointer-events-none absolute -inset-1 rounded-2xl bg-green-600/0 blur-xl transition duration-300 group-hover:bg-green-600/20" />
                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-green-600/0 transition duration-300 group-hover:ring-green-600/25" />

                <div className="relative flex items-start gap-3">
                  <div className="rounded-xl bg-green-50 p-2 ring-1 ring-green-100">
                    <Icon className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-extrabold text-slate-900">
                      {s.title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                      {s.desc}
                    </p>
                  </div>
                </div>

                {/* step index */}
                <div className="relative mt-4 inline-flex items-center gap-2 text-xs font-semibold text-slate-500">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-600" />
                  Step {i + 1}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Points + Outcome */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-10 grid gap-6 lg:grid-cols-12"
        >
          {/* Checklist */}
          <motion.div
            variants={fadeUp}
            custom={0}
            className="lg:col-span-7 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h3 className="text-base font-extrabold text-slate-900">
              What you get with our turnkey model
            </h3>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {POINTS.map((p, idx) => (
                <motion.div
                  key={p}
                  variants={fadeUp}
                  custom={idx}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4"
                >
                  <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-green-600/10">
                    <FaCheckCircle className="h-4 w-4 text-green-600" />
                  </span>
                  <p className="text-sm font-semibold text-slate-800">{p}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Outcome Card */}
          <motion.div
            variants={fadeUp}
            custom={1}
            className="lg:col-span-5 rounded-3xl border border-green-200 bg-green-50 p-6 shadow-sm"
          >
            <div className="flex items-start gap-3">
              <div className="rounded-2xl bg-white p-3 ring-1 ring-green-200">
                <FaClipboardCheck className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-slate-900">
                  Faster delivery. Reduced risk.
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  This approach enables faster delivery, reduced coordination
                  risk, and dependable outcomes — with testing, documentation,
                  and compliance support built into every handover.
                </p>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2 text-xs text-slate-700">
              <span className="rounded-full border border-green-200 bg-white px-3 py-1 font-semibold">
                Safety-first
              </span>
              <span className="rounded-full border border-green-200 bg-white px-3 py-1 font-semibold">
                Compliance-ready
              </span>
              <span className="rounded-full border border-green-200 bg-white px-3 py-1 font-semibold">
                Clean execution
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
