"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import {
	FaIndustry,
	FaMapMarkerAlt,
	FaRulerCombined,
	FaTools,
	FaCogs,
	FaClipboardCheck,
	FaBolt,
	FaLeaf,
} from "react-icons/fa";

const fadeUp: Variants = {
	hidden: { opacity: 0, y: 16 },
	visible: (i: number = 0) => ({
		opacity: 1,
		y: 0,
		transition: { duration: 0.65, ease: "easeOut", delay: 0.08 * i },
	}),
};

const HIGHLIGHTS = [
	{
		title: "1500 SFT manufacturing unit",
		desc: "Dedicated space for fabrication, assembly, and finishing workflow.",
		icon: FaRulerCombined,
	},
	{
		title: "Panel bending & punching machines",
		desc: "Precision fabrication for consistent panel quality and fit.",
		icon: FaTools,
	},
	{
		title: "In-house assembly & testing",
		desc: "Wiring, protection, and testing under one controlled setup.",
		icon: FaCogs,
	},
	{
		title: "Quality-controlled workflow",
		desc: "Checks at every stage for reliability and compliance readiness.",
		icon: FaClipboardCheck,
	},
] as const;

export default function Manufacturing() {
	return (
		<section className="relative overflow-hidden bg-white">
			{/* UNIQUE BACKGROUND: “factory blueprint” */}
			<div className="pointer-events-none absolute inset-0 -z-10">
				{/* soft glows */}
				<div className="absolute -top-24 left-8 h-72 w-72 rounded-full bg-green-600/14 blur-3xl" />
				<div className="absolute -bottom-28 right-0 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />

				{/* blueprint dots */}
				<div
					className="absolute inset-0 opacity-[0.22]"
					style={{
						backgroundImage:
							"radial-gradient(rgba(2,6,23,0.18) 1px, transparent 1px)",
						backgroundSize: "22px 22px",
					}}
				/>

				{/* blueprint lines (SVG) */}
				<svg
					className="absolute inset-0 h-full w-full opacity-[0.08]"
					viewBox="0 0 1200 700"
					preserveAspectRatio="none">
					<path
						d="M70 140 H430 V260 H620 V140 H1130"
						stroke="rgb(2 6 23)"
						strokeWidth="2"
						fill="none"
					/>
					<path
						d="M120 520 H420 V410 H740 V560 H1050"
						stroke="rgb(2 6 23)"
						strokeWidth="2"
						fill="none"
					/>
					<path
						d="M260 140 V520"
						stroke="rgb(2 6 23)"
						strokeWidth="2"
						fill="none"
						strokeDasharray="10 10"
					/>
					<path
						d="M900 140 V560"
						stroke="rgb(2 6 23)"
						strokeWidth="2"
						fill="none"
						strokeDasharray="10 10"
					/>
					{[
						[430, 260],
						[620, 140],
						[420, 410],
						[740, 560],
						[260, 330],
						[900, 350],
					].map(([x, y], i) => (
						<circle key={i} cx={x} cy={y} r="7" fill="rgb(2 6 23)" />
					))}
				</svg>
			</div>

			<div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
				<div className="grid gap-10 lg:grid-cols-12">
					{/* LEFT: Headline + Facility chip + “infrastructure ribbon” */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-80px" }}
						className="lg:col-span-5">
						<motion.p
							variants={fadeUp}
							custom={0}
							className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-3 py-1 text-xs font-semibold tracking-widest text-green-800">
							MANUFACTURING & INFRASTRUCTURE
						</motion.p>

						<motion.h2
							variants={fadeUp}
							custom={1}
							className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
							A dedicated panel manufacturing facility in{" "}
							<span className="text-green-600">Hyderabad</span>
						</motion.h2>

						<motion.p
							variants={fadeUp}
							custom={2}
							className="mt-4 text-base leading-relaxed text-slate-600">
							VR Greentek operates an in-house facility that supports both
							electrical and green energy projects — enabling quality control,
							customization flexibility, and faster execution.
						</motion.p>

						{/* Location + capability pill stack */}
						<motion.div
							variants={fadeUp}
							custom={3}
							className="mt-6 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
							<div className="flex flex-wrap gap-2">
								<span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">
									<FaMapMarkerAlt className="h-3.5 w-3.5 text-green-600" />
									Hyderabad Facility
								</span>
								<span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-3 py-1 text-xs font-semibold text-green-800">
									<FaBolt className="h-3.5 w-3.5 text-green-600" />
									Electrical Panels
								</span>
								<span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-3 py-1 text-xs font-semibold text-green-800">
									<FaLeaf className="h-3.5 w-3.5 text-green-600" />
									GreenTech Support
								</span>
							</div>

							{/* Unique “ribbon”: quality + speed */}
							<div className="mt-4 grid gap-3 sm:grid-cols-2">
								<div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-4">
									<div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-green-600/12 blur-2xl" />
									<p className="text-xs font-semibold text-slate-500">
										Consistent Quality
									</p>
									<p className="mt-1 text-sm font-extrabold text-slate-900">
										Controlled production workflow
									</p>
								</div>
								<div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-4">
									<div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-sky-500/10 blur-2xl" />
									<p className="text-xs font-semibold text-slate-500">
										Execution Speed
									</p>
									<p className="mt-1 text-sm font-extrabold text-slate-900">
										Faster build + faster handover
									</p>
								</div>
							</div>
						</motion.div>
					</motion.div>

					{/* RIGHT: “Facility Blueprint Board” (unique layout) */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-80px" }}
						className="lg:col-span-7">
						<motion.div
							variants={fadeUp}
							custom={0}
							className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
							{/* Board header */}
							<div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 bg-slate-50 px-6 py-4">
								<div className="flex items-center gap-2">
									<span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-white ring-1 ring-slate-200">
										<FaIndustry className="h-4 w-4 text-green-600" />
									</span>
									<div>
										<p className="text-xs font-semibold tracking-widest text-slate-500">
											FACILITY HIGHLIGHTS
										</p>
										<p className="text-sm font-extrabold text-slate-900">
											Manufacturing capacity & workflow
										</p>
									</div>
								</div>

								<span className="rounded-full border border-green-200 bg-green-50 px-3 py-1 text-xs font-semibold text-green-800">
									In-house • Quality-controlled
								</span>
							</div>

							{/* “Blueprint cards” in staggered grid */}
							<div className="grid gap-4 p-6 sm:grid-cols-2">
								{HIGHLIGHTS.map((h, i) => {
									const Icon = h.icon;
									return (
										<motion.div
											key={h.title}
											variants={fadeUp}
											custom={i + 1}
											className={[
												"group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 transition",
												"hover:-translate-y-0.5 hover:shadow-md",
												// make layout feel unique (stagger)
												i === 1 ? "sm:translate-y-3" : "",
												i === 2 ? "sm:-translate-y-1" : "",
												i === 3 ? "sm:translate-y-6" : "",
											].join(" ")}>
											{/* hover glow */}
											<div className="pointer-events-none absolute -inset-1 rounded-2xl bg-green-600/0 blur-xl transition duration-300 group-hover:bg-green-600/18" />
											<div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-green-600/0 transition duration-300 group-hover:ring-green-600/25" />

											{/* tiny corner notch */}
											<div className="pointer-events-none absolute right-0 top-0 h-14 w-14 rounded-bl-3xl bg-slate-50" />

											<div className="relative flex items-start gap-3">
												<div className="rounded-xl bg-green-50 p-2 ring-1 ring-green-100">
													<Icon className="h-5 w-5 text-green-600" />
												</div>
												<div>
													<p className="text-sm font-extrabold text-slate-900">
														{h.title}
													</p>
													<p className="mt-1 text-sm leading-relaxed text-slate-600">
														{h.desc}
													</p>
												</div>
											</div>
										</motion.div>
									);
								})}
							</div>

							{/* Footer “Outcome strip” */}
							<div className="border-t border-slate-200 bg-white px-6 py-5">
								<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
									<p className="text-sm font-semibold text-slate-700">
										This infrastructure enables{" "}
										<span className="text-green-600">consistent quality</span>,{" "}
										<span className="text-green-600">customization</span>, and{" "}
										<span className="text-green-600">faster delivery</span>.
									</p>

									<div className="flex flex-wrap gap-2 text-xs text-slate-600">
										<span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1">
											Quality control
										</span>
										<span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1">
											Flexible builds
										</span>
										<span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1">
											Faster execution
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
