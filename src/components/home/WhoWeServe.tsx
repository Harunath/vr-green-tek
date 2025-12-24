"use client";

import React, { useId, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
	FaIndustry,
	FaBuilding,
	FaUniversity,
	FaTractor,
	FaArrowRight,
	FaCheckCircle,
} from "react-icons/fa";

type ServeCard = {
	title: string;
	desc: string;
	points: string[];
	icon: React.ElementType;
	tag: string;
	image: string;
	href?: string;
};

const SERVE: ServeCard[] = [
	{
		title: "Industries & Factories",
		desc: "LT/HT systems, MCC panels, load management, audits.",
		points: [
			"LT/HT systems",
			"MCC panels",
			"Load management",
			"Energy & safety audits",
		],
		icon: FaIndustry,
		tag: "Industrial",
		image:
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1766055298/copy_of_slate_full_res-4_2_kwe5nf.jpg",
		href: "/industries",
	},
	{
		title: "Commercial Buildings",
		desc: "Offices, retail, hospitals, hotels, AMC support.",
		points: [
			"Offices & retail",
			"Hospitals & clinics",
			"Hotels & apartments",
			"Maintenance & AMC",
		],
		icon: FaBuilding,
		tag: "Commercial",
		image:
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1766055298/copy_of_slate_full_res-4_2_kwe5nf.jpg",
		href: "/commercial",
	},
	{
		title: "Institutions",
		desc: "Schools, colleges, government facilities, compliance.",
		points: [
			"Schools & colleges",
			"Government facilities",
			"Testing & documentation",
			"Safety-first delivery",
		],
		icon: FaUniversity,
		tag: "Institutional",
		image:
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1766055298/copy_of_slate_full_res-4_2_kwe5nf.jpg",
		href: "/institutions",
	},
	{
		title: "Rural & Agri Projects",
		desc: "Electrification, solar pumps, hybrid systems.",
		points: [
			"Solar pumps",
			"Hybrid systems",
			"Rural electrification",
			"On-ground execution",
		],
		icon: FaTractor,
		tag: "Rural",
		image:
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1766055298/copy_of_slate_full_res-4_2_kwe5nf.jpg",
		href: "/rural",
	},
];

const cn = (...c: (string | false | null | undefined)[]) =>
	c.filter(Boolean).join(" ");

function ServeHoverCard({
	item,
	active,
	onEnter,
	onClick,
}: {
	item: ServeCard;
	active: boolean;
	onEnter: () => void;
	onClick: () => void;
}) {
	const Icon = item.icon;
	const reduced = useReducedMotion();

	return (
		<motion.article
			onMouseEnter={onEnter}
			onFocus={onEnter}
			onClick={onClick} // makes mobile tap highlight
			tabIndex={0}
			role="button"
			aria-pressed={active}
			initial={false}
			animate={reduced ? undefined : active ? { y: -6 } : { y: 0 }}
			transition={{ duration: 0.2 }}
			className={cn(
				"group relative h-full overflow-hidden rounded-[26px] border border-black/10 bg-white shadow-sm outline-none transition",
				"hover:border-green-600/30 hover:shadow-md focus-visible:ring-2 focus-visible:ring-green-600/30",
				"cursor-pointer"
			)}>
			{/* image layer (on hover/active) */}
			<div className="absolute inset-0">
				<Image
					src={item.image}
					alt={item.title}
					fill
					className={cn(
						"object-cover transition duration-500 will-change-transform",
						active ? "opacity-100 scale-[1.03]" : "opacity-0 scale-100"
					)}
					sizes="(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 25vw"
					priority={false}
				/>
				<div
					className={cn(
						"absolute inset-0 transition duration-500",
						active
							? "opacity-100 bg-linear-to-b from-black/60 via-black/40 to-black/30"
							: "opacity-0"
					)}
				/>
			</div>

			{/* top accent */}
			<div
				className={cn(
					"pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-green-600/45 to-transparent transition",
					active ? "opacity-100" : "opacity-0"
				)}
			/>

			{/* content */}
			<div className="relative flex h-full flex-col p-6">
				<div className="flex items-start justify-between gap-4">
					<div className="flex items-start gap-4">
						<div
							className={cn(
								"grid h-12 w-12 shrink-0 place-items-center rounded-2xl transition",
								active ? "bg-white/15" : "bg-green-600/10"
							)}>
							<Icon
								className={cn(
									"text-xl",
									active ? "text-white" : "text-green-600"
								)}
							/>
						</div>

						<div className="min-w-0">
							<p
								className={cn(
									"text-lg font-extrabold tracking-tight transition",
									active ? "text-white" : "text-[#0B1220]"
								)}>
								{item.title}
							</p>
							<p
								className={cn(
									"mt-2 text-sm transition",
									active ? "text-white/85" : "text-black/60"
								)}>
								{item.desc}
							</p>
						</div>
					</div>

					<span
						className={cn(
							"shrink-0 rounded-full px-3 py-1 text-[11px] font-semibold transition",
							active
								? "border border-white/20 bg-white/10 text-white"
								: "border border-black/10 bg-white text-black/55"
						)}>
						{item.tag}
					</span>
				</div>

				{/* points (more responsive) */}
				<div className="mt-5 grid gap-2">
					{item.points.map((p) => (
						<div
							key={p}
							className={cn(
								"flex items-center gap-2 text-sm transition",
								active ? "text-white/90" : "text-black/70"
							)}>
							<FaCheckCircle
								className={cn(active ? "text-white/80" : "text-green-600/80")}
							/>
							<span className="truncate">{p}</span>
						</div>
					))}
				</div>

				{/* footer pinned to bottom */}
				<div className="mt-auto pt-6">
					<div className="flex items-center justify-between">
						<p
							className={cn(
								"text-xs font-semibold transition",
								active ? "text-white/70" : "text-black/45"
							)}>
							Compliance-ready delivery
						</p>

						<div
							className={cn(
								"inline-flex items-center gap-2 text-sm font-semibold transition",
								active ? "text-white" : "text-green-600"
							)}>
							<span
								className={cn(
									"hidden sm:inline transition",
									active ? "opacity-100" : "opacity-0 group-hover:opacity-100"
								)}>
								View
							</span>
							<span
								className={cn(
									"grid h-9 w-9 place-items-center rounded-full transition",
									active
										? "border border-white/20 bg-white/10"
										: "border border-green-600/25 bg-green-600/10 group-hover:bg-green-600 group-hover:text-white"
								)}>
								<FaArrowRight />
							</span>
						</div>
					</div>
				</div>

				{/* bottom accent */}
				<div
					className={cn(
						"pointer-events-none absolute inset-x-0 bottom-0 h-0.75 bg-linear-to-r from-transparent via-green-600/40 to-transparent transition",
						active ? "opacity-100" : "opacity-0"
					)}
				/>
			</div>
		</motion.article>
	);
}

export default function WhoWeServe() {
	const [active, setActive] = useState(1);
	const titleId = useId();

	return (
		<section className="relative overflow-hidden bg-white py-16 sm:py-20">
			{/* background accents */}
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute -top-28 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-green-600/12 blur-3xl" />
				<div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-green-600/10 blur-3xl" />
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.06),transparent_55%)]" />
			</div>

			<div className="relative mx-auto max-w-7xl px-6">
				{/* header */}
				<div className="text-center">
					<div className="inline-flex items-center gap-3">
						<span className="h-px w-10 bg-green-600" />
						<p className="text-xs font-semibold tracking-widest text-black/55 uppercase">
							Who We Work With
						</p>
						<span className="h-px w-10 bg-green-600" />
					</div>

					<h2
						id={titleId}
						className="mt-4 text-3xl font-extrabold tracking-tight text-[#0B1220] sm:text-5xl">
						Who We <span className="text-green-600">Serve</span>
					</h2>

					<p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-black/60 sm:text-base">
						We work with teams that need safe execution, clean finishing, and
						compliance-ready delivery.
					</p>
				</div>

				{/* cards row: responsive */}
				<div className="mt-10">
					{/* Mobile: horizontal scroll (best UX) */}
					<div className="lg:hidden">
						<div className="-mx-6 overflow-x-auto px-6 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
							<div className="flex snap-x snap-mandatory gap-4">
								{SERVE.map((s, idx) => (
									<div key={s.title} className="snap-start w-[86%] sm:w-[70%]">
										<ServeHoverCard
											item={s}
											active={active === idx}
											onEnter={() => setActive(idx)}
											onClick={() => setActive(idx)}
										/>
									</div>
								))}
							</div>
						</div>

						<p className="mt-3 text-center text-xs text-black/45">
							Swipe to explore • Tap a card to highlight
						</p>
					</div>

					{/* Desktop/large: 4 in a row */}
					<div className="hidden lg:grid lg:grid-cols-4 lg:gap-6">
						{SERVE.map((s, idx) => (
							<ServeHoverCard
								key={s.title}
								item={s}
								active={active === idx}
								onEnter={() => setActive(idx)}
								onClick={() => setActive(idx)}
							/>
						))}
					</div>
				</div>

				{/* CTA */}
				<div className="mt-10 flex justify-center">
					<button className="group inline-flex items-center gap-3 rounded-full bg-green-600 px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#0B1220]/90">
						View more
						<span className="grid h-9 w-9 place-items-center rounded-full bg-white/10 transition group-hover:bg-white/15">
							<FaArrowRight />
						</span>
					</button>
				</div>

				<div className="mt-14 h-px bg-linear-to-r from-transparent via-green-600/25 to-transparent" />
			</div>
		</section>
	);
}
