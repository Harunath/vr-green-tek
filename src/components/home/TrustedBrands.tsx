"use client";

import Slider from "react-slick";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Brand = {
	name: string;
	logo: string;
};

const BRANDS: Brand[] = [
	{
		name: "Brand One",
		logo: "https://res.cloudinary.com/dwsm6i6z9/image/upload/v1766058807/canva-brown-white-circle-modern-cake-_26-bakery-brand-logo-vaC3NOD6hX4_jjbfu3.jpg",
	},
	{
		name: "Brand Two",
		logo: "https://res.cloudinary.com/dwsm6i6z9/image/upload/v1766058807/canva-brown-white-circle-modern-cake-_26-bakery-brand-logo-vaC3NOD6hX4_jjbfu3.jpg",
	},
	{
		name: "Brand Three",
		logo: "https://res.cloudinary.com/dwsm6i6z9/image/upload/v1766058807/canva-brown-white-circle-modern-cake-_26-bakery-brand-logo-vaC3NOD6hX4_jjbfu3.jpg",
	},
	{
		name: "Brand Four",
		logo: "https://res.cloudinary.com/dwsm6i6z9/image/upload/v1766058807/canva-brown-white-circle-modern-cake-_26-bakery-brand-logo-vaC3NOD6hX4_jjbfu3.jpg",
	},
	{
		name: "Brand Five",
		logo: "https://res.cloudinary.com/dwsm6i6z9/image/upload/v1766058807/canva-brown-white-circle-modern-cake-_26-bakery-brand-logo-vaC3NOD6hX4_jjbfu3.jpg",
	},
	{
		name: "Brand Six",
		logo: "https://res.cloudinary.com/dwsm6i6z9/image/upload/v1766058807/canva-brown-white-circle-modern-cake-_26-bakery-brand-logo-vaC3NOD6hX4_jjbfu3.jpg",
	},
];

function Dot() {
	return <div className="h-2.5 w-2.5 rounded-full bg-[#1F2933]/40" />;
}

export default function TrustedBrands() {
	const settings = {
		dots: true,
		arrows: false,
		infinite: true,
		speed: 800,
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2600,
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
				{/* Heading */}
				<div className="mb-12 text-center">
					<p className="text-xs font-semibold tracking-widest text-[#1F2933]/60 uppercase">
						Trusted by Industry & Institutions
					</p>
				</div>

				{/* Slider */}
				<Slider {...settings}>
					{BRANDS.map((b) => (
						<div key={b.name} className="px-6">
							<div className="flex h-28 items-center justify-center sm:h-32">
								<Image
									src={b.logo}
									alt={b.name}
									width={400}
									height={400}
									className="
										max-h-20 
										max-w-45
										sm:max-h-24 
										sm:max-w-45
										object-contain
										opacity-70
										grayscale
										transition
										duration-300
										hover:opacity-100
										hover:grayscale-0
									"
								/>
							</div>
						</div>
					))}
				</Slider>

				{/* Divider */}
				<div className="mt-14 h-px bg-linear-to-r from-transparent via-black/10 to-transparent" />
			</div>
		</section>
	);
}
