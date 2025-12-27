"use client";

import React from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
	FaChartLine,
	FaCogs,
	FaClipboardCheck,
	FaRegEye,
	FaArrowRight,
	FaShieldAlt,
} from "react-icons/fa";

const fadeUp: Variants = {
	hidden: { opacity: 0, y: 16 },
	visible: (i: number = 0) => ({
		opacity: 1,
		y: 0,
		transition: { duration: 0.65, ease: "easeOut", delay: 0.08 * i },
	}),
};

const REASONS = [
	{
		title: "ROI-focused sizing",
		desc: "No overselling capacity — right-sized systems based on load profile and site realities.",
		icon: FaChartLine,
		badge: "Right-sized",
	},
	{
		title: "Industrial-grade execution",
		desc: "Strong electrical engineering foundation for safe routing, protection, and workmanship.",
		icon: FaCogs,
		badge: "Execution",
	},
	{
		title: "Compliance-ready handover",
		desc: "Testing, labeling, and documentation aligned to industrial standards and audits.",
		icon: FaClipboardCheck,
		badge: "Compliance",
	},
	{
		title: "Monitoring-ready systems",
		desc: "SCADA-ready designs for visibility, alerts, and long-term savings improvement.",
		icon: FaRegEye,
		badge: "Monitoring",
	},
] as const;

export default function WhyUs() {
	return (
		<section className="relative overflow-hidden bg-white">
			{/* Unique background: “confidence waves” */}
			<div className="pointer-events-none absolute inset-0 -z-10">
				<div className="absolute -top-24 left-8 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />
				<div className="absolute -bottom-28 right-0 h-96 w-96 rounded-full bg-lime-400/12 blur-3xl" />
				<div
					className="absolute inset-0 opacity-[0.09]"
					style={{
						backgroundImage:
							"radial-gradient(rgba(2,6,23,0.10) 1px, transparent 1px)",
						backgroundSize: "26px 26px",
					}}
				/>
				<div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-emerald-50/60 to-transparent" />
			</div>

			<div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
				<div className="grid gap-10 lg:grid-cols-12 lg:items-center">
					{/* LEFT: headline + CTA card */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-80px" }}
						className="lg:col-span-5">
						<motion.p
							variants={fadeUp}
							custom={0}
							className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold tracking-widest text-emerald-800">
							<FaShieldAlt className="h-3.5 w-3.5 text-emerald-700" />
							WHY VR GREENTEK
						</motion.p>

						<motion.h2
							variants={fadeUp}
							custom={1}
							className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
							Designed for ROI.
							<br />
							<span className="text-emerald-600">
								Delivered with discipline.
							</span>
						</motion.h2>

						<motion.p
							variants={fadeUp}
							custom={2}
							className="mt-4 text-base leading-relaxed text-slate-600">
							We don’t just install panels — we engineer systems that perform
							safely, meet standards, and keep saving for years.
						</motion.p>

						{/* CTA panel */}
						<motion.div
							variants={fadeUp}
							custom={3}
							className="mt-7 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
							<div className="relative p-5">
								<div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-emerald-500/10 blur-3xl" />
								<p className="text-sm font-semibold text-slate-900">
									Request Solar Assessment
								</p>
								<p className="mt-1 text-sm text-slate-600">
									Get a quick site review + ROI estimate based on your load and
									roof/land feasibility.
								</p>

								<div className="mt-4 flex flex-col gap-3 sm:flex-row">
									<Link
										href="/contact"
										className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700">
										Request Solar Assessment
										<FaArrowRight className="h-4 w-4" />
									</Link>

									<Link
										href="/projects"
										className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50">
										View Projects
									</Link>
								</div>
							</div>

							<div className="border-t border-slate-200 bg-slate-50 px-5 py-3 text-xs text-slate-600">
								Typical turnaround: site assessment → proposal → execution plan
							</div>
						</motion.div>
					</motion.div>

					{/* RIGHT: Unique “proof tiles” */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-80px" }}
						className="lg:col-span-7">
						<div className="grid gap-4 sm:grid-cols-2">
							{REASONS.map((r, i) => {
								const Icon = r.icon;
								return (
									<motion.div
										key={r.title}
										variants={fadeUp}
										custom={i}
										className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
										{/* corner notch */}
										<div className="pointer-events-none absolute right-0 top-0 h-16 w-16 rounded-bl-[34px] bg-slate-50" />
										{/* hover glow */}
										<div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-emerald-500/10 blur-3xl transition group-hover:bg-emerald-500/18" />
										<div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-emerald-600/0 transition group-hover:ring-emerald-600/15" />

										<div className="relative">
											<div className="flex items-start justify-between gap-3">
												<div className="flex items-start gap-3">
													<span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 ring-1 ring-emerald-100">
														<Icon className="h-5 w-5 text-emerald-700" />
													</span>
													<div>
														<p className="text-sm font-extrabold text-slate-900">
															{r.title}
														</p>
														<p className="mt-1 text-sm leading-relaxed text-slate-600">
															{r.desc}
														</p>
													</div>
												</div>

												<span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-800">
													{r.badge}
												</span>
											</div>
										</div>
									</motion.div>
								);
							})}
						</div>

						{/* bottom micro-strip */}
						<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, margin: "-80px" }}
							className="mt-6">
							<motion.div
								variants={fadeUp}
								custom={5}
								className="flex flex-wrap items-center gap-2 rounded-3xl border border-slate-200 bg-white p-4 text-xs text-slate-600 shadow-sm">
								<span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1">
									Load analysis
								</span>
								<span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1">
									Right sizing
								</span>
								<span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1">
									Safety checks
								</span>
								<span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1">
									Commissioning
								</span>
								<span className="ml-auto hidden items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 font-semibold text-emerald-800 sm:inline-flex">
									<FaArrowRight className="h-3.5 w-3.5" />
									Outcome: safer systems + better ROI
								</span>
							</motion.div>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
