"use client";

import Image from "next/image";

interface UserAvatarGroupProps {
	users?: Array<{
		title: string;
		imageUrl?: string;
	}>;
	maxDisplayed?: number;
	size?: number;
}

export default function UserAvatarGroup({
	users = [],
	maxDisplayed = 3,
	size = 9,
}: UserAvatarGroupProps) {
	const displayedUsers = users.slice(0, maxDisplayed);
	const sizeInRem = size * 0.25; // Convert Tailwind units to rem (1 unit = 0.25rem)
	const sizeInPx = size * 4; // Convert to pixels (1 unit = 4px)

	// Array of valid Unsplash photo IDs for avatars
	const defaultAvatarIds = [
		"1438761681033-6461ffad8d80", // Person 1
		"1472099645785-5658abf4ff4e", // Person 2
		"1494790108377-be9c29b29330", // Person 3
		"1527980965255-d3b416303d12", // Person 4
		"1544005313-94ddf0286df2", // Person 5
	];

	// Get default avatar URL with valid photo ID
	const getDefaultAvatarUrl = (index: number) => {
		const photoId = defaultAvatarIds[index % defaultAvatarIds.length];
		return `https://images.unsplash.com/photo-${photoId}?fit=crop&w=${sizeInPx}&h=${sizeInPx}&q=80`;
	};

	return (
		<div className="flex -space-x-2 mb-4">
			{displayedUsers.map((user, index) => (
				<div
					key={`${user.title}-${index}`}
					style={{ width: `${sizeInRem}rem`, height: `${sizeInRem}rem` }}
					className="relative rounded-full border-[1.5px] border-white bg-gradient-to-br from-purple-50 to-white overflow-hidden"
					title={user.title}
				>
					<Image
						src={user.imageUrl || getDefaultAvatarUrl(index)}
						alt={user.title}
						fill
						className="object-cover"
						sizes={`${sizeInRem}rem`}
					/>
				</div>
			))}
		</div>
	);
}
