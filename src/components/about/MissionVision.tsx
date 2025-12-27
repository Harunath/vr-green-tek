"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import {
	FaBullseye,
	FaEye,
	FaShieldAlt,
	FaAward,
	FaHandshake,
	FaLightbulb,
	FaBalanceScale,
} from "react-icons/fa";

/**
 * UNIQUE PATTERN:
 * - Left: “North Star” board (Mission + Vision) with a diagonal split + notch corners
 * - Right: Values shown as “stamped tags” on a floating sheet (not typical cards/grid)
 * - Green-600 used for highlights + hover glow
 */

const fade: Variants = {
	hidden: { opacity: 0, y: 14 },
	visible: (i: number = 0) => ({
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: "easeOut", delay: 0.07 * i },
	}),
};

const VALUES = [
	{
		title: "Safety First",
		desc: "No compromise on standards",
		icon: FaShieldAlt,
	},
	{
		title: "Quality Driven",
		desc: "From materials to handover",
		icon: FaAward,
	},
	{
		title: "Customer Success",
		desc: "Long-term partnerships",
		icon: FaHandshake,
	},
	{
		title: "Innovation",
		desc: "Continuous technology adoption",
		icon: FaLightbulb,
	},
	{
		title: "Integrity",
		desc: "Transparent execution & timelines",
		icon: FaBalanceScale,
	},
] as const;

export default function MissionVision() {
	return (
		<section className="relative overflow-hidden bg-white">
			{/* Background: subtle grid + green glow */}
			<div className="pointer-events-none absolute inset-0 -z-10">
				<div className="absolute -top-28 left-10 h-72 w-72 rounded-full bg-green-600/10 blur-3xl" />
				<div className="absolute -bottom-28 right-0 h-80 w-80 rounded-full bg-green-600/8 blur-3xl" />
				<div
					className="absolute inset-0 opacity-[0.12]"
					style={{
						backgroundImage:
							"linear-gradient(to right, rgba(2,6,23,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(2,6,23,0.05) 1px, transparent 1px)",
						backgroundSize: "66px 66px",
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
					<motion.div
						variants={fade}
						custom={0}
						className="mx-auto w-fit rounded-2xl border border-slate-200 bg-white px-4 py-2 shadow-sm">
						<p className="text-xs font-semibold tracking-[0.22em] text-slate-700">
							OUR FOUNDATION
						</p>
					</motion.div>

					<motion.h2
						variants={fade}
						custom={1}
						className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
						Mission, Vision & <span className="text-green-600">Values</span>
					</motion.h2>

					<motion.p
						variants={fade}
						custom={2}
						className="mt-4 text-base leading-relaxed text-slate-600">
						The principles that guide how we engineer, execute, and support
						every project — from design to handover and beyond.
					</motion.p>
				</motion.div>

				<div className="mt-12 grid gap-10 lg:grid-cols-12">
					{/* LEFT: North Star board (Mission + Vision) */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-80px" }}
						className="lg:col-span-6">
						<motion.div
							variants={fade}
							custom={0}
							className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
							{/* Diagonal split background */}
							<div className="pointer-events-none absolute inset-0">
								<div className="absolute inset-0 bg-linear-to-br from-green-50 via-white to-white" />
								<div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-green-600/10 blur-3xl" />
								<div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-green-600/8 blur-3xl" />
								<div
									className="absolute inset-0 opacity-[0.12]"
									style={{
										backgroundImage:
											"repeating-linear-gradient(135deg, rgba(2,6,23,0.55) 0, rgba(2,6,23,0.55) 1px, transparent 1px, transparent 16px)",
									}}
								/>
							</div>

							{/* Top notch corners (unique) */}
							<div className="pointer-events-none absolute left-0 top-0 h-10 w-10 rounded-br-[22px] bg-white" />
							<div className="pointer-events-none absolute right-0 top-0 h-10 w-10 rounded-bl-[22px] bg-white" />

							<div className="relative p-7 sm:p-8">
								{/* Mission */}
								<div className="flex items-start gap-4">
									<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 ring-1 ring-green-200">
										<FaBullseye className="h-5 w-5 text-green-600" />
									</div>

									<div className="min-w-0">
										<p className="text-xs font-semibold tracking-[0.18em] text-slate-600">
											OUR MISSION
										</p>
										<p className="mt-2 text-base font-extrabold text-slate-900 sm:text-lg">
											Deliver reliable, safe, and sustainable energy
											infrastructure.
										</p>
										<p className="mt-2 text-sm leading-relaxed text-slate-600">
											By combining{" "}
											<span className="font-semibold text-slate-900">
												Green Energy innovation
											</span>{" "}
											with strong electrical engineering fundamentals.
										</p>
									</div>
								</div>

								{/* Divider */}
								<div className="my-6 h-px bg-slate-200" />

								{/* Vision */}
								<div className="flex items-start gap-4">
									<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 ring-1 ring-green-200">
										<FaEye className="h-5 w-5 text-green-600" />
									</div>

									<div className="min-w-0">
										<p className="text-xs font-semibold tracking-[0.18em] text-slate-600">
											OUR VISION
										</p>
										<p className="mt-2 text-base font-extrabold text-slate-900 sm:text-lg">
											Become a trusted GreenTech engineering partner in India.
										</p>
										<p className="mt-2 text-sm leading-relaxed text-slate-600">
											Enabling businesses and communities to transition toward{" "}
											<span className="font-semibold text-slate-900">
												cleaner, smarter, future-ready
											</span>{" "}
											energy systems.
										</p>
									</div>
								</div>

								{/* Bottom mini strip */}
								<div className="mt-7 rounded-2xl border border-slate-200 bg-white/70 px-4 py-3">
									<p className="text-xs font-semibold text-slate-700">
										Built on execution discipline:
										<span className="text-green-700">
											{" "}
											safety, quality, and long-term support.
										</span>
									</p>
								</div>
							</div>
						</motion.div>
					</motion.div>

					{/* RIGHT: Values as “stamped tags sheet” */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-80px" }}
						className="lg:col-span-6">
						<motion.div
							variants={fade}
							custom={0}
							className="relative rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
							{/* sheet shadow + pin */}
							<div className="pointer-events-none absolute -top-3 left-10 h-6 w-6 rotate-12 rounded-full bg-green-600 shadow-[0_10px_30px_rgba(22,163,74,0.28)]" />
							<div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-slate-100" />

							<div className="flex items-center justify-between gap-3">
								<div>
									<p className="text-xs font-semibold tracking-[0.18em] text-slate-600">
										OUR VALUES
									</p>
									<h3 className="mt-2 text-xl font-extrabold text-slate-900">
										How we work, every day
									</h3>
								</div>
								<span className="hidden sm:inline-flex items-center rounded-full border border-green-200 bg-green-50 px-3 py-1 text-xs font-semibold text-green-800">
									Green-600 Highlight
								</span>
							</div>

							{/* Unique “tag stamps” layout */}
							<div className="mt-6 grid gap-4 sm:grid-cols-2">
								{VALUES.map((v, i) => {
									const Icon = v.icon;
									return (
										<motion.div
											key={v.title}
											variants={fade}
											custom={i + 1}
											className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md">
											{/* green glow on hover */}
											<div className="pointer-events-none absolute -inset-1 rounded-3xl bg-green-600/0 blur-xl transition duration-300 group-hover:bg-green-600/18" />
											<div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-green-600/0 transition duration-300 group-hover:ring-green-600/20" />

											{/* “stamp notch” */}
											<div className="pointer-events-none absolute right-0 top-0 h-14 w-14 rounded-bl-[26px] bg-white/70" />

											<div className="relative flex items-start gap-4">
												<div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white ring-1 ring-slate-200">
													<Icon className="h-5 w-5 text-green-600" />
												</div>
												<div className="min-w-0">
													<p className="text-sm font-extrabold text-slate-900">
														{v.title}
													</p>
													<p className="mt-1 text-sm leading-relaxed text-slate-600">
														{v.desc}
													</p>
												</div>
											</div>
										</motion.div>
									);
								})}
							</div>

							{/* Footer statement */}
							<div className="mt-6 rounded-2xl border border-slate-200 bg-white px-4 py-4">
								<p className="text-sm font-semibold text-slate-800">
									Result:{" "}
									<span className="text-green-700">
										predictable delivery, safer execution, and better long-term
										performance.
									</span>
								</p>
							</div>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
