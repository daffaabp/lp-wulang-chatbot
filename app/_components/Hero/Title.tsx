import { Arimo } from "next/font/google";
import React from "react";
import styles from "./title.module.css";

const arimo = Arimo({
	weight: ["400"],
	subsets: ["latin"],
	display: "swap",
});

export default function Title() {
	return (
		<div className={styles.titleContainer}>
			{/* Top Title Group */}
			<div className={styles.titleGroup}>
				<span className={styles.titleText}>AI chat</span>
				{/* Sound Wave SVG */}
				<div className={styles.soundWave}>
					<svg
						viewBox="0 0 120 40"
						className={styles.soundWaveSvg}
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
				<span className={styles.titleText}>that feels</span>
			</div>

			{/* Bottom Title Group */}
			<div className={styles.titleGroup}>
				<span className={styles.titleText}>surprisingly</span>
				<span className={`${styles.humanText} ${arimo.className}`}>human</span>
			</div>

			{/* Button */}
			<button type="button" className={styles.tryButton}>
				TRY FOR FREE
			</button>
		</div>
	);
}
