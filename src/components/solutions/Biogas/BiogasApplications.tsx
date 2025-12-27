"use client";

import React, { useMemo } from "react";
import { motion, type Variants } from "framer-motion";
import {
	FaTractor,
	FaUtensils,
	FaIndustry,
	FaUsers,
	FaLeaf,
	FaArrowRight,
} from "react-icons/fa";
import { GiCow } from "react-icons/gi";


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

type AppItem = {
	title: string;
	desc: string;
	icons: React.ComponentType<{ className?: string }>[];
	tag: string;
};

const APPLICATIONS: AppItem[] = [
	{
		title: "Agricultural & Dairy Waste",
		desc: "Cow dung, crop residue, and farm waste converted into usable biogas + nutrient-rich slurry.",
		icons: [FaTractor, GiCow, FaLeaf],
		tag: "Farms",
	},
	{
		title: "Food Processing & Organic Waste",
		desc: "Efficient digestion of organic waste from kitchens, food units, and processing plants.",
		icons: [FaUtensils, FaIndustry, FaLeaf],
		tag: "Industries",
	},
	{
		title: "Rural & Community Biogas Plants",
		desc: "Community-scale biogas plants for villages, hostels, and campuses to reduce LPG dependency.",
		icons: [FaUsers, FaLeaf, FaTractor],
		tag: "Community",
	},
];

export default function BiogasApplications() {
	const maxIcons = useMemo(() => 3, []);

	return (
		<section className="relative overflow-hidden bg-white">
			{/* background: glows + subtle grid */}
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
					className="absolute inset-0 opacity-[0.07]"
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
					variants={container}
					className="mx-auto max-w-3xl text-center">
					<motion.p
						variants={fadeUp}
						custom={0}
						className="mx-auto w-fit rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold tracking-[0.22em] text-emerald-800">
						APPLICATIONS
					</motion.p>

					<motion.h2
						variants={fadeUp}
						custom={1}
						className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
						Where biogas creates{" "}
						<span className="text-emerald-600">impact</span>
					</motion.h2>

					<motion.p
						variants={fadeUp}
						custom={2}
						className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
						Designed for real-world waste streams — farm, industrial, and
						community-scale deployments.
					</motion.p>
				</motion.div>

				{/* Unique layout: “Application Board” */}
				<div className="mt-12 grid gap-6 lg:grid-cols-12">
					{/* Left: vertical guide rail */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-80px" }}
						className="lg:col-span-4">
						<motion.div
							variants={fadeUp}
							custom={0}
							className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
							<div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-emerald-500/10 blur-3xl" />

							<p className="text-xs font-semibold tracking-[0.18em] text-slate-500">
								USE-CASE MAP
							</p>
							<p className="mt-2 text-xl font-extrabold text-slate-900">
								3 core application areas
							</p>

							<div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4">
								<div className="relative">
									<div className="absolute left-2.5 top-1 bottom-1 w-px bg-slate-200" />
									<div className="space-y-4">
										{APPLICATIONS.map((a) => (
											<div
												key={a.title}
												className="relative flex items-start gap-3">
												<span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 ring-4 ring-emerald-600/15">
													<span className="h-1.5 w-1.5 rounded-full bg-white" />
												</span>
												<div className="min-w-0">
													<p className="text-sm font-extrabold text-slate-900">
														{a.tag}
													</p>
													<p className="text-xs text-slate-600">{a.title}</p>
												</div>
											</div>
										))}
									</div>
								</div>
							</div>

							<div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-600">
								<span className="rounded-full border border-slate-200 bg-white px-3 py-1">
									Waste stream analysis
								</span>
								<span className="rounded-full border border-slate-200 bg-white px-3 py-1">
									System sizing
								</span>
								<span className="rounded-full border border-slate-200 bg-white px-3 py-1">
									Safe operation
								</span>
							</div>
						</motion.div>
					</motion.div>

					{/* Right: application cards */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-80px" }}
						variants={container}
						className="lg:col-span-8">
						<div className="grid gap-5 sm:grid-cols-2">
							{APPLICATIONS.map((a, i) => (
								<motion.div
									key={a.title}
									variants={fadeUp}
									custom={i}
									className={[
										"group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition",
										"hover:-translate-y-0.5 hover:shadow-md",
										// make it feel unique (slight stagger on desktop)
										i === 1 ? "sm:translate-y-3" : "",
										i === 2 ? "sm:translate-y-6 sm:col-span-2" : "",
									].join(" ")}>
									{/* corner notch + glow */}
									<div className="pointer-events-none absolute right-0 top-0 h-16 w-16 rounded-bl-[34px] bg-slate-50" />
									<div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-emerald-500/10 blur-3xl transition group-hover:bg-emerald-500/18" />
									<div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-emerald-600/0 transition group-hover:ring-emerald-600/15" />

									<div className="relative">
										<div className="flex items-start justify-between gap-3">
											<div>
												<p className="text-xs font-semibold tracking-[0.18em] text-slate-500">
													{a.tag}
												</p>
												<h3 className="mt-2 text-lg font-extrabold text-slate-900">
													{a.title}
												</h3>
											</div>

											<span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-800">
												Application
											</span>
										</div>

										<p className="mt-3 text-sm leading-relaxed text-slate-600">
											{a.desc}
										</p>

										{/* icon row */}
										<div className="mt-5 flex items-center gap-2">
											{a.icons.slice(0, maxIcons).map((Icon, idx) => (
												<span
													key={idx}
													className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 ring-1 ring-emerald-100">
													<Icon className="h-5 w-5 text-emerald-700" />
												</span>
											))}
											<span className="ml-auto inline-flex items-center gap-2 text-sm font-semibold text-emerald-700">
												<span className="opacity-80 group-hover:opacity-100">
													Learn more
												</span>
												<FaArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
											</span>
										</div>
									</div>
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
