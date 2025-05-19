import { TMDB_IMAGE_CONFIG } from "@/lib/constants/images";
import { Media } from "@/types/media";
import { PlayCircleIcon } from "lucide-react";
import { createContext, PropsWithChildren, useContext } from "react";
import { NavLink } from "react-router";
import { Card, CardContent } from "../ui/card";

type MediaCardContext = {
	media: Media;
};

type MediaCardProps = PropsWithChildren & {
	media: Media;
};

const MediaCardContext = createContext<MediaCardContext | undefined>(undefined);

const useMediaCardContext = () => {
	const context = useContext(MediaCardContext);
	if (!context)
		throw new Error("useMediaCardContext must be used within a MediaCard");
	return context;
};

export const MediaCard = ({ children, media }: MediaCardProps) => {
	return (
		<MediaCardContext.Provider value={{ media }}>
			<Card className="group relative p-0 min-h-full min-w-full overflow-hidden bg-transparent border-none shadow-none rounded-md lg:rounded-none hover:brightness-100 select-none max-w-[320px]">
				<CardContent className="flex flex-col p-0 w-full h-full">
					<NavLink
						to={`/${media.media_type === "tv" ? "series" : "movies"}/${
							media.id
						}`}
					>
						{children}
					</NavLink>
				</CardContent>
			</Card>
		</MediaCardContext.Provider>
	);
};

MediaCard.HoverContent = function MediaCardHoverContent() {
	return (
		<div className="hidden lg:flex justify-center items-center absolute inset-0 w-full h-full text-neutral-100 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
			<PlayCircleIcon className="h-12 w-12" />
		</div>
	);
};

MediaCard.AbsoluteInfo = function MediaCardAbsoluteInfo() {
	const { media } = useMediaCardContext();

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
		<div className="hidden absolute inset-0 lg:flex items-end p-2 font-semibold text-neutral-100">
			<div className="text-shadow-md/50 z-10">
				<h3>{media.title || media.name}</h3>
				<p className="font-normal text-sm">
					{formatMediaDate(media.release_date || media.first_air_date)}
				</p>
			</div>
			<div className="hidden lg:block absolute bottom-0 left-0 w-full h-[20%] bg-gradient-to-b from-transparent via-black/50 to-black/80"></div>
		</div>
	);
};

MediaCard.Backdrop = function MediaCardBackdrop() {
	const { media } = useMediaCardContext();

	return (
		<picture>
			<img
				src={`${TMDB_IMAGE_CONFIG.base_url}${TMDB_IMAGE_CONFIG.backdrop_sizes.original}${media.backdrop_path}`}
				alt={`${media.title || media.name}'s Backdrop`}
				title={media.title || media.name}
				loading="lazy"
				className="w-full h-full object-cover"
			/>
		</picture>
	);
};

MediaCard.Poster = function MediaCardPoster() {
	const { media } = useMediaCardContext();

	return (
		<div>
			<img
				src={`${TMDB_IMAGE_CONFIG.base_url}${TMDB_IMAGE_CONFIG.poster_sizes.original}${media.poster_path}`}
				alt={`${media.title || media.name}'s Poster`}
				title={media.title || media.name}
				loading="lazy"
				className="w-full h-full object-cover rounded-lg text-neutral-100"
			/>
		</div>
	);
};

MediaCard.ResImage = function MediaCardResImage() {
	const { media } = useMediaCardContext();

	return (
		<picture>
			<source
				media="(max-width: 1023px)"
				srcSet={`${TMDB_IMAGE_CONFIG.base_url}${TMDB_IMAGE_CONFIG.poster_sizes.original}${media.poster_path}`}
			/>
			<img
				src={`${TMDB_IMAGE_CONFIG.base_url}${TMDB_IMAGE_CONFIG.backdrop_sizes.original}${media.backdrop_path}`}
				title={media.title || media.name}
				loading="lazy"
				className="rounded-lg"
			/>
		</picture>
	);
};

MediaCard.Title = function MediaCardTitle() {
	const { media } = useMediaCardContext();

	return (
		<h3 className="text-neutral-100 font-semibold line-clamp-1 hover:underline">
			{media.title || media.name}
		</h3>
	);
};
