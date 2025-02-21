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
		<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center py-16">
			{/* Left Section */}
			<div className="relative flex flex-col items-end pr-24">
				{/* Human Voice Card */}
				<div className={styles.leftConnector}>
					<div
						id="human_voice"
						className="bg-white rounded-xl p-4 shadow-sm inline-block"
					> 
						<div className="flex items-center gap-2">
							<AvatarGroup avatars={avatars} />
						</div>
						<p className="mt-2 font-semibold">90% Feels Like</p>
						<p className="text-orange-500 font-semibold">Human Voice</p>
					</div>
				</div>

				{/* More Efficient Card */}
				<div className="mt-[100px]">
					<div id="more" className={`inline-block ${styles.rightConnector}`}>
						<div className="flex items-center gap-2">
							<div className="bg-emerald-500 p-2 rounded-full">
								<ArrowUpRight className="text-white h-5 w-5" />
							</div>
							<span className="text-4xl font-medium">89%</span>
						</div>
						<p className="text-gray-500 text-lg">
							More Efficient &<br />
							Effective
						</p>
					</div>
				</div>
			</div>

			{/* Center Image */}
			<div id="people" className="relative">
				<div className={styles.heroImageContainer}>
					<h1 className={styles.heroTitle}>Wulang AI</h1>
					<Image
						src="/images/remove-bg/wulangai1.png"
						alt="Wulang AI Assistant"
						width={400}
						height={400}
						className={styles.heroImage}
					/>
				</div>
			</div>

			<div className={styles.rightSection}>
				<div
					id="gpt4"
					className={`bg-white rounded-xl p-4 shadow-sm ${styles.gptCard}`}
				>
					<Zap className="text-orange-500 h-6 w-6" />
					<span className="font-semibold">Powered by GPT 4</span>
				</div>

				<p
					id="interacting"
					className={`text-gray-600 text-lg mt-16 ${styles.connector} font-sulphur-point font-semibold`}
				>
					Interacting with artificial intelligence used to feel difficult,
					overwhelming, and a bit robotic.
				</p>
			</div>
		</div>
	);
}
