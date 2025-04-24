import { Badge } from "@/components/ui/badge";
import { useCarousel } from "@/hooks/useCarousel";
import { useMedia } from "@/hooks/useMedia";
import { TMDB_IMAGE_CONFIG } from "@/lib/constants/images";
import { getMediaGenre } from "@/lib/utils/getMedia";
import { PlayIcon } from "lucide-react";
import { HeroCarousel } from "./HeroCarousel";

export const HeroDisplay = () => {
	const { media } = useMedia();
	const { currentIndex, setCurrentIndex } = useCarousel();

	if (!media.length) return null;

	const currentMedia = media[currentIndex];
	const backdropUrl = currentMedia.backdrop_path
		? `${TMDB_IMAGE_CONFIG.base_url}${TMDB_IMAGE_CONFIG.backdrop_sizes[3]}${currentMedia.backdrop_path}`
		: null;

	return (
		<div className="min-h-svh">
			{media.length > 0 && (
				<div
					className="min-h-svh bg-cover bg-center bg-no-repeat bg-[] max-h-svh"
					style={{
						backgroundImage: `linear-gradient(rgba(0,0,0,0.10), rgba(0,0,0,0.10)),
    url(${backdropUrl})`,
					}}
				>
					<div className="min-h-svh flex flex-col justify-end gap-4 text-neutral-100 font-raleway px-2 lg:px-16 py-3">
						<h1 className="font-semibold text-4xl md:text-5xl text-shadow-md/50 ">
							{media[currentIndex].title || media[currentIndex].name}
						</h1>
						<div className="flex items-center gap-2 flex-wrap">
							{media[currentIndex].genre_ids.map((genre, index) => (
								<Badge key={index} className="px-2 text-sm">
									{getMediaGenre(media[currentIndex].media_type, genre)}
								</Badge>
							))}
						</div>
						<button className="flex items-center justify-center gap-2 cursor-pointer w-fit px-4 py-2 rounded-full border">
							<PlayIcon />
							Play
						</button>
						<HeroCarousel
							media={media}
							currentIndex={currentIndex}
							setCurrentIndex={setCurrentIndex}
						/>
					</div>
				</div>
			)}
		</div>
	);
};
