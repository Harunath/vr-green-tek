"use client";

import React from "react";
import Link from "next/link";
import {
	FaPhoneAlt,
	FaEnvelope,
	FaMapMarkerAlt,
	FaCheckCircle,
	FaArrowRight,
} from "react-icons/fa";

function cx(...a: Array<string | false | undefined>) {
	return a.filter(Boolean).join(" ");
}

function Card({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<div
			className={cx(
				"rounded-3xl border border-black/10 bg-white/80 p-6 shadow-[0_20px_60px_-40px_rgba(16,185,129,0.35)] backdrop-blur",
				className
			)}>
			{children}
		</div>
	);
}

function Pill({ children }: { children: React.ReactNode }) {
	return (
		<span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-extrabold tracking-wide text-emerald-800">
			{children}
		</span>
	);
}

export default function ContactSection() {
	return (
		<section className="relative overflow-hidden bg-linear-to-br from-emerald-50 via-white to-emerald-100">
			{/* subtle pattern */}
			<div className="pointer-events-none absolute inset-0 opacity-[0.18] [bg-radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.12)_1px,transparent_1px)] [bg-size:20px_20px]" />

			<div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20">
				{/* Header */}
				<div className="flex flex-col gap-4">
					<div className="flex flex-wrap items-center gap-3">
						<Pill>Get in Touch</Pill>
						<span className="h-px w-12 bg-emerald-300/60" />
						<p className="text-xs font-semibold text-black/60">
							Safe • Compliant • Future-ready delivery
						</p>
					</div>

					<h2 className="text-2xl font-extrabold tracking-tight text-[#0B1220] sm:text-4xl">
						Let’s Power Your Project —{" "}
						<span className="text-emerald-600">The Right Way</span>
					</h2>
				</div>

				<div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
					{/* Left */}
					<div className="space-y-5">
						<Card>
							<div className="flex items-start gap-4">
								<span className="grid h-11 w-11 place-items-center rounded-2xl bg-emerald-100 ring-1 ring-emerald-200">
									<FaPhoneAlt className="h-5 w-5 text-emerald-600" />
								</span>
								<div>
									<h3 className="text-sm font-extrabold text-[#0B1220]">
										Call Us
									</h3>
									<p className="mt-1 text-sm font-semibold text-black/60">
										Speak directly with our technical team.
									</p>
								</div>
							</div>
						</Card>

						<Card>
							<div className="flex items-start gap-4">
								<span className="grid h-11 w-11 place-items-center rounded-2xl bg-sky-100 ring-1 ring-sky-200">
									<FaEnvelope className="h-5 w-5 text-sky-600" />
								</span>
								<div>
									<h3 className="text-sm font-extrabold text-[#0B1220]">
										Email Us
									</h3>
									<p className="mt-1 text-sm font-semibold text-black/60">
										contact@vrgreentek.com
									</p>
								</div>
							</div>
						</Card>

						<Card>
							<div className="flex items-start gap-4">
								<span className="grid h-11 w-11 place-items-center rounded-2xl bg-gray-100 ring-1 ring-gray-200">
									<FaMapMarkerAlt className="h-5 w-5 text-gray-600" />
								</span>
								<div>
									<h3 className="text-sm font-extrabold text-[#0B1220]">
										Office Location
									</h3>
									<p className="mt-1 text-sm font-semibold text-black/60">
										Andhra Pradesh & Telangana
									</p>

									<Link
										href="#contact-form"
										className="mt-4 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2 text-sm font-extrabold text-white hover:bg-emerald-700 transition">
										Request a Site Visit <FaArrowRight className="h-4 w-4" />
									</Link>
								</div>
							</div>
						</Card>
					</div>

					{/* Right */}
					<Card className="p-7">
						<h3 className="mb-4 text-sm font-extrabold tracking-wide text-[#0B1220]">
							What Can We Help You With?
						</h3>

						<ul className="grid gap-3">
							{[
								"Rooftop & Ground-Mounted Solar EPC",
								"Industrial & Commercial Electrical Works",
								"HT / LT Panel Installation & Maintenance",
								"Energy Audits & Load Analysis",
								"System Upgrades & Safety Compliance",
								"Monitoring, O&M & AMC Support",
							].map((item) => (
								<li
									key={item}
									className="flex items-start gap-3 rounded-2xl border border-emerald-200/60 bg-emerald-50 px-4 py-3">
									<FaCheckCircle className="mt-1 text-emerald-600" />
									<span className="text-sm font-semibold text-emerald-900">
										{item}
									</span>
								</li>
							))}
						</ul>
					</Card>
				</div>
			</div>
		</section>
	);
}
