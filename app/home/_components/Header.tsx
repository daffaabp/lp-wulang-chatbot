import Image from "next/image";
import NavLink from "./Navlink";

const Header = () => {
	return (
		<header className="w-full border-b bg-[#F6F6F6]">
			<div className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
				{/* Brand section */}
				<div id="brand" className="flex items-center">
					<div className="w-24 h-8 relative">
						<Image
							src="/images/kelasinovatif-clean.png"
							alt="Kelas Inovatif Logo"
							fill
							className="object-contain"
							priority
						/>
					</div>
					{/* <span className="ml-2 text-xl font-semibold">Wulang AI</span> */}
				</div>

				{/* Navigation */}
				<nav className="mx-auto">
					<div className="flex items-center gap-8 rounded-md bg-white/80 backdrop-blur-sm border px-8 py-2 shadow-sm">
						<NavLink href="/features">Features</NavLink>
						<NavLink href="/about">About</NavLink>
						<NavLink href="/pricing">Pricing</NavLink>
						<NavLink href="/integrations">Integrations</NavLink>
					</div>
				</nav>

				{/* Right section for balance */}
				<div className="w-[100px]" />
			</div>
		</header>
	);
};

export default Header;
