"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight, FaBolt, FaLeaf, FaIndustry } from "react-icons/fa";

type Project = {
	title: string;
	location: string;
	category: string;
	image: string;
	icon: React.ElementType;
};

const PROJECTS: Project[] = [
	{
		title: "Industrial Electrical Panels & LT Works",
		location: "Manufacturing Unit, AP",
		category: "Industrial",
		icon: FaIndustry,
		image:
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1766056428/arihant-control-systems-hyderabad-8sssp9147g_imw38x.jpg",
	},
	{
		title: "Rural Solar Pump Installation",
		location: "Agri Land, Telangana",
		category: "Rural",
		icon: FaLeaf,
		image:
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1766055297/GettyImages-2174080781-508c0aae85a94ae6a7c4f9c303eae4f1_j1tmkp.jpg",
	},
	{
		title: "Commercial Building Electrical Fit-out",
		location: "IT Park, Hyderabad",
		category: "Electricals",
		icon: FaBolt,
		image:
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1766056300/AF1QipPq1hRH1NdHG0_J6NHk-OFyEAX-e2brJLX2C4Nb_s1360-w1360-h1020-rw_vuibmv.webp",
	},
];

const cn = (...c: (string | false | null | undefined)[]) =>
	c.filter(Boolean).join(" ");

function ProjectCard({ p }: { p: Project }) {
	const Icon = p.icon;

	return (
		<motion.article
			whileHover={{ y: -6 }}
			transition={{ duration: 0.22 }}
			className={cn(
				"group relative overflow-hidden rounded-[26px] border border-black/10 bg-white shadow-sm",
				"hover:border-green-600/30 hover:shadow-md"
			)}>
			{/* image */}
			<div className="relative h-56 w-full overflow-hidden sm:h-64">
				<Image
					src={p.image}
					alt={p.title}
					fill
					className="object-cover transition duration-500 group-hover:scale-[1.04]"
					sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
				/>
				<div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/25 to-transparent" />

				{/* category chip */}
				<div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
					<span className="h-2 w-2 rounded-full bg-green-500" />
					{p.category}
				</div>
			</div>

			{/* content */}
			<div className="relative p-5">
				{/* hover glow */}
				<div className="pointer-events-none absolute -right-24 -top-20 h-56 w-56 rounded-full bg-green-600/10 blur-3xl opacity-0 transition group-hover:opacity-100" />

				<div className="flex items-start gap-3">
					<div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-green-600/10">
						<Icon className="text-lg text-green-600" />
					</div>

					<div className="min-w-0">
						<p className="text-base font-extrabold tracking-tight text-[#0B1220]">
							{p.title}
						</p>
						<p className="mt-1 text-sm text-black/60">{p.location}</p>
					</div>
				</div>

				<div className="mt-5 flex items-center justify-between">
					<p className="text-xs font-semibold text-black/45">
						Compliance-ready delivery
					</p>

					<div className="inline-flex items-center gap-2 text-sm font-semibold text-green-600">
						<span className="opacity-0 transition group-hover:opacity-100">
							View
						</span>
						<span className="grid h-9 w-9 place-items-center rounded-full border border-green-600/25 bg-green-600/10 transition group-hover:bg-green-600 group-hover:text-white">
							<FaArrowRight />
						</span>
					</div>
				</div>

				<div className="pointer-events-none absolute inset-x-0 bottom-0 h-0.75 bg-linear-to-r from-transparent via-green-600/35 to-transparent opacity-0 transition group-hover:opacity-100" />
			</div>
		</motion.article>
	);
}

export default function OurProjectsHome() {
	return (
		<section className="relative overflow-hidden bg-white py-16 sm:py-20">
			{/* subtle background accents */}
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-green-600/10 blur-3xl" />
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.07),transparent_55%)]" />
			</div>

			<div className="relative mx-auto max-w-7xl px-6">
				{/* header */}
				<div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
					<div>
						<p className="text-xs font-semibold tracking-widest text-black/55 uppercase">
							Our Projects
						</p>
						<h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0B1220] sm:text-5xl">
							Work that <span className="text-green-600">proves quality</span>
						</h2>
						<p className="mt-3 max-w-2xl text-sm leading-relaxed text-black/60 sm:text-base">
							A quick look at recent green energy and electrical infrastructure
							projects—delivered with safety, neat finishing, and
							compliance-ready handovers.
						</p>
					</div>

					<Link
						href="/projects"
						className="group inline-flex w-fit items-center gap-3 rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-bold text-[#0B1220] shadow-sm transition hover:border-green-600/30 hover:shadow-md">
						View all
						<span className="grid h-9 w-9 place-items-center rounded-full bg-green-600/10 text-green-600 transition group-hover:bg-green-600 group-hover:text-white">
							<FaArrowRight />
						</span>
					</Link>
				</div>

				{/* grid - only 3 */}
				<div className="mt-10 grid gap-6 lg:grid-cols-3">
					{PROJECTS.slice(0, 3).map((p) => (
						<Link key={p.title} href="/projects" className="block">
							<ProjectCard p={p} />
						</Link>
					))}
				</div>

				<div className="mt-14 h-px bg-linear-to-r from-transparent via-green-600/25 to-transparent" />
			</div>
		</section>
	);
}
