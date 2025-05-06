import { Badge } from "@/components/ui/badge";
import { ExternalLinkIcon, PlayIcon } from "lucide-react";

export const MediaDetailsHeader = ({ data }) => {
	return (
		<div className="relative hidden md:inline">
			<div className="min-h-screen flex flex-col justify-end py-3 lg:py-16 2xl:py-32 gap-4 lg:gap-6 2xl:gap-8 text-neutral-100 font-raleway px-2 lg:px-16">
				<h1 className="font-semibold text-4xl md:text-5xl text-shadow-md/50">
					{data.title || data.name}
				</h1>
				<p className="font-semibold line-clamp-4 lg:text-lg 2xl:text-xl text-shadow-md/50 lg:max-w-[30%]">
					{data.overview}
				</p>
				<div className="flex flex-wrap divide-x-2 text-lg font-semibold text-shadow-md/50">
					<span className="pr-4">{data.vote_average.toFixed(1)}/10</span>
					<span className="px-4">
						{data.release_date?.slice(0, 4) || data.first_air_date?.slice(0, 4)}
					</span>
					{data.runtime && <span className="px-4">{data.runtime}min</span>}
					{data.number_of_seasons && (
						<span className="px-4">
							{data.number_of_seasons}{" "}
							{data.number_of_seasons > 1 ? "Seasons" : "Season"}
						</span>
					)}
				</div>
				<div className="flex items-center gap-2 flex-wrap">
					{data.genres.map((genre, index) => (
						<Badge
							key={index}
							className="px-2 text-sm bg-black/80  backdrop-blur-xs"
						>
							<p>{genre.name}</p>
						</Badge>
					))}
				</div>
				<div className="flex items-center gap-2">
					<button className="flex items-center justify-center gap-2 cursor-pointer w-fit px-4 py-2 rounded-full bg-neutral-100 text-black font-semibold hover:bg-neutral-200 transition-colors">
						<PlayIcon />
						Watch Trailer
					</button>
					{data.homepage ? (
						<a href={data.homepage} target="_blank">
							<button className="flex items-center justify-center gap-2 cursor-pointer w-fit px-4 py-2 rounded-full bg-black/50 text-neutral-100 font-semibold backdrop-blur-xs border-1 border-neutral-100 hover:bg-neutral-100 hover:text-black transition-colors">
								<ExternalLinkIcon />
								Homepage
							</button>
						</a>
					) : null}
				</div>
			</div>
		</div>
	);
};
