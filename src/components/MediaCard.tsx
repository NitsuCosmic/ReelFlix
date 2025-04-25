import { Card, CardContent } from "@/components/ui/card";
import { TMDB_IMAGE_CONFIG } from "@/lib/constants/images";
import { Media } from "@/types/media";

type MediaCardProps = {
	media: Media;
};

export const MediaCard = ({ media }: MediaCardProps) => {
	return (
		<Card className="relative p-0 overflow-hidden bg-transparent border-none rounded-md hover:brightness-100 select-none lg:aspect-video">
			<CardContent className="p-0">
				<picture>
					<source
						media="(min-width:1024px)"
						srcSet={`${TMDB_IMAGE_CONFIG.base_url}${TMDB_IMAGE_CONFIG.backdrop_sizes[3]}${media.backdrop_path}`}
					/>
					<img
						src={`${TMDB_IMAGE_CONFIG.base_url}${TMDB_IMAGE_CONFIG.poster_sizes[3]}${media.poster_path}`}
						alt={media.title || media.name}
						title={media.title || media.name}
					/>
				</picture>
				<div className="hidden absolute inset-0 lg:flex items-end p-2 font-semibold text-neutral-100">
					<h3 className="text-shadow-md/70 z-10">
						{media.title || media.name}
					</h3>
				</div>
				<div className="hidden lg:block absolute h-[20%] bottom-0 w-full bg-gradient-to-t from-black via-black/40 to-transparent"></div>
			</CardContent>
		</Card>
	);
};
