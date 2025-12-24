"use client";

import React from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import {
	FaLeaf,
	FaRupeeSign,
	FaGlobeAsia,
	FaTractor,
	FaBolt,
	FaArrowRight,
	FaCheckCircle,
	FaSolarPanel,
	FaShieldAlt,
	FaChartLine,
} from "react-icons/fa";

const cn = (...c: (string | false | null | undefined)[]) =>
	c.filter(Boolean).join(" ");

// ✅ TS-safe variants
const wrap: Variants = {
	hidden: { opacity: 0, y: 14 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: "easeOut" },
	},
};

const item: Variants = {
	hidden: { opacity: 0, y: 10 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.45, ease: "easeOut" },
	},
};

type Pill = {
	title: string;
	desc: string;
	icon: React.ElementType;
	image: string;
};

const PILLARS: Pill[] = [
	{
		title: "Reduce operating costs",
		desc: "Right-sized solar + hybrid systems designed for real ROI.",
		icon: FaRupeeSign,
		image:
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1766055297/GettyImages-2174080781-508c0aae85a94ae6a7c4f9c303eae4f1_j1tmkp.jpg",
	},
	{
		title: "Lower carbon footprint",
		desc: "Cleaner energy that protects tomorrow—without compromise.",
		icon: FaGlobeAsia,
		image:
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1766055297/GettyImages-2174080781-508c0aae85a94ae6a7c4f9c303eae4f1_j1tmkp.jpg",
	},
	{
		title: "Power rural & agri growth",
		desc: "Reliable energy for pumps, cold storage, and rural operations.",
		icon: FaTractor,
		image:
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1766055297/GettyImages-2174080781-508c0aae85a94ae6a7c4f9c303eae4f1_j1tmkp.jpg",
	},
	{
		title: "Future-ready infrastructure",
		desc: "Monitoring-ready setups built to scale with your needs.",
		icon: FaBolt,
		image:
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1766055297/GettyImages-2174080781-508c0aae85a94ae6a7c4f9c303eae4f1_j1tmkp.jpg",
	},
];

function PillCard({ p }: { p: Pill }) {
	const Icon = p.icon;

	return (
		<motion.article
			variants={item}
			whileHover={{ y: -6 }}
			transition={{ duration: 0.2 }}
			className={cn(
				"group relative overflow-hidden rounded-[26px] border border-black/10 bg-white shadow-sm",
				"hover:border-green-600/30 hover:shadow-md"
			)}>
			{/* media */}
			<div className="relative h-48 w-full overflow-hidden">
				<Image
					src={p.image}
					alt={p.title}
					fill
					className="object-cover transition duration-500 group-hover:scale-[1.04]"
					sizes="(max-width: 768px) 100vw, 50vw"
				/>
				<div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/10 to-transparent opacity-90" />

				{/* corner tag */}
				<div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
					<span className="h-2 w-2 rounded-full bg-green-500" />
					Purpose
				</div>

				{/* icon badge */}
				<div className="absolute bottom-4 left-4 grid h-12 w-12 place-items-center rounded-2xl bg-white/15 backdrop-blur">
					<Icon className="text-xl text-white" />
				</div>
			</div>

			{/* content */}
			<div className="relative p-5">
				{/* hover glow */}
				<div className="pointer-events-none absolute -right-20 -top-16 h-48 w-48 rounded-full bg-green-600/12 blur-3xl opacity-0 transition group-hover:opacity-100" />

				<div className="flex items-start gap-3">
					<div className="min-w-0">
						<p className="text-base font-extrabold tracking-tight text-[#0B1220]">
							{p.title}
						</p>
						<p className="mt-1 text-sm leading-relaxed text-black/60">
							{p.desc}
						</p>
					</div>

					<FaCheckCircle className="ml-auto mt-1 text-green-600/70 opacity-0 transition group-hover:opacity-100" />
				</div>

				<div className="mt-5 flex items-center justify-between">
					<p className="text-xs font-semibold text-black/45">Clean execution</p>

					<div className="inline-flex items-center gap-2 text-sm font-semibold text-green-600">
						<span className="opacity-0 transition group-hover:opacity-100">
							Explore
						</span>
						<span className="grid h-9 w-9 place-items-center rounded-full border border-green-600/25 bg-green-600/10 transition group-hover:bg-green-600 group-hover:text-white">
							<FaArrowRight />
						</span>
					</div>
				</div>

				<div className="pointer-events-none absolute inset-x-0 bottom-0 h-0.75 bg-linear-to-r from-transparent via-green-600/35 to-transparent opacity-0 transition group-hover:opacity-100" />
			</div>
		</motion.article>
	);
}

export default function GreenEnergy() {
	return (
		<section className="relative overflow-hidden bg-white py-16 sm:py-20">
			{/* background */}
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute -top-32 left-1/2 h-130 w-130 -translate-x-1/2 rounded-full bg-green-600/10 blur-3xl" />
				<div className="absolute -bottom-40 -left-40 h-130 w-130 rounded-full bg-green-600/10 blur-3xl" />
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.08),transparent_55%)]" />
				{/* subtle grid */}
				<div className="absolute inset-0 opacity-[0.06] [linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [size:56px_56px]" />
			</div>

			<div className="relative mx-auto max-w-7xl px-6">
				<motion.div
					variants={wrap}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, amount: 0.25 }}
					transition={{ staggerChildren: 0.08 }} // ✅ correct place for stagger
					className="grid items-start gap-10 lg:grid-cols-12">
					{/* Left narrative */}
					<div className="lg:col-span-5">
						<motion.div
							variants={item}
							className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-4 py-2 text-xs font-semibold tracking-widest text-black/55 shadow-sm backdrop-blur">
							<span className="h-2 w-2 rounded-full bg-green-600" />
							<span className="uppercase">From Power to Purpose</span>
						</motion.div>

						<motion.h2
							variants={item}
							className="mt-4 text-4xl font-extrabold tracking-tight text-[#0B1220] sm:text-5xl">
							Energy that{" "}
							<span className="text-green-600">builds the future</span>
						</motion.h2>

						<motion.p
							variants={item}
							className="mt-4 max-w-xl text-sm leading-relaxed text-black/60 sm:text-base">
							This isn’t just solar. It’s a responsibility—cut costs today,
							protect the planet tomorrow, and power growth where it matters
							most.
						</motion.p>

						{/* story card */}
						<motion.div
							variants={item}
							className="mt-8 relative overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
							<div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-green-600/12 blur-3xl" />

							<div className="p-6">
								<div className="flex items-start gap-4">
									<div className="grid h-12 w-12 place-items-center rounded-2xl bg-green-600/10">
										<FaLeaf className="text-xl text-green-600" />
									</div>

									<div className="min-w-0">
										<p className="text-base font-extrabold text-[#0B1220]">
											Built with responsibility
										</p>
										<p className="mt-1 text-sm leading-relaxed text-black/60">
											Every installation is designed for safety, savings, and
											long-term performance—so your energy choices leave a
											better tomorrow.
										</p>
									</div>
								</div>

								<div className="mt-5 grid gap-3 sm:grid-cols-3">
									<div className="rounded-2xl border border-black/10 bg-white p-4">
										<div className="flex items-center gap-2 text-xs font-semibold text-black/55">
											<FaSolarPanel className="text-green-600" />
											Solar + Hybrid
										</div>
										<p className="mt-2 text-sm font-extrabold text-[#0B1220]">
											Right-sized
										</p>
									</div>

									<div className="rounded-2xl border border-black/10 bg-white p-4">
										<div className="flex items-center gap-2 text-xs font-semibold text-black/55">
											<FaChartLine className="text-green-600" />
											ROI Focus
										</div>
										<p className="mt-2 text-sm font-extrabold text-[#0B1220]">
											Real savings
										</p>
									</div>

									<div className="rounded-2xl border border-black/10 bg-white p-4">
										<div className="flex items-center gap-2 text-xs font-semibold text-black/55">
											<FaShieldAlt className="text-green-600" />
											Standards
										</div>
										<p className="mt-2 text-sm font-extrabold text-[#0B1220]">
											Compliance
										</p>
									</div>
								</div>

								<div className="mt-6 flex flex-wrap items-center gap-2 text-xs text-black/55">
									<span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1">
										<span className="h-2 w-2 rounded-full bg-green-600" />
										Clean execution
									</span>
									<span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1">
										<span className="h-2 w-2 rounded-full bg-green-600" />
										Monitoring-ready
									</span>
									<span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1">
										<span className="h-2 w-2 rounded-full bg-green-600" />
										Long-term support
									</span>
								</div>
							</div>
						</motion.div>

						<motion.div
							variants={item}
							className="mt-8 flex flex-wrap items-center gap-4">
							<motion.a
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
								href="/green-energy"
								className="group inline-flex items-center gap-4 rounded-full bg-green-600 px-6 py-3 text-sm font-bold text-white shadow-sm">
								Explore Green Energy
								<span className="grid h-10 w-10 place-items-center rounded-full bg-black/20 transition group-hover:bg-black/30">
									<FaArrowRight />
								</span>
							</motion.a>

							<p className="text-xs text-black/55">
								Short. Impactful. Future-focused.
							</p>
						</motion.div>
					</div>

					{/* Right pillars */}
					<div className="lg:col-span-7">
						<motion.div variants={item} className="grid gap-5 sm:grid-cols-2">
							{PILLARS.map((p) => (
								<PillCard key={p.title} p={p} />
							))}
						</motion.div>

						<motion.div
							variants={item}
							className="mt-8 rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
							<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
								<div>
									<p className="text-sm font-extrabold text-[#0B1220]">
										A future you can be proud of.
									</p>
									<p className="mt-1 text-sm text-black/60">
										Build reliable energy today—leave a cleaner tomorrow.
									</p>
								</div>

								<div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold text-black/55">
									<span className="h-2 w-2 rounded-full bg-green-600" />
									Safety-first • Compliance-ready
								</div>
							</div>
						</motion.div>
					</div>
				</motion.div>

				<div className="mt-14 h-px bg-linear-to-r from-transparent via-green-600/25 to-transparent" />
			</div>
		</section>
	);
}
