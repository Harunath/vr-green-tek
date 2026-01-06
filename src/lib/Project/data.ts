export type ProjectType = "green-energy" | "electrical";

export type Project = {
	type: ProjectType;
	slug: string;
	title: string;
	location: string;
	image: string;
	tag?: string;
	scope?: string;
	points: string[];

	overview?: string;
	deliverables?: string[];
	stats?: { label: string; value: string }[];
	gallery?: string[];
};

export const projects: Project[] = [
	{
		type: "green-energy",
		slug: "industrial-rooftop-solar-installation",
		title: "Industrial Rooftop Solar Installation",
		location: "Manufacturing Unit, Andhra Pradesh",
		tag: "Solar EPC",
		image:
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1766829179/How-Solar-Energy-Can-Empower-Rural-India_tgt6rw.jpg",
		points: [
			"Grid-tie solar system with compliance-ready commissioning",
			"Reduced energy costs with stable output",
			"Safety-first cable routing and earthing as per standards",
			"Neat finishing + clean handover documentation",
			"Monitoring-ready design for long-term performance",
		],
		overview:
			"Rooftop solar EPC delivered with compliance-ready commissioning, clean finishing, and monitoring-ready handover for stable long-term savings.",
		stats: [
			{ label: "System Type", value: "Grid-tie Rooftop" },
			{ label: "Focus", value: "ROI + Stability" },
			{ label: "Handover", value: "Documentation + Support" },
		],
		deliverables: [
			"Site survey & sizing",
			"Design & layout planning",
			"Supply, installation & commissioning",
			"Protection systems & earthing",
			"Monitoring-ready handover",
		],
		gallery: [
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1766829179/How-Solar-Energy-Can-Empower-Rural-India_tgt6rw.jpg",
		],
	},
	{
		type: "green-energy",
		slug: "rural-solar-pump-installation",
		title: "Rural Solar Pump Installation",
		location: "Agricultural Land, Telangana",
		tag: "Solar Pump",
		image:
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1766829179/How-Solar-Energy-Can-Empower-Rural-India_tgt6rw.jpg",
		points: [
			"Solar-powered irrigation with on-ground execution",
			"Reliable power, reduced diesel dependency",
			"Optimized pump sizing for consistent water output",
			"Weather-proof mounting with secure cable management",
			"Easy maintenance handover + usage guidance",
		],
		overview:
			"Solar pumping solution built for reliable irrigation, minimal maintenance, and strong savings vs diesel-based operation.",
		stats: [
			{ label: "Use Case", value: "Irrigation" },
			{ label: "Outcome", value: "Reduced diesel dependency" },
			{ label: "Delivery", value: "On-ground execution" },
		],
		deliverables: [
			"Pump sizing",
			"Mounting & wiring",
			"Earthing",
			"Testing",
			"Handover",
		],
	},
	{
		type: "green-energy",
		slug: "commercial-solar-power-system",
		title: "Commercial Solar Power System",
		location: "IT Park, Hyderabad",
		tag: "Monitoring",
		image:
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1766829179/How-Solar-Energy-Can-Empower-Rural-India_tgt6rw.jpg",
		points: [
			"Rooftop EPC + monitoring integration",
			"Clean energy adoption with measurable ROI",
			"Net-metering & compliance support for commissioning",
			"Performance tracking dashboards enabled",
			"Long-term service plan for uninterrupted output",
		],
		overview:
			"Commercial rooftop system with monitoring integration and commissioning support for measurable ROI and predictable output.",
	},
	{
		type: "green-energy",
		slug: "hybrid-solar-storage-setup",
		title: "Hybrid Solar + Storage Setup",
		location: "Facility Backup, South India",
		tag: "Hybrid",
		image:
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1766829179/How-Solar-Energy-Can-Empower-Rural-India_tgt6rw.jpg",
		points: [
			"Battery-backed hybrid system for stability",
			"Designed for long-term reliability and savings",
			"Smart changeover logic for seamless backup",
			"Safe enclosure + protection devices installed",
			"Monitoring-ready setup with clean commissioning",
		],
		overview:
			"Hybrid solar + battery backup built for continuity, safe operation, and long-term savings with smart changeover logic.",
	},

	{
		type: "electrical",
		slug: "spices-sterilization-plant",
		title: "Spices Sterilization Plant",
		location: "Guntur, Andhra Pradesh",
		scope: "Electrical & Automation — Supply, Erection & Commissioning",
		tag: "PLC Panels",
		image:
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1766056428/arihant-control-systems-hyderabad-8sssp9147g_imw38x.jpg",
		points: [
			"PLC Panels",
			"Drive Panels",
			"Cable Trays",
			"Cables",
			"Earthing",
			"SCADA",
		],
		overview:
			"End-to-end electrical and automation execution for a spices sterilization facility, covering panel manufacturing, cabling, earthing, and SCADA integration with safety-first practices.",
		stats: [
			{ label: "Delivery", value: "Supply + Erection + Commissioning" },
			{ label: "Systems", value: "PLC • Drives • SCADA" },
			{ label: "Focus", value: "Compliance • Safety • Reliability" },
		],
	},
	{
		type: "electrical",
		slug: "cement-casting-machine-automation",
		title: "Cement Casting Machine Automation",
		location: "Vijayawada, Andhra Pradesh",
		scope: "Electrical & Automation — Supply, Erection & Commissioning",
		tag: "MCC Panels",
		image:
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1766056428/arihant-control-systems-hyderabad-8sssp9147g_imw38x.jpg",
		points: [
			"MCC Panels",
			"PLC Panels",
			"Instrumentation",
			"Cable Trays",
			"Cables",
			"Earthing",
			"SCADA",
		],
		overview:
			"Automation and electrical infrastructure for cement casting machinery, enabling controlled operations, safe load handling, and efficient production workflows.",
		stats: [
			{ label: "Delivery", value: "Supply + Erection + Commissioning" },
			{ label: "Systems", value: "MCC • PLC • SCADA" },
			{ label: "Focus", value: "Process Control • Safety" },
		],
	},
	{
		type: "electrical",
		slug: "poultry-feeding-batch-plant-automation",
		title: "Poultry Feeding Batch Plant Automation",
		location: "Jangareddy Gudem, Andhra Pradesh",
		scope: "Electrical & Automation — Supply, Erection & Commissioning",
		tag: "Automation",
		image:
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1766056428/arihant-control-systems-hyderabad-8sssp9147g_imw38x.jpg",
		points: ["PLC Panels", "SCADA", "Cable Trays", "Cables", "Earthing"],
		overview:
			"Complete automation setup for a poultry feed batch plant, ensuring precise batching, monitoring, and safe electrical distribution.",
		stats: [
			{ label: "Delivery", value: "Supply + Erection + Commissioning" },
			{ label: "Systems", value: "PLC • SCADA" },
			{ label: "Focus", value: "Automation • Accuracy" },
		],
	},
	{
		type: "electrical",
		slug: "pallet-mill-plant-automation",
		title: "Pallet Mill Plant Automation",
		location: "Purnia, Bihar",
		scope: "Electrical & Automation — Supply, Erection & Commissioning",
		tag: "SCADA",
		image:
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1766056428/arihant-control-systems-hyderabad-8sssp9147g_imw38x.jpg",
		points: ["PLC Panels", "RIO Panels", "SCADA"],
		overview:
			"Automation and control systems for a pallet mill plant, providing centralized monitoring, efficient process control, and reliable electrical infrastructure.",
		stats: [
			{ label: "Delivery", value: "Supply + Erection + Commissioning" },
			{ label: "Systems", value: "PLC • RIO • SCADA" },
			{ label: "Focus", value: "Monitoring • Reliability" },
		],
	},
	{
		type: "electrical",
		slug: "dripping-automation",
		title: "Dripping Automation",
		location: "Hyderabad, Telangana",
		scope: "Electrical & Automation — Supply, Erection & Commissioning",
		tag: "MCC Panels",
		image:
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1766056428/arihant-control-systems-hyderabad-8sssp9147g_imw38x.jpg",
		points: ["PLC Panels", "SCADA", "Cable Trays", "Cables", "Earthing"],
		overview:
			"Electrical and automation execution for dripping systems, ensuring precise control, safe distribution, and long-term operational reliability.",
		stats: [
			{ label: "Delivery", value: "Supply + Erection + Commissioning" },
			{ label: "Systems", value: "PLC • MCC • SCADA" },
			{ label: "Focus", value: "Precision • Safety" },
		],
	},
];

export function getProject(type: ProjectType, slug: string) {
	return projects.find((p) => p.type === type && p.slug === slug) ?? null;
}

export function getSimilar(type: ProjectType, slug: string) {
	return projects.filter((p) => p.type === type && p.slug !== slug).slice(0, 3);
}

export function getProjectHref(p: Pick<Project, "type" | "slug">) {
	return `/projects/${p.type}/${p.slug}`;
}
