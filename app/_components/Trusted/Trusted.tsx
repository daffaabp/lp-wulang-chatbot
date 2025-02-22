import Image from "next/image";

const aiModels = [
	{
		src: "/images/ai/openai.png",
		alt: "OpenAI GPT-4",
		className: "w-[128px] sm:w-[160px]",
	},
	{
		src: "/images/ai/deepseek.png",
		alt: "DeepSeek AI",
		className: "w-[128px] sm:w-[160px]",
	},
	{
		src: "/images/ai/qwen-icon-seeklogo.svg",
		alt: "Qwen AI",
		className: "w-[96px] sm:w-[120px]",
	},
];

export default function Trusted() {
	return (
		<section className="relative overflow-hidden bg-gradient-to-r from-[#FFF3E0] via-[#E5D5F5] to-[#FDF2F8] py-6 sm:py-8">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
				<p className="text-base sm:text-lg font-medium text-gray-800 mb-1 sm:mb-2">
					Powered by Advanced AI Models
				</p>
				<p className="text-xs sm:text-sm text-gray-600 mb-6 sm:mb-8">
					Integrating cutting-edge AI technology for optimal results
				</p>

				<div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-12">
					{aiModels.map((model) => (
						<div
							key={model.alt}
							className={`relative hover:scale-105 transition-transform duration-300 h-[40px] sm:h-[50px] ${model.className}`}
						>
							<Image
								src={model.src}
								alt={model.alt}
								fill
								className="object-contain"
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
