import { OPTIONS } from "@/api/tmdb/config";
import { ENDPOINTS } from "@/api/tmdb/endpoints";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { EpisodeCard } from "./EpisodeCard";

export const SeriesEpisodes = ({ seriesId, numberOfSeasons }) => {
	const [seasonValue, setSeasonValue] = useState<string>("1");
	const [season, setSeason] = useState();
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const seasonsArray = Array.from(
		{ length: numberOfSeasons },
		(_, index) => index + 1
	);

	useEffect(() => {
		const getEpisodes = async () => {
			setIsLoading(true);
			try {
				const response = await fetch(
					`${ENDPOINTS.base_url}${ENDPOINTS.series.details}/${seriesId}/season/${seasonValue}`,
					OPTIONS
				);
				const data = await response.json();
				setSeason(data);
			} catch (error) {
				console.error(`Error fetching episodes: ${error}`);
			} finally {
				setIsLoading(false);
			}
		};

		getEpisodes();
	}, [seasonValue, seriesId]);

	console.log(season);

	return (
		<div className="space-y-4">
			<div className="flex justify-between items-center">
				<h2 className="text-2xl font-bold lg:text-3xl">Episodes</h2>
				<select
					name="seasons"
					id="seasons"
					className="bg-black/50 p-2 border-1 rounded-lg cursor-pointer"
					value={seasonValue}
					onChange={(e) => setSeasonValue(e.target.value)}
				>
					{seasonsArray.map((seasonNumber) => (
						<option key={seasonNumber} value={String(seasonNumber)}>
							Season {seasonNumber}
						</option>
					))}
				</select>
			</div>
			{season && (
				<Carousel
					className="relative flex  select-none"
					opts={{
						align: "start",
						startIndex: 0,
						skipSnaps: true,
					}}
				>
					<CarouselContent className="flex -ml-0 space-x-4">
						{season.episodes.map((episode, index) => (
							<CarouselItem
								key={episode.id}
								className={`basis-1/1 md:basis-1/2 lg:basis-1/3 2xl:basis-1/4 p-0 min-h-full`}
							>
								<EpisodeCard episode={episode} />
							</CarouselItem>
						))}
					</CarouselContent>
					<div className="hidden lg:flex">
						<CarouselPrevious className="cursor-pointer text-neutral-950" />
						<CarouselNext className="cursor-pointer text-neutral-950" />
					</div>
				</Carousel>
			)}
		</div>
	);
};
