"use client";

import React from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
	FaCheckCircle,
	FaShieldAlt,
	FaIndustry,
	FaMapMarkedAlt,
	FaTools,
	FaBolt,
	FaPlug,
	FaSolarPanel,
	FaArrowRight,
} from "react-icons/fa";

/* ================= VARIANTS ================= */

const container: Variants = {
	hidden: { opacity: 0, y: 14 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: "easeOut" },
	},
};

const item: Variants = {
	hidden: { opacity: 0, y: 12 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.45, ease: "easeOut" },
	},
};

/* ================= UI PARTS ================= */

function TrustPill({
	icon: Icon,
	text,
}: {
	icon: React.ElementType;
	text: string;
}) {
	return (
		<motion.div
			variants={item}
			whileHover={{ y: -3 }}
			className="group inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 shadow-sm transition hover:border-green-600/30 hover:shadow-md">
			<Icon className="text-green-600 opacity-90 transition group-hover:opacity-100" />
			<span className="text-sm font-semibold text-[#0B1220]">{text}</span>
		</motion.div>
	);
}

function FeatureCard({
	icon: Icon,
	title,
	desc,
}: {
	icon: React.ElementType;
	title: string;
	desc: string;
}) {
	return (
		<motion.div
			variants={item}
			whileHover={{ y: -6 }}
			className="group relative overflow-hidden rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition hover:border-green-600/30 hover:shadow-md">
			{/* glow */}
			<div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-green-600/10 blur-2xl opacity-0 transition group-hover:opacity-100" />
			<div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-green-600/35 to-transparent opacity-0 transition group-hover:opacity-100" />

			<div className="flex items-start gap-4">
				<div className="grid h-12 w-12 place-items-center rounded-2xl bg-green-600/10">
					<Icon className="text-xl text-green-600" />
				</div>
				<div className="flex-1">
					<p className="text-base font-extrabold text-[#0B1220]">{title}</p>
					<p className="mt-2 text-sm leading-relaxed text-black/60">{desc}</p>
				</div>
			</div>
		</motion.div>
	);
}

/* ================= MAIN ================= */

export default function PositioningHero() {
	return (
		<section className="relative overflow-hidden bg-white">
			{/* background accents */}
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute -top-28 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-green-600/12 blur-3xl" />
				<div className="absolute -bottom-40 -left-40 h-105 w-105 rounded-full bg-green-600/10 blur-3xl" />
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.08),transparent_55%)]" />
			</div>

			<div className="relative mx-auto max-w-7xl px-6 pb-16 pt-16 sm:pt-20">
				<motion.div
					variants={container}
					initial="hidden"
					animate="show"
					transition={{ staggerChildren: 0.08 }} // ✅ CORRECT PLACE
					className="grid items-center gap-10 lg:grid-cols-2">
					{/* LEFT */}
					<div>
						<motion.div
							variants={item}
							className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-4 py-2 text-xs font-semibold tracking-widest text-black/60 shadow-sm backdrop-blur">
							<span className="h-2 w-2 rounded-full bg-green-600" />
							<span className="uppercase">
								Compliance-first • Safety-first • Scalable
							</span>
						</motion.div>

						<motion.h1
							variants={item}
							className="mt-5 text-4xl font-extrabold tracking-tight text-[#0B1220] sm:text-6xl">
							Powering{" "}
							<span className="text-green-600">Reliable Infrastructure</span>{" "}
							for Today & Tomorrow
						</motion.h1>

						<motion.p
							variants={item}
							className="mt-5 max-w-xl text-base leading-relaxed text-black/60 sm:text-lg">
							We deliver compliance-ready electrical systems and renewable
							energy solutions for homes, industries, institutions, and rural
							infrastructure — engineered for{" "}
							<span className="font-semibold text-[#0B1220]">
								safety, scalability, and long-term performance.
							</span>
						</motion.p>

						{/* Trust pills */}
						<motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
							<TrustPill
								icon={FaShieldAlt}
								text="Licensed & Standards-Compliant"
							/>
							<TrustPill
								icon={FaIndustry}
								text="Industrial + Renewable Expertise"
							/>
							<TrustPill
								icon={FaMapMarkedAlt}
								text="Pan-India Project Execution"
							/>
							<TrustPill icon={FaTools} text="Long-Term AMC & Support" />
						</motion.div>

						{/* CTA */}
						<motion.div
							variants={item}
							className="mt-10 flex flex-wrap items-center gap-4">
							<Link
								href="/contact"
								className="group inline-flex items-center gap-4 rounded-full bg-green-600 px-6 py-3 text-sm font-bold text-white shadow-sm">
								Get a Project Quote
								<span className="grid h-10 w-10 place-items-center rounded-full bg-black/20 transition group-hover:bg-black/30">
									<FaArrowRight />
								</span>
							</Link>

							<div className="flex items-center gap-2 text-sm font-semibold">
								<FaCheckCircle className="text-green-600" />
								<Link
									href="/projects"
									className="text-green-600 underline-offset-4 hover:underline">
									View Projects
								</Link>
							</div>
						</motion.div>
					</div>

					{/* RIGHT */}
					<motion.div variants={item}>
						<div className="rounded-4xl border border-black/10 bg-white p-6 shadow-sm sm:p-8">
							<div className="flex items-center gap-3">
								<div className="grid h-12 w-12 place-items-center rounded-2xl bg-green-600/10">
									<FaBolt className="text-xl text-green-600" />
								</div>
								<div>
									<p className="text-sm font-extrabold text-[#0B1220]">
										Electricals + Green Energy
									</p>
									<p className="text-xs text-black/55">
										One partner. Complete execution.
									</p>
								</div>
							</div>

							<div className="mt-6 grid gap-4 sm:grid-cols-2">
								<FeatureCard
									icon={FaSolarPanel}
									title="Renewable Energy"
									desc="Solar EPC, hybrid solutions & monitoring."
								/>
								<FeatureCard
									icon={FaPlug}
									title="Electrical Execution"
									desc="Wiring, panels, LT/HT works & documentation."
								/>
							</div>
						</div>
					</motion.div>
				</motion.div>

				<div className="mt-14 h-px bg-linear-to-r from-transparent via-green-600/25 to-transparent" />
			</div>
		</section>
	);
}
