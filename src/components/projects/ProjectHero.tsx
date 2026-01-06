// components/ProjectsHero.tsx
import Image from "next/image";

export default function ProjectsHero() {
	return (
		<section className="relative h-[60vh] w-full overflow-hidden">
			{/* Background Image */}
			<Image
				src="https://res.cloudinary.com/dwsm6i6z9/image/upload/v1766829179/How-Solar-Energy-Can-Empower-Rural-India_tgt6rw.jpg"
				alt="Executed Green Energy & Electrical Projects"
				fill
				priority
				className="object-cover"
			/>

			{/* Overlay */}
			<div className="absolute inset-0 bg-black/45" />

			{/* Content */}
			<div className="relative z-10 flex h-full items-center">
				<div className="mx-auto max-w-7xl px-6">
					<h1 className="text-4xl font-extrabold text-white sm:text-5xl">
						Our Projects
					</h1>

					<p className="mt-3 max-w-xl text-base text-white/85">
						Delivered across green energy and electrical infrastructure.
					</p>
				</div>
			</div>
		</section>
	);
}
