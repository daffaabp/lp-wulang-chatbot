import Image from "next/image";

interface Avatar {
	src: string;
	alt: string;
}

interface AvatarGroupProps {
	avatars: Avatar[];
}

export default function AvatarGroup({ avatars }: AvatarGroupProps) {
	return (
		<div className="flex items-center gap-2">
			<div className="flex -space-x-2">
				{avatars.map((avatar) => (
					<Image
						key={avatar.alt}
						src={avatar.src}
						alt={avatar.alt}
						width={32}
						height={32}
						className="rounded-full border-2 border-white"
					/>
				))}
			</div>
		</div>
	);
}
