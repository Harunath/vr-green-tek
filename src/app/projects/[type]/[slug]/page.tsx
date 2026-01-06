import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
	getProject,
	getSimilar,
	getProjectHref,
	projects,
	type ProjectType,
} from "@/lib/Project/data"; // ✅ adjust path to your data.ts

type PageProps = {
	params: Promise<{ type: string; slug: string }>;
};

function isProjectType(v: string): v is ProjectType {
	return v === "green-energy" || v === "electrical";
}

export async function generateStaticParams() {
	return projects.map((p) => ({ type: p.type, slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps) {
	const { type, slug } = await params;

	if (!isProjectType(type)) {
		return { title: "Project Not Found" };
	}

	const p = getProject(type, slug);
	if (!p) {
		return { title: "Project Not Found" };
	}

	return {
		title: `${p.title} | Projects`,
		description: p.overview ?? p.points?.[0] ?? "Project details",
		openGraph: {
			title: p.title,
			description: p.overview ?? "",
			images: p.image ? [{ url: p.image }] : [],
		},
	};
}

export default async function ProjectSlugPage({ params }: PageProps) {
	const { type, slug } = await params;

	if (!isProjectType(type)) return notFound();

	const project = getProject(type, slug);
	if (!project) return notFound();

	const similar = getSimilar(type, slug);

	const tone = type === "electrical" ? "blue" : "green";
	const accent = tone === "blue" ? { color: "#0365d0" } : { color: "#047857" };

	const badgeStyle =
		tone === "blue"
			? {
					borderColor: "rgba(3,101,208,0.25)",
					backgroundColor: "rgba(3,101,208,0.08)",
					color: "#06224A",
			  }
			: {
					borderColor: "rgba(16,185,129,0.28)",
					backgroundColor: "rgba(16,185,129,0.08)",
					color: "#064E3B",
			  };

	return (
		<div className="min-h-screen bg-white">
			{/* Hero */}
			<section className="relative overflow-hidden">
				<div className="relative h-[44vh] min-h-90 w-full">
					<Image
						src={project.image}
						alt={project.title}
						fill
						priority
						className="object-cover"
						sizes="100vw"
					/>
					<div className="absolute inset-0 bg-linear-to-b from-black/65 via-black/35 to-white/5" />
					<div className="absolute inset-0">
						<div className="mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-10">
							<div className="flex flex-wrap items-center gap-2">
								<span
									className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-extrabold backdrop-blur-sm"
									style={{
										backgroundColor:
											tone === "blue"
												? "rgba(3,101,208,0.75)"
												: "rgba(6,95,70,0.75)",
										borderColor: "rgba(255,255,255,0.35)",
										color: "white",
									}}>
									{project.tag ??
										(type === "electrical" ? "Electrical" : "Green Energy")}
								</span>

								<span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold text-white/90 backdrop-blur-sm">
									{project.location}
								</span>
							</div>

							<h1 className="mt-4 max-w-4xl text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
								{project.title}
							</h1>

							<p className="mt-3 max-w-3xl text-sm font-semibold text-white/85 sm:text-base">
								{project.overview ??
									"Compliance-ready execution with safety-first delivery and clean handover."}
							</p>

							<div className="mt-6 flex flex-wrap items-center gap-3">
								<Link
									href="/projects"
									className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/15">
									← Back to Projects
								</Link>

								{project.scope ? (
									<span
										className="inline-flex items-center rounded-full border px-4 py-2 text-sm font-semibold backdrop-blur-sm"
										style={{
											backgroundColor: "rgba(255,255,255,0.10)",
											borderColor: "rgba(255,255,255,0.25)",
											color: "rgba(255,255,255,0.92)",
										}}>
										{project.scope}
									</span>
								) : null}
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Content */}
			<section className="mx-auto max-w-7xl px-6 py-12">
				<div className="grid gap-10 lg:grid-cols-[1.15fr,0.85fr]">
					{/* Left */}
					<div>
						<div className="flex items-center gap-3">
							<h2 className="text-xl font-extrabold tracking-tight text-[#0B1220]">
								Project Highlights
							</h2>
							<div className="h-px flex-1 bg-black/10" />
						</div>

						<ul className="mt-5 grid gap-3 sm:grid-cols-2">
							{project.points.map((pt) => (
								<li
									key={pt}
									className="rounded-2xl border bg-white px-4 py-3 text-sm font-semibold text-black/80 shadow-sm"
									style={badgeStyle}>
									{pt}
								</li>
							))}
						</ul>

						{project.deliverables?.length ? (
							<div className="mt-10">
								<div className="flex items-center gap-3">
									<h3 className="text-lg font-extrabold tracking-tight text-[#0B1220]">
										Deliverables
									</h3>
									<div className="h-px flex-1 bg-black/10" />
								</div>

								<ul className="mt-4 grid gap-2">
									{project.deliverables.map((d) => (
										<li
											key={d}
											className="flex items-start gap-3 rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm font-semibold text-black/75">
											<span
												className="mt-1.5 h-2 w-2 shrink-0 rounded-full"
												style={
													tone === "blue"
														? { backgroundColor: "#0365d0" }
														: { backgroundColor: "#10B981" }
												}
											/>
											{d}
										</li>
									))}
								</ul>
							</div>
						) : null}

						{project.gallery?.length ? (
							<div className="mt-10">
								<div className="flex items-center gap-3">
									<h3 className="text-lg font-extrabold tracking-tight text-[#0B1220]">
										Gallery
									</h3>
									<div className="h-px flex-1 bg-black/10" />
								</div>

								<div className="mt-4 grid gap-4 sm:grid-cols-2">
									{project.gallery.map((src) => (
										<div
											key={src}
											className="relative aspect-video overflow-hidden rounded-3xl ring-1 ring-black/10">
											<Image
												src={src}
												alt={`${project.title} image`}
												fill
												className="object-cover"
												sizes="(max-width: 768px) 100vw, 50vw"
											/>
										</div>
									))}
								</div>
							</div>
						) : null}
					</div>

					{/* Right */}
					<aside className="space-y-6">
						<div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
							<p
								className="text-xs font-extrabold uppercase tracking-wide"
								style={accent}>
								Quick Summary
							</p>
							<p className="mt-2 text-sm font-semibold text-black/70">
								{project.overview ??
									"Safety-first delivery with clean finishing, documentation and long-term reliability."}
							</p>

							{project.stats?.length ? (
								<div className="mt-5 grid gap-3">
									{project.stats.map((s) => (
										<div
											key={s.label}
											className="rounded-2xl border border-black/10 bg-white px-4 py-3">
											<p className="text-xs font-extrabold uppercase tracking-wide text-black/45">
												{s.label}
											</p>
											<p className="mt-1 text-sm font-extrabold text-[#0B1220]">
												{s.value}
											</p>
										</div>
									))}
								</div>
							) : null}

							<div className="mt-6 flex flex-wrap gap-2">
								<Link
									href="/contact"
									className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-extrabold text-white"
									style={{
										backgroundColor: tone === "blue" ? "#0365d0" : "#047857",
									}}>
									Request Consultation →
								</Link>

								<Link
									href="/projects"
									className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-extrabold text-black/70 hover:bg-black/3">
									View All Projects
								</Link>
							</div>
						</div>

						{similar.length ? (
							<div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
								<div className="flex items-center justify-between gap-3">
									<h3 className="text-sm font-extrabold tracking-wide text-[#0B1220]">
										Similar Projects
									</h3>
									<span className="text-xs font-semibold text-black/45">
										{type === "electrical" ? "Electrical" : "Green Energy"}
									</span>
								</div>

								<div className="mt-4 grid gap-3">
									{similar.map((sp) => (
										<Link
											key={sp.slug}
											href={getProjectHref(sp)}
											className="group rounded-2xl border border-black/10 bg-white p-3 hover:bg-black/2">
											<div className="flex items-start gap-3">
												<div className="relative h-14 w-20 shrink-0 overflow-hidden rounded-xl ring-1 ring-black/10">
													<Image
														src={sp.image}
														alt={sp.title}
														fill
														className="object-cover"
														sizes="160px"
													/>
												</div>
												<div className="min-w-0">
													<p className="text-sm font-extrabold text-[#0B1220] line-clamp-2 group-hover:underline">
														{sp.title}
													</p>
													<p className="mt-1 text-xs font-semibold text-black/55 line-clamp-1">
														{sp.location}
													</p>
												</div>
											</div>
										</Link>
									))}
								</div>
							</div>
						) : null}
					</aside>
				</div>
			</section>
		</div>
	);
}
