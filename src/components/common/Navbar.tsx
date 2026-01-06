"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
	FiChevronDown,
	FiMenu,
	FiX,
	FiArrowUpRight,
	FiSun,
	FiZap,
	FiDroplet,
	FiCpu,
	FiWind,
} from "react-icons/fi";
import Image from "next/image";

const SOLUTIONS = [
	{
		label: "Solar Energy",
		href: "/solutions/solar",
		icon: FiSun,
		desc: "Rooftop & ground-mount solar systems",
	},
	{
		label: "Biogas & Bioenergy",
		href: "/solutions/biogas",
		icon: FiWind,
		desc: "Waste-to-energy for clean fuel",
	},
	{
		label: "Energy Efficiency",
		href: "/solutions/energy-efficiency",
		icon: FiZap,
		desc: "Reduce consumption & costs",
	},
	{
		label: "Rural & Agri Power",
		href: "/solutions/rural-energy",
		icon: FiDroplet,
		desc: "Pumps, cold storage & microgrids",
	},
	{
		label: "Smart Energy Systems",
		href: "/solutions/smart",
		icon: FiCpu,
		desc: "Monitoring, optimization & analytics",
	},
];

const NAV = [
	{ label: "Home", href: "/" },
	{ label: "About", href: "/about" },
	{ label: "Solutions", href: "/solutions", dropdown: true },
	{ label: "Projects", href: "/projects" },
	{ label: "Contact", href: "/contact" },
];

export default function Navbar() {
	const [mobileOpen, setMobileOpen] = useState(false);
	const [solutionsOpen, setSolutionsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	const wrapRef = useRef<HTMLDivElement | null>(null);

	// Close on outside click / ESC
	useEffect(() => {
		const onDown = (e: MouseEvent) => {
			if (!wrapRef.current) return;
			if (!wrapRef.current.contains(e.target as Node)) setSolutionsOpen(false);
		};
		const onEsc = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				setSolutionsOpen(false);
				setMobileOpen(false);
			}
		};
		document.addEventListener("mousedown", onDown);
		document.addEventListener("keydown", onEsc);
		return () => {
			document.removeEventListener("mousedown", onDown);
			document.removeEventListener("keydown", onEsc);
		};
	}, []);

	// Lock scroll for drawer
	useEffect(() => {
		document.body.style.overflow = mobileOpen ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [mobileOpen]);

	// Transparent on hero, glass on scroll
	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const navLinkClass = `rounded-2xl px-3 py-2 text-sm font-medium transition`;
	const navLinkDynamic = scrolled
		? "text-[#1F2933]/80 hover:bg-black/5 hover:text-[#1F7A4D]"
		: "text-white/90 hover:bg-white/10";

	const buttonBase =
		"inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-semibold transition";

	return (
		<header className="fixed inset-x-0 top-0 z-50">
			<div
				className={`transition-all duration-300 ${
					scrolled
						? "border-b border-black/10 bg-white/80 backdrop-blur"
						: "border-b border-transparent bg-transparent"
				}`}>
				<div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
					{/* Logo */}
					<Link href="/" className="group flex items-center gap-3">
						{/* Logo pill to keep original colors visible on hero */}
						<div
							className={`relative flex items-center rounded-2xl transition ${
								scrolled ? "px-0 py-0" : "px-2 py-0.5"
							}`}>
							<Image
								src="https://res.cloudinary.com/dwsm6i6z9/image/upload/w_600,q_auto,f_auto/vr_greentek_enegrgy_orange_bold_amkzmq.png"
								alt="VR GreenTek Energy"
								width={300}
								height={60}
								className="h-16 md:h-20 w-auto"
							/>
						</div>
					</Link>

					{/* Desktop Nav */}
					<nav className="hidden items-center gap-1 md:flex" ref={wrapRef}>
						{NAV.map((item) => {
							if (!item.dropdown) {
								return (
									<Link
										key={item.href}
										href={item.href}
										className={`${navLinkClass} ${navLinkDynamic}`}>
										{item.label}
									</Link>
								);
							}

							return (
								<div key={item.href} className="relative">
									<button
										type="button"
										onClick={() => setSolutionsOpen((s) => !s)}
										className={`flex items-center gap-2 ${navLinkClass} ${navLinkDynamic}`}
										aria-haspopup="menu"
										aria-expanded={solutionsOpen}>
										Solutions
										<FiChevronDown
											className={`transition ${
												solutionsOpen ? "rotate-180" : ""
											}`}
										/>
									</button>

									{solutionsOpen && (
										<div
											role="menu"
											className="absolute left-0 top-[calc(100%+10px)] w-95 overflow-hidden rounded-3xl border border-black/10 bg-white shadow-2xl">
											<div className="p-2">
												{SOLUTIONS.map((s) => {
													const Icon = s.icon;
													return (
														<Link
															key={s.href}
															href={s.href}
															onClick={() => setSolutionsOpen(false)}
															className="group flex items-start gap-3 rounded-2xl p-3 hover:bg-[#1F7A4D]/10 transition"
															role="menuitem">
															<div className="mt-0.5 grid h-10 w-10 place-items-center rounded-2xl bg-black/5 text-[#1F7A4D] group-hover:bg-white transition">
																<Icon className="text-[18px]" />
															</div>
															<div className="min-w-0">
																<div className="flex items-center gap-2">
																	<div className="text-sm font-semibold text-[#1F2933]">
																		{s.label}
																	</div>
																	<FiArrowUpRight className="text-[#1F7A4D] opacity-0 group-hover:opacity-100 transition" />
																</div>
																<div className="text-xs text-[#1F2933]/65">
																	{s.desc}
																</div>
															</div>
														</Link>
													);
												})}
											</div>

											<div className="flex items-center justify-between gap-3 border-t border-black/5 bg-[#F1F8F4] px-4 py-3">
												<div className="text-xs text-[#1F2933]/70">
													Not sure what fits your need?
												</div>
												<Link
													href="/contact"
													onClick={() => setSolutionsOpen(false)}
													className="inline-flex items-center gap-2 rounded-2xl bg-[#F9C74F] px-3 py-2 text-xs font-semibold text-[#1F2933] hover:opacity-90 transition">
													Talk to us <FiArrowUpRight />
												</Link>
											</div>
										</div>
									)}
								</div>
							);
						})}
					</nav>

					{/* Desktop CTA */}
					<div className="hidden items-center gap-2 md:flex">
						<Link
							href="/contact"
							className={`${buttonBase} ${
								scrolled
									? "border border-[#1F7A4D]/25 text-[#1F7A4D] hover:bg-[#1F7A4D]/10"
									: "border border-white/40 text-white hover:bg-white/10"
							}`}>
							Consultation
						</Link>

						<Link
							href="/quote"
							className={`${buttonBase} ${
								scrolled
									? "bg-[#1F7A4D] text-white shadow-sm hover:opacity-95"
									: "bg-white/90 text-[#1F2933] backdrop-blur hover:bg-white"
							}`}>
							Get a Quote <FiArrowUpRight />
						</Link>
					</div>

					{/* Mobile menu button */}
					<button
						type="button"
						className={`md:hidden inline-flex items-center gap-2 rounded-2xl px-3 py-2 text-sm font-semibold transition ${
							scrolled
								? "text-[#1F2933] hover:bg-black/5"
								: "text-white hover:bg-white/10"
						}`}
						onClick={() => setMobileOpen(true)}
						aria-label="Open menu">
						<FiMenu className="text-lg" />
					</button>
				</div>
			</div>

			{/* Mobile Drawer */}
			{mobileOpen && (
				<div
					className="fixed inset-0 z-50 md:hidden"
					role="dialog"
					aria-modal="true">
					<div
						className="absolute inset-0 bg-black/40"
						onClick={() => setMobileOpen(false)}
					/>
					<div className="absolute right-0 top-0 h-full w-[86%] max-w-sm bg-white shadow-2xl">
						<div className="flex items-center justify-between border-b border-black/5 px-4 py-4">
							<div className="text-sm font-semibold text-[#1F2933]">Menu</div>
							<button
								className="rounded-2xl px-3 py-2 text-sm font-semibold text-[#1F2933] hover:bg-black/5 transition"
								onClick={() => setMobileOpen(false)}
								aria-label="Close menu">
								<FiX className="text-lg" />
							</button>
						</div>

						<div className="px-2 py-3">
							{NAV.map((item) => {
								if (!item.dropdown) {
									return (
										<Link
											key={item.href}
											href={item.href}
											onClick={() => setMobileOpen(false)}
											className="block rounded-2xl px-4 py-3 text-sm font-medium text-[#1F2933]/85 hover:bg-black/5 transition">
											{item.label}
										</Link>
									);
								}

								return (
									<div key={item.href} className="px-2">
										<button
											className="flex w-full items-center justify-between rounded-2xl px-2 py-3 text-sm font-medium text-[#1F2933]/85 hover:bg-black/5 transition"
											onClick={() => setSolutionsOpen((s) => !s)}>
											Solutions
											<FiChevronDown
												className={`transition ${
													solutionsOpen ? "rotate-180" : ""
												}`}
											/>
										</button>

										{solutionsOpen && (
											<div className="mb-2 ml-2 border-l border-black/10 pl-2">
												{SOLUTIONS.map((s) => {
													const Icon = s.icon;
													return (
														<Link
															key={s.href}
															href={s.href}
															onClick={() => setMobileOpen(false)}
															className="flex items-center gap-3 rounded-2xl px-3 py-2 text-sm text-[#1F2933]/75 hover:bg-[#1F7A4D]/10 hover:text-[#1F7A4D] transition">
															<span className="grid h-9 w-9 place-items-center rounded-2xl bg-black/5 text-[#1F7A4D]">
																<Icon className="text-[16px]" />
															</span>
															<span className="font-medium">{s.label}</span>
														</Link>
													);
												})}
											</div>
										)}
									</div>
								);
							})}
						</div>

						<div className="mt-auto border-t border-black/5 p-4">
							<Link
								href="/quote"
								onClick={() => setMobileOpen(false)}
								className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#1F7A4D] px-4 py-3 text-sm font-semibold text-white hover:opacity-95 transition">
								Get a Quote <FiArrowUpRight />
							</Link>
							<Link
								href="/contact"
								onClick={() => setMobileOpen(false)}
								className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#F9C74F] px-4 py-3 text-sm font-semibold text-[#1F2933] hover:opacity-90 transition">
								Consultation <FiArrowUpRight />
							</Link>
						</div>
					</div>
				</div>
			)}
		</header>
	);
}
