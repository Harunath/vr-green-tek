"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import {
	FaSolarPanel,
	FaIndustry,
	FaProjectDiagram,
	FaChartLine,
	FaArrowRight,
} from "react-icons/fa";

const fadeUp: Variants = {
	hidden: { opacity: 0, y: 16 },
	visible: (i: number = 0) => ({
		opacity: 1,
		y: 0,
		transition: { duration: 0.65, ease: "easeOut", delay: 0.08 * i },
	}),
};

const DELIVER = [
	{
		title: "Rooftop Solar",
		subtitle: "Commercial & institutional buildings",
		desc: "Right-sized rooftop systems with safe execution, clean routing, and fast handover.",
		icon: FaSolarPanel,
		tag: "On-roof",
	},
	{
		title: "Ground-Mounted Solar",
		subtitle: "Industries & large campuses",
		desc: "Utility-style layouts designed for performance, maintainability, and site compliance.",
		icon: FaIndustry,
		tag: "On-ground",
	},
	{
		title: "Hybrid Solar Systems",
		subtitle: "Solar + Grid + DG",
		desc: "Smart integration for stable power with protection, controls, and seamless switching.",
		icon: FaProjectDiagram,
		tag: "Hybrid",
	},
	{
		title: "SCADA & Monitoring",
		subtitle: "Performance visibility",
		desc: "Generation tracking, alerts, and reporting to improve uptime and ROI outcomes.",
		icon: FaChartLine,
		tag: "SCADA",
	},
] as const;

export default function WhatWeDeliver() {
	return (
		<section className="relative overflow-hidden bg-white">
			{/* Unique background: grid + diagonal beam + glows */}
			<div className="pointer-events-none absolute inset-0 -z-10">
				<div className="absolute -top-28 left-8 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />
				<div className="absolute -bottom-28 right-0 h-96 w-96 rounded-full bg-lime-400/12 blur-3xl" />

				<div
					className="absolute inset-0 opacity-[0.08]"
					style={{
						backgroundImage:
							"linear-gradient(to right, rgba(2,6,23,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(2,6,23,0.06) 1px, transparent 1px)",
						backgroundSize: "72px 72px",
					}}
				/>

				<div
					className="absolute inset-0 opacity-[0.09]"
					style={{
						backgroundImage:
							"repeating-linear-gradient(135deg, rgba(2,6,23,0.9) 0, rgba(2,6,23,0.9) 1px, transparent 1px, transparent 18px)",
					}}
				/>
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
						custom={0}
						className="mx-auto w-fit rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold tracking-[0.22em] text-emerald-800">
						WHAT WE DELIVER
					</motion.p>

					<motion.h2
						variants={fadeUp}
						custom={1}
						className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
						End-to-end solar solutions —{" "}
						<span className="text-emerald-600">designed for performance</span>
					</motion.h2>

					<motion.p
						variants={fadeUp}
						custom={2}
						className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
						From rooftops to large campuses, we engineer safe, scalable systems
						with monitoring-ready delivery.
					</motion.p>
				</motion.div>

				{/* Unique layout: “Delivery Track” */}
				<div className="mt-12 grid gap-6 lg:grid-cols-12">
					{/* LEFT: Track rail */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-80px" }}
						className="lg:col-span-4">
						<motion.div
							variants={fadeUp}
							custom={0}
							className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
							<div className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-emerald-500/10 blur-3xl" />

							<p className="text-xs font-semibold tracking-[0.18em] text-slate-500">
								DELIVERY TRACK
							</p>
							<p className="mt-2 text-xl font-extrabold text-slate-900">
								4 core offerings
							</p>

							{/* rail */}
							<div className="mt-6">
								<div className="relative rounded-2xl border border-slate-200 bg-slate-50 p-4">
									<div className="absolute left-6 top-4 bottom-4 w-px bg-slate-200" />
									<div className="space-y-4">
										{DELIVER.map((d, i) => (
											<div key={d.title} className="relative flex gap-3">
												<span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-600 ring-4 ring-emerald-600/15" />
												<div className="min-w-0">
													<p className="text-sm font-extrabold text-slate-900">
														{d.title}
													</p>
													<p className="text-xs text-slate-600">{d.subtitle}</p>
												</div>
												<span className="ml-auto hidden rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold text-emerald-800 sm:inline-flex">
													{d.tag}
												</span>
											</div>
										))}
									</div>
								</div>

								<div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-600">
									<span className="rounded-full border border-slate-200 bg-white px-3 py-1">
										Site survey
									</span>
									<span className="rounded-full border border-slate-200 bg-white px-3 py-1">
										Design & engineering
									</span>
									<span className="rounded-full border border-slate-200 bg-white px-3 py-1">
										Execution & handover
									</span>
								</div>
							</div>
						</motion.div>
					</motion.div>

					{/* RIGHT: Cards as “modules” */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-80px" }}
						className="lg:col-span-8">
						<div className="grid gap-5 sm:grid-cols-2">
							{DELIVER.map((d, i) => {
								const Icon = d.icon;
								return (
									<motion.div
										key={d.title}
										variants={fadeUp}
										custom={i}
										className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
										{/* unique corner notch + glow */}
										<div className="pointer-events-none absolute right-0 top-0 h-16 w-16 rounded-bl-[34px] bg-slate-50" />
										<div className="pointer-events-none absolute -right-14 -top-14 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl transition group-hover:bg-emerald-500/18" />
										<div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-emerald-600/0 transition group-hover:ring-emerald-600/15" />

										<div className="relative">
											<div className="flex items-start justify-between gap-3">
												<div className="inline-flex items-center gap-3">
													<span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 ring-1 ring-emerald-100">
														<Icon className="h-5 w-5 text-emerald-700" />
													</span>
													<div className="min-w-0">
														<p className="text-sm font-extrabold text-slate-900">
															{d.title}
														</p>
														<p className="text-xs text-slate-600">
															{d.subtitle}
														</p>
													</div>
												</div>

												<span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-800">
													{d.tag}
												</span>
											</div>

											<p className="mt-4 text-sm leading-relaxed text-slate-600">
												{d.desc}
											</p>

											<div className="mt-5 flex items-center gap-2 text-sm font-semibold text-emerald-700">
												<span className="opacity-80 group-hover:opacity-100">
													Learn more
												</span>
												<FaArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
											</div>
										</div>
									</motion.div>
								);
							})}
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
