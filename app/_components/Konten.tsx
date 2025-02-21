import { Sparkles, Star, TrendingUp } from "lucide-react";
import Image from "next/image";
import React from "react";
import UserAvatarGroup from "./UserAvatarGroup";

export default function Konten() {
	const avatars = [
		{ id: "avatar1", title: "User 1" },
		{ id: "avatar2", title: "User 2" },
		{ id: "avatar3", title: "User 3" },
	];

	// More dynamic waveform
	const waveformBars = Array.from({ length: 16 }, (_, i) => ({
		id: `bar-${i}`,
		height: Math.abs(Math.sin(i * 0.5) * 25),
		y: 15 - Math.abs(Math.sin(i * 0.5) * 12.5),
	}));

	return (
		<div className="relative w-full overflow-hidden">
			{/* Background Pattern */}
			<div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,transparent)] pointer-events-none opacity-30" />

			{/* Headline Section */}
			<div className="relative text-center mb-16">
				<h1 className="text-5xl md:text-6xl font-bold text-[#1D1B3F] mb-8 leading-[1.1] font-['Sulphur_Point'] tracking-[-0.02em]">
					<span className="inline-block mb-1">AI chat</span>
					{/* Waveform */}
					<span className="inline-block mx-6">
						<svg
							className="w-28 h-8"
							viewBox="0 0 160 40"
							aria-label="Audio waveform visualization"
						>
							<title>Audio waveform</title>
							{waveformBars.map((bar) => (
								<rect
									key={bar.id}
									x={Number.parseInt(bar.id.split("-")[1]) * 9 + 4}
									y={bar.y}
									width="2"
									height={bar.height}
									className="fill-[#7C3AED] animate-pulse"
								/>
							))}
						</svg>
					</span>
					<span className="inline-block mb-1">that feels</span>
					<br />
					<span className="relative inline-block">
						surprisingly
						<span className="relative inline-block ml-4">
							human
							<div
								className="absolute inset-0 -z-10 rounded-full transform scale-125"
								style={{
									background:
										"linear-gradient(135deg, #FFF4E8 0%, #E5E7FF 100%)",
									boxShadow: "0 8px 32px -8px rgba(124, 58, 237, 0.2)",
								}}
							/>
						</span>
					</span>
				</h1>
				<button
					type="button"
					className="bg-[#1D1B3F] text-white px-8 py-3 rounded-full text-base font-medium hover:bg-[#2D2B4F] transition-all hover:shadow-lg hover:scale-105 shadow-sm"
				>
					TRY FOR FREE
				</button>
			</div>

			{/* Main Content Grid */}
			<div className="relative max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
				{/* Left Stats */}
				<div className="md:col-span-3 space-y-8">
					{/* User satisfaction */}
					<div className="relative">
						<div className="bg-white rounded-xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_2px_12px_rgba(0,0,0,0.08)] transition-shadow">
							<UserAvatarGroup
								users={avatars.map((avatar) => ({
									title: avatar.title,
								}))}
								maxDisplayed={3}
								size={9}
							/>
							<div className="space-y-1">
								<div className="text-xl font-semibold text-[#1D1B3F] leading-none">
									90% Feels Like
								</div>
								<div className="text-[#FF5722] font-medium text-base">
									Human Voice
								</div>
							</div>
						</div>
						{/* Curved Connector Line */}
						<svg
							className="hidden md:block absolute -right-8 top-1/2 w-8 h-12 -mt-6"
							aria-hidden="true"
						>
							<path
								d="M0,24 C10,24 20,12 32,12"
								stroke="#E5E5E5"
								strokeWidth="1"
								fill="none"
							/>
						</svg>
					</div>

					{/* Efficiency stats */}
					<div className="relative">
						<div className="bg-white rounded-xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_2px_12px_rgba(0,0,0,0.08)] transition-shadow">
							<div className="flex items-start gap-3 mb-3">
								<div className="mt-1">
									<div className="p-2 rounded-full bg-[#E8FAE5]">
										<TrendingUp className="w-5 h-5 text-[#4ADE80]" />
									</div>
								</div>
								<span className="text-4xl font-bold text-[#1D1B3F] leading-none">
									89%
								</span>
							</div>
							<div className="text-[#64748B] text-sm leading-snug pl-1">
								More Efficient &<br />
								Effective
							</div>
						</div>
						{/* Curved Connector Line */}
						<svg
							className="hidden md:block absolute -right-8 top-1/2 w-8 h-12 -mt-6"
							aria-hidden="true"
						>
							<path
								d="M0,24 C10,24 20,12 32,12"
								stroke="#E5E5E5"
								strokeWidth="1"
								fill="none"
							/>
						</svg>
					</div>
				</div>

				{/* Center Image */}
				<div className="md:col-span-6 relative px-4">
					<div
						className="aspect-[4/3] relative rounded-2xl overflow-hidden p-4"
						style={{
							background: "#E5E7FF",
							boxShadow: "0 4px 16px -4px rgba(124, 58, 237, 0.15)",
						}}
					>
						<Image
							src="/images/remove-bg/wulangai1.png"
							alt="Wulang AI Logo"
							fill
							className="object-contain scale-90"
							priority
						/>
					</div>
				</div>

				{/* Right Content */}
				<div className="md:col-span-3 space-y-3">
					<div className="inline-block">
						<div className="bg-white rounded-full px-2 py-1 shadow-[0_2px_8px_rgba(0,0,0,0.08)] flex items-center gap-1.5">
							<Sparkles className="w-3.5 h-3.5 text-[#F97316]" />
							<span className="font-medium text-[#1D1B3F] text-xs">
								Powered by GPT 4
							</span>
						</div>
					</div>
					<p className="text-gray-600 text-xs leading-relaxed">
						Interacting with artificial intelligence used to feel difficult,
						overwhelming, and a bit robotic
					</p>
				</div>
			</div>

			{/* Trust Section */}
			<div
				className="mt-24 py-12 px-4"
				style={{
					background: "linear-gradient(180deg, #FFF4E8 0%, #FFF8F3 100%)",
				}}
			>
				<div className="max-w-5xl mx-auto">
					<p className="text-center text-gray-700 mb-8 text-base">
						Trusted by 1,000,000+ marketing teams, agencies, and freelancers.
						<br />
						<span className="inline-flex items-center gap-2 mt-2">
							<Star className="w-4 h-4 text-yellow-400" />
							10,000+ 5-star ratings
						</span>
					</p>
					<div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
						{["Asana", "Dokey", "Discord", "ClickUp"].map((brand) => (
							<div
								key={brand}
								className="text-gray-400 text-lg font-light hover:text-gray-600 transition-colors"
							>
								{brand}
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
