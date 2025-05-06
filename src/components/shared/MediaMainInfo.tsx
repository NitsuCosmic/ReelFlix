import { TMDB_IMAGE_CONFIG } from "@/lib/constants/images";
import { ExternalLinkIcon, PlayIcon } from "lucide-react";

export const MediaMainInfo = ({ media }) => {
	return (
		<section className="mt-16 lg:mt-0 flex flex-col gap-y-4 lg:divide-x-[1px] divide-neutral-400 lg:flex-row  lg:space-x-4 text-white rounded-xl p-2 lg:p-0 max-w-6xl mx-auto my-10">
			{/* Poster */}
			<div className="w-full lg:w-1/3 flex-shrink-0 lg:pr-4">
				<img
					src={`${TMDB_IMAGE_CONFIG.base_url}${TMDB_IMAGE_CONFIG.poster_sizes.original}${media.poster_path}`}
					alt={`${media.title} poster`}
					className="rounded-xl shadow-lg w-full object-cover"
				/>
			</div>

			{/* Info Section */}
			<div className="flex flex-col justify-between gap-4 w-full min-h-full md:w-1/2">
				<div className="flex items-center gap-2 lg:hidden">
					<button className="flex items-center justify-center gap-2 cursor-pointer w-fit px-4 py-2 rounded-full bg-neutral-100 text-black font-semibold hover:bg-neutral-200 transition-colors">
						<PlayIcon />
						Watch Trailer
					</button>
					{media.homepage ? (
						<a href={media.homepage} target="_blank">
							<button className="flex items-center justify-center gap-2 cursor-pointer w-fit px-4 py-2 rounded-full bg-black/50 text-neutral-100 font-semibold backdrop-blur-xs border-1 border-neutral-100 hover:bg-neutral-100 hover:text-black transition-colors">
								<ExternalLinkIcon />
								Homepage
							</button>
						</a>
					) : null}
				</div>
				<div>
					<h1 className="text-3xl md:text-4xl font-bold">
						{media.title || media.name}
					</h1>
					<p className="text-lg text-neutral-300">
						{media.release_date?.slice(0, 4) ||
							media.first_air_date?.slice(0, 4)}
					</p>
				</div>

				{media.tagline && (
					<h3 className="text-lg font-medium">"{media.tagline}"</h3>
				)}

				<div>
					<h2 className="text-xl font-semibold">Overview</h2>
					<p className="text-neutral-200 font-medium leading-relaxed">
						{media.overview}
					</p>
				</div>

				{/* Optional Metadata */}

				<div>
					<span className="font-semibold">Genres:</span>{" "}
					{media.genres.map((g) => g.name).join(", ")}
				</div>
				{media.runtime && (
					<div>
						<span className="font-semibold">Runtime:</span> {media.runtime} min
					</div>
				)}
				{media.number_of_seasons && (
					<div>
						<span className="font-semibold">Seasons:</span>{" "}
						{media.number_of_seasons}
					</div>
				)}
				<div>
					<span className="font-semibold">Rating:</span>{" "}
					{media.vote_average.toFixed(1)}/10
				</div>
				<div>
					<span className="font-semibold">Production Companies:</span>{" "}
					{media.production_companies.map((company) => company.name).join(", ")}
				</div>
			</div>
		</section>
	);
};
