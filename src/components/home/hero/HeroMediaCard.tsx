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
			className={`p-0 overflow-hidden bg-transparent border-none rounded-md hover:brightness-100 ${
				isSelected ? "brightness-100" : "brightness-50"
			} transition-all select-none`}
		>
			<CardContent className="p-0">
				<img
					src={`${TMDB_IMAGE_CONFIG.base_url}${TMDB_IMAGE_CONFIG.poster_sizes[3]}${media.poster_path}`}
					alt={media.title || media.name}
					title={media.title || media.name}
				/>
			</CardContent>
		</Card>
	);
};
