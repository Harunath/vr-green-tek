"use client";

import React from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
	hidden: { opacity: 0, y: 16 },
	visible: (i: number = 0) => ({
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: "easeOut", delay: 0.08 * i },
	}),
};

type HeroProps = {
	title: string;
	highlight?: string;
	subtitle?: string;
	image: string;
	height?: string; // e.g. "80vh"
};

export default function Hero({
	title,
	highlight,
	subtitle,
	image,
	height = "80vh",
}: HeroProps) {
	return (
		<section
			className="relative w-full overflow-hidden"
			style={{ minHeight: height }}>
			{/* Background image */}
			<Image
				src={image}
				alt={title}
				fill
				priority
				sizes="100vw"
				className="object-cover"
			/>

			{/* Overlay */}
			<div className="absolute inset-0 bg-black/60" />

			{/* Content */}
			<div
				className="relative z-10 mx-auto flex max-w-7xl items-center px-6"
				style={{ minHeight: height }}>
				<motion.div
					initial="hidden"
					animate="visible"
					className="max-w-3xl text-white">
					<motion.h1
						variants={fadeUp}
						custom={0}
						className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
						{title}
						{highlight && (
							<>
								<br />
								<span className="text-emerald-400">{highlight}</span>
							</>
						)}
					</motion.h1>

					{subtitle && (
						<motion.p
							variants={fadeUp}
							custom={1}
							className="mt-5 max-w-xl text-base text-slate-200 sm:text-lg">
							{subtitle}
						</motion.p>
					)}
				</motion.div>
			</div>
		</section>
	);
}
