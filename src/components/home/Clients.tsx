"use client";

import { useMemo, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Client = {
	name: string;
	logo: string;
	category: "Green Energy" | "Electricals";
};

const CLIENTS: Client[] = [
	// Green Energy (replace with real clients)
	{
		name: "Solar Partner 1",
		logo: "https://res.cloudinary.com/dwsm6i6z9/image/upload/v1766058807/canva-brown-white-circle-modern-cake-_26-bakery-brand-logo-vaC3NOD6hX4_jjbfu3.jpg",
		category: "Green Energy",
	},
	{
		name: "Renewables Partner 2",
		logo: "https://res.cloudinary.com/dwsm6i6z9/image/upload/v1766058807/canva-brown-white-circle-modern-cake-_26-bakery-brand-logo-vaC3NOD6hX4_jjbfu3.jpg",
		category: "Green Energy",
	},
	{
		name: "EPC Partner 3",
		logo: "https://res.cloudinary.com/dwsm6i6z9/image/upload/v1766058807/canva-brown-white-circle-modern-cake-_26-bakery-brand-logo-vaC3NOD6hX4_jjbfu3.jpg",
		category: "Green Energy",
	},

	// Electricals (replace with real clients)
	{
		name: "Electrical Client 1",
		logo: "https://res.cloudinary.com/dwsm6i6z9/image/upload/v1766058807/canva-brown-white-circle-modern-cake-_26-bakery-brand-logo-vaC3NOD6hX4_jjbfu3.jpg",
		category: "Electricals",
	},
	{
		name: "Industrial Client 2",
		logo: "https://res.cloudinary.com/dwsm6i6z9/image/upload/v1766058807/canva-brown-white-circle-modern-cake-_26-bakery-brand-logo-vaC3NOD6hX4_jjbfu3.jpg",
		category: "Electricals",
	},
	{
		name: "Infra Client 3",
		logo: "https://res.cloudinary.com/dwsm6i6z9/image/upload/v1766058807/canva-brown-white-circle-modern-cake-_26-bakery-brand-logo-vaC3NOD6hX4_jjbfu3.jpg",
		category: "Electricals",
	},
];

function Dot() {
	return <div className="h-2.5 w-2.5 rounded-full bg-black/30" />;
}

function TabPill({
	active,
	label,
	onClick,
}: {
	active: boolean;
	label: string;
	onClick: () => void;
}) {
	return (
		<button
			onClick={onClick}
			className={[
				"rounded-full px-4 py-2 text-sm font-semibold transition",
				active
					? "bg-green-600 text-white shadow-sm"
					: "bg-white text-black/70 hover:text-black shadow-sm border border-black/10",
			].join(" ")}>
			{label}
		</button>
	);
}

export default function Clients() {
	const [tab, setTab] = useState<"Green Energy" | "Electricals">(
		"Green Energy"
	);

	const data = useMemo(() => CLIENTS.filter((c) => c.category === tab), [tab]);

	const settings = {
		dots: true,
		arrows: false,
		infinite: true,
		speed: 700,
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2400,
		pauseOnHover: true,
		cssEase: "easeOut",
		appendDots: (dots: React.ReactNode) => (
			<div className="mt-10">
				<ul className="flex justify-center gap-3">{dots}</ul>
			</div>
		),
		customPaging: () => <Dot />,
		responsive: [
			{ breakpoint: 1280, settings: { slidesToShow: 4 } },
			{ breakpoint: 1024, settings: { slidesToShow: 3 } },
			{ breakpoint: 640, settings: { slidesToShow: 2 } },
		],
	};

	return (
		<section className="bg-white py-20">
			<div className="mx-auto max-w-7xl px-6">
				{/* Top */}
				<div className="flex flex-col items-center text-center">
					<p className="text-xs font-semibold tracking-widest uppercase text-black/60">
						Trusted by Clients
					</p>

					<h2 className="mt-4 text-2xl font-extrabold tracking-tight text-[#0B1220] sm:text-4xl">
						Delivering modern infrastructure for{" "}
						<span className="text-green-600">{tab}</span>
					</h2>

					<p className="mt-3 max-w-2xl text-sm text-black/60 sm:text-base">
						We partner with businesses, institutions, and project teams to
						deliver reliable execution, strong safety practices, and clean
						finishing.
					</p>

					{/* Tabs */}
					<div className="mt-8 flex items-center gap-2 rounded-full bg-white p-1 shadow-sm border border-black/10">
						<TabPill
							active={tab === "Green Energy"}
							label="Green Energy"
							onClick={() => setTab("Green Energy")}
						/>
						<TabPill
							active={tab === "Electricals"}
							label="Electricals"
							onClick={() => setTab("Electricals")}
						/>
					</div>
				</div>

				{/* Trust stats (optional but premium) */}
				<div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
					<div className="rounded-2xl border border-black/10 bg-white p-5 text-center">
						<div className="text-xl font-extrabold text-[#0B1220]">150+</div>
						<div className="mt-1 text-xs font-medium text-black/60">
							Projects Delivered
						</div>
					</div>
					<div className="rounded-2xl border border-black/10 bg-white p-5 text-center">
						<div className="text-xl font-extrabold text-[#0B1220]">20+</div>
						<div className="mt-1 text-xs font-medium text-black/60">
							Cities Covered
						</div>
					</div>
					<div className="rounded-2xl border border-black/10 bg-white p-5 text-center">
						<div className="text-xl font-extrabold text-[#0B1220]">99%</div>
						<div className="mt-1 text-xs font-medium text-black/60">
							On-time Delivery
						</div>
					</div>
					<div className="rounded-2xl border border-black/10 bg-white p-5 text-center">
						<div className="text-xl font-extrabold text-green-600">Safety</div>
						<div className="mt-1 text-xs font-medium text-black/60">
							Compliance-first
						</div>
					</div>
				</div>

				{/* Slider Card */}
				<div className="mt-12 rounded-3xl border border-black/10 bg-white p-6 shadow-sm sm:p-10">
					<Slider {...settings}>
						{data.map((c) => (
							<div key={c.name} className="px-6">
								<div className="flex h-28 items-center justify-center sm:h-32">
									<Image
										src={c.logo}
										alt={c.name}
										width={500}
										height={500}
										className="
											max-h-20 max-w-47.5
											sm:max-h-24 sm:max-w-57.5
											object-contain
											opacity-80 grayscale
											transition duration-300
											hover:opacity-100 hover:grayscale-0
										"
									/>
								</div>
							</div>
						))}
					</Slider>

					{/* Divider */}
					<div className="mt-10 h-px bg-linear-to-r from-transparent via-green-600/25 to-transparent" />

					{/* Small footer line */}
					<p className="mt-6 text-center text-xs text-black/55">
						Want to see relevant work samples?{" "}
						<span className="font-semibold text-green-600">
							Request a project portfolio.
						</span>
					</p>
				</div>
			</div>
		</section>
	);
}
