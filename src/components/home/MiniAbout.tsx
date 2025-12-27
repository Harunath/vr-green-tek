"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
	FaSolarPanel,
	FaBolt,
	FaLeaf,
	FaTools,
	FaShieldAlt,
	FaIndustry,
	FaPlug,
	FaArrowRight,
	FaCheckCircle,
	FaChartLine,
	FaClock,
	FaHardHat,
} from "react-icons/fa";

type Mode = "Green Energy" | "Electricals";

type Benefit = {
	label: string;
	desc: string;
	icon: React.ElementType;
};

type Stat = {
	value: string;
	title: string;
	desc: string;
	icon: React.ElementType;
};

type SectionData = {
	kicker: string;
	headline: string;
	subtitle: string;
	bullets: Benefit[];
	stats: Stat[];
	ctaLabel: string;
	image: string;
};

const DATA: Record<Mode, SectionData> = {
	"Green Energy": {
		kicker: "ABOUT GREEN ENERGY",
		headline: "Eco-friendly power systems built for savings and stability",
		subtitle:
			"From rooftop solar to hybrid setups, we deliver end-to-end execution with clean finishing, monitoring, and long-term reliability.",
		bullets: [
			{
				label: "Bill Savings That Last",
				desc: "Smart sizing + quality components for strong ROI.",
				icon: FaChartLine,
			},
			{
				label: "Expert Execution",
				desc: "Site survey → design → installation → commissioning.",
				icon: FaTools,
			},
			{
				label: "Always-On Support",
				desc: "Monitoring + quick service for uninterrupted output.",
				icon: FaClock,
			},
			{
				label: "Cleaner Future",
				desc: "Reduce carbon footprint while improving reliability.",
				icon: FaLeaf,
			},
		],
		stats: [
			{
				value: "500+",
				title: "Installations",
				desc: "Residential & commercial solar projects delivered.",
				icon: FaSolarPanel,
			},
			{
				value: "97%",
				title: "On-time Delivery",
				desc: "Planned schedules with safety-first site practices.",
				icon: FaShieldAlt,
			},
		],
		ctaLabel: "Explore Green Energy",
		image:
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1766055297/GettyImages-2174080781-508c0aae85a94ae6a7c4f9c303eae4f1_j1tmkp.jpg",
	},
	Electricals: {
		kicker: "ABOUT ELECTRICALS",
		headline: "Reliable electrical execution with compliance-first delivery",
		subtitle:
			"From wiring and panels to industrial LT/HT works, we deliver safe, scalable electrical solutions with documentation and testing.",
		bullets: [
			{
				label: "Safety & Standards",
				desc: "Compliance-ready work with proper testing & labeling.",
				icon: FaHardHat,
			},
			{
				label: "Industrial-Grade Panels",
				desc: "DBs, MCC panels, control wiring & load management.",
				icon: FaIndustry,
			},
			{
				label: "Smart Wiring & Controls",
				desc: "Efficient routing, clean finishing, easy maintenance.",
				icon: FaPlug,
			},
			{
				label: "Fast Response",
				desc: "Quick service for breakdowns and preventive maintenance.",
				icon: FaBolt,
			},
		],
		stats: [
			{
				value: "300+",
				title: "Sites Delivered",
				desc: "Commercial, industrial & institutional works completed.",
				icon: FaBolt,
			},
			{
				value: "99%",
				title: "Compliance Ready",
				desc: "Handover-ready documentation and audit support.",
				icon: FaShieldAlt,
			},
		],
		ctaLabel: "Explore Electricals",
		image:
			"https://res.cloudinary.com/dk0smdu0d/image/upload/v1756907857/bg-substation-maintenance_i2f8qr.jpg",
	},
};

const cn = (...classes: (string | false | null | undefined)[]) =>
	classes.filter(Boolean).join(" ");

function ModePill({
	active,
	label,
	onClick,
	icon: Icon,
}: {
	active: boolean;
	label: string;
	onClick: () => void;
	icon: React.ElementType;
}) {
	return (
		<button
			onClick={onClick}
			className={cn(
				"relative inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition",
				"focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600/40",
				active
					? "bg-green-600 text-white shadow-sm"
					: "bg-white text-black/70 hover:text-black border border-black/10"
			)}>
			<Icon
				className={cn("text-base", active ? "text-white" : "text-green-600")}
			/>
			{label}
		</button>
	);
}

function MiniKicker({ text }: { text: string }) {
	return (
		<div className="inline-flex items-center gap-3">
			<span className="h-px w-10 bg-black/15" />
			<span className="text-xs font-semibold tracking-widest text-black/55 uppercase">
				{text}
			</span>
		</div>
	);
}

export default function MiniAboutPro() {
	const [mode, setMode] = useState<Mode>("Green Energy");
	const content = useMemo(() => DATA[mode], [mode]);
	const displayHeadline =
		mode === "Green Energy"
			? content.headline.replace(/^Eco-friendly\s+/i, "")
			: content.headline
					.replace(/^Reliable\s+/i, "")
					.replace(/^Electrical\s+/i, "");
	return (
		<section className="relative overflow-hidden bg-white py-14 sm:py-18">
			{/* background */}
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute -top-28 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-green-600/12 blur-3xl" />
				<div className="absolute -bottom-28 -left-28 h-80 w-80 rounded-full bg-green-600/10 blur-3xl" />
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.08),transparent_55%)]" />
			</div>

			<div className="relative mx-auto max-w-7xl px-5 sm:px-6">
				{/* header row */}
				<div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
					<div className="flex w-fit items-center gap-2 rounded-full border border-black/10 bg-white/80 p-1 shadow-sm backdrop-blur">
						<ModePill
							active={mode === "Green Energy"}
							label="Green Energy"
							onClick={() => setMode("Green Energy")}
							icon={FaLeaf}
						/>
						<ModePill
							active={mode === "Electricals"}
							label="Electricals"
							onClick={() => setMode("Electricals")}
							icon={FaBolt}
						/>
					</div>

					<MiniKicker text={content.kicker} />
				</div>

				<div className="mt-8 grid items-center gap-10 lg:mt-10 lg:grid-cols-2 lg:gap-12">
					{/* LEFT */}
					<motion.div
						initial={{ opacity: 0, x: -18 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, amount: 0.35 }}
						transition={{ duration: 0.55, ease: "easeOut" }}
						className="relative">
						<div className="relative overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-sm">
							<div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-green-600/35 to-transparent" />

							<div className="relative p-5 sm:p-7">
								<div className="flex items-center gap-3">
									<div className="grid h-11 w-11 place-items-center rounded-2xl bg-green-600/10">
										{mode === "Green Energy" ? (
											<FaSolarPanel className="text-green-600" />
										) : (
											<FaBolt className="text-green-600" />
										)}
									</div>
									<div className="leading-tight">
										<p className="text-sm font-semibold text-[#0B1220]">
											{mode === "Green Energy"
												? "Solar • Wind • Storage"
												: "Wiring • Panels • Maintenance"}
										</p>
										<p className="mt-1 text-xs text-black/55">
											Quality execution. Clean handover. Long-term support.
										</p>
									</div>
								</div>

								<div className="relative mt-5 overflow-hidden rounded-2xl border border-black/10">
									<Image
										src={content.image}
										alt={mode}
										width={1600}
										height={1000}
										className="h-65 w-full object-cover sm:h-90 lg:h-95"
										priority={false}
									/>

									<div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/35 via-transparent to-transparent" />

									<motion.div
										initial={{ opacity: 0, y: 10 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true, amount: 0.35 }}
										transition={{
											delay: 0.08,
											duration: 0.45,
											ease: "easeOut",
										}}
										className="absolute bottom-4 left-4 right-4 grid grid-cols-2 gap-3">
										<div className="rounded-2xl border border-white/20 bg-white/90 px-3 py-3 backdrop-blur">
											<p className="text-[11px] font-semibold text-black/60">
												{mode === "Green Energy" ? "Monitoring" : "Testing"}
											</p>
											<p className="mt-1 text-sm font-extrabold text-[#0B1220]">
												{mode === "Green Energy" ? "Realtime" : "Certified"}
											</p>
										</div>

										<div className="rounded-2xl border border-white/20 bg-white/90 px-3 py-3 backdrop-blur">
											<p className="text-[11px] font-semibold text-black/60">
												{mode === "Green Energy"
													? "Savings Focus"
													: "Safety Focus"}
											</p>
											<p className="mt-1 text-sm font-extrabold text-green-600">
												{mode === "Green Energy" ? "High ROI" : "Compliance"}
											</p>
										</div>
									</motion.div>
								</div>

								<div className="mt-5 flex flex-wrap gap-2 text-xs text-black/55">
									<span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1">
										<span className="h-2 w-2 rounded-full bg-green-600" />
										Safety-first delivery
									</span>
									<span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1">
										<span className="h-2 w-2 rounded-full bg-green-600" />
										Transparent timelines
									</span>
									<span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1">
										<span className="h-2 w-2 rounded-full bg-green-600" />
										Neat finishing
									</span>
								</div>
							</div>
						</div>
					</motion.div>

					{/* RIGHT */}
					<div className="lg:pl-1">
						<AnimatePresence mode="wait">
							<motion.div
								key={mode}
								initial={{ opacity: 0, y: 14 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -10 }}
								transition={{ duration: 0.4, ease: "easeOut" }}>
								<h2 className="text-3xl font-extrabold tracking-tight text-[#0B1220] sm:text-5xl">
									<span className="text-green-600">
										{mode === "Green Energy" ? "Green" : "Electrical"}{" "}
									</span>
									{displayHeadline.trim()}
								</h2>

								<p className="mt-4 max-w-xl text-sm leading-relaxed text-black/60 sm:text-base">
									{content.subtitle}
								</p>

								<div className="mt-7 grid gap-3 sm:grid-cols-2">
									{content.bullets.map((b) => {
										const Icon = b.icon;
										return (
											<motion.div
												key={b.label}
												whileHover={{ y: -3 }}
												transition={{ duration: 0.2 }}
												className={cn(
													"group rounded-2xl border border-black/10 bg-white p-4 shadow-sm",
													"hover:border-green-600/25"
												)}>
												<div className="flex items-start gap-3">
													<div className="grid h-10 w-10 place-items-center rounded-xl bg-green-600/10">
														<Icon className="text-green-600" />
													</div>

													<div className="flex-1">
														<p className="font-semibold text-[#0B1220]">
															{b.label}
														</p>
														<p className="mt-1 text-xs leading-relaxed text-black/55">
															{b.desc}
														</p>
													</div>

													<FaCheckCircle className="mt-1 text-green-600/70 opacity-0 transition group-hover:opacity-100" />
												</div>
											</motion.div>
										);
									})}
								</div>

								<div className="mt-9 grid gap-4 sm:grid-cols-2">
									{content.stats.map((s) => {
										const Icon = s.icon;
										return (
											<div
												key={s.title}
												className="relative overflow-hidden rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
												<div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-green-600/10 blur-2xl" />
												<div className="flex items-start gap-4">
													<div className="grid h-14 w-14 place-items-center rounded-2xl bg-green-600/10">
														<Icon className="text-xl text-green-600" />
													</div>
													<div className="flex-1">
														<div className="text-3xl font-extrabold text-[#0B1220]">
															{s.value}
														</div>
														<div className="mt-1 font-semibold text-[#0B1220]">
															{s.title}
														</div>
														<p className="mt-2 text-sm leading-relaxed text-black/60">
															{s.desc}
														</p>
													</div>
												</div>
											</div>
										);
									})}
								</div>

								<div className="mt-9 flex flex-wrap items-center gap-4">
									<motion.a
										whileHover={{ scale: 1.02 }}
										whileTap={{ scale: 0.98 }}
										href={
											mode === "Green Energy" ? "/green-energy" : "/electricals"
										}
										className="group inline-flex items-center justify-between gap-4 rounded-full bg-green-600 px-6 py-3 text-sm font-bold text-white shadow-sm">
										<span>{content.ctaLabel}</span>
										<span className="grid h-10 w-10 place-items-center rounded-full bg-black/20 transition group-hover:bg-black/30">
											<FaArrowRight />
										</span>
									</motion.a>

									<p className="max-w-xs text-xs leading-relaxed text-black/55">
										<span className="font-semibold text-[#0B1220]">Pro:</span>{" "}
										Add your real numbers (kW installed, AMC clients, uptime)
										for stronger trust.
									</p>
								</div>

								<div className="mt-11 h-px bg-linear-to-r from-transparent via-green-600/25 to-transparent" />
							</motion.div>
						</AnimatePresence>
					</div>
				</div>
			</div>
		</section>
	);
}
