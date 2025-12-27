"use client";

import React from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { FaArrowRight, FaLeaf, FaShieldAlt, FaBolt } from "react-icons/fa";

/** ✅ FIX: Variants typed properly (no TS errors) */
const fade = {
	hidden: { opacity: 0, y: 14 },
	visible: (i: number = 0) => ({
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: "easeOut", delay: 0.07 * i },
	}),
} satisfies Variants;

export default function OurAim() {
	return (
		<section className="relative overflow-hidden bg-white">
			{/* Subtle background */}
			<div className="pointer-events-none absolute inset-0 -z-10">
				<div className="absolute -top-24 left-12 h-72 w-72 rounded-full bg-green-600/12 blur-3xl" />
				<div className="absolute -bottom-28 right-0 h-80 w-80 rounded-full bg-green-600/8 blur-3xl" />
				<div
					className="absolute inset-0 opacity-[0.12]"
					style={{
						backgroundImage:
							"radial-gradient(rgba(2,6,23,0.12) 1px, transparent 1px)",
						backgroundSize: "24px 24px",
					}}
				/>
			</div>

			<div className="mx-auto max-w-7xl px-6 py-14 sm:py-16">
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-80px" }}
					className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
					{/* Accent gradient band */}
					<div className="pointer-events-none absolute inset-0">
						<div className="absolute inset-0 bg-linear-to-br from-green-50 via-white to-white" />
						<div className="absolute -left-20 top-10 h-56 w-56 rounded-full bg-green-600/10 blur-3xl" />
						<div className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-green-600/10 blur-3xl" />
					</div>

					{/* Top signal line */}
					<div className="pointer-events-none absolute left-0 top-0 h-1 w-full bg-linear-to-r from-green-600 via-green-400 to-transparent" />

					<div className="relative grid gap-8 p-7 sm:p-10 lg:grid-cols-12 lg:items-center">
						{/* Left copy */}
						<div className="lg:col-span-7">
							<motion.p
								variants={fade}
								custom={0}
								className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-green-800">
								OUR AIM
							</motion.p>

							<motion.h3
								variants={fade}
								custom={1}
								className="mt-4 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
								Create long-term value with{" "}
								<span className="text-green-600">
									dependable, sustainable, future-ready
								</span>{" "}
								energy solutions.
							</motion.h3>

							<motion.p
								variants={fade}
								custom={2}
								className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
								We engineer systems for real-world reliability — combining green
								energy execution with strong electrical fundamentals, clean
								finishing, and compliance-ready handover.
							</motion.p>

							{/* Quote */}
							<motion.div
								variants={fade}
								custom={3}
								className="mt-6 inline-flex max-w-2xl items-start gap-3 rounded-2xl border border-slate-200 bg-white/70 px-4 py-4">
								<span className="mt-0.5 h-2.5 w-2.5 rounded-full bg-green-600 shadow-[0_0_0_10px_rgba(22,163,74,0.14)]" />
								<p className="text-sm font-semibold text-slate-800">
									“Try one project with us — experience the{" "}
									<span className="text-green-700">VR Greentek</span>{" "}
									difference.”
								</p>
							</motion.div>
						</div>

						{/* Right: mini proof + CTA */}
						<div className="lg:col-span-5">
							<motion.div
								variants={fade}
								custom={2}
								className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
								<MiniPill icon={FaLeaf} label="Green-first" />
								<MiniPill icon={FaShieldAlt} label="Safety-first" />
								<MiniPill icon={FaBolt} label="Compliance-ready" />
							</motion.div>

							<motion.div
								variants={fade}
								custom={4}
								className="mt-6 flex flex-col gap-3 sm:flex-row lg:flex-col">
								<Link
									href="/contact?intent=site-visit"
									className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-green-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-green-500 hover:shadow-[0_18px_60px_-30px_rgba(22,163,74,0.55)]">
									Request a Site Visit
									<FaArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
								</Link>

								<Link
									href="/projects"
									className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50">
									View Projects
									<FaArrowRight className="h-4 w-4 text-green-600" />
								</Link>
							</motion.div>

							<motion.p
								variants={fade}
								custom={5}
								className="mt-4 text-xs leading-relaxed text-slate-500">
								Quick response • Clean execution • Documentation included
							</motion.p>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}

function MiniPill({
	icon: Icon,
	label,
}: {
	icon: React.ElementType;
	label: string;
}) {
	return (
		<div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
			<div className="pointer-events-none absolute -inset-1 rounded-2xl bg-green-600/0 blur-xl transition duration-300 group-hover:bg-green-600/16" />
			<div className="relative flex items-center gap-3">
				<span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-green-50 ring-1 ring-green-200">
					<Icon className="h-5 w-5 text-green-600" />
				</span>
				<p className="text-sm font-extrabold text-slate-900">{label}</p>
			</div>
		</div>
	);
}
