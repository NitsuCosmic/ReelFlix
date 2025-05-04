import { Card, CardContent } from "@/components/ui/card";
import { TMDB_IMAGE_CONFIG } from "@/lib/constants/images";
import { Media } from "@/types/media";
import { PlayCircleIcon } from "lucide-react";
import { NavLink } from "react-router";

type MediaCardProps = {
	media: Media;
};

export const MediaCard = ({ media }: MediaCardProps) => {
	const formatMediaDate = (dateString?: string): string => {
		if (!dateString) return "No release date";

		try {
			const date = new Date(dateString);
			return date.toLocaleDateString("en-US", {
				year: "numeric",
				month: "long",
				day: "numeric",
			});
		} catch {
			return "Invalid date";
		}
	};

	return (
		<Card className="group relative p-0 overflow-hidden bg-transparent border-none rounded-md lg:rounded-none hover:brightness-100 select-none lg:aspect-video">
			<NavLink
				to={`${media.media_type === "tv" ? "series" : "movies"}/${media.id}`}
			>
				<CardContent className="p-0">
					<picture>
						<source
							media="(min-width:1024px)"
							srcSet={`${TMDB_IMAGE_CONFIG.base_url}${TMDB_IMAGE_CONFIG.backdrop_sizes.original}${media.backdrop_path}`}
							title={media.title || media.name}
						/>
						<img
							src={`${TMDB_IMAGE_CONFIG.base_url}${TMDB_IMAGE_CONFIG.poster_sizes.original}${media.poster_path}`}
							alt={media.title || media.name}
							title={media.title || media.name}
							loading="lazy"
						/>
					</picture>
					<div className="hidden absolute inset-0 lg:flex items-end p-2 font-semibold text-neutral-100">
						<div className="text-shadow-md/70 z-10">
							<h3>{media.title || media.name}</h3>
							<p className="font-normal text-sm">
								{formatMediaDate(media.release_date) ||
									formatMediaDate(media.first_air_date)}
							</p>
						</div>
					</div>
					<div className="hidden lg:block absolute h-[20%] bottom-0 w-full bg-gradient-to-t from-black via-black/40 to-transparent"></div>
					<div className="hidden lg:flex justify-center items-center absolute inset-0 w-full h-full text-neutral-100 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
						<PlayCircleIcon className="h-12 w-12" />
					</div>
				</CardContent>
			</NavLink>
		</Card>
	);
};
