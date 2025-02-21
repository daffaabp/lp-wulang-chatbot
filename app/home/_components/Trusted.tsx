import Image from "next/image";

const aiModels = [
	{
		src: "/images/ai/openai.png",
		alt: "OpenAI GPT-4",
		width: 160,
	},
	{
		src: "/images/ai/deepseek.png",
		alt: "DeepSeek AI",
		width: 160,
	},
	{
		src: "/images/ai/qwen-icon-seeklogo.svg",
		alt: "Qwen AI",
		width: 120,
	},
];

export default function Trusted() {
	return (
		<div className="relative overflow-hidden bg-gradient-to-r from-[#FFF3E0] via-[#E5D5F5] to-[#FDF2F8] py-8">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
				<p className="text-gray-800 text-lg font-medium mb-2">
					Powered by Advanced AI Models
				</p>
				<p className="text-gray-600 text-sm mb-8">
					Integrating cutting-edge AI technology for optimal results
				</p>

				<div className="flex justify-center items-center gap-12 flex-wrap">
					{aiModels.map((model) => (
						<div
							key={model.alt}
							className="relative hover:scale-105 transition-transform duration-300"
							style={{ width: model.width, height: "50px" }}
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
		</div>
	);
}
