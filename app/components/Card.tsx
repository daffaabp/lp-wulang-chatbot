import Image from "next/image";

interface CardProps {
	title: string;
	description: string;
	image?: string;
	price?: string;
	features?: string[];
	className?: string;
}

const Card = ({
	title,
	description,
	image,
	price,
	features,
	className = "",
}: CardProps) => {
	return (
		<div
			className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}
		>
			{image && (
				<div className="relative w-full h-48">
					<Image src={image} alt={title} fill className="object-cover" />
				</div>
			)}
			<div className="p-6">
				<h3 className="text-xl font-semibold mb-2">{title}</h3>
				{price && (
					<p className="text-2xl font-bold text-primary mb-4">{price}</p>
				)}
				<p className="text-gray-600 mb-4">{description}</p>
				{features && features.length > 0 && (
					<ul className="space-y-2">
						{features.map((feature) => (
							<li key={feature} className="flex items-center">
								<span className="mr-2">•</span>
								<span>{feature}</span>
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
};

export default Card;
