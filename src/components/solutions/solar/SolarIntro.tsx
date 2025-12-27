"use client";

import React from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { FaShieldAlt, FaChartLine, FaBolt } from "react-icons/fa";

const fadeUp: Variants = {
	hidden: { opacity: 0, y: 16 },
	visible: (i: number = 0) => ({
		opacity: 1,
		y: 0,
		transition: { duration: 0.65, ease: "easeOut", delay: 0.08 * i },
	}),
};

const points = [
	{
		icon: FaChartLine,
		title: "Cost Reduction",
		desc: "Right-sized systems that reduce electricity bills with measurable returns.",
	},
	{
		icon: FaShieldAlt,
		title: "Safety & Compliance",
		desc: "Industrial-grade protection, testing, labeling, and documentation.",
	},
	{
		icon: FaBolt,
		title: "Reliable Execution",
		desc: "Clean wiring, quality components, and tested commissioning for long life.",
	},
] as const;

export default function SolarIntro() {
	return (
		<section className="relative overflow-hidden bg-white">
			{/* subtle background */}
			<div className="pointer-events-none absolute inset-0 -z-10">
				<div className="absolute -top-24 left-10 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
				<div className="absolute -bottom-28 right-0 h-80 w-80 rounded-full bg-lime-400/12 blur-3xl" />
				<div
					className="absolute inset-0 opacity-[0.08]"
					style={{
						backgroundImage:
							"linear-gradient(to right, rgba(2,6,23,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(2,6,23,0.06) 1px, transparent 1px)",
						backgroundSize: "72px 72px",
					}}
				/>
			</div>

			<div className="mx-auto max-w-7xl px-6 py-14 sm:py-18">
				<div className="grid items-center gap-10 lg:grid-cols-12">
					{/* LEFT: image card */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-80px" }}
						className="lg:col-span-5">
						<motion.div
							variants={fadeUp}
							custom={0}
							className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
							<div className="absolute inset-0 bg-linear-to-tr from-black/25 via-black/0 to-black/10" />
							<Image
								src="https://res.cloudinary.com/dwsm6i6z9/image/upload/v1766747104/Solar-Industrial-Rooftops-re-img_apmscw.webp"
								alt="Industrial rooftop solar installation"
								width={900}
								height={700}
								className="h-80 w-full object-cover sm:h-95"
							/>
							{/* caption chip */}
							<div className="absolute left-5 top-5 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
								Rooftop & Ground-mount Solar
							</div>

							{/* bottom strip */}
							<div className="absolute inset-x-0 bottom-0 p-5">
								<div className="rounded-2xl border border-white/20 bg-black/35 p-4 backdrop-blur">
									<p className="text-sm font-semibold text-white">
										Industrial-grade execution, built for safety and long-term
										performance.
									</p>
								</div>
							</div>
						</motion.div>
					</motion.div>

					{/* RIGHT: content */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-80px" }}
						className="lg:col-span-7">
						<motion.p
							variants={fadeUp}
							custom={0}
							className="inline-flex w-fit items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold tracking-widest text-emerald-800">
							INTRODUCTION
						</motion.p>

						<motion.h2
							variants={fadeUp}
							custom={1}
							className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
							Solar engineered for{" "}
							<span className="text-emerald-600">real</span> savings — without
							compromising standards
						</motion.h2>

						<motion.p
							variants={fadeUp}
							custom={2}
							className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
							We design and execute{" "}
							<span className="font-semibold text-slate-900">
								right-sized rooftop and ground-mounted solar systems
							</span>{" "}
							that reduce electricity costs while meeting{" "}
							<span className="font-semibold text-slate-900">
								industrial safety and compliance standards
							</span>
							.
						</motion.p>

						{/* points */}
						<div className="mt-7 grid gap-4 sm:grid-cols-3">
							{points.map((p, i) => {
								const Icon = p.icon;
								return (
									<motion.div
										key={p.title}
										variants={fadeUp}
										custom={3 + i}
										className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
										<div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-emerald-500/10 blur-2xl transition group-hover:bg-emerald-500/18" />
										<div className="relative flex items-start gap-3">
											<div className="rounded-xl bg-emerald-50 p-2 ring-1 ring-emerald-100">
												<Icon className="h-4 w-4 text-emerald-700" />
											</div>
											<div className="min-w-0">
												<p className="text-sm font-extrabold text-slate-900">
													{p.title}
												</p>
												<p className="mt-1 text-xs leading-relaxed text-slate-600">
													{p.desc}
												</p>
											</div>
										</div>
									</motion.div>
								);
							})}
						</div>

						{/* small trust strip */}
						<motion.div
							variants={fadeUp}
							custom={7}
							className="mt-6 flex flex-wrap gap-2 text-xs text-slate-600">
							<span className="rounded-full border border-slate-200 bg-white px-3 py-1">
								Site survey & right sizing
							</span>
							<span className="rounded-full border border-slate-200 bg-white px-3 py-1">
								Protection & earthing
							</span>
							<span className="rounded-full border border-slate-200 bg-white px-3 py-1">
								Testing & commissioning
							</span>
							<span className="rounded-full border border-slate-200 bg-white px-3 py-1">
								Documentation & handover
							</span>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
