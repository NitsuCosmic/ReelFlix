import { ENDPOINTS } from "@/api/tmdb/endpoints";
import { useGetMedia } from "@/api/tmdb/useGetMedia";
import { HeroDisplay } from "@/components/home/hero/HeroDisplay";
import { CarouselsContainer } from "../CarouselsContainer";
import { MediaCarousel } from "../MediaCarousel";
export function HomePage() {
	const { media: topRated, isLoading: isLoadingTopRated } = useGetMedia(
		ENDPOINTS.movies.top_rated
	);
	const { media: upcoming, isLoading: isLoadingUpcoming } = useGetMedia(
		ENDPOINTS.movies.upcoming
	);

	return (
		<>
			<HeroDisplay />
			<CarouselsContainer>
				<MediaCarousel
					media={topRated}
					isLoading={isLoadingTopRated}
					title="Top Rated Movies"
				/>
				<MediaCarousel
					media={upcoming}
					isLoading={isLoadingUpcoming}
					title="Upcoming Movies"
				/>
			</CarouselsContainer>
		</>
	);
}
