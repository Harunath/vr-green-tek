"use client";

import React, { useMemo, useState } from "react";
import { motion, type Variants, AnimatePresence } from "framer-motion";
import {
	FaLeaf,
	FaBolt,
	FaSolarPanel,
	FaProjectDiagram,
	FaChartLine,
	FaTools,
	FaNetworkWired,
	FaClipboardCheck,
	FaShieldAlt,
	FaIndustry,
	FaCog,
} from "react-icons/fa";

type Item = {
	title: string;
	desc: string;
	icon: React.ElementType;
	tag: string;
};

const GREEN: Item[] = [
	{
		title: "Rooftop & ground-mounted solar systems",
		icon: FaSolarPanel,
		desc: "Design → supply → installation → commissioning with clean finishing.",
		tag: "Turnkey",
	},
	{
		title: "Hybrid power solutions (Solar + Grid + DG)",
		icon: FaProjectDiagram,
		desc: "Seamless switching and stability for critical loads and uptime.",
		tag: "Hybrid",
	},
	{
		title: "Solar SCADA & monitoring panels",
		icon: FaNetworkWired,
		desc: "Monitoring-ready systems with performance visibility & alerts.",
		tag: "Monitoring",
	},
	{
		title: "Energy optimization & ROI-focused sizing",
		icon: FaChartLine,
		desc: "Right-sized capacity for real savings — not oversizing.",
		tag: "ROI",
	},
	{
		title: "Monitoring, AMC & long-term support",
		icon: FaTools,
		desc: "Preventive maintenance + quick response for consistent output.",
		tag: "Support",
	},
];

const ELEC: Item[] = [
	{
		title: "LT / HT electrical works",
		icon: FaBolt,
		desc: "Scalable execution with safety-first site practices.",
		tag: "Execution",
	},
	{
		title: "PCC, MCC, PLC, MCP & Drive panels",
		icon: FaIndustry,
		desc: "Industrial panels built for performance, protection and control.",
		tag: "Panels",
	},
	{
		title: "Instrumentation & control panels",
		icon: FaCog,
		desc: "Clean control wiring, routing discipline and serviceability.",
		tag: "Control",
	},
	{
		title: "Testing, documentation & statutory compliance",
		icon: FaClipboardCheck,
		desc: "Handover-ready with labeling, reports and audit support.",
		tag: "Compliance",
	},
	{
		title: "Energy audits & load management",
		icon: FaShieldAlt,
		desc: "Improve reliability, reduce losses, and optimize distribution.",
		tag: "Audit",
	},
];

type Tab = "Green Energy" | "Electricals";

const cn = (...c: (string | false | null | undefined)[]) =>
	c.filter(Boolean).join(" ");

const container: Variants = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.06, delayChildren: 0.04 },
	},
};

const itemV: Variants = {
	hidden: { opacity: 0, y: 10 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.45, ease: "easeOut" },
	},
};

function Segmented({ tab, setTab }: { tab: Tab; setTab: (t: Tab) => void }) {
	return (
		<div className="inline-flex w-full sm:w-auto rounded-2xl border border-slate-200 bg-white p-1 shadow-sm">
			{(["Green Energy", "Electricals"] as const).map((t) => (
				<button
					key={t}
					type="button"
					onClick={() => setTab(t)}
					className={cn(
						"relative w-1/2 sm:w-auto rounded-xl px-4 py-2.5 text-sm font-semibold transition",
						tab === t ? "text-white" : "text-slate-800 hover:bg-slate-50"
					)}>
					{tab === t && (
						<motion.span
							layoutId="seg-pill"
							className="absolute inset-0 rounded-xl bg-emerald-600"
							transition={{ type: "spring", stiffness: 420, damping: 32 }}
						/>
					)}
					<span className="relative z-10">{t}</span>
				</button>
			))}
		</div>
	);
}

function CoreCard({ tab }: { tab: Tab }) {
	const isGreen = tab === "Green Energy";

	const theme = isGreen
		? {
				rail: "from-emerald-600 via-lime-500 to-emerald-400",
				badge: "border-emerald-200 bg-emerald-50 text-emerald-800",
				dot: "bg-emerald-600",
				glow: "bg-emerald-500/10",
				iconWrap: "bg-emerald-50 ring-emerald-200",
				icon: "text-emerald-700",
				Icon: FaLeaf,
				title: "Savings + Stability",
				desc: "Right-sized systems with monitoring, analytics and long-term support — built for measurable ROI.",
				bullets: [
					{
						k: "Lower Bills",
						v: "Optimization-first sizing avoids overspending.",
					},
					{
						k: "Reliable Power",
						v: "Hybrid stability for critical loads & uptime.",
					},
					{ k: "Long-term ROI", v: "SCADA + AMC keeps output consistent." },
				],
		  }
		: {
				rail: "from-sky-600 via-cyan-500 to-sky-400",
				badge: "border-sky-200 bg-sky-50 text-sky-800",
				dot: "bg-sky-600",
				glow: "bg-sky-500/10",
				iconWrap: "bg-sky-50 ring-sky-200",
				icon: "text-sky-700",
				Icon: FaBolt,
				title: "Safety + Compliance",
				desc: "Industrial-grade execution with testing, documentation and audit-ready handover.",
				bullets: [
					{
						k: "Safety-first",
						v: "Standards, protection and disciplined practices.",
					},
					{
						k: "Handover-ready",
						v: "Testing, labeling, reports and documentation.",
					},
					{
						k: "Uptime",
						v: "Preventive maintenance and fast response support.",
					},
				],
		  };

	const Icon = theme.Icon;

	return (
		<div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
			<div
				className={cn(
					"absolute inset-x-0 top-0 h-1 bg-linear-to-r",
					theme.rail
				)}
			/>
			<div
				className={cn(
					"pointer-events-none absolute -top-10 -right-10 h-44 w-44 rounded-full blur-3xl",
					theme.glow
				)}
			/>
			<div
				className={cn(
					"pointer-events-none absolute -bottom-10 -left-10 h-44 w-44 rounded-full blur-3xl",
					theme.glow
				)}
			/>

			<div
				className={cn(
					"inline-flex items-center gap-2 rounded-2xl border px-3 py-2 text-xs font-semibold",
					theme.badge
				)}>
				<span className={cn("h-2 w-2 rounded-full", theme.dot)} />
				CORE PROMISE
			</div>

			<div className="mt-4 flex items-center gap-3">
				<div
					className={cn(
						"grid h-12 w-12 place-items-center rounded-2xl ring-1",
						theme.iconWrap
					)}>
					<Icon className={cn("h-5 w-5", theme.icon)} />
				</div>
				<div>
					<p className="text-xs font-semibold text-slate-500">Outcome</p>
					<p className="text-lg font-extrabold text-slate-900">{theme.title}</p>
				</div>
			</div>

			<p className="mt-3 text-sm leading-relaxed text-slate-600">
				{theme.desc}
			</p>

			<div className="mt-5 grid gap-3">
				{theme.bullets.map((b) => (
					<div
						key={b.k}
						className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
						<p className="text-sm font-extrabold text-slate-900">{b.k}</p>
						<p className="mt-1 text-sm text-slate-600">{b.v}</p>
					</div>
				))}
			</div>

			<div className="mt-5 flex flex-wrap gap-2 text-xs text-slate-600">
				{["Safety", "Quality", "Compliance", "Support"].map((t) => (
					<span
						key={t}
						className="rounded-full border border-slate-200 bg-white px-3 py-1">
						{t}
					</span>
				))}
			</div>
		</div>
	);
}

function BlueprintTimeline({ tab }: { tab: Tab }) {
	const isGreen = tab === "Green Energy";
	const items = useMemo(() => (isGreen ? GREEN : ELEC), [isGreen]);

	const theme = isGreen
		? {
				rail: "bg-emerald-600",
				dot: "bg-emerald-600",
				tag: "border-emerald-200 bg-emerald-50 text-emerald-700",
				iconWrap: "bg-emerald-50 ring-emerald-200",
				icon: "text-emerald-700",
				sheen: "from-emerald-600/14 via-emerald-500/8 to-transparent",
		  }
		: {
				rail: "bg-sky-600",
				dot: "bg-sky-600",
				tag: "border-sky-200 bg-sky-50 text-sky-700",
				iconWrap: "bg-sky-50 ring-sky-200",
				icon: "text-sky-700",
				sheen: "from-sky-600/14 via-sky-500/8 to-transparent",
		  };

	return (
		<motion.div
			variants={container}
			initial="hidden"
			animate="visible"
			className="relative">
			{/* vertical rail */}
			<div
				className={cn(
					"absolute left-4.5 top-2 bottom-2 w-0.5 rounded-full opacity-90",
					theme.rail
				)}
			/>

			<div className="grid gap-4">
				{items.map((it, idx) => {
					const Icon = it.icon;
					// zig-zag on desktop, simple stack on mobile
					const zig = idx % 2 === 0 ? "lg:ml-0" : "lg:ml-10";

					return (
						<motion.div
							key={it.title}
							variants={itemV}
							className={cn("relative pl-12", zig)}>
							{/* dot */}
							<div
								className={cn(
									"absolute left-3  top-6 h-3 w-3 rounded-full",
									theme.dot
								)}
							/>

							<div
								className={cn(
									"group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition",
									"hover:-translate-y-0.5 hover:shadow-md"
								)}>
								<div
									className={cn(
										"pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100",
										"bg-linear-to-br",
										theme.sheen
									)}
								/>

								<div className="relative flex items-start gap-4">
									<div
										className={cn(
											"grid h-12 w-12 shrink-0 place-items-center rounded-2xl ring-1",
											theme.iconWrap
										)}>
										<Icon className={cn("h-5 w-5", theme.icon)} />
									</div>

									<div className="min-w-0 flex-1">
										<div className="flex items-start justify-between gap-3">
											<p className="text-[15px] font-extrabold text-slate-900 leading-snug">
												{it.title}
											</p>
											<span
												className={cn(
													"shrink-0 rounded-full border px-2 py-0.5 text-[11px] font-semibold",
													theme.tag
												)}>
												{it.tag}
											</span>
										</div>
										<p className="mt-2 text-sm leading-relaxed text-slate-600">
											{it.desc}
										</p>
									</div>
								</div>
							</div>
						</motion.div>
					);
				})}
			</div>
		</motion.div>
	);
}

export default function WhatWeDoBlueprint() {
	const [tab, setTab] = useState<Tab>("Green Energy");

	return (
		<section className="relative overflow-hidden bg-white">
			{/* background */}
			<div className="pointer-events-none absolute inset-0 -z-10">
				<div className="absolute -top-28 left-10 h-72 w-72 rounded-full bg-emerald-400/14 blur-3xl" />
				<div className="absolute -bottom-32 right-0 h-80 w-80 rounded-full bg-sky-400/10 blur-3xl" />
				<div
					className="absolute inset-0 opacity-[0.14]"
					style={{
						backgroundImage:
							"linear-gradient(to right, rgba(2,6,23,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(2,6,23,0.05) 1px, transparent 1px)",
						backgroundSize: "60px 60px",
					}}
				/>
			</div>

			<div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-20">
				{/* header */}
				<div className="mx-auto max-w-3xl text-center">
					<p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold tracking-widest text-slate-700">
						WHAT WE DO
					</p>

					<h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
						One blueprint.{" "}
						<span className="text-emerald-600">Two capability tracks.</span>
					</h2>

					<p className="mt-4 text-base leading-relaxed text-slate-600">
						A unique “blueprint” layout that stays stable on click and fits
						every screen — no orbit overlaps, no repeated blocks.
					</p>

					<div className="mt-7 flex justify-center">
						<Segmented tab={tab} setTab={setTab} />
					</div>
				</div>

				{/* content */}
				<div className="mt-12 grid gap-6 lg:grid-cols-12 lg:items-start">
					{/* left core */}
					<div className="lg:col-span-5 lg:sticky lg:top-24 h-fit">
						{/* ✅ no whileInView here → nothing flickers on tab click */}
						<AnimatePresence mode="wait">
							<motion.div
								key={tab}
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -8 }}
								transition={{ duration: 0.25, ease: "easeOut" }}>
								<CoreCard tab={tab} />
							</motion.div>
						</AnimatePresence>
					</div>

					{/* right blueprint timeline */}
					<div className="lg:col-span-7">
						{/* ✅ stable animations controlled by state, not viewport */}
						<AnimatePresence mode="wait">
							<motion.div
								key={tab + "-timeline"}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.22, ease: "easeOut" }}>
								<BlueprintTimeline tab={tab} />
							</motion.div>
						</AnimatePresence>

						<div className="mt-4 text-center text-xs text-slate-500 lg:hidden">
							Scroll to explore ↓
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
