"use client";

import React from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import {
	FaSolarPanel,
	FaSnowflake,
	FaTractor,
	FaBolt,
	FaWarehouse,
	FaCheckCircle,
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
	visible: { transition: { staggerChildren: 0.08, delayChildren: 0.06 } },
};

const PILLARS = [
	{
		title: "Agriculture Power",
		desc: "Reliable power for pumps, irrigation, and farm operations.",
		icon: FaTractor,
	},
	{
		title: "Cold Storage Support",
		desc: "Stable energy for refrigeration and temperature control.",
		icon: FaSnowflake,
	},
	{
		title: "Hybrid Systems",
		desc: "Solar + grid + DG integration for uninterrupted supply.",
		icon: FaBolt,
	},
] as const;

const HIGHLIGHTS = [
	"Site survey & load profiling",
	"Right-sized solar + hybrid design",
	"On-ground execution & commissioning",
	"Monitoring-ready delivery",
] as const;

export default function RuralEnergyIntro() {
	return (
		<section className="relative overflow-hidden bg-white">
			{/* Background: soft glows + subtle dot field */}
			<div className="pointer-events-none absolute inset-0 -z-10">
				<div className="absolute -top-28 left-10 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />
				<div className="absolute -bottom-28 right-0 h-96 w-96 rounded-full bg-lime-400/12 blur-3xl" />
				<div
					className="absolute inset-0 opacity-[0.10]"
					style={{
						backgroundImage:
							"radial-gradient(rgba(2,6,23,0.10) 1px, transparent 1px)",
						backgroundSize: "26px 26px",
					}}
				/>
			</div>

			<div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
				<div className="grid items-center gap-10 lg:grid-cols-12">
					{/* LEFT: Copy */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-80px" }}
						variants={container}
						className="lg:col-span-6">
						<motion.p
							variants={fadeUp}
							className="inline-flex w-fit items-center gap-2 rounded-2xl border border-green-600 bg-green-50 px-4 py-2 text-xs font-semibold tracking-[0.22em] text-emerald-800">
							INTRO
							<span className="h-1 w-1 rounded-full bg-green-600/70" />
							RURAL ENERGY
						</motion.p>

						<motion.h2
							variants={fadeUp}
							custom={1}
							className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
							Solar + hybrid power that keeps{" "}
							<span className="text-green-600">rural operations running</span>
						</motion.h2>

						<motion.p
							variants={fadeUp}
							custom={2}
							className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
							We deliver solar and hybrid power systems that support
							agriculture, cold storage, and rural operations with on-ground
							execution expertise.
						</motion.p>

						{/* Pillars */}
						<div className="mt-7 grid gap-4 sm:grid-cols-3">
							{PILLARS.map((p, i) => {
								const Icon = p.icon;
								return (
									<motion.div
										key={p.title}
										variants={fadeUp}
										custom={3 + i}
										className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
										<div className="pointer-events-none absolute -right-14 -top-14 h-44 w-44 rounded-full bg-emerald-500/10 blur-3xl transition group-hover:bg-emerald-500/18" />
										<div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-emerald-600/0 transition group-hover:ring-emerald-600/15" />

										<div className="relative">
											<div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-50 ring-1 ring-green-100">
												<Icon className="h-5 w-5 text-green-600" />
											</div>
											<p className="mt-3 text-sm font-extrabold text-slate-900">
												{p.title}
											</p>
											<p className="mt-1 text-xs leading-relaxed text-slate-600">
												{p.desc}
											</p>
										</div>
									</motion.div>
								);
							})}
						</div>

						{/* Checklist */}
						<motion.div
							variants={fadeUp}
							custom={7}
							className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-5">
							<p className="text-xs font-semibold tracking-[0.18em] text-slate-600">
								DELIVERY FOCUS
							</p>
							<div className="mt-3 grid gap-2 sm:grid-cols-2">
								{HIGHLIGHTS.map((h) => (
									<div key={h} className="flex items-center gap-2">
										<FaCheckCircle className="h-4 w-4 text-green-600" />
										<p className="text-sm font-semibold text-slate-800">{h}</p>
									</div>
								))}
							</div>
						</motion.div>
					</motion.div>

					{/* RIGHT: Image board */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-80px" }}
						className="lg:col-span-6">
						<motion.div
							variants={fadeUp}
							custom={1}
							className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
							<div className="pointer-events-none absolute inset-0 bg-linear-to-tr from-black/25 via-black/0 to-black/10" />

							<Image
								src="https://res.cloudinary.com/dwsm6i6z9/image/upload/v1766828044/b7b329_2a51aecc989f4e3285a6ad54ebb3cdeb_mv2_uh4icx.jpg"
								alt="Rural solar and hybrid power"
								width={1200}
								height={900}
								className="h-90 w-full object-cover sm:h-105"
							/>

							<div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
								<FaSolarPanel className="h-3.5 w-3.5 text-green-600" />
								Rural Solar + Hybrid
							</div>

							{/* Bottom overlay badges */}
							<div className="absolute inset-x-0 bottom-0 p-5">
								<div className="grid gap-3 rounded-3xl border border-white/15 bg-black/40 p-4 backdrop-blur sm:grid-cols-3">
									<div className="flex items-start gap-3">
										<div className="rounded-2xl bg-white/10 p-2 ring-1 ring-white/15">
											<FaTractor className="h-4 w-4 text-green-600" />
										</div>
										<div>
											<p className="text-[11px] font-semibold tracking-[0.14em] text-white/70">
												AGRI
											</p>
											<p className="mt-1 text-sm font-semibold text-white">
												Pumps & irrigation
											</p>
										</div>
									</div>

									<div className="flex items-start gap-3">
										<div className="rounded-2xl bg-white/10 p-2 ring-1 ring-white/15">
											<FaWarehouse className="h-4 w-4 text-green-600" />
										</div>
										<div>
											<p className="text-[11px] font-semibold tracking-[0.14em] text-white/70">
												STORAGE
											</p>
											<p className="mt-1 text-sm font-semibold text-white">
												Cold chain uptime
											</p>
										</div>
									</div>

									<div className="flex items-start gap-3">
										<div className="rounded-2xl bg-white/10 p-2 ring-1 ring-white/15">
											<FaBolt className="h-4 w-4 text-green-600" />
										</div>
										<div>
											<p className="text-[11px] font-semibold tracking-[0.14em] text-white/70">
												HYBRID
											</p>
											<p className="mt-1 text-sm font-semibold text-white">
												Grid + DG support
											</p>
										</div>
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
