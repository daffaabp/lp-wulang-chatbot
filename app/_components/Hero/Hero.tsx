import { ArrowUpRight, Zap } from "lucide-react";
import Image from "next/image";
import React from "react";
import AvatarGroup from "./AvatarGroup";
import styles from "./hero.module.css";

const avatars = [
	{
		src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&fit=crop&crop=face",
		alt: "Profile 1",
	},
	{
		src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=32&h=32&fit=crop&crop=face",
		alt: "Profile 2",
	},
	{
		src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=32&h=32&fit=crop&crop=face",
		alt: "Profile 3",
	},
];

export default function Hero() {
	return (
		<section id="hero" className={styles.heroSection}>
			<div className={styles.heroGrid}>
				{/* Left Section */}
				<div className={styles.leftSection}>
					{/* Human Voice Card */}
					<div className={styles.humanVoiceCard}>
						<div className="flex items-center gap-2">
							<AvatarGroup avatars={avatars} />
						</div>
						<p className="mt-3 font-semibold text-lg text-[#1E1B4B]">
							90% Feels Like
						</p>
						<p className="text-orange-500 font-semibold text-lg">Human Voice</p>
					</div>

					{/* Stats Card */}
					<div className={styles.statsCard}>
						<div className="bg-emerald-500 p-2 rounded-full">
							<ArrowUpRight className="text-white h-5 w-5" />
						</div>
						<div>
							<div className="flex items-baseline gap-1">
								<span className="text-4xl font-medium text-[#1E1B4B]">89%</span>
								<span className="text-emerald-500 font-medium">↑</span>
							</div>
							<p className="text-gray-600 text-lg font-medium">
								More Efficient
							</p>
						</div>
					</div>
				</div>

				{/* Center Image */}
				<div className={styles.heroImageContainer}>
					<h1 className={styles.heroTitle}>Wulang AI</h1>
					<div className="relative w-full aspect-square flex items-center justify-center">
						<Image
							src="/images/remove-bg/wulangai1.png"
							alt="Wulang AI Assistant"
							width={400}
							height={400}
							className={styles.heroImage}
							priority
						/>
					</div>
				</div>

				{/* Right Section */}
				<div className={styles.rightSection}>
					<div className={styles.gptCard}>
						<div className="bg-gradient-to-br from-orange-500 to-orange-600 p-2 rounded-full">
							<Zap className="text-white h-6 w-6" />
						</div>
						<div className="flex flex-col">
							<span className="font-semibold text-lg text-[#1E1B4B]">
								Enhanced by GPT-4
							</span>
							<span className="text-gray-600 text-sm">
								Deepseek & More AI Models
							</span>
						</div>
					</div>

					<p className={styles.interactingText}>
						Interacting with artificial intelligence used to feel difficult,
						overwhelming, and a bit robotic.
					</p>
				</div>
			</div>
		</section>
	);
}
