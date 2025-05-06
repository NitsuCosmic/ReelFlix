import { LoadingPage } from "@/components/LoadingPage";
import { MediaGallery } from "@/components/MediaGallery";
import { MediaMainInfo } from "@/components/shared/MediaMainInfo";
import { PageBackground } from "@/components/shared/PageBackground";
import { useSeriesDetails } from "@/hooks/useSeriesDetails";
import { useParams } from "react-router";
import { MediaCast } from "../../components/shared/MediaCast";
import { MediaDetailsHeader } from "../movies/MediaDetailsHeader";
import { ProductionCompanies } from "../movies/ProductionCompanies";
import { SeriesEpisodes } from "./SeriesEpisodes";

export const SeriesDetailsPage = () => {
	const { id } = useParams();
	const { data, isLoading } = useSeriesDetails(id);
	console.log(data);

	if (isLoading) return <LoadingPage />;

	if (!data) return null;

	console.log(data);

	return (
		<div className="relative font-raleway">
			<PageBackground data={data.details} />

			<div className="relative z-10 overflow-hidden">
				<MediaDetailsHeader data={data.details} />
				<div className="space-y-10 text-neutral-100 p-2 lg:p-16 relative backdrop-blur-lg backdrop-brightness-50">
					<MediaMainInfo media={data.details} />
					<ProductionCompanies companies={data.details.production_companies} />
					<MediaCast credits={data.credits} />
					{data.details.number_of_seasons && (
						<SeriesEpisodes
							seriesId={data.details.id}
							numberOfSeasons={data.details.number_of_seasons}
						/>
					)}

					<div className="space-y-2">
						<h3 className="font-semibold text-3xl">You might like...</h3>
						<MediaGallery mediaList={data.recommendations.results} />
					</div>
				</div>
			</div>
		</div>
	);
};
