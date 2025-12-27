"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const fadeUp: Variants = {
	hidden: { opacity: 0, y: 18 },
	visible: (i: number = 0) => ({
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: "easeOut", delay: 0.08 * i },
	}),
};

export default function SolarHeroBanner() {
	return (
		<section className="relative min-h-[80vh] w-full overflow-hidden">
			{/* Background image */}
			<Image
				src="https://res.cloudinary.com/dwsm6i6z9/image/upload/v1766055298/copy_of_slate_full_res-4_2_kwe5nf.jpg"
				alt="Industrial solar installation"
				fill
				priority
				sizes="100vw"
				className="object-cover"
			/>

			{/* Dark overlay */}
			<div className="absolute inset-0 bg-black/60" />

			{/* Content */}
			<div className="relative z-10 mx-auto flex min-h-[80vh] max-w-7xl items-center px-6">
				<motion.div
					initial="hidden"
					animate="visible"
					className="max-w-3xl text-white">
					<motion.h1
						variants={fadeUp}
						custom={0}
						className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
						Solar Energy That Delivers —
						<br />
						<span className="text-emerald-400">
							Safely, Reliably, Profitably
						</span>
					</motion.h1>

					{/* Single intro line */}
					<motion.p
						variants={fadeUp}
						custom={1}
						className="mt-5 max-w-xl text-base text-slate-200 sm:text-lg">
						Right-sized solar systems engineered for safety, reliability, and
						long-term returns.
					</motion.p>
				</motion.div>
			</div>
		</section>
	);
}
