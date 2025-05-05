import { LinkButton } from "@/components/shared/LinkButton";
import { Badge } from "@/components/ui/badge";
import { useCarousel } from "@/hooks/useCarousel";
import { useMedia } from "@/hooks/useMedia";
import { TMDB_IMAGE_CONFIG } from "@/lib/constants/images";
import { getMediaGenre } from "@/lib/utils/getMedia";
import { InfoIcon } from "lucide-react";
import { NavLink } from "react-router";
import { HeroCarousel } from "./HeroCarousel";

export const HeroDisplay = () => {
	const { mediaList } = useMedia();
	const { currentIndex, setCurrentIndex } = useCarousel();

	if (!mediaList.length) return null;

	const currentMedia = mediaList[currentIndex];
	const backdropUrl = currentMedia.backdrop_path
		? `${TMDB_IMAGE_CONFIG.base_url}${TMDB_IMAGE_CONFIG.backdrop_sizes.original}${currentMedia.backdrop_path}`
		: null;

	return (
		<div className="h-svh">
			{mediaList.length > 0 && (
				<div
					className="h-svh bg-cover bg-center bg-no-repeat max-h-svh"
					style={{
						backgroundImage: `linear-gradient(rgba(0,0,0,0.10), rgba(0,0,0,0.10)),
    url(${backdropUrl})`,
					}}
				>
					<div className="min-h-svh flex flex-col justify-end gap-4 text-neutral-100 font-raleway px-2 lg:px-16 py-3">
						<h1 className="font-semibold text-4xl md:text-5xl text-shadow-md/50 ">
							{mediaList[currentIndex].title || mediaList[currentIndex].name}
						</h1>
						<div className="flex items-center gap-2 flex-wrap">
							{mediaList[currentIndex].genre_ids?.map((genre, index) => (
								<Badge key={index} className="px-2 text-sm">
									{getMediaGenre(mediaList[currentIndex].media_type, genre)}
								</Badge>
							))}
						</div>
						<NavLink
							to={`${
								mediaList[currentIndex].media_type === "tv"
									? "series"
									: "movies"
							}/${mediaList[currentIndex].id}`}
							className={"w-min"}
						>
							<LinkButton variant="primary">
								<InfoIcon />
								Details
							</LinkButton>
						</NavLink>
						<HeroCarousel
							mediaList={mediaList}
							currentIndex={currentIndex}
							setCurrentIndex={setCurrentIndex}
						/>
					</div>
				</div>
			)}
		</div>
	);
};
