import { TMDB_IMAGE_CONFIG } from "@/lib/constants/images";
import { Media } from "@/types/media";
import { NavLink } from "react-router";
import { Card, CardContent } from "./ui/card";

type GalleryCardProps = {
	media: Media;
};

export const GalleryCard = ({ media }: GalleryCardProps) => {
	return (
		<Card className="group relative p-0 gap-0 rounded-none overflow-hidden bg-transparent border-none  hover:brightness-100 select-none shadow-none">
			<CardContent className="p-0 h-full">
				<NavLink
					to={`/${media.media_type === "tv" ? "series" : "movies"}/${media.id}`}
				>
					<img
						src={`${TMDB_IMAGE_CONFIG.base_url}${TMDB_IMAGE_CONFIG.poster_sizes.original}${media.poster_path}`}
						alt={media.title || media.name}
						title={media.title || media.name}
						loading="lazy"
						className="rounded-md h-full object-cover"
					/>
				</NavLink>
			</CardContent>
			<div className="pt-2 font-semibold text-neutral-100 mt-full basis-1">
				<NavLink
					to={`/${media.media_type === "tv" ? "series" : "movies"}/${media.id}`}
					className={"flex w-fit"}
				>
					<h3 className="line-clamp-1 hover:underline">
						{media.title || media.name}
					</h3>
				</NavLink>
			</div>
		</Card>
	);
};
