"use client";

import { useRef, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Slide = {
	id: number;
	src: string;
	alt: string;
	tag: "Electricals" | "Green Energy";
	kicker?: string;
	title?: string;
	subtitle?: string;
};

const GREEN_SLIDES: Slide[] = [
	{
		id: 0,
		src: "https://res.cloudinary.com/dwsm6i6z9/image/upload/v1766056463/renewable_energy_home_image_xjijfx.jpg",
		alt: "Green Energy Systems",
		tag: "Green Energy",
		kicker: "WELCOME TO VR GREEN ENERGY",
		title: "Powering the Future",
		subtitle: "Solar, biogas and smart systems for sustainable growth.",
	},
	{
		id: 1,
		src: "https://res.cloudinary.com/dwsm6i6z9/image/upload/v1766055297/GettyImages-2174080781-508c0aae85a94ae6a7c4f9c303eae4f1_j1tmkp.jpg",
		alt: "Solar Panels",
		tag: "Green Energy",
		kicker: "CLEAN ENERGY SOLUTIONS",
		title: "Solar That Delivers",
		subtitle: "Rooftop & ground-mount systems built for performance.",
	},
	{
		id: 2,
		src: "https://res.cloudinary.com/dwsm6i6z9/image/upload/v1766055298/copy_of_slate_full_res-4_2_kwe5nf.jpg",
		alt: "Wind Energy",
		tag: "Green Energy",
		kicker: "RENEWABLE INFRASTRUCTURE",
		title: "Energy That Lasts",
		subtitle: "Future-ready systems designed for reliability.",
	},
];

const ELECTRICAL_SLIDES: Slide[] = [
	{
		id: 3,
		src: "https://res.cloudinary.com/dwsm6i6z9/image/upload/v1766056428/arihant-control-systems-hyderabad-8sssp9147g_imw38x.jpg",
		alt: "Electrical Solutions",
		tag: "Electricals",
		kicker: "ELECTRICAL WORKS & SERVICES",
		title: "Electricals Done Right",
		subtitle: "Trusted contracting for homes, industry & infrastructure.",
	},
	{
		id: 4,
		src: "https://res.cloudinary.com/dwsm6i6z9/image/upload/v1766056300/AF1QipPq1hRH1NdHG0_J6NHk-OFyEAX-e2brJLX2C4Nb_s1360-w1360-h1020-rw_vuibmv.webp",
		alt: "Panels & Wiring",
		tag: "Electricals",
		kicker: "CONTROL PANELS & WIRING",
		title: "Smart. Safe. Scalable.",
		subtitle: "Panels, wiring, upgrades and maintenance with standards.",
	},
	{
		id: 5,
		src: "https://res.cloudinary.com/dk0smdu0d/image/upload/v1756907857/bg-substation-maintenance_i2f8qr.jpg",
		alt: "Power Distribution",
		tag: "Electricals",
		kicker: "POWER DISTRIBUTION",
		title: "Built for Uptime",
		subtitle: "Distribution, substations, and preventive maintenance.",
	},
];

// Order: Green first → Electrical next
const SLIDES: Slide[] = [...GREEN_SLIDES, ...ELECTRICAL_SLIDES];

export default function HeroGreenElectrical() {
	const sliderRef = useRef<Slider | null>(null);
	const [active, setActive] = useState(0);

	const activeSlide = SLIDES[active];

	const settings = {
		dots: false, // ✅ removed dots
		arrows: false, // custom arrows below
		infinite: true,
		speed: 850,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3800,
		pauseOnHover: true,
		swipeToSlide: true,
		adaptiveHeight: false,
		beforeChange: (_: number, next: number) => setActive(next),
	} as const;

	return (
		<section className="relative w-full">
			<div className="relative h-svh w-full overflow-hidden">
				{/* Slides */}
				<Slider ref={sliderRef} {...settings} className="h-full">
					{SLIDES.map((s, idx) => {
						const isActive = idx === active;

						return (
							<div key={s.id} className="relative h-svh w-full">
								<div
									className={[
										"absolute inset-0 transition-transform ease-out",
										"duration-4200ms",
										isActive ? "scale-[1.10]" : "scale-100",
									].join(" ")}>
									<Image
										src={s.src}
										alt={s.alt}
										fill
										priority={s.id === 0}
										className="object-cover"
										sizes="100vw"
									/>
								</div>

								{/* Overlay (left readable, green theme) */}
								<div className="absolute inset-0 bg-linear-to-r from-black/75 via-black/35 to-black/10" />
								<div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />
							</div>
						);
					})}
				</Slider>

				{/* Custom arrows */}
				<button
					type="button"
					aria-label="Previous slide"
					onClick={() => sliderRef.current?.slickPrev()}
					className="group absolute left-5 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/25 bg-black/20 p-4 backdrop-blur hover:bg-black/35 transition md:left-10">
					<FiArrowLeft className="text-xl text-white/90 group-hover:text-white" />
				</button>

				<button
					type="button"
					aria-label="Next slide"
					onClick={() => sliderRef.current?.slickNext()}
					className="group absolute right-5 top-1/2 z-20 -translate-y-1/2 rounded-full bg-green-600 p-4 shadow-lg shadow-black/30 hover:brightness-110 transition md:right-10">
					<FiArrowRight className="text-xl text-white" />
				</button>

				{/* Content */}
				<div className="absolute inset-0 z-10">
					<div className="mx-auto flex h-full w-full max-w-7xl items-center px-5 pt-24 sm:px-8">
						<div className="max-w-3xl">
							{/* Green ribbon */}
							<div className="inline-flex items-center gap-3 rounded-none bg-green-600 px-5 py-2 text-xs font-semibold tracking-widest text-white">
								{activeSlide?.kicker ?? "WELCOME TO VR GREEN ENERGY"}
							</div>

							{/* Animated text: RIGHT → LEFT */}
							<AnimatePresence mode="wait">
								<motion.div
									key={activeSlide?.id}
									initial={{ opacity: 0, x: 60 }}
									animate={{ opacity: 1, x: 0 }}
									exit={{ opacity: 0, x: -40 }}
									transition={{ duration: 0.55, ease: "easeOut" }}
									className="mt-6">
									<h1 className="text-5xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-7xl">
										{activeSlide?.title ?? "Powering the Future"}
										<span className="block text-white/85">With Renewable.</span>
									</h1>

									<p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
										{activeSlide?.subtitle ??
											"End-to-end electrical works and renewable energy solutions for homes, businesses, and rural infrastructure."}
									</p>

									<div className="mt-8 flex flex-wrap items-center gap-4">
										<Link
											href="/quote"
											className="inline-flex items-center justify-center rounded-none bg-green-600 px-8 py-4 text-sm font-semibold text-white hover:brightness-110 transition">
											Learn More <span className="ml-2">›</span>
										</Link>

										<Link
											href="/projects"
											className="inline-flex items-center justify-center rounded-none border border-white/35 bg-white/0 px-8 py-4 text-sm font-semibold text-white hover:bg-white/10 transition">
											View Projects
										</Link>
									</div>

									{/* Minimal chip */}
									<div className="mt-6 inline-flex items-center gap-2 text-xs text-white/70">
										<span className="h-2 w-2 rounded-full bg-[#1F7A4D]" />
										<span className="font-medium text-white/85">
											{activeSlide?.tag}
										</span>
									</div>
								</motion.div>
							</AnimatePresence>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
