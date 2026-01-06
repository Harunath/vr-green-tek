"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function ContactHero() {
	return (
		<section className="relative overflow-hidden">
			{/* Background Image */}
			<div className="absolute inset-0">
				<Image
					src="https://res.cloudinary.com/dwsm6i6z9/image/upload/v1767694568/ramagundam-solar-power-plant-1024x585_p1puzh.jpg"
					alt="Contact VR GreenTek Energy"
					fill
					priority
					className="object-cover"
					sizes="100vw"
				/>

				{/* Dark overlay (clean, premium) */}
				<div className="absolute inset-0 bg-black/65" />
			</div>

			{/* Content */}
			<div className="relative mx-auto flex min-h-[60vh] max-w-7xl items-center justify-center px-6 py-24 text-center">
				<div className="max-w-3xl">
					{/* Kicker */}
					<span className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-extrabold tracking-wide text-white backdrop-blur">
						Contact Us
					</span>

					{/* Title */}
					<h1 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
						Let’s Power Your Project{" "}
						<span className="text-green-600">The Right Way</span>{" "}
					</h1>

					{/* Short description */}
					<p className="mx-auto mt-4 max-w-xl text-base font-semibold text-white/80 sm:text-lg">
						Solar • Electrical • Energy Efficiency
					</p>

					{/* CTA */}
					<div className="mt-10 flex flex-wrap items-center justify-center gap-4">
						<Link
							href="#contact-form"
							className="inline-flex items-center justify-center rounded-full bg-green-600 px-8 py-3 text-sm font-extrabold text-white shadow-lg hover:bg-green-700 transition">
							Get in Touch →
						</Link>

						<Link
							href="/projects"
							className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-3 text-sm font-extrabold text-white backdrop-blur hover:bg-white/15 transition">
							View Projects
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
