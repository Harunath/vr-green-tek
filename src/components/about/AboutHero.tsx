"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutHero() {
	return (
		<section className="relative h-[80vh] min-h-105 w-full overflow-hidden">
			{/* Background Image */}
			<Image
				src="https://res.cloudinary.com/dwsm6i6z9/image/upload/v1766056463/renewable_energy_home_image_xjijfx.jpg"
				alt="Green energy infrastructure"
				fill
				priority
				className="object-cover"
			/>

			{/* Overlay */}
			<div className="absolute inset-0 bg-black/60" />

			{/* Content */}
			<div className="relative z-10 flex h-full items-center">
				<div className="mx-auto max-w-7xl px-6">
					<motion.div
						initial={{ opacity: 0, y: 24 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						className="max-w-3xl">
						<p className="mb-3 text-sm font-semibold tracking-widest text-green-600 uppercase">
							ABOUT US
						</p>

						<h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
							Green Energy, Engineered to Perform
						</h1>

						<p className="mt-4 text-base text-white/85 sm:text-lg">
							We build solar and hybrid energy systems focused on safety,
							savings, and long-term reliability.
						</p>

						<p className="mt-2 text-base text-white/70">
							One partner. End-to-end execution. Compliance-first delivery.
						</p>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
