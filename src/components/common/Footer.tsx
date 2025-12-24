import { FaSolarPanel, FaBolt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
	return (
		<footer className="bg-green-50 text-slate-700">
			{/* TOP SECTION */}
			<div className="max-w-7xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-4">
				{/* BRAND */}
				<div>
					<h3 className="text-2xl font-bold text-slate-900">
						<span className="text-green-600">VR</span> GreenTek
					</h3>
					<p className="mt-3 text-sm leading-relaxed">
						Sustainable electrical and green energy solutions supporting
						industries, businesses, and rural development.
					</p>
					<p className="mt-4 text-xs text-green-700 font-medium">
						Electricals • Green Energy
					</p>
				</div>

				{/* NAVIGATION */}
				<div>
					<h4 className="text-slate-900 font-semibold mb-4">Company</h4>
					<ul className="space-y-2 text-sm">
						{[
							["Home", "/"],
							["About", "/about"],
							["Solutions", "/solutions"],
							["Projects", "/projects"],
							["Impact", "/impact"],
							["Contact", "/contact"],
						].map(([label, link]) => (
							<li key={label}>
								<a href={link} className="hover:text-green-600 transition">
									{label}
								</a>
							</li>
						))}
					</ul>
				</div>

				{/* SOLUTIONS */}
				<div>
					<h4 className="text-slate-900 font-semibold mb-4">Solutions</h4>
					<ul className="space-y-3 text-sm">
						<li className="flex items-center gap-2">
							<FaSolarPanel className="text-green-600" />
							Solar & Hybrid Energy Systems
						</li>
						<li className="flex items-center gap-2">
							<FaBolt className="text-green-600" />
							Electrical Panels & LT Works
						</li>
					</ul>
				</div>

				{/* CTA */}
				<div>
					<h4 className="text-slate-900 font-semibold mb-4">Get in Touch</h4>

					<div className="space-y-3 text-sm">
						<p className="flex items-center gap-2">
							<FaPhoneAlt className="text-green-600" />
							+91 XXXXX XXXXX
						</p>
						<p className="flex items-center gap-2">
							<FaEnvelope className="text-green-600" />
							info@vrgreentek.com
						</p>
					</div>

					<div className="mt-6 flex gap-3">
						<a
							href="/consultation"
							className="px-4 py-2 text-sm font-medium border border-green-600 text-green-700 hover:bg-green-600 hover:text-white transition rounded-md">
							Consultation
						</a>
						<a
							href="/get-a-quote"
							className="px-4 py-2 text-sm font-medium bg-green-600 text-white hover:bg-green-700 transition rounded-md">
							Get a Quote
						</a>
					</div>
				</div>
			</div>

			{/* BOTTOM BAR */}
			<div className="border-t border-green-200">
				<div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-xs text-green-800 gap-2">
					<p>© {new Date().getFullYear()} VR GreenTek. All rights reserved.</p>

					<p className="text-center">
						Developed by{" "}
						<a
							href="https://www.vrtechforz.com/"
							target="_blank"
							rel="noopener noreferrer"
							className="font-medium text-green-600 hover:underline">
							VR Tech Forz
						</a>
					</p>

					<p>Powering a sustainable future 🌱</p>
				</div>
			</div>
		</footer>
	);
}
