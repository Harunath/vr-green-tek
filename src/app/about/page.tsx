import AboutHero from "@/components/about/AboutHero";
import AboutIntro from "@/components/about/AboutIntro";
import Approach from "@/components/about/Approach";
import CoreIdentity from "@/components/about/CoreIdentity";
import WhatWeDo from "@/components/about/WhatWeDo";
import Manufacturing from "@/components/about/Manufacturing";
import WhyUs from "@/components/about/WhyUs";
import MissionVision from "@/components/about/MissionVision";
import OurAim from "@/components/about/OurAim";

function page() {
	return (
		<>
			<AboutHero />
			<AboutIntro />
			<CoreIdentity />
			<WhatWeDo />
			<Approach />
			<Manufacturing />
			<WhyUs />
			<MissionVision />
			<OurAim />
		</>
	);
}

export default page;
