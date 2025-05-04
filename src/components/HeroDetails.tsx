import { TMDB_IMAGE_CONFIG } from "@/lib/constants/images";
import { getMediaGenre } from "@/lib/utils/getMedia";
import { Media } from "@/types/media";
import { Badge, PlayIcon } from "lucide-react";

type HeroDetailsProps = {
	media: Media;
};

export const HeroDetails = ({ media }: HeroDetailsProps) => {
	const backdropUrl = media.backdrop_path
		? `${TMDB_IMAGE_CONFIG.base_url}${TMDB_IMAGE_CONFIG.backdrop_sizes.original}${media.backdrop_path}`
		: null;

	return (
		<div className="h-svh">
			<div
				className="h-svh bg-cover bg-center bg-no-repeat max-h-svh"
				style={{
					backgroundImage: `linear-gradient(rgba(0,0,0,0.10), rgba(0,0,0,0.10)),
    url(${backdropUrl})`,
				}}
			>
				<div className="min-h-svh flex flex-col justify-end gap-4 text-neutral-100 font-raleway px-2 lg:px-16 py-3">
					<h1 className="font-semibold text-4xl md:text-5xl text-shadow-md/50 ">
						{media.title || media.name}
					</h1>
					<div className="flex items-center gap-2 flex-wrap">
						{media.genre_ids.map((genre, index) => (
							<Badge key={index} className="px-2 text-sm">
								{getMediaGenre(media.media_type, genre)}
							</Badge>
						))}
					</div>
					<button className="flex items-center justify-center gap-2 cursor-pointer w-fit px-4 py-2 rounded-full border">
						<PlayIcon />
						Play
					</button>
				</div>
			</div>
		</div>
	);
};
