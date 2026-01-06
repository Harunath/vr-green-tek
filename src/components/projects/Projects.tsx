import React from "react";
import Image from "next/image";
import Link from "next/link";

import {
	projects,
	type Project as DataProject,
	type ProjectType,
} from "@/lib/Project/data";

const ELECTRICAL_BLUE = "#0365d0";

type FeaturedProject = Pick<
	DataProject,
	"title" | "location" | "points" | "image" | "tag" | "scope" | "slug"
>;

function cx(...a: Array<string | false | undefined>) {
	return a.filter(Boolean).join(" ");
}

function Badge({
	children,
	className = "",
	style,
}: {
	children: React.ReactNode;
	className?: string;
	style?: React.CSSProperties;
}) {
	return (
		<span
			style={style}
			className={cx(
				"inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold",
				className
			)}>
			{children}
		</span>
	);
}

function PatternLayer({ tone }: { tone: "green" | "blue" }) {
	const baseGlow =
		tone === "green"
			? "bg-[radial-gradient(900px_circle_at_15%_0%,rgba(16,185,129,0.20),transparent_55%),radial-gradient(700px_circle_at_90%_10%,rgba(34,197,94,0.14),transparent_55%)]"
			: "bg-[radial-gradient(900px_circle_at_15%_0%,rgba(3,101,208,0.22),transparent_55%),radial-gradient(700px_circle_at_90%_10%,rgba(3,101,208,0.14),transparent_55%)]";

	const hex =
		"before:absolute before:inset-0 before:opacity-[0.16] before:[background-image:radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.14)_1px,transparent_1px)] before:[background-size:18px_18px]";

	const circuit =
		"before:absolute before:inset-0 before:opacity-[0.14] before:[background-image:linear-gradient(to_right,rgba(15,23,42,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.12)_1px,transparent_1px)] before:[background-size:34px_34px]";

	const sheen =
		"after:absolute after:inset-0 after:opacity-[0.10] after:[background-image:linear-gradient(115deg,transparent_40%,rgba(0,0,0,0.12)_50%,transparent_60%)]";

	return (
		<div
			className={cx(
				"absolute inset-0",
				baseGlow,
				tone === "green" ? hex : circuit,
				sheen
			)}
			aria-hidden
		/>
	);
}

function CapabilityPill({
	children,
	tone,
}: {
	children: React.ReactNode;
	tone: "green" | "blue";
}) {
	if (tone === "blue") {
		return (
			<li
				className="rounded-2xl border bg-white/80 px-4 py-3 text-sm font-semibold shadow-sm"
				style={{
					borderColor: "rgba(3,101,208,0.22)",
					backgroundColor: "rgba(3,101,208,0.06)",
					color: "#082247",
				}}>
				{children}
			</li>
		);
	}

	return (
		<li className="rounded-2xl border border-emerald-200/80 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-950 shadow-sm">
			{children}
		</li>
	);
}

function FeaturedCard({
	project,
	tone,
}: {
	project: FeaturedProject;
	tone: "green" | "blue";
}) {
	const isBlue = tone === "blue";

	const href = isBlue
		? `/projects/electrical/${project.slug}`
		: `/projects/green-energy/${project.slug}`;

	const ring = isBlue
		? "ring-[rgba(3,101,208,0.20)] hover:ring-[rgba(3,101,208,0.42)]"
		: "ring-emerald-200/60 hover:ring-emerald-300/80";

	const glow = isBlue
		? "hover:shadow-[0_22px_70px_-40px_rgba(3,101,208,0.55)]"
		: "hover:shadow-[0_22px_70px_-40px_rgba(16,185,129,0.45)]";

	const overlay = isBlue
		? "from-[rgba(3,101,208,0.78)] via-black/15 to-black/0"
		: "from-emerald-950/72 via-black/15 to-black/0";

	const chipStyle = isBlue
		? {
				backgroundColor: "rgba(3,101,208,0.85)",
				borderColor: "rgba(255,255,255,0.55)",
				color: "#fff",
		  }
		: {
				backgroundColor: "rgba(6,95,70,0.78)",
				borderColor: "rgba(255,255,255,0.55)",
				color: "#fff",
		  };

	const pointsToShow = 7;
	const chips = project.points.slice(0, pointsToShow);
	const remaining = Math.max(project.points.length - pointsToShow, 0);

	const scopeStyle = isBlue
		? {
				borderColor: "rgba(3,101,208,0.18)",
				backgroundColor: "rgba(3,101,208,0.05)",
				color: "#082247",
		  }
		: {
				borderColor: "rgba(16,185,129,0.18)",
				backgroundColor: "rgba(16,185,129,0.06)",
				color: "#064E3B",
		  };

	const ctaStyle = isBlue ? { color: ELECTRICAL_BLUE } : { color: "#047857" };

	return (
		<Link
			href={href}
			className="group block focus:outline-none"
			aria-label={`View ${project.title}`}>
			<article
				className={cx(
					"relative overflow-hidden rounded-3xl bg-white ring-1 transition",
					ring,
					glow,
					"hover:-translate-y-0.5",
					"focus-within:ring-2 focus-within:ring-black/50"
				)}>
				<div className="relative aspect-video w-full">
					<Image
						src={project.image}
						alt={project.title}
						fill
						className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
						sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
					/>
					<div className={cx("absolute inset-0 bg-linear-to-b", overlay)} />

					<div className="absolute left-4 top-4 flex flex-wrap items-center gap-2">
						<span
							className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-extrabold backdrop-blur-sm shadow-sm"
							style={chipStyle}>
							{project.tag ?? "Featured"}
						</span>

						<span className="inline-flex items-center rounded-full border border-white/25 bg-white/15 px-3 py-1 text-xs font-semibold text-white/95 backdrop-blur-sm">
							View Project →
						</span>
					</div>

					<div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-black/10 to-transparent" />
				</div>

				<div className="p-5">
					<div className="flex items-start justify-between gap-3">
						<div className="min-w-0">
							<h4 className="text-base font-extrabold tracking-tight text-[#0B1220] line-clamp-2">
								{project.title}
							</h4>
							<p className="mt-1 text-sm text-black/60 line-clamp-1">
								{project.location}
							</p>
						</div>

						<span
							className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full"
							style={
								isBlue
									? { backgroundColor: ELECTRICAL_BLUE }
									: { backgroundColor: "#10B981" }
							}
						/>
					</div>

					{project.scope ? (
						<p
							className="mt-3 line-clamp-2 rounded-2xl border px-4 py-2.5 text-sm font-semibold"
							style={scopeStyle}>
							<span className="mr-2 text-xs font-extrabold uppercase tracking-wide opacity-70">
								Scope:
							</span>
							{project.scope}
						</p>
					) : null}

					<div className="mt-4 flex flex-wrap gap-2">
						{chips.map((p) => (
							<span
								key={p}
								className="rounded-full border px-3 py-1 text-xs font-semibold"
								style={
									isBlue
										? {
												borderColor: "rgba(3,101,208,0.18)",
												backgroundColor: "rgba(3,101,208,0.04)",
												color: "#06224A",
										  }
										: {
												borderColor: "rgba(16,185,129,0.18)",
												backgroundColor: "rgba(16,185,129,0.05)",
												color: "#064E3B",
										  }
								}>
								{p}
							</span>
						))}

						{remaining > 0 ? (
							<span
								className="rounded-full border px-3 py-1 text-xs font-semibold"
								style={
									isBlue
										? {
												borderColor: "rgba(3,101,208,0.26)",
												backgroundColor: "rgba(3,101,208,0.07)",
												color: ELECTRICAL_BLUE,
										  }
										: {
												borderColor: "rgba(16,185,129,0.24)",
												backgroundColor: "rgba(16,185,129,0.07)",
												color: "#047857",
										  }
								}>
								+{remaining} more
							</span>
						) : null}
					</div>

					<div className="mt-5 flex items-center justify-between border-t border-black/5 pt-3">
						<p className="text-xs font-semibold text-black/55">
							Safety-first • Compliance-ready • Clean handover
						</p>

						<span className="text-xs font-extrabold" style={ctaStyle}>
							Open →
						</span>
					</div>
				</div>
			</article>
		</Link>
	);
}

function SectionShell({
	tone,
	kicker,
	title,
	subtitle,
	count,
	intro,
	capabilities,
	featured,
}: {
	tone: "green" | "blue";
	kicker: string;
	title: string;
	subtitle: string;
	count: number;
	intro: string;
	capabilities: string[];
	featured: FeaturedProject[];
}) {
	const isBlue = tone === "blue";

	const wrap = isBlue
		? "from-[rgba(3,101,208,0.08)] via-white to-white"
		: "from-emerald-50 via-white to-white";

	const badgeClass = isBlue
		? "border-[rgba(3,101,208,0.28)] bg-white/70"
		: "border-emerald-200 bg-white/70 text-emerald-800";

	const divider = isBlue
		? "bg-[linear-gradient(to_right,rgba(3,101,208,0.40),rgba(3,101,208,0.12),transparent)]"
		: "bg-gradient-to-r from-emerald-600/35 via-emerald-600/10 to-transparent";

	return (
		<section className={cx("relative overflow-hidden bg-linear-to-b", wrap)}>
			<PatternLayer tone={tone} />

			<div className="relative mx-auto max-w-7xl px-6 py-16">
				<div className="flex flex-col gap-5">
					<div className="flex flex-wrap items-center gap-3">
						<Badge
							className={badgeClass}
							style={isBlue ? { color: ELECTRICAL_BLUE } : undefined}>
							{kicker}
						</Badge>

						<Badge className="border-black/10 bg-white/70 text-black/70">
							{count} Projects
						</Badge>
					</div>

					<div>
						<h2 className="text-3xl font-extrabold tracking-tight text-[#0B1220] sm:text-4xl">
							{title}
						</h2>

						<p
							className="mt-2 text-base font-semibold"
							style={
								isBlue ? { color: ELECTRICAL_BLUE } : { color: "#047857" }
							}>
							{subtitle}
						</p>

						<div className={cx("mt-5 h-px w-full", divider)} />
						<p className="mt-5 max-w-3xl text-base text-black/70">{intro}</p>
					</div>
				</div>

				<div className="mt-10 grid gap-8 lg:grid-cols-[1fr,1.25fr]">
					<div className="rounded-3xl bg-white/75 p-6 ring-1 ring-black/10 backdrop-blur">
						<h3 className="text-sm font-extrabold tracking-wide text-[#0B1220]">
							Key Capabilities
						</h3>

						<ul className="mt-4 grid gap-3 sm:grid-cols-2">
							{capabilities.map((c) => (
								<CapabilityPill key={c} tone={tone}>
									{c}
								</CapabilityPill>
							))}
						</ul>
					</div>

					<div>
						<div className="flex items-center justify-between gap-3">
							<h3 className="text-sm font-extrabold tracking-wide text-[#0B1220]">
								Featured {tone === "green" ? "Green Energy" : "Electrical"}{" "}
								Projects
							</h3>
							<div className="h-px flex-1 bg-black/10" />
						</div>

						<div className="mt-4 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
							{featured.map((p) => (
								<FeaturedCard key={p.slug} project={p} tone={tone} />
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

function pickFeaturedByType(
	type: ProjectType,
	limit: number
): FeaturedProject[] {
	return projects
		.filter((p) => p.type === type)
		.slice(0, limit)
		.map((p) => ({
			title: p.title,
			slug: p.slug,
			location: p.location,
			tag: p.tag,
			scope: p.scope,
			image: p.image,
			points: p.points,
		}));
}

export default function Projects() {
	const greenFeatured = pickFeaturedByType("green-energy", 4);
	const electricalFeatured = pickFeaturedByType("electrical", 5);

	return (
		<div className="w-full">
			<SectionShell
				tone="green"
				kicker="Green Energy Projects"
				title="Green Energy Projects"
				subtitle="Clean Power. Real Savings. Long-Term Reliability."
				count={projects.filter((p) => p.type === "green-energy").length}
				intro="From rooftop solar to hybrid systems, our green energy projects focus on ROI-driven sizing, clean execution, and monitoring-ready delivery."
				capabilities={[
					"Rooftop & ground-mounted solar EPC",
					"Hybrid solar + battery systems",
					"Solar pumps & rural electrification",
					"Performance monitoring & AMC",
				]}
				featured={greenFeatured}
			/>

			<SectionShell
				tone="blue"
				kicker="Electrical Works Projects"
				title="Electrical Works Projects"
				subtitle="Infrastructure Built to Code. Delivered with Precision."
				count={projects.filter((p) => p.type === "electrical").length}
				intro="Our electrical projects support industries, institutions, and commercial facilities with safe, scalable, and regulation-ready infrastructure."
				capabilities={[
					"LT / HT electrical works",
					"Industrial panels & MCC systems",
					"Commercial & institutional fit-outs",
					"Testing, audits & documentation",
				]}
				featured={electricalFeatured}
			/>
		</div>
	);
}
