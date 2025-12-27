"use client";

import Link from "next/link";
import React from "react";
import { motion, type Variants } from "framer-motion";
import {
	FaShieldAlt,
	FaClipboardCheck,
	FaChartLine,
	FaLeaf,
	FaBolt,
	FaWrench,
} from "react-icons/fa";

type Feature = {
	title: string;
	desc: string;
	icon: React.ElementType;
};

const FEATURES: Feature[] = [
	{
		title: "Green-First Thinking",
		desc: "Right-sized solar & hybrid systems built for real ROI — not just capacity.",
		icon: FaLeaf,
	},
	{
		title: "Electrical Backbone",
		desc: "Industrial-grade panels, protections, routing & testing for safe performance.",
		icon: FaBolt,
	},
	{
		title: "Compliance-Ready Delivery",
		desc: "Documentation, safety checks, labeling & audit-ready handover support.",
		icon: FaClipboardCheck,
	},
	{
		title: "Long-Term Support",
		desc: "Monitoring, preventive maintenance & rapid response when it matters most.",
		icon: FaWrench,
	},
];

// ✅ Typed correctly for TS + Framer
const fadeUp = {
	hidden: { opacity: 0, y: 18 },
	visible: (i: number = 0) => ({
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: "easeOut", delay: 0.08 * i },
	}),
} satisfies Variants;

const cn = (...c: (string | false | null | undefined)[]) =>
	c.filter(Boolean).join(" ");

export default function AboutIntro() {
	return (
		<section className="relative overflow-x-clip bg-white">
			{/* Subtle grid background */}
			<div
				className="pointer-events-none absolute inset-0 -z-10 opacity-[0.28] sm:opacity-[0.35]"
				style={{
					backgroundImage:
						"linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)",
					backgroundSize: "48px 48px",
				}}
			/>

			{/* soft glows (helps mobile look premium) */}
			<div className="pointer-events-none absolute -top-24 left-10 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
			<div className="pointer-events-none absolute -bottom-24 right-10 h-72 w-72 rounded-full bg-lime-400/10 blur-3xl" />

			<div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-20 lg:py-24">
				<div className="grid items-start gap-10 lg:grid-cols-12 lg:items-center">
					{/* LEFT CONTENT */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-80px" }}
						className="lg:col-span-7">
						<div className="max-w-2xl">
							<motion.p
								variants={fadeUp}
								custom={0}
								className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[11px] sm:text-xs font-semibold tracking-wide text-emerald-800">
								<FaShieldAlt className="h-3.5 w-3.5 text-emerald-600" />
								ABOUT US • COMPLIANCE-FIRST • GREEN-FIRST
							</motion.p>

							{/* ✅ responsive title: no overflow + balanced wrapping */}
							<motion.h1
								variants={fadeUp}
								custom={1}
								className={cn(
									"mt-4 sm:mt-5 font-extrabold tracking-tight text-slate-900",
									"text-[28px] leading-[1.12] sm:text-5xl",
									"wrap-break-word [text-balance]"
								)}>
								Building Energy Infrastructure{" "}
								<span className="text-emerald-600">That Pays Back</span>
							</motion.h1>

							<motion.p
								variants={fadeUp}
								custom={2}
								className="mt-4 sm:mt-5 text-sm sm:text-lg leading-relaxed text-slate-600">
								We are a green-energy-first execution partner delivering{" "}
								<span className="font-semibold text-slate-900">
									solar, hybrid, and storage solutions
								</span>{" "}
								— backed by industrial-grade electrical execution, safety,
								testing, and documentation.
							</motion.p>

							<motion.p
								variants={fadeUp}
								custom={3}
								className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed text-slate-500">
								Every project is engineered for{" "}
								<span className="font-semibold text-slate-900">
									savings, stability, and long-term performance
								</span>{" "}
								— so your power system generates confidence for years.
							</motion.p>

							{/* CTAs */}
							<motion.div
								variants={fadeUp}
								custom={4}
								className="mt-7 sm:mt-8 grid grid-cols-1 gap-3 sm:flex sm:flex-row">
								<Link
									href="/contact?intent=solar-assessment"
									className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700">
									<FaChartLine className="h-4 w-4" />
									Request Solar Assessment
								</Link>

								<Link
									href="/projects"
									className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
									<FaClipboardCheck className="h-4 w-4 text-emerald-600" />
									View Projects
								</Link>
							</motion.div>

							{/* Trust pills */}
							<motion.div
								variants={fadeUp}
								custom={5}
								className="mt-6 sm:mt-8 flex flex-wrap gap-2 text-xs text-slate-600">
								{[
									"Safety-first delivery",
									"Compliance-ready handover",
									"Monitoring & long-term support",
								].map((t) => (
									<span
										key={t}
										className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1">
										{t}
									</span>
								))}
							</motion.div>
						</div>
					</motion.div>

					{/* RIGHT FEATURES */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-80px" }}
						className="lg:col-span-5">
						<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
							{FEATURES.map((f, i) => {
								const Icon = f.icon;
								return (
									<motion.div
										key={f.title}
										variants={fadeUp}
										custom={i}
										className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
										<div className="flex items-start gap-3">
											<div className="rounded-xl bg-emerald-50 p-2 ring-1 ring-emerald-100">
												<Icon className="h-5 w-5 text-emerald-600" />
											</div>
											<div className="min-w-0">
												<h3 className="text-sm font-bold text-slate-900">
													{f.title}
												</h3>
												<p className="mt-1 text-sm leading-relaxed text-slate-600">
													{f.desc}
												</p>
											</div>
										</div>
									</motion.div>
								);
							})}
						</div>

						{/* Bottom note */}
						<motion.div
							variants={fadeUp}
							custom={6}
							className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-sm text-slate-700">
							<span className="font-semibold text-slate-900">
								One partner. One responsibility.
							</span>{" "}
							End-to-end execution with clean finishing, test reports, and
							handover documentation.
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
