"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import {
	FaBolt,
	FaGasPump,
	FaHardHat,
	FaClipboardCheck,
	FaArrowRight,
} from "react-icons/fa";

/**
 * NON-REPETITIVE UI PATTERN
 * - Left: “Reason Stack” (vertical timeline spine with numbered nodes)
 * - Right: “Result Meter” panel (single card with a progress-style bar + CTA dock)
 * - Only highlight color: green-600
 */

const fadeUp: Variants = {
	hidden: { opacity: 0, y: 14 },
	visible: (i: number = 0) => ({
		opacity: 1,
		y: 0,
		transition: { duration: 0.55, ease: "easeOut", delay: 0.08 * i },
	}),
};

const cn = (...c: (string | false | null | undefined)[]) =>
	c.filter(Boolean).join(" ");

type Point = {
	title: string;
	desc: string;
	icon: React.ComponentType<{ className?: string }>;
};

const POINTS: Point[] = [
	{
		title: "Stable power for critical operations",
		desc: "Consistent uptime for pumps, cold storage, and rural facilities.",
		icon: FaBolt,
	},
	{
		title: "Reduced diesel dependency",
		desc: "Hybrid logic minimizes DG runtime and operating costs.",
		icon: FaGasPump,
	},
	{
		title: "Designed for harsh field conditions",
		desc: "Protection-first design with durable installation practices.",
		icon: FaHardHat,
	},
	{
		title: "Compliance-ready execution",
		desc: "Testing, labeling, and documentation aligned for handover.",
		icon: FaClipboardCheck,
	},
];

export default function WhyItWorks() {
	return (
		<section className="relative overflow-hidden bg-white">
			{/* Background: clean + subtle green glow (no dots/grids) */}
			<div className="pointer-events-none absolute inset-0 -z-10">
				<div className="absolute inset-x-0 top-0 h-56 bg-linear-to-b from-green-50 via-white to-transparent" />
				<div className="absolute -top-40 left-10 h-96 w-96 rounded-full bg-green-600/10 blur-3xl" />
				<div className="absolute -bottom-44 right-0 h-136 w-136 rounded-full bg-green-600/8 blur-3xl" />
			</div>

			<div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
				{/* Header */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-80px" }}
					className="mx-auto max-w-3xl text-center">
					<motion.p
						variants={fadeUp}
						className="mx-auto w-fit rounded-2xl border border-slate-200 bg-white px-4 py-2 text-xs font-semibold tracking-[0.22em] text-slate-700">
						WHY IT WORKS
					</motion.p>

					<motion.h2
						variants={fadeUp}
						custom={1}
						className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
						Engineered for <span className="text-green-600">rural uptime</span>{" "}
						and long-term savings
					</motion.h2>

					<motion.p
						variants={fadeUp}
						custom={2}
						className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
						A delivery model built around safety, durability, and real on-ground
						conditions.
					</motion.p>
				</motion.div>

				<div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-start">
					{/* LEFT: Reason Stack (timeline style) */}
					<motion.div
						initial={{ opacity: 0, y: 12 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-80px" }}
						transition={{ duration: 0.45, ease: "easeOut" }}
						className="lg:col-span-7">
						<div className="relative rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
							{/* Spine */}
							<div className="pointer-events-none absolute left-10 top-8 bottom-8 w-px bg-slate-200 sm:left-12" />

							<div className="space-y-6">
								{POINTS.map((p, i) => {
									const Icon = p.icon;
									return (
										<motion.div
											key={p.title}
											variants={fadeUp}
											custom={i}
											initial="hidden"
											whileInView="visible"
											viewport={{ once: true, amount: 0.45 }}
											className="relative flex gap-4 sm:gap-5">
											{/* Node */}
											<div className="relative z-10">
												<div className="grid h-12 w-12 place-items-center rounded-2xl bg-green-50 ring-1 ring-green-600/20">
													<Icon className="h-5 w-5 text-green-600" />
												</div>

												{/* number badge */}
												<div className="mx-auto mt-2 grid h-6 w-6 place-items-center rounded-full bg-slate-900 text-[11px] font-extrabold text-white">
													{i + 1}
												</div>
											</div>

											{/* Content */}
											<div className="min-w-0 flex-1 pt-1">
												<p className="text-base font-extrabold text-slate-900">
													{p.title}
												</p>
												<p className="mt-1 text-sm leading-relaxed text-slate-600">
													{p.desc}
												</p>

												{/* tiny accent rule */}
												<div className="mt-3 h-px w-20 bg-green-600/25" />
											</div>
										</motion.div>
									);
								})}
							</div>
						</div>
					</motion.div>

					{/* RIGHT: Result Meter + CTA dock */}
					<motion.aside
						initial={{ opacity: 0, y: 12 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-80px" }}
						transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
						className="lg:col-span-5">
						<div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
							{/* Top panel */}
							<div className="p-6 sm:p-7">
								<p className="text-xs font-semibold tracking-[0.18em] text-slate-500">
									RESULT
								</p>
								<p className="mt-2 text-xl font-extrabold text-slate-900">
									Predictable delivery, measured performance
								</p>
								<p className="mt-2 text-sm leading-relaxed text-slate-600">
									We reduce operational risk by designing for real field
									conditions and validating with testing + documentation.
								</p>

								{/* Meter */}
								<div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4">
									<div className="flex items-center justify-between">
										<p className="text-sm font-semibold text-slate-800">
											Rural Readiness
										</p>
										<p className="text-sm font-extrabold text-slate-900">
											High
										</p>
									</div>

									<div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-slate-200">
										<div className="h-full w-[86%] rounded-full bg-green-600" />
									</div>

									<div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-600">
										<span className="rounded-full border border-slate-200 bg-white px-3 py-1">
											Safety-first
										</span>
										<span className="rounded-full border border-slate-200 bg-white px-3 py-1">
											Protection + QC
										</span>
										<span className="rounded-full border border-slate-200 bg-white px-3 py-1">
											Documentation
										</span>
									</div>
								</div>
							</div>

							{/* CTA dock */}
							<div className="border-t border-slate-200 bg-white p-6 sm:p-7">
								<div className="flex flex-col gap-4">
									<div className="flex items-start gap-3">
										<div className="grid h-11 w-11 place-items-center rounded-2xl bg-green-50 ring-1 ring-green-600/20">
											<FaBolt className="h-5 w-5 text-green-600" />
										</div>
										<div className="min-w-0">
											<p className="text-sm font-extrabold text-slate-900">
												Power Your Rural Project
											</p>
											<p className="mt-1 text-sm text-slate-600">
												Get a practical recommendation for sizing, hybrid logic,
												and execution plan.
											</p>
										</div>
									</div>

									<a
										href="/contact"
										className={cn(
											"inline-flex items-center justify-center gap-2 rounded-2xl",
											"bg-green-600 px-5 py-3 text-sm font-semibold text-white shadow-sm",
											"transition hover:bg-green-700"
										)}>
										Power Your Rural Project{" "}
										<FaArrowRight className="h-4 w-4" />
									</a>

									<p className="text-xs leading-relaxed text-slate-500">
										Share site location + load details. We’ll respond with the
										best-fit approach.
									</p>
								</div>
							</div>
						</div>
					</motion.aside>
				</div>
			</div>
		</section>
	);
}
