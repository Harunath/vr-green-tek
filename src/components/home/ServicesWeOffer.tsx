"use client";

import { useMemo, useRef, useState } from "react";
import Slider from "react-slick";
import Link from "next/link";
import {
	FiArrowUpRight,
	FiSun,
	FiWind,
	FiZap,
	FiCpu,
	FiBatteryCharging,
	FiTool,
	FiShield,
	FiGrid,
} from "react-icons/fi";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Category = "Green Energy" | "Electricals";

type Service = {
	id: string;
	category: Category;
	title: string;
	desc: string;
	href: string;
	Icon: React.ComponentType<{ className?: string }>;
};

const SERVICES: Service[] = [
	{
		id: "solar",
		category: "Green Energy",
		title: "Solar Rooftop Systems",
		desc: "Design, installation & commissioning for homes and businesses.",
		href: "/solutions/solar",
		Icon: FiSun,
	},
	{
		id: "biogas",
		category: "Green Energy",
		title: "Biogas & Bioenergy",
		desc: "Waste-to-energy plants for rural and industrial needs.",
		href: "/solutions/biogas",
		Icon: FiWind,
	},
	{
		id: "storage",
		category: "Green Energy",
		title: "Battery Storage",
		desc: "Backup power solutions with smart energy management.",
		href: "/solutions/storage",
		Icon: FiBatteryCharging,
	},
	{
		id: "smart",
		category: "Green Energy",
		title: "Smart Monitoring",
		desc: "IoT monitoring, analytics & performance optimization.",
		href: "/solutions/smart",
		Icon: FiCpu,
	},

	{
		id: "contracting",
		category: "Electricals",
		title: "Electrical Contracting",
		desc: "End-to-end wiring, panels & execution with standards.",
		href: "/services/contracting",
		Icon: FiTool,
	},
	{
		id: "panels",
		category: "Electricals",
		title: "Control Panels",
		desc: "Fabrication, upgrades, testing and maintenance.",
		href: "/services/panels",
		Icon: FiGrid,
	},
	{
		id: "safety",
		category: "Electricals",
		title: "Safety & Protection",
		desc: "Earthing, surge protection, audits and compliance.",
		href: "/services/safety",
		Icon: FiShield,
	},
	{
		id: "industrial",
		category: "Electricals",
		title: "Industrial Power",
		desc: "Distribution, MCC/DBs, preventive maintenance & uptime.",
		href: "/services/industrial",
		Icon: FiZap,
	},
];

function Dot() {
	return <div className="h-2 w-2 rounded-full bg-[#111827]/25" />;
}

function CategoryTab({
	active,
	label,
	onClick,
}: {
	active: boolean;
	label: Category;
	onClick: () => void;
}) {
	return (
		<button
			type="button"
			onClick={onClick}
			className={[
				"relative inline-flex items-center justify-center",
				"w-full sm:w-auto sm:min-w-40", // ✅ responsive width
				"rounded-xl px-6 py-3 text-sm font-semibold transition-all",
				"ring-1 ring-black/10",
				active
					? "bg-green-600 text-white shadow-md shadow-green-600/30 scale-[1.02]"
					: "bg-white text-[#0B1220] hover:bg-green-50 hover:ring-green-600/30",
			].join(" ")}>
			<span
				className={[
					"absolute left-3 h-2 w-2 rounded-full transition",
					active ? "bg-white" : "bg-green-600",
				].join(" ")}
			/>
			{label}
		</button>
	);
}

export default function ServicesWeOfferPro() {
	const sliderRef = useRef<Slider | null>(null);
	const [tab, setTab] = useState<Category>("Green Energy");

	const filtered = useMemo(
		() => SERVICES.filter((s) => s.category === tab),
		[tab]
	);

	const settings = {
		dots: true,
		arrows: false,
		infinite: true,
		speed: 650,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3800,
		pauseOnHover: true,
		swipeToSlide: true,

		// ✅ better feel on touch screens
		touchThreshold: 12,

		appendDots: (dots: React.ReactNode) => (
			<div className="mt-8">
				<ul className="flex flex-wrap justify-center gap-3">{dots}</ul>
			</div>
		),
		customPaging: () => <Dot />,

		responsive: [
			{ breakpoint: 1280, settings: { slidesToShow: 3 } },
			{ breakpoint: 900, settings: { slidesToShow: 2 } },

			// ✅ mobile: center the single card + avoid edge clipping
			{
				breakpoint: 520,
				settings: {
					slidesToShow: 1,
					centerMode: true,
					centerPadding: "24px",
				},
			},
		],
	};

	return (
		<section className="relative bg-[#F8FAFC] py-14 sm:py-16 lg:py-20">
			{/* premium background */}
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute inset-0 [radial-gradient(rgba(16,185,129,0.10)_1px,transparent_1px)] [bg-size:18px_18px]" />
				<div className="absolute -top-20 left-10 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
				<div className="absolute -bottom-24 right-10 h-72 w-72 rounded-full bg-green-500/10 blur-3xl" />
			</div>

			<div className="relative mx-auto max-w-7xl px-4 sm:px-6">
				{/* header */}
				<div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
					<div className="max-w-2xl">
						<div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-[11px] font-semibold tracking-widest text-[#111827]/70">
							<span className="h-2 w-2 rounded-full bg-green-600" />
							SERVICES WE OFFER
						</div>

						<h2 className="mt-4 text-2xl font-extrabold tracking-tight text-[#0B1220] sm:text-4xl lg:text-5xl">
							Modern infrastructure for{" "}
							<span className="text-green-600">{tab}</span>
						</h2>

						<p className="mt-3 text-sm sm:text-base text-[#111827]/70">
							Professional execution, clean finish, and reliable support — built
							for homes, businesses, and rural projects.
						</p>
					</div>

					{/* tabs */}
					<div className="grid w-full grid-cols-1 gap-3 sm:w-auto sm:grid-cols-2 sm:gap-3">
						<CategoryTab
							active={tab === "Green Energy"}
							label="Green Energy"
							onClick={() => {
								setTab("Green Energy");
								sliderRef.current?.slickGoTo(0);
							}}
						/>
						<CategoryTab
							active={tab === "Electricals"}
							label="Electricals"
							onClick={() => {
								setTab("Electricals");
								sliderRef.current?.slickGoTo(0);
							}}
						/>
					</div>
				</div>

				{/* slider */}
				<div className="mt-10">
					<Slider ref={sliderRef} {...settings}>
						{filtered.map((s) => {
							const Icon = s.Icon;
							return (
								<div key={s.id} className="px-2 sm:px-3 pb-3">
									{/* CARD */}
									<div
										className={[
											"group relative flex flex-col overflow-hidden rounded-3xl",
											"border border-black/10 bg-white p-6 sm:p-7 shadow-sm",
											"transition hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10",

											// ✅ responsive height
											"min-h-65 sm:min-h-75 lg:min-h-80",
										].join(" ")}>
										{/* top gradient rail */}
										<div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-green-600 via-emerald-500 to-green-400" />

										{/* FULL GREEN FILL ON HOVER (top -> bottom) */}
										<div className="pointer-events-none absolute inset-0 z-0">
											<div className="absolute inset-0 origin-top scale-y-0 bg-green-600 transition-transform duration-500 ease-out group-hover:scale-y-100" />
											<div className="absolute inset-0 origin-top scale-y-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.18),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.10),transparent_60%)] transition-transform duration-500 ease-out group-hover:scale-y-100" />
										</div>

										{/* content above fill */}
										<div className="relative z-10 flex flex-1 flex-col">
											{/* icon */}
											<div className="inline-flex w-fit items-center gap-3">
												<span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#F1F5F9] ring-1 ring-black/5 transition group-hover:bg-white/15 group-hover:ring-white/20">
													<Icon className="text-[22px] text-green-600 transition group-hover:text-white" />
												</span>
												<span className="text-[11px] font-semibold tracking-widest text-[#111827]/50 uppercase transition group-hover:text-white/80">
													{tab}
												</span>
											</div>

											<h3 className="mt-5 text-base sm:text-lg font-extrabold text-[#0B1220] transition group-hover:text-white">
												{s.title}
											</h3>

											<p className="mt-2 text-sm leading-relaxed text-[#111827]/65 transition group-hover:text-white/85">
												{s.desc}
											</p>

											<div className="mt-auto pt-6">
												<Link
													href={s.href}
													className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B1220] transition group-hover:text-white">
													Read More <FiArrowUpRight />
												</Link>
											</div>

											{/* corner badge */}
											<div className="pointer-events-none absolute right-5 top-5 rounded-full bg-black/5 px-3 py-1 text-[10px] font-semibold text-[#111827]/60 transition group-hover:bg-white/15 group-hover:text-white/80">
												{tab === "Green Energy" ? "Renewable" : "Electrical"}
											</div>
										</div>

										{/* subtle border glow */}
										<div className="pointer-events-none absolute inset-0 rounded-3xl ring-0 ring-green-600/0 transition duration-300 group-hover:ring-2 group-hover:ring-white/20" />
									</div>
								</div>
							);
						})}
					</Slider>
				</div>

				{/* more link */}
				<div className="mt-10 flex justify-center">
					<Link
						href={tab === "Green Energy" ? "/solutions" : "/services"}
						className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0B1220] shadow-sm ring-1 ring-black/10 hover:bg-black/5 transition">
						More {tab} Services <FiArrowUpRight />
					</Link>
				</div>

				<div className="mt-14 h-px bg-linear-to-r from-transparent via-black/10 to-transparent" />
			</div>
		</section>
	);
}
