import SolarHero from "@/components/solutions/solar/SolarHero";
import SolarIntro from "@/components/solutions/solar/SolarIntro";
import WhatWeDeliver from "@/components/solutions/solar/WhatWeDeliver";
import WhyUs from "@/components/solutions/solar/WhyUs";
import React from "react";

function page() {
	return (
		<>
			<SolarHero />
			<SolarIntro />
			<WhatWeDeliver />
			<WhyUs />
		</>
	);
}

export default page;
