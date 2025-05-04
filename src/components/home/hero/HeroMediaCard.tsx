import { Card, CardContent } from "@/components/ui/card";
import { TMDB_IMAGE_CONFIG } from "@/lib/constants/images";
import { Media } from "@/types/media";

type HeroMediaCardProps = {
	media: Media;
	isSelected: boolean;
};

export const HeroMediaCard = ({ media, isSelected }: HeroMediaCardProps) => {
	return (
		<Card
			className={`h-full p-0 overflow-hidden bg-transparent border-none rounded-md hover:brightness-100 ${
				isSelected ? "brightness-100" : "brightness-50"
			} transition-all select-none`}
		>
			<CardContent className="flex h-full p-0">
				<img
					src={`${TMDB_IMAGE_CONFIG.base_url}${TMDB_IMAGE_CONFIG.poster_sizes.original}${media.poster_path}`}
					alt={media.title || media.name}
					title={media.title || media.name}
					className="object-cover"
				/>
			</CardContent>
		</Card>
	);
};
