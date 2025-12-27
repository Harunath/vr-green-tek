"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import {
	FaLeaf,
	FaBolt,
	FaCogs,
	FaCheckCircle,
	FaChartLine,
	FaShieldAlt,
} from "react-icons/fa";

const fadeUp: Variants = {
	hidden: { opacity: 0, y: 18 },
	visible: (i: number = 0) => ({
		opacity: 1,
		y: 0,
		transition: { duration: 0.65, ease: "easeOut", delay: 0.08 * i },
	}),
};

const BULLETS = [
	{
		title: "Higher system reliability",
		desc: "Engineered protection, clean wiring, and tested commissioning — built to last.",
		icon: FaCheckCircle,
	},
	{
		title: "Compliance-ready delivery",
		desc: "Labeling, safety checks, and documentation aligned with site and audit needs.",
		icon: FaShieldAlt,
	},
	{
		title: "Better ROI & long-term performance",
		desc: "Right sizing + quality execution + monitoring-readiness for real savings.",
		icon: FaChartLine,
	},
] as const;

export default function CoreIdentity() {
	return (
		<section className="relative overflow-hidden bg-white">
			{/* Unique pattern: dotted + diagonal mesh + soft glows */}
			<div className="pointer-events-none absolute inset-0 -z-10">
				{/* soft glows */}
				<div className="absolute -top-24 left-10 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />
				<div className="absolute -bottom-28 right-0 h-80 w-80 rounded-full bg-lime-300/20 blur-3xl" />

				{/* diagonal mesh */}
				<div
					className="absolute inset-0 opacity-[0.08]"
					style={{
						backgroundImage:
							"repeating-linear-gradient(135deg, rgba(2,6,23,0.9) 0, rgba(2,6,23,0.9) 1px, transparent 1px, transparent 14px)",
					}}
				/>

				{/* dotted overlay */}
				<div
					className="absolute inset-0 opacity-[0.25]"
					style={{
						backgroundImage:
							"radial-gradient(rgba(2,6,23,0.18) 1px, transparent 1px)",
						backgroundSize: "22px 22px",
						backgroundPosition: "0 0",
					}}
				/>
			</div>

			<div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
				<div className="grid gap-10 lg:grid-cols-12">
					{/* LEFT: Title + Identity chips */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-80px" }}
						className="lg:col-span-5">
						<motion.p
							variants={fadeUp}
							custom={0}
							className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold tracking-widest text-emerald-800">
							OUR CORE IDENTITY
						</motion.p>

						<motion.h2
							variants={fadeUp}
							custom={1}
							className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
							Green Energy at the core.
							<br />
							<span className="text-emerald-600">
								Electrical Engineering as the backbone.
							</span>
						</motion.h2>

						<motion.p
							variants={fadeUp}
							custom={2}
							className="mt-4 text-base leading-relaxed text-slate-600">
							While our foundation lies in industrial electrical engineering and
							panel manufacturing, our vision and growth are firmly driven by{" "}
							<span className="font-semibold text-slate-900">
								Green Energy & GreenTech
							</span>{" "}
							solutions.
						</motion.p>

						{/* Unique identity band */}
						<motion.div
							variants={fadeUp}
							custom={3}
							className="mt-6 rounded-2xl border border-slate-200 bg-white/70 p-5 shadow-sm backdrop-blur">
							<div className="flex flex-col gap-3">
								<div className="flex items-center gap-3">
									<span className="relative inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-50">
										<FaLeaf className="h-5 w-5 text-emerald-600" />
										<span className="pointer-events-none absolute inset-0 rounded-2xl shadow-[0_0_0_8px_rgba(16,185,129,0.12)]" />
									</span>
									<div>
										<p className="text-sm font-extrabold text-slate-900">
											Green Energy at the Core
										</p>
										<p className="text-xs text-slate-600">
											Solar • Hybrid • Storage • Monitoring
										</p>
									</div>
								</div>

								<div className="h-px w-full bg-linear-to-r from-transparent via-slate-200 to-transparent" />

								<div className="flex items-center gap-3">
									<span className="relative inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-50">
										<FaBolt className="h-5 w-5 text-emerald-600" />
										<span className="pointer-events-none absolute inset-0 rounded-2xl shadow-[0_0_0_8px_rgba(16,185,129,0.12)]" />
									</span>
									<div>
										<p className="text-sm font-extrabold text-slate-900">
											Electrical Engineering Backbone
										</p>
										<p className="text-xs text-slate-600">
											Design • Panels • Testing • Commissioning
										</p>
									</div>
								</div>
							</div>
						</motion.div>

						{/* small mini-badges */}
						<motion.div
							variants={fadeUp}
							custom={4}
							className="mt-6 flex flex-wrap gap-2 text-xs text-slate-600">
							<span className="rounded-full border border-slate-200 bg-white px-3 py-1">
								In-house design
							</span>
							<span className="rounded-full border border-slate-200 bg-white px-3 py-1">
								Manufacturing
							</span>
							<span className="rounded-full border border-slate-200 bg-white px-3 py-1">
								Testing
							</span>
							<span className="rounded-full border border-slate-200 bg-white px-3 py-1">
								Commissioning
							</span>
						</motion.div>
					</motion.div>

					{/* RIGHT: Proof cards */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-80px" }}
						className="lg:col-span-7">
						<motion.div
							variants={fadeUp}
							custom={1}
							className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
							<div className="flex items-start gap-4">
								{/* Ribbon icon cluster */}
								<div className="relative hidden sm:block">
									<div className="absolute -left-3 -top-3 h-16 w-16 rounded-2xl bg-emerald-100 blur-xl" />
									<div className="relative grid gap-2">
										<div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50">
											<FaCogs className="h-5 w-5 text-emerald-600" />
										</div>
										<div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50">
											<FaBolt className="h-5 w-5 text-emerald-600" />
										</div>
										<div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50">
											<FaLeaf className="h-5 w-5 text-emerald-600" />
										</div>
									</div>
								</div>

								<div className="flex-1">
									<p className="text-sm font-semibold text-emerald-700">
										Why this matters
									</p>
									<h3 className="mt-1 text-xl font-extrabold text-slate-900">
										Green projects backed by industrial execution
									</h3>
									<p className="mt-2 text-sm leading-relaxed text-slate-600">
										Every solar or hybrid project we execute is strengthened by
										our in-house electrical design, manufacturing, testing, and
										commissioning expertise — so you get cleaner installations,
										safer systems, and dependable output.
									</p>

									<div className="mt-6 grid gap-3 sm:grid-cols-3">
										{BULLETS.map((b, i) => {
											const Icon = b.icon;
											return (
												<motion.div
													key={b.title}
													variants={fadeUp}
													custom={2 + i}
													className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-4">
													{/* micro glow */}
													<div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-emerald-400/15 blur-2xl transition group-hover:bg-emerald-400/25" />

													<div className="flex items-start gap-3">
														<div className="rounded-xl bg-white p-2 shadow-sm">
															<Icon className="h-4 w-4 text-emerald-600" />
														</div>
														<div>
															<p className="text-sm font-bold text-slate-900">
																{b.title}
															</p>
															<p className="mt-1 text-xs leading-relaxed text-slate-600">
																{b.desc}
															</p>
														</div>
													</div>
												</motion.div>
											);
										})}
									</div>

									{/* Bottom strip */}
									<div className="mt-6 flex flex-wrap items-center gap-2 text-xs text-slate-600">
										<span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 font-semibold text-emerald-800">
											<FaShieldAlt className="h-3.5 w-3.5 text-emerald-600" />
											Safety • Quality • Compliance
										</span>
										<span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1">
											<FaChartLine className="h-3.5 w-3.5 text-emerald-600" />
											ROI-first engineering
										</span>
										<span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1">
											<FaCheckCircle className="h-3.5 w-3.5 text-emerald-600" />
											Testing & commissioning
										</span>
									</div>
								</div>
							</div>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
