import BiogasApplications from "@/components/solutions/Biogas/BiogasApplications";
import BiogasBenefits from "@/components/solutions/Biogas/BiogasBenefits";
import BiogasHero from "@/components/solutions/Biogas/BiogasHero";
import BiogasIntro from "@/components/solutions/Biogas/BiogasIntro";
import React from "react";

function page() {
	return (
		<>
			<BiogasHero />
			<BiogasIntro />
			<BiogasApplications />
			<BiogasBenefits />
		</>
	);
}

export default page;
