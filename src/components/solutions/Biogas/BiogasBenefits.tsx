"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import {
	FaRecycle,
	FaFireAlt,
	FaLeaf,
	FaGlobeAsia,
	FaArrowRight,
} from "react-icons/fa";

/**
 * DIFFERENT UI PATTERN (non-repetitive):
 * - Desktop: “Energy Cycle” orbit diagram (center + 4 orbit nodes)
 * - Right side: minimal benefit summary + CTA
 * - Mobile: stacked benefit list (no orbit, clean)
 * - Includes image card (so it doesn't feel like the same stamp/cards again)
 */

const fadeUp: Variants = {
	hidden: { opacity: 0, y: 14 },
	visible: (i: number = 0) => ({
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: "easeOut", delay: 0.08 * i },
	}),
};

const BENEFITS = [
	{
		title: "Reduced waste disposal costs",
		desc: "Convert organic waste into value instead of paying to manage it.",
		icon: FaRecycle,
	},
	{
		title: "Clean fuel for cooking or power",
		desc: "Reliable biogas output for daily cooking, heating, or electricity use.",
		icon: FaFireAlt,
	},
	{
		title: "Organic slurry for natural farming",
		desc: "Nutrient-rich slurry improves soil health and supports chemical-free farming.",
		icon: FaLeaf,
	},
	{
		title: "Lower carbon footprint",
		desc: "Replace fossil fuels and reduce methane emissions from unmanaged waste.",
		icon: FaGlobeAsia,
	},
] as const;

function OrbitNode({
	title,
	icon: Icon,
	className,
	delay = 0,
}: {
	title: string;
	icon: React.ComponentType<{ className?: string }>;
	className: string;
	delay?: number;
}) {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.96, y: 6 }}
			whileInView={{ opacity: 1, scale: 1, y: 0 }}
			viewport={{ once: true, margin: "-80px" }}
			transition={{ duration: 0.55, ease: "easeOut", delay }}
			className={[
				"absolute",
				"group rounded-3xl border border-slate-200 bg-white/90 shadow-sm backdrop-blur",
				"px-4 py-3",
				className,
			].join(" ")}>
			<div className="flex items-center gap-3">
				<span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-50 ring-1 ring-emerald-100">
					<Icon className="h-5 w-5 text-emerald-700" />
				</span>
				<p className="text-sm font-extrabold text-slate-900">{title}</p>
			</div>

			{/* hover accent */}
			<div className="pointer-events-none absolute -inset-1 rounded-3xl bg-emerald-500/0 blur-xl transition group-hover:bg-emerald-500/12" />
			<div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-emerald-600/0 transition group-hover:ring-emerald-600/15" />
		</motion.div>
	);
}

export default function BiogasBenefitsAlt() {
	return (
		<section className="relative overflow-hidden bg-white">
			{/* background: different from previous (soft haze + thin top beam) */}
			<div className="pointer-events-none absolute inset-0 -z-10">
				<div className="absolute -top-32 left-0 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
				<div className="absolute -bottom-36 right-0 h-112 w-md rounded-full bg-lime-400/12 blur-3xl" />
				<div className="absolute inset-x-0 top-0 h-48 bg-linear-to-b from-emerald-50/70 to-transparent" />
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
						BENEFITS
					</motion.p>

					<motion.h2
						variants={fadeUp}
						custom={1}
						className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
						A complete <span className="text-emerald-600">waste-to-value</span>{" "}
						cycle
					</motion.h2>

					<motion.p
						variants={fadeUp}
						custom={2}
						className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
						Biogas closes the loop: less waste, cleaner energy, better farming,
						and lower emissions.
					</motion.p>
				</motion.div>

				<div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-center">
					{/* LEFT: Orbit diagram + image (unique visual) */}
					<div className="lg:col-span-7">
						<div className="grid gap-6 lg:grid-cols-12">
							{/* Orbit */}
							<div className="lg:col-span-7">
								<div className="relative mx-auto hidden aspect-square w-full max-w-130 rounded-[40px] border border-slate-200 bg-white shadow-sm lg:block">
									{/* subtle grid inside */}
									<div
										className="pointer-events-none absolute inset-0 rounded-[40px] opacity-[0.08]"
										style={{
											backgroundImage:
												"radial-gradient(rgba(2,6,23,0.14) 1px, transparent 1px)",
											backgroundSize: "24px 24px",
										}}
									/>

									{/* orbit ring */}
									<motion.div
										initial={{ opacity: 0, scale: 0.98 }}
										whileInView={{ opacity: 1, scale: 1 }}
										viewport={{ once: true, margin: "-80px" }}
										transition={{ duration: 0.7, ease: "easeOut" }}
										className="absolute left-1/2 top-1/2 h-[74%] w-[74%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-200"
									/>
									<motion.div
										initial={{ opacity: 0, scale: 0.98 }}
										whileInView={{ opacity: 1, scale: 1 }}
										viewport={{ once: true, margin: "-80px" }}
										transition={{ duration: 0.7, ease: "easeOut", delay: 0.08 }}
										className="absolute left-1/2 top-1/2 h-[54%] w-[54%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-200/80"
									/>

									{/* center core */}
									<motion.div
										initial={{ opacity: 0, y: 10, scale: 0.98 }}
										whileInView={{ opacity: 1, y: 0, scale: 1 }}
										viewport={{ once: true, margin: "-80px" }}
										transition={{
											duration: 0.65,
											ease: "easeOut",
											delay: 0.12,
										}}
										className="absolute left-1/2 top-1/2 w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-slate-200 bg-slate-50 p-5 text-center">
										<div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-emerald-50 ring-1 ring-emerald-100">
											<FaRecycle className="h-6 w-6 text-emerald-700" />
										</div>
										<p className="mt-3 text-xs font-semibold tracking-[0.18em] text-slate-600">
											BIOGAS CYCLE
										</p>
										<p className="mt-2 text-base font-extrabold text-slate-900">
											Waste → Energy → Farming → Impact
										</p>
										<p className="mt-2 text-sm leading-relaxed text-slate-600">
											Designed to deliver daily usable fuel + measurable
											savings.
										</p>
									</motion.div>

									{/* orbit nodes (positions) */}
									<OrbitNode
										title="Reduced waste costs"
										icon={FaRecycle}
										delay={0.05}
										className="left-6 top-10"
									/>
									<OrbitNode
										title="Clean cooking / power"
										icon={FaFireAlt}
										delay={0.12}
										className="right-6 top-24"
									/>
									<OrbitNode
										title="Organic slurry for farming"
										icon={FaLeaf}
										delay={0.19}
										className="right-10 bottom-10"
									/>
									<OrbitNode
										title="Lower carbon footprint"
										icon={FaGlobeAsia}
										delay={0.26}
										className="left-8 bottom-24"
									/>

									{/* glow */}
									<div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-emerald-500/10 blur-3xl" />
								</div>

								{/* Mobile fallback (stacked, clean) */}
								<div className="grid gap-4 lg:hidden">
									{BENEFITS.map((b, i) => {
										const Icon = b.icon;
										return (
											<motion.div
												key={b.title}
												initial="hidden"
												whileInView="visible"
												viewport={{ once: true, margin: "-80px" }}
												variants={fadeUp}
												custom={i}
												className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
												<div className="flex items-start gap-3">
													<span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 ring-1 ring-emerald-100">
														<Icon className="h-5 w-5 text-emerald-700" />
													</span>
													<div>
														<p className="text-sm font-extrabold text-slate-900">
															{b.title}
														</p>
														<p className="mt-1 text-sm leading-relaxed text-slate-600">
															{b.desc}
														</p>
													</div>
												</div>
											</motion.div>
										);
									})}
								</div>
							</div>

							{/* Image card */}
							<motion.div
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, margin: "-80px" }}
								className="lg:col-span-5">
								<motion.div
									variants={fadeUp}
									custom={0}
									className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
									<Image
										src="https://res.cloudinary.com/dwsm6i6z9/image/upload/v1766826099/biogas-1-1200x640_redgcd.jpg"
										alt="Bioenergy and biogas plant"
										width={900}
										height={900}
										className="h-90 w-full object-cover sm:h-105"
									/>
									<div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/0 to-black/0" />

									<div className="absolute bottom-0 left-0 right-0 p-5">
										<div className="rounded-2xl border border-white/20 bg-black/35 p-4 backdrop-blur">
											<p className="text-sm font-extrabold text-white">
												From waste handling to daily usable energy
											</p>
											<p className="mt-1 text-sm text-white/85">
												Biogas delivers savings, hygiene, and sustainability in
												one system.
											</p>
										</div>
									</div>

									<div className="absolute left-5 top-5 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
										Bioenergy Benefits
									</div>
								</motion.div>
							</motion.div>
						</div>
					</div>

					{/* RIGHT: Minimal text + CTA (not another card grid) */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-80px" }}
						className="lg:col-span-5">
						<motion.div
							variants={fadeUp}
							custom={0}
							className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm">
							<p className="text-xs font-semibold tracking-[0.18em] text-slate-600">
								SUMMARY
							</p>
							<p className="mt-3 text-lg font-extrabold text-slate-900">
								Why biogas pays back
							</p>

							<div className="mt-4 space-y-3 text-sm text-slate-600">
								<p>
									<span className="font-semibold text-slate-900">
										Lower waste
									</span>{" "}
									management overhead.
								</p>
								<p>
									<span className="font-semibold text-slate-900">
										Clean fuel
									</span>{" "}
									for daily use (cooking / power).
								</p>
								<p>
									<span className="font-semibold text-slate-900">
										Organic slurry
									</span>{" "}
									that supports natural farming.
								</p>
								<p>
									<span className="font-semibold text-slate-900">
										Reduced emissions
									</span>{" "}
									and better sustainability outcomes.
								</p>
							</div>

							<div className="mt-6 flex flex-col gap-3 sm:flex-row">
								<Link
									href="/contact"
									className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700">
									Explore Bioenergy Solutions
									<FaArrowRight className="h-4 w-4" />
								</Link>

								<Link
									href="/solutions/biogas"
									className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50">
									View Details
								</Link>
							</div>

							<div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4">
								<p className="text-xs font-semibold tracking-[0.18em] text-slate-600">
									GOOD FIT FOR
								</p>
								<p className="mt-2 text-sm font-semibold text-slate-900">
									Dairy farms • Food units • Communities • Campuses
								</p>
							</div>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
