import Clients from "@/components/home/Clients";
import Hero from "@/components/home/Hero";
import MiniAbout from "@/components/home/MiniAbout";
import PositioningHero from "@/components/home/PositioningHero";
import ServicesWeOffer from "@/components/home/ServicesWeOffer";
import TrustedBrands from "@/components/home/TrustedBrands";
import WhoWeServe from "@/components/home/WhoWeServe";
import GreenEnergy from "@/components/home/GreenEnergy";
import React from "react";
import OurProjects from "@/components/home/OurProjects";
import Testimonials from "@/components/home/Testimonials";

function page() {
	return (
		<>
			<Hero />
			<TrustedBrands />
			<MiniAbout />
			<ServicesWeOffer />
			<OurProjects />
			<WhoWeServe />
			<GreenEnergy />
			<Clients />
			<Testimonials />

			<PositioningHero />
		</>
	);
}

export default page;
