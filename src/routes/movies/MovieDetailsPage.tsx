import { useMovieDetails } from "@/api/tmdb/useMovieDetails";
import { LoadingPage } from "@/components/LoadingPage";
import { MediaGallery } from "@/components/MediaGallery";
import { PageBackground } from "@/components/shared/PageBackground";
import { TMDB_IMAGE_CONFIG } from "@/lib/constants/images";
import { useParams } from "react-router";
import { MovieCast } from "./MovieCast";
import { MovieDetailsHeader } from "./MovieDetailsHeader";
import { ProductionCompanies } from "./ProductionCompanies";

export const MovieDetailsPage = () => {
	const { id } = useParams();
	const { data, isLoading } = useMovieDetails(id);
	console.log(data);

	if (isLoading) return <LoadingPage />;

	if (!data) return null;

	console.log(data);

	return (
		<div className="relative font-raleway">
			<PageBackground data={data.details} />

			<div className="relative z-10">
				<MovieDetailsHeader data={data.details} />
				<div className="space-y-10 text-neutral-100 p-2 lg:p-16 relative backdrop-blur-2xl backdrop-brightness-25">
					<section className="flex flex-col gap-y-4 lg:divide-x-[1px] divide-neutral-400 lg:flex-row  lg:space-x-4 text-white rounded-xl p-2 lg:p-0 max-w-6xl mx-auto my-10">
						{/* Poster */}
						<div className="w-full lg:w-1/3 flex-shrink-0 lg:pr-4">
							<img
								src={`${TMDB_IMAGE_CONFIG.base_url}${TMDB_IMAGE_CONFIG.poster_sizes.original}${data.details.poster_path}`}
								alt={`${data.details.title} poster`}
								className="rounded-xl shadow-lg w-full object-cover"
							/>
						</div>

						{/* Info Section */}
						<div className="flex flex-col justify-between gap-4 w-full min-h-full md:w-1/2">
							<div>
								<h1 className="text-3xl md:text-4xl font-bold">
									{data.details.title}
								</h1>
								<p className="text-lg text-gray-400">
									{data.details.release_date?.slice(0, 4)}
								</p>
							</div>

							<div>
								<h2 className="text-xl font-semibold">Overview</h2>
								<p className="text-gray-300 font-medium leading-relaxed">
									{data.details.overview}
								</p>
							</div>

							{/* Optional Metadata */}

							<div>
								<span className="font-semibold">Genres:</span>{" "}
								{data.details.genres.map((g) => g.name).join(", ")}
							</div>
							<div>
								<span className="font-semibold">Runtime:</span>{" "}
								{data.details.runtime} min
							</div>
							<div>
								<span className="font-semibold">Rating:</span>{" "}
								{data.details.vote_average.toFixed(1)}/10
							</div>
							<div>
								<span className="font-semibold">Production Companies:</span>{" "}
								{data.details.production_companies
									.map((company) => company.name)
									.join(", ")}
							</div>
						</div>
					</section>
					<ProductionCompanies companies={data.details.production_companies} />
					<MovieCast credits={data.credits} />
					<div className="space-y-2">
						<h3 className="font-semibold text-3xl">You might like...</h3>
						<MediaGallery mediaList={data.recommendations.results} />
					</div>
				</div>
			</div>
		</div>
	);
};
