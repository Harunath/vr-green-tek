"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { FaStar } from "react-icons/fa";

type Testimonial = {
	name: string;
	role: string;
	quote: string;
	rating: number; // 1-5
	avatar: string;
};

const TESTIMONIALS: Testimonial[] = [
	{
		name: "Thomas Kevin",
		role: "Business Owner",
		quote:
			"The solar panels are top quality, and the installation was completed ahead of schedule. Their support team made the transition smooth and hassle-free.",
		rating: 5,
		avatar:
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1766567940/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo_hdhwvt.jpg",
	},
	{
		name: "Ayesha Rahman",
		role: "Facility Manager",
		quote:
			"Clean wiring, clear labeling, and proper testing documents—everything was handover-ready. Safety standards were followed without compromise.",
		rating: 5,
		avatar:
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1766567966/803310b69b26c1c0e2f6bf3f62bc54e28d-28-american-woman-104.rsquare.w400_vcuglz.jpg",
	},
	{
		name: "Arjun Patel",
		role: "Home Owner",
		quote:
			"From survey to commissioning, the process was transparent and professional. The energy monitoring system clearly shows our monthly savings.",
		rating: 5,
		avatar:
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1766567940/961px-Outdoors-man-portrait__28cropped_29_ho5s6y.jpg",
	},
	{
		name: "Ravi Kumar",
		role: "Project Lead",
		quote:
			"The LT electrical works were executed neatly and on time. Coordination across teams was strong, and post-handover support was reliable.",
		rating: 5,
		avatar:
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1766567940/premium_photo-1664536392779-049ba8fde933_hvx006.jpg",
	},
	{
		name: "Sunitha Reddy",
		role: "Industrial Operations Head",
		quote:
			"Industrial panels and cabling were installed with precision. Documentation and compliance checks were well prepared for audits.",
		rating: 5,
		avatar:
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1766567967/photo-1599842057874-37393e9342df_nk2w1r.jpg",
	},
	{
		name: "Meera Nair",
		role: "Commercial Property Manager",
		quote:
			"The electrical fit-out was executed cleanly with minimal disruption. Their planning and execution helped us meet tight deadlines.",
		rating: 5,
		avatar:
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1766567968/2731386-happy-smile-and-portrait-of-asian-woman-in-a-studio-with-a-natural-makeup-and-beauty-face.-self-care-cosmetics-and-headshot-of-a-young-female-model-with-a-cosmetology-routine-by-a-blue-background-fit_400_400_kylbvi.jpg",
	},
	{
		name: "Neha Verma",
		role: "Sustainability Officer",
		quote:
			"Their green energy solutions align well with our sustainability goals. Emission reduction and energy efficiency targets are clearly measurable.",
		rating: 5,
		avatar:
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1766567968/beautiful-young-latin-american-woman-portrait-woman-walking-in-evening-city-in-hat-with-curly-hair-in-warm-weather-smiling-and-looking-at-camera-close-up-photo_ozjifb.jpg",
	},
];

const cn = (...c: (string | false | null | undefined)[]) =>
	c.filter(Boolean).join(" ");

function Stars({ n }: { n: number }) {
	return (
		<div className="flex items-center justify-center gap-1">
			{Array.from({ length: 5 }).map((_, i) => (
				<FaStar
					key={i}
					className={cn("text-sm", i < n ? "text-green-600" : "text-black/15")}
				/>
			))}
		</div>
	);
}

/**
 * Desktop avatar placements (close to edges like screenshot)
 * On mobile we hide these and show a compact "avatar strip" instead.
 */
const POSITIONS = [
	"left-[2.5%] top-[18%]",
	"right-[2.5%] top-[18%]",
	"left-[14%] top-[48%]",
	"right-[14%] top-[48%]",
	"left-[2.5%] bottom-[18%]",
	"right-[2.5%] bottom-[18%]",
] as const;

function FloatingAvatar({
	src,
	name,
	active,
	className,
	delay = 0,
	onClick,
}: {
	src: string;
	name: string;
	active: boolean;
	className: string;
	delay?: number;
	onClick: () => void;
}) {
	return (
		<motion.button
			type="button"
			onClick={onClick}
			aria-label={`Show testimonial by ${name}`}
			className={cn(
				"absolute z-10 hidden md:block focus:outline-none",
				className
			)}
			initial={false}
			animate={active ? { scale: 1.07 } : { scale: 1 }}
			transition={{ duration: 0.25, ease: "easeOut" }}>
			<motion.div
				animate={{ y: [0, -6, 0] }}
				transition={{
					duration: 3.4,
					repeat: Infinity,
					ease: "easeInOut",
					delay,
				}}
				className={cn(
					"relative grid h-16 w-16 place-items-center rounded-full bg-white shadow-sm transition",
					active
						? "ring-2 ring-green-600 ring-offset-4 ring-offset-white"
						: "ring-1 ring-black/10 hover:ring-2 hover:ring-green-600/30 hover:ring-offset-4 hover:ring-offset-white"
				)}>
				<Image
					src={src}
					alt={name}
					width={64}
					height={64}
					className="h-16 w-16 rounded-full object-cover"
				/>
				{active ? (
					<span className="pointer-events-none absolute -inset-4 rounded-full bg-green-600/10 blur-md" />
				) : null}
			</motion.div>
		</motion.button>
	);
}

const slideVariants = {
	enter: (dir: number) => ({ x: dir > 0 ? 46 : -46, opacity: 0 }),
	center: { x: 0, opacity: 1 },
	exit: (dir: number) => ({ x: dir > 0 ? -46 : 46, opacity: 0 }),
};

export default function Testimonials() {
	const [active, setActive] = useState(0);
	const [dir, setDir] = useState<1 | -1>(1);
	const [paused, setPaused] = useState(false);
	const timerRef = useRef<number | null>(null);

	const total = TESTIMONIALS.length;
	const current = TESTIMONIALS[active];

	// Keep "ring" fixed at 6 like screenshot (even if testimonials > 6)
	const ring = useMemo(() => {
		const base = TESTIMONIALS;
		return Array.from({ length: 6 }).map((_, i) => base[i % base.length]);
	}, []);

	const go = (next: number) => {
		const n = ((next % total) + total) % total;
		setDir(n > active ? 1 : -1);
		setActive(n);
	};

	const next = () => go(active + 1);
	const prev = () => go(active - 1);

	// autoplay
	useEffect(() => {
		if (paused) return;

		timerRef.current = window.setInterval(() => {
			setDir(1);
			setActive((p) => (p + 1) % total);
		}, 2000);

		return () => {
			if (timerRef.current) window.clearInterval(timerRef.current);
		};
	}, [paused, total]);

	// swipe
	const onDragEnd = (
		_: MouseEvent | TouchEvent | PointerEvent,
		info: PanInfo
	) => {
		const offset = info.offset.x;
		const velocity = info.velocity.x;
		if (offset < -60 || velocity < -450) next();
		if (offset > 60 || velocity > 450) prev();
	};

	return (
		<section
			className="relative overflow-hidden bg-white py-14 sm:py-20"
			onMouseEnter={() => setPaused(true)}
			onMouseLeave={() => setPaused(false)}>
			{/* soft accents (unique but subtle) */}
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-green-600/10 blur-3xl" />
				<div className="absolute -bottom-44 -left-40 h-130 w-130 rounded-full bg-green-600/8 blur-3xl" />
			</div>

			<div className="relative mx-auto max-w-7xl px-4 sm:px-6">
				{/* Title */}
				<div className="text-center">
					<p className="text-xs font-semibold tracking-widest text-black/45 uppercase">
						Testimonials
					</p>
					<h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0B1220] sm:text-5xl">
						Customer <span className="text-green-600">Feedbacks</span>
					</h2>
				</div>

				{/* Stage */}
				<div className="relative mt-10">
					<div className="relative mx-auto max-w-5xl">
						{/* main "canvas" (responsive heights) */}
						<div className="relative min-h-130 md:min-h-130 lg:min-h-150">
							{/* BIG QUOTES at top center */}
							<div className="pointer-events-none absolute left-1/2 top-8 -translate-x-1/2 text-black/10">
								<svg
									width="120"
									height="80"
									viewBox="0 0 120 80"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className="opacity-60">
									<path
										d="M50 10C35 15 25 30 25 50C25 65 35 75 50 75C64 75 75 65 75 52C75 40 67 33 55 33C52 33 49 34 47 35C49 26 56 18 66 14L50 10Z"
										stroke="currentColor"
										strokeWidth="3"
										strokeLinejoin="round"
									/>
									<path
										d="M95 10C80 15 70 30 70 50C70 65 80 75 95 75C109 75 120 65 120 52C120 40 112 33 100 33C97 33 94 34 92 35C94 26 101 18 111 14L95 10Z"
										stroke="currentColor"
										strokeWidth="3"
										strokeLinejoin="round"
									/>
								</svg>
							</div>

							{/* Desktop edge avatars (like screenshot) */}
							{ring.map((t, i) => {
								const isActive =
									t.name === current.name && t.role === current.role;
								return (
									<FloatingAvatar
										key={`${t.name}-${i}`}
										src={t.avatar}
										name={t.name}
										active={isActive}
										className={POSITIONS[i]}
										delay={i * 0.18}
										onClick={() => go(i % total)}
									/>
								);
							})}

							{/* Mobile avatar strip (unique + responsive) */}
							<div className="md:hidden">
								<div className="mx-auto mt-2 flex max-w-md items-center justify-center gap-2 overflow-x-auto px-2 pb-2">
									{TESTIMONIALS.map((t, i) => {
										const on = i === active;
										return (
											<button
												key={t.name}
												type="button"
												onClick={() => go(i)}
												className={cn(
													"relative shrink-0 rounded-full",
													on
														? "ring-2 ring-green-600/40 ring-offset-2"
														: "ring-1 ring-black/10"
												)}
												aria-label={`Select testimonial ${i + 1}`}>
												<Image
													src={t.avatar}
													alt={t.name}
													width={44}
													height={44}
													className="h-11 w-11 rounded-full object-cover"
												/>
											</button>
										);
									})}
								</div>
							</div>

							{/* Center quote */}
							<div className="absolute left-1/2 top-[42%] w-full -translate-x-1/2 -translate-y-1/2 px-4">
								<div className="mx-auto max-w-3xl">
									<AnimatePresence custom={dir} mode="wait">
										<motion.div
											key={active}
											custom={dir}
											variants={slideVariants}
											initial="enter"
											animate="center"
											exit="exit"
											transition={{ duration: 0.35, ease: "easeOut" }}
											drag="x"
											dragConstraints={{ left: 0, right: 0 }}
											dragElastic={0.22}
											onDragStart={() => setPaused(true)}
											onDragEnd={onDragEnd}
											className="cursor-grab active:cursor-grabbing text-center">
											<p className="text-base leading-relaxed text-black/45 sm:text-xl">
												{current.quote}
											</p>
										</motion.div>
									</AnimatePresence>

									{/* subtle swipe hint (mobile only) */}
									<p className="mt-4 text-center text-[11px] font-semibold text-black/35 md:hidden">
										Swipe left/right to change
									</p>
								</div>
							</div>

							{/* Bottom center "card" (a bit more unique but still like screenshot) */}
							<div className="absolute left-1/2 bottom-10 -translate-x-1/2 text-center">
								<div className="relative mx-auto w-70 sm:w-[320px]">
									{/* tiny unique accent line */}
									<div className="pointer-events-none absolute -top-3 left-1/2 h-px w-32 -translate-x-1/2 bg-linear-to-r from-transparent via-green-600/30 to-transparent" />

									<motion.div
										initial={{ rotate: 0, y: 20 }}
										animate={{ rotateY: 360, y: 0 }}
										transition={{ duration: 0.6, ease: "easeOut" }}
										className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-white ring-2 ring-green-600/25 ring-offset-4 ring-offset-white shadow-sm">
										<Image
											src={current.avatar}
											alt={current.name}
											width={64}
											height={64}
											className="h-16 w-16 rounded-full object-cover"
										/>
									</motion.div>

									<p className="mt-3 text-lg font-extrabold text-[#0B1220]">
										{current.name}
									</p>
									<p className="text-sm text-black/45">{current.role}</p>

									<div className="mt-3 ">
										<Stars n={current.rating} />
									</div>

									{/* Dots (active = green ring) */}
									<div className="mt-6 flex items-center justify-center gap-2">
										{TESTIMONIALS.map((_, i) => {
											const on = i === active;
											return (
												<button
													key={i}
													type="button"
													onClick={() => go(i)}
													className="relative h-2.5 w-2.5 rounded-full"
													aria-label={`Go to testimonial ${i + 1}`}>
													<span
														className={cn(
															"absolute inset-0 rounded-full transition",
															on
																? "bg-green-600"
																: "bg-black/20 hover:bg-black/35"
														)}
													/>
													{on ? (
														<span className="absolute -inset-2 rounded-full border border-green-600/35" />
													) : null}
												</button>
											);
										})}
									</div>
								</div>
							</div>
						</div>

						<div className="mt-14 h-px bg-linear-to-r from-transparent via-green-600/25 to-transparent" />
					</div>
				</div>
			</div>
		</section>
	);
}
