"use client";

import React from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import {
	FaRecycle,
	FaLeaf,
	FaFireAlt,
	FaShieldAlt,
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

const container: Variants = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.08, delayChildren: 0.05 },
	},
};

const FEATURES = [
	{
		title: "Waste → Energy",
		desc: "Convert organic waste into clean biogas you can actually use.",
		icon: FaRecycle,
	},
	{
		title: "Cleaner Fuel",
		desc: "Reduce LPG / firewood dependency and improve indoor air quality.",
		icon: FaFireAlt,
	},
	{
		title: "Farm-ready Output",
		desc: "Nutrient-rich slurry supports natural farming and soil health.",
		icon: FaLeaf,
	},
] as const;

const STATS = [
	{ label: "Use cases", value: "Farms • Villages • Campuses", icon: FaLeaf },
	{
		label: "Outcome",
		value: "Lower fuel cost + less waste",
		icon: FaChartLine,
	},
	{ label: "Focus", value: "Safety-first design", icon: FaShieldAlt },
] as const;

export default function BiogasIntro() {
	return (
		<section className="relative overflow-hidden bg-white">
			{/* background: glows + subtle grid */}
			<div className="pointer-events-none absolute inset-0 -z-10">
				<div className="absolute -top-28 left-6 h-80 w-80 rounded-full bg-emerald-500/12 blur-3xl" />
				<div className="absolute -bottom-28 right-0 h-96 w-96 rounded-full bg-lime-400/14 blur-3xl" />
				<div
					className="absolute inset-0 opacity-[0.08]"
					style={{
						backgroundImage:
							"linear-gradient(to right, rgba(2,6,23,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(2,6,23,0.06) 1px, transparent 1px)",
						backgroundSize: "72px 72px",
					}}
				/>
			</div>

			<div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
				<div className="grid items-center gap-10 lg:grid-cols-12">
					{/* LEFT: copy + feature chips */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-80px" }}
						variants={container}
						className="lg:col-span-6">
						<motion.p
							variants={fadeUp}
							className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold tracking-[0.22em] text-emerald-800">
							BIOGAS INTRO
							<span className="h-1 w-1 rounded-full bg-emerald-700/70" />
							CLEAN ENERGY
						</motion.p>

						<motion.h2
							variants={fadeUp}
							custom={1}
							className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
							Practical biogas systems for{" "}
							<span className="text-emerald-600">daily use</span>
						</motion.h2>

						<motion.p
							variants={fadeUp}
							custom={2}
							className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
							We design and deploy safe, scalable biogas solutions that
							transform organic waste into usable energy — helping you reduce
							fuel costs, improve hygiene, and support sustainable living.
						</motion.p>

						{/* Feature cards (compact) */}
						<div className="mt-7 grid gap-4 sm:grid-cols-3">
							{FEATURES.map((f, i) => {
								const Icon = f.icon;
								return (
									<motion.div
										key={f.title}
										variants={fadeUp}
										custom={3 + i}
										className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
										<div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl transition group-hover:bg-emerald-500/18" />
										<div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-emerald-600/0 transition group-hover:ring-emerald-600/15" />
										<div className="relative">
											<div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-50 ring-1 ring-emerald-100">
												<Icon className="h-5 w-5 text-emerald-700" />
											</div>
											<p className="mt-3 text-sm font-extrabold text-slate-900">
												{f.title}
											</p>
											<p className="mt-1 text-xs leading-relaxed text-slate-600">
												{f.desc}
											</p>
										</div>
									</motion.div>
								);
							})}
						</div>

						{/* Mini strip */}
						<motion.div
							variants={fadeUp}
							custom={7}
							className="mt-6 flex flex-wrap items-center gap-2 rounded-3xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-700">
							<span className="rounded-full border border-slate-200 bg-white px-3 py-1">
								Cow dung • Agri waste • Kitchen waste
							</span>
							<span className="rounded-full border border-slate-200 bg-white px-3 py-1">
								Cooking • Heating • Power
							</span>
							<span className="ml-auto inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 font-semibold text-emerald-800">
								Explore setup <FaArrowRight className="h-3.5 w-3.5" />
							</span>
						</motion.div>
					</motion.div>

					{/* RIGHT: image board */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-80px" }}
						className="lg:col-span-6">
						<motion.div
							variants={fadeUp}
							custom={1}
							className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
							<div className="pointer-events-none absolute inset-0 bg-linear-to-tr from-black/30 via-black/0 to-black/10" />

							<Image
								src="https://res.cloudinary.com/dwsm6i6z9/image/upload/v1766823525/biogas-chp-plant-background-nature-foreground_hw6kxu.jpg"
								alt="Biogas plant and sustainable energy"
								width={1200}
								height={900}
								className="h-90 w-full object-cover sm:h-105"
							/>

							{/* floating label */}
							<div className="absolute left-5 top-5 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
								Biogas • Waste-to-Energy
							</div>

							{/* stats overlay */}
							<div className="absolute inset-x-0 bottom-0 p-5">
								<div className="grid gap-3 rounded-3xl border border-white/15 bg-black/40 p-4 backdrop-blur sm:grid-cols-3">
									{STATS.map((s) => {
										const Icon = s.icon;
										return (
											<div key={s.label} className="flex items-start gap-3">
												<div className="rounded-2xl bg-white/10 p-2 ring-1 ring-white/15">
													<Icon className="h-4 w-4 text-emerald-300" />
												</div>
												<div className="min-w-0">
													<p className="text-[11px] font-semibold tracking-[0.14em] text-white/70">
														{s.label}
													</p>
													<p className="mt-1 text-sm font-semibold text-white">
														{s.value}
													</p>
												</div>
											</div>
										);
									})}
								</div>
							</div>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
