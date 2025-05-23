import { TMDB_IMAGE_CONFIG } from "@/lib/constants/images";
import { Media } from "@/types/media";

type PageBackgroundProps = {
	data: Media;
};

export const PageBackground = ({ data }: PageBackgroundProps) => {
	return (
		<div className="fixed z-0 mx-auto w-full md:w-screen h-screen overflow-hidden max-w-[1920px]">
			<picture>
				<source
					srcSet={`${TMDB_IMAGE_CONFIG.base_url}${TMDB_IMAGE_CONFIG.poster_sizes.original}${data.poster_path}`}
					media="(max-width: 1023px)"
				/>
				<img
					src={`${TMDB_IMAGE_CONFIG.base_url}${TMDB_IMAGE_CONFIG.backdrop_sizes.original}${data.backdrop_path}`}
					alt={data.title}
					className="w-full h-full object-cover"
				/>
			</picture>
		</div>
	);
};
