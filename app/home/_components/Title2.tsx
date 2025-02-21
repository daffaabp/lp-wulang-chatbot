import React from "react";

export default function Title2() {
	return (
		<div className="flex flex-col items-center text-center">
			{/* Top Title Group */}
			<div className="flex items-center gap-2 text-[2.5rem] font-medium text-[#1E1B4B]">
				<span data-a="x">AI chat</span>
				{/* Sound Wave SVG */}
				<div data-a="y" className="w-24">
					<svg
						viewBox="0 0 100 30"
						className="w-full"
						aria-labelledby="soundWaveTitle"
					>
						<title id="soundWaveTitle">Sound wave visualization</title>
						<path
							d="M0 15 Q 10 5, 20 15 T 40 15 T 60 15 T 80 15 T 100 15"
							fill="none"
							stroke="#7C3AED"
							strokeWidth="2"
						/>
					</svg>
				</div>
				<span data-a="z">that feels</span>
			</div>

			{/* Bottom Title Group */}
			<div className="flex items-center gap-2 text-[2.5rem] font-medium text-[#1E1B4B]">
				<span data-a="s">surprisingly</span>
				<span
					data-a="h"
					className="rounded-full bg-gradient-to-r from-purple-100 to-purple-200 px-4 py-1"
				>
					human
				</span>
			</div>

			{/* Button */}
			<button
				data-a="b"
				type="button"
				className="mt-8 rounded-full bg-[#1E1B4B] px-8 py-3 text-white font-medium hover:bg-[#2E2A5B] transition-colors"
			>
				TRY FOR FREE
			</button>
		</div>
	);
}
