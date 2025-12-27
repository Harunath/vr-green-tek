import React from "react";
import EnergyHero from "@/components/solutions/RuralEnergy/RuralEnergyHero";
import RuralEnergyIntro from "@/components/solutions/RuralEnergy/RuralEnergyIntro";
import RuralSolutions from "@/components/solutions/RuralEnergy/RuralSolutions";
import WhyItWorks from "@/components/solutions/RuralEnergy/WhyItWorks";

function page() {
	return (
		<>
			<EnergyHero />
			<RuralEnergyIntro />
			<RuralSolutions />
			<WhyItWorks />
		</>
	);
}

export default page;
