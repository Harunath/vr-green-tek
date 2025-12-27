"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import {
	FaLeaf,
	FaBolt,
	FaShieldAlt,
	FaClipboardCheck,
	FaTools,
	FaArrowRight,
} from "react-icons/fa";

/**
 * FIXES
 * ✅ Variants typed correctly (TS safe)
 * ✅ Mobile responsive:
 *   - Orbit becomes a clean "radar card" on mobile (no absolute chips -> no overflow)
 *   - Bento becomes 1-col on mobile, 2-col on md, 12-col on lg (your spans apply only on lg)
 * ✅ No horizontal overflow: overflow-x-clip + px-4 on mobile
 */

const fade = {
	hidden: { opacity: 0, y: 14 },
	visible: (i: number = 0) => ({
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: "easeOut", delay: 0.07 * i },
	}),
} satisfies Variants;

const cn = (...c: (string | false | null | undefined)[]) =>
	c.filter(Boolean).join(" ");

type Tone = "green" | "sky";

const REASONS: Array<{
	title: string;
	desc: string;
	icon: React.ElementType;
	span: string; // only used on lg
	tone: Tone;
}> = [
	{
		title: "Green Energy–first mindset",
		desc: "Solar & hybrid systems engineered for savings, stability, and long-term performance.",
		icon: FaLeaf,
		span: "lg:col-span-7",
		tone: "green",
	},
	{
		title: "Industrial electrical expertise",
		desc: "Panels, protections, LT/HT works, and commissioning discipline — in-house strength.",
		icon: FaBolt,
		span: "lg:col-span-5",
		tone: "sky",
	},
	{
		title: "Compliance-first execution",
		desc: "Standards-aligned work with testing, labeling, and audit-ready handover support.",
		icon: FaShieldAlt,
		span: "lg:col-span-5",
		tone: "green",
	},
	{
		title: "Clean finishing + documentation",
		desc: "Neat routing, clear labeling, test reports, and handover documentation included.",
		icon: FaClipboardCheck,
		span: "lg:col-span-7",
		tone: "sky",
	},
	{
		title: "Long-term AMC & support",
		desc: "Monitoring, preventive maintenance, and fast response for uninterrupted output.",
		icon: FaTools,
		span: "lg:col-span-12",
		tone: "green",
	},
];

function toneStyles(tone: Tone) {
	if (tone === "green") {
		return {
			iconWrap: "bg-emerald-50 ring-emerald-200",
			icon: "text-emerald-600",
			sheen: "from-emerald-600/18 via-emerald-500/10 to-transparent",
			hoverRing: "group-hover:ring-emerald-600/25",
			badge: "border-emerald-200 bg-emerald-50 text-emerald-800",
		};
	}
	return {
		iconWrap: "bg-sky-50 ring-sky-200",
		icon: "text-sky-600",
		sheen: "from-sky-600/18 via-sky-500/10 to-transparent",
		hoverRing: "group-hover:ring-sky-600/25",
		badge: "border-sky-200 bg-sky-50 text-sky-800",
	};
}

const ORBIT_CHIPS = [
	{ Icon: FaLeaf, label: "Green-first" },
	{ Icon: FaBolt, label: "Industrial" },
	{ Icon: FaClipboardCheck, label: "Docs" },
	{ Icon: FaShieldAlt, label: "Compliance" },
] as const;

export default function WhyVr() {
	return (
		<section className="relative overflow-x-clip bg-white">
			{/* UNIQUE BACKGROUND */}
			<div className="pointer-events-none absolute inset-0 -z-10">
				<div
					className="absolute inset-0 opacity-[0.08]"
					style={{
						backgroundImage:
							"repeating-linear-gradient(135deg, rgba(2,6,23,0.9) 0, rgba(2,6,23,0.9) 1px, transparent 1px, transparent 14px)",
					}}
				/>
				<div className="absolute -top-20 left-1/3 h-64 w-64 rounded-full bg-emerald-600/14 blur-3xl" />
				<div className="absolute -bottom-24 right-10 h-72 w-72 rounded-full bg-emerald-600/10 blur-3xl" />
				<div
					className="absolute inset-0 opacity-[0.14]"
					style={{
						backgroundImage:
							"linear-gradient(to right, rgba(2,6,23,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(2,6,23,0.06) 1px, transparent 1px)",
						backgroundSize: "60px 60px",
					}}
				/>
			</div>

			<div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-20">
				{/* Header */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-80px" }}
					className="mx-auto max-w-3xl text-center">
					<motion.div
						variants={fade}
						className="mx-auto w-fit rounded-2xl border border-slate-200 bg-white px-4 py-2 shadow-sm">
						<p className="text-xs font-semibold tracking-[0.22em] text-slate-700">
							WHY VR GREENTEK
						</p>
					</motion.div>

					<motion.h2
						variants={fade}
						custom={1}
						className={cn(
							"mt-5 font-extrabold tracking-tight text-slate-900",
							"text-[26px] leading-[1.12] sm:text-4xl",
							"wrap-break-words [text-balance]"
						)}>
						Reliability in the field —{" "}
						<span className="text-emerald-600">not just on paper</span>
					</motion.h2>

					<motion.p
						variants={fade}
						custom={2}
						className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600">
						We combine green energy engineering with industrial electrical
						execution so every system is safer, cleaner, and more dependable.
					</motion.p>
				</motion.div>

				{/* Split */}
				<div className="mt-10 grid gap-8 lg:mt-12 lg:grid-cols-12 lg:gap-10">
					{/* LEFT: Mobile radar card + Desktop orbit */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-80px" }}
						className="lg:col-span-4">
						{/* ✅ MOBILE RADAR (no absolute chips) */}
						<motion.div
							variants={fade}
							className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 lg:hidden">
							<div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-5 text-center">
								<p className="text-xs font-semibold tracking-widest text-emerald-800">
									CORE PROMISE
								</p>
								<p className="mt-2 text-lg font-extrabold text-slate-900">
									One partner. Complete responsibility.
								</p>
								<p className="mt-2 text-sm text-slate-700">
									Clean execution, documentation, and long-term support.
								</p>
							</div>

							<div className="mt-4 grid grid-cols-2 gap-3">
								{ORBIT_CHIPS.map((c, i) => (
									<motion.div
										key={c.label}
										variants={fade}
										custom={i + 1}
										className="rounded-2xl border border-slate-200 bg-white p-3">
										<div className="flex items-center gap-2">
											<span className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-50 ring-1 ring-emerald-200">
												<c.Icon className="h-4 w-4 text-emerald-600" />
											</span>
											<span className="text-sm font-semibold text-slate-900">
												{c.label}
											</span>
										</div>
									</motion.div>
								))}
							</div>
						</motion.div>

						{/* ✅ DESKTOP ORBIT */}
						<motion.div
							variants={fade}
							className="relative mx-auto hidden aspect-square w-full max-w-sm rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur lg:block">
							<div className="absolute left-1/2 top-1/2 w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-emerald-200 bg-emerald-50 p-5 text-center">
								<p className="text-xs font-semibold tracking-widest text-emerald-800">
									CORE PROMISE
								</p>
								<p className="mt-2 text-lg font-extrabold text-slate-900">
									One partner.
									<br />
									Complete responsibility.
								</p>
								<p className="mt-2 text-sm text-slate-700">
									Clean execution, documentation, and long-term support.
								</p>
							</div>

							<div className="absolute inset-6 rounded-full border border-dashed border-slate-300/70" />

							{[
								{ Icon: FaLeaf, label: "Green-first", x: "12%", y: "18%" },
								{ Icon: FaBolt, label: "Industrial", x: "78%", y: "22%" },
								{ Icon: FaClipboardCheck, label: "Docs", x: "84%", y: "74%" },
								{ Icon: FaShieldAlt, label: "Compliance", x: "16%", y: "78%" },
							].map((c, i) => (
								<motion.div
									key={c.label}
									variants={fade}
									custom={i + 1}
									className="absolute"
									style={{
										left: c.x,
										top: c.y,
										transform: "translate(-50%, -50%)",
									}}>
									<div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 shadow-sm">
										<span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 ring-1 ring-emerald-200">
											<c.Icon className="h-4 w-4 text-emerald-600" />
										</span>
										<span className="text-xs font-semibold text-slate-800">
											{c.label}
										</span>
									</div>
								</motion.div>
							))}

							<div className="pointer-events-none absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-600 shadow-[0_0_0_14px_rgba(22,163,74,0.18)]" />
						</motion.div>
					</motion.div>

					{/* RIGHT: Bento */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-80px" }}
						className="lg:col-span-8">
						{/* ✅ mobile: 1 col, md: 2 col, lg: 12 col */}
						<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-12">
							{REASONS.map((r, i) => {
								const Icon = r.icon;
								const t = toneStyles(r.tone);

								return (
									<motion.div
										key={r.title}
										variants={fade}
										custom={i}
										className={cn(
											"group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition sm:p-6",
											"hover:-translate-y-0.5 hover:shadow-md",
											// only apply asymmetric spans on lg, otherwise normal tiles
											r.span
										)}>
										<div
											className={cn(
												"pointer-events-none absolute inset-0 bg-linear-to-br opacity-0 transition group-hover:opacity-100",
												t.sheen
											)}
										/>
										<div
											className={cn(
												"pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-transparent transition",
												t.hoverRing
											)}
										/>

										<div className="relative flex items-start justify-between gap-4">
											<div className="min-w-0">
												<div className="flex items-center gap-2">
													<span
														className={cn(
															"inline-flex h-10 w-10 items-center justify-center rounded-2xl ring-1",
															t.iconWrap
														)}>
														<Icon className={cn("h-5 w-5", t.icon)} />
													</span>

													<span
														className={cn(
															"inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-semibold",
															t.badge
														)}>
														Advantage
													</span>
												</div>

												<h3 className="mt-3 text-base font-extrabold text-slate-900">
													{r.title}
												</h3>
												<p className="mt-2 text-sm leading-relaxed text-slate-600">
													{r.desc}
												</p>
											</div>

											<div className="hidden sm:flex">
												<span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-700 transition group-hover:bg-white">
													<FaArrowRight className="h-4 w-4" />
												</span>
											</div>
										</div>
									</motion.div>
								);
							})}
						</div>

						{/* Bottom strip */}
						<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, margin: "-80px" }}
							className="mt-6">
							<motion.div
								variants={fade}
								className="relative overflow-hidden rounded-3xl border border-slate-200 bg-emerald-600 px-5 py-5 sm:px-6">
								<div className="pointer-events-none absolute -left-20 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-emerald-600/25 blur-3xl" />
								<p className="relative text-sm font-semibold text-white/90">
									We build systems that work reliably in real-world conditions —
									not just on paper.
								</p>
								<p className="relative mt-1 text-xs text-white/75">
									Safety-first • Compliance-ready • Clean finishing • Long-term
									support
								</p>
							</motion.div>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
