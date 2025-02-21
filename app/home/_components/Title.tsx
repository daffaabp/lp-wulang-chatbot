import { Arimo } from "next/font/google";
import React from "react";

const arimo = Arimo({
	weight: ["400"],
	subsets: ["latin"],
	display: "swap",
});

export default function Title() {
	return (
		<div className="flex flex-col items-center text-center">
			{/* Top Title Group */}
			<div className="flex items-center gap-2 text-[2.5rem] font-sulphur-point text-[#1E1B4B] font-semibold">
				<span id="top_title_left">AI chat</span>
				{/* Sound Wave SVG */}
				<div id="sound_svg" className="w-24">
					<svg
						viewBox="0 0 120 40"
						className="w-full"
						aria-labelledby="soundWaveTitle"
					>
						<title id="soundWaveTitle">Sound wave visualization</title>
						<rect width="120" height="40" rx="20" fill="white" />
						<g
							stroke="#7C3AED"
							strokeWidth="3"
							strokeLinecap="round"
							transform="translate(10, 5)"
						>
							<line x1="5" y1="8" x2="5" y2="22" />
							<line x1="13" y1="5" x2="13" y2="25" />
							<line x1="21" y1="12" x2="21" y2="18" />
							<line x1="29" y1="3" x2="29" y2="27" />
							<line x1="37" y1="10" x2="37" y2="20" />
							<line x1="45" y1="2" x2="45" y2="28" />
							<line x1="53" y1="5" x2="53" y2="25" />
							<line x1="61" y1="8" x2="61" y2="22" />
							<line x1="69" y1="3" x2="69" y2="27" />
							<line x1="77" y1="10" x2="77" y2="20" />
							<line x1="85" y1="5" x2="85" y2="25" />
							<line x1="93" y1="8" x2="93" y2="22" />
						</g>
					</svg>
				</div>
				<span id="top_title_right">that feels</span>
			</div>

			{/* Bottom Title Group */}
			<div className="flex items-center -mt-2 gap-2 text-[2.5rem] font-sulphur-point text-[#1E1B4B] font-semibold">
				<span id="surpris">surprisingly</span>
				<span
					id="human"
					className={`${arimo.className} rounded-full bg-gradient-to-r from-[#F8E3D0] to-[#E5D5F5] px-4 py-1 transform rotate-[-8deg] text-black`}
				>
					human
				</span>
			</div>

			{/* Button */}
			<button
				id="button_free"
				type="button"
				className="mt-4 rounded-full bg-[#1E1B4B] px-8 py-3 text-white font-medium hover:bg-[#2E2A5B] transition-colors"
			>
				TRY FOR FREE
			</button>
		</div>
	);
}
