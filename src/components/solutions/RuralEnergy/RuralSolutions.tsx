"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import {
	FaTint,
	FaSolarPanel,
	FaBolt,
	FaSnowflake,
	FaWarehouse,
	FaNetworkWired,
	FaMapMarkedAlt,
	FaArrowRight,
} from "react-icons/fa";

/**
 * FIXES (as requested)
 * - Icons aligned properly (no weird offsets / inconsistent circles)
 * - ONLY highlight color: green-600 (everything else neutral slate/black/white)
 * - Full code (clean, copy-paste)
 */

const fadeUp: Variants = {
	hidden: { opacity: 0, y: 14 },
	visible: (i: number = 0) => ({
		opacity: 1,
		y: 0,
		transition: { duration: 0.55, ease: "easeOut", delay: 0.07 * i },
	}),
};

const cn = (...classes: (string | false | null | undefined)[]) =>
	classes.filter(Boolean).join(" ");

type IconType = React.ComponentType<{ className?: string }>;

type SolutionKey = "pumps" | "hybrid" | "cold" | "electrification";

type Solution = {
	key: SolutionKey;
	title: string;
	oneLine: string;
	details: string[];
	icon: IconType;
	image: string;
	chips: { label: string; icon: IconType }[];
};

const SOLUTIONS: Solution[] = [
	{
		key: "pumps",
		title: "Solar water pumps",
		oneLine: "Efficient pumping for irrigation and farm operations.",
		details: [
			"Right-sized pump selection based on head, flow, and duty cycle",
			"Controller & protection integration for safe operation",
			"Clean wiring + commissioning support on site",
		],
		icon: FaTint,
		image:
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1766829054/7868164_u8igit.png",
		chips: [
			{ label: "Irrigation-ready", icon: FaMapMarkedAlt },
			{ label: "Protection built-in", icon: FaBolt },
			{ label: "Low OPEX", icon: FaSolarPanel },
		],
	},
	{
		key: "hybrid",
		title: "Hybrid systems for rural sites",
		oneLine: "Solar + Grid + DG for uninterrupted rural power.",
		details: [
			"Hybrid control strategy for stable output and fuel savings",
			"Changeover logic + protection + load prioritization",
			"Monitoring-ready architecture for long-term performance",
		],
		icon: FaBolt,
		image:
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1766829094/Solar_powered_village_microgrid_js1gnw.png",
		chips: [
			{ label: "Solar + Grid + DG", icon: FaBolt },
			{ label: "Load prioritization", icon: FaNetworkWired },
			{ label: "Monitoring-ready", icon: FaSolarPanel },
		],
	},
	{
		key: "cold",
		title: "Cold storage power solutions",
		oneLine: "Stable energy to protect temperature-sensitive inventory.",
		details: [
			"Uptime-focused power design for refrigeration loads",
			"Hybrid + backup planning to minimize downtime risk",
			"Power quality and protection for compressor safety",
		],
		icon: FaSnowflake,
		image:
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1766829141/Solar_20Powered_20Cold_20Storage_npcggt.jpg",
		chips: [
			{ label: "Uptime-first", icon: FaWarehouse },
			{ label: "Cold chain safe", icon: FaSnowflake },
			{ label: "Protection + PQ", icon: FaBolt },
		],
	},
	{
		key: "electrification",
		title: "Rural electrification projects",
		oneLine:
			"Power access for villages, facilities, and public infrastructure.",
		details: [
			"Distribution planning, safety-first installation & documentation",
			"Scalable implementation with neat finishing and handover",
			"Support for institutional campuses and rural facilities",
		],
		icon: FaNetworkWired,
		image:
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1766829179/How-Solar-Energy-Can-Empower-Rural-India_tgt6rw.jpg",
		chips: [
			{ label: "Community scale", icon: FaNetworkWired },
			{ label: "Safety & standards", icon: FaBolt },
			{ label: "Execution support", icon: FaSolarPanel },
		],
	},
];

function SelectorItem({
	active,
	title,
	oneLine,
	icon: Icon,
	onClick,
}: {
	active: boolean;
	title: string;
	oneLine: string;
	icon: IconType;
	onClick: () => void;
}) {
	return (
		<button
			onClick={onClick}
			className={cn(
				"relative w-full text-left",
				"rounded-2xl border p-4 transition",
				"min-h-23 sm:min-h-24.5",
				active
					? "border-green-600/25 bg-green-50"
					: "border-slate-200 bg-white hover:bg-slate-50"
			)}>
			{/* left accent bar (better than node circles; consistent alignment) */}
			<span
				className={cn(
					"absolute left-0 top-0 h-full w-1 rounded-l-2xl",
					active ? "bg-green-600" : "bg-transparent"
				)}
			/>

			<div className="flex h-full items-center gap-4">
				{/* Icon container (perfectly centered) */}
				<div
					className={cn(
						"grid h-12 w-12 shrink-0 place-items-center rounded-2xl ring-1",
						active ? "bg-white ring-green-600/20" : "bg-slate-50 ring-slate-200"
					)}>
					<Icon
						className={cn(
							"h-5 w-5",
							active ? "text-green-600" : "text-slate-700"
						)}
					/>
				</div>

				<div className="min-w-0">
					<p className="text-sm font-extrabold text-slate-900">{title}</p>
					<p className="mt-1 text-sm text-slate-600 line-clamp-2">{oneLine}</p>
				</div>
			</div>
		</button>
	);
}

export default function RuralSolutions() {
	const [activeKey, setActiveKey] = useState<SolutionKey>("pumps");
	const active = useMemo(
		() => SOLUTIONS.find((s) => s.key === activeKey) ?? SOLUTIONS[0],
		[activeKey]
	);

	return (
		<section className="relative overflow-hidden bg-white">
			{/* Background (only green highlight) */}
			<div className="pointer-events-none absolute inset-0 -z-10">
				<div className="absolute inset-x-0 top-0 h-56 bg-linear-to-b from-green-50 via-white to-transparent" />
				<div className="absolute -top-40 left-10 h-96 w-96 rounded-full bg-green-600/10 blur-3xl" />
				<div className="absolute -bottom-40 right-0 h-128 w-lg rounded-full bg-green-600/8 blur-3xl" />
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
						className="mx-auto w-fit rounded-2xl border border-slate-200 bg-white px-4 py-2 text-xs font-semibold tracking-[0.22em] text-slate-700">
						SOLUTIONS
					</motion.p>

					<motion.h2
						variants={fadeUp}
						custom={1}
						className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
						Reliable power for{" "}
						<span className="text-green-600">rural operations</span>
					</motion.h2>

					<motion.p
						variants={fadeUp}
						custom={2}
						className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
						Choose a solution to see how we design, execute, and deliver on
						ground.
					</motion.p>
				</motion.div>

				<div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-start">
					{/* LEFT: Selector */}
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-80px" }}
						transition={{ duration: 0.45, ease: "easeOut" }}
						className="lg:col-span-5">
						<div className="rounded-[28px] border border-slate-200 bg-white shadow-sm">
							<div className="border-b border-slate-200 bg-slate-50 px-6 py-4">
								<p className="text-xs font-semibold tracking-[0.18em] text-slate-500">
									SELECT A SOLUTION
								</p>
								<p className="mt-1 text-sm font-extrabold text-slate-900">
									What do you need powered?
								</p>
							</div>

							<div className="p-3 sm:p-4">
								<div className="space-y-2">
									{SOLUTIONS.map((s) => (
										<SelectorItem
											key={s.key}
											active={s.key === activeKey}
											title={s.title}
											oneLine={s.oneLine}
											icon={s.icon}
											onClick={() => setActiveKey(s.key)}
										/>
									))}
								</div>
							</div>

							{/* Details */}
							<div className="border-t border-slate-200 p-5 sm:p-6">
								<motion.div
									key={active.key}
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.35, ease: "easeOut" }}>
									<p className="text-xs font-semibold tracking-[0.18em] text-slate-500">
										DELIVERY NOTES
									</p>
									<ul className="mt-3 space-y-2">
										{active.details.map((d) => (
											<li key={d} className="flex items-start gap-2">
												<span className="mt-1.5 h-2 w-2 rounded-full bg-green-600" />
												<p className="text-sm leading-relaxed text-slate-700">
													{d}
												</p>
											</li>
										))}
									</ul>
								</motion.div>
							</div>
						</div>
					</motion.div>

					{/* RIGHT: Image stage */}
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-80px" }}
						transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
						className="lg:col-span-7">
						<div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
							<div className="relative">
								<Image
									src={active.image}
									alt={active.title}
									width={1600}
									height={1000}
									className="h-90 w-full object-cover sm:h-110"
								/>
								<div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/55 via-black/0 to-black/10" />

								{/* Title chip */}
								<div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
									<FaSolarPanel className="h-3.5 w-3.5 text-green-300" />
									{active.title}
								</div>

								{/* Floating chips */}
								<div className="absolute bottom-5 left-5 right-5">
									<div className="flex flex-wrap gap-2">
										{active.chips.map((c) => {
											const Icon = c.icon;
											return (
												<span
													key={c.label}
													className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/35 px-3 py-2 text-xs font-semibold text-white backdrop-blur">
													<Icon className="h-3.5 w-3.5 text-green-300" />
													{c.label}
												</span>
											);
										})}
									</div>
								</div>
							</div>

							<div className="p-6 sm:p-7">
								<h3 className="text-xl font-extrabold text-slate-900">
									{active.oneLine}
								</h3>
								<p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">
									We focus on right sizing, safe electrical integration, and
									commissioning-ready delivery — designed for rural uptime and
									real savings.
								</p>
							</div>
						</div>

						{/* CTA bar */}
						<div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-3xl border border-slate-200 bg-white px-6 py-5 shadow-sm sm:flex-row sm:items-center">
							<div className="flex items-center gap-3">
								<div className="grid h-11 w-11 place-items-center rounded-2xl bg-green-50 ring-1 ring-green-600/20">
									<FaBolt className="h-5 w-5 text-green-600" />
								</div>
								<div>
									<p className="text-sm font-extrabold text-slate-900">
										Request a rural power assessment
									</p>
									<p className="text-sm text-slate-600">
										Share site details → get sizing + approach recommendation.
									</p>
								</div>
							</div>

							<a
								href="/contact"
								className="inline-flex items-center justify-center gap-2 rounded-2xl bg-green-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-green-700">
								Get Assessment <FaArrowRight className="h-4 w-4" />
							</a>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
