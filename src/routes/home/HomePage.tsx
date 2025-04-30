import { ENDPOINTS } from "@/api/tmdb/endpoints";
import { useGetMedia } from "@/api/tmdb/useGetMedia";
import { CarouselsContainer } from "@/components/CarouselsContainer";
import { HeroDisplay } from "@/components/home/hero/HeroDisplay";
import { MediaCarousel } from "@/components/MediaCarousel";

export function HomePage() {
	const { media: topRated, isLoading: isLoadingTopRated } = useGetMedia(
		ENDPOINTS.movies.top_rated
	);
	const { media: upcoming, isLoading: isLoadingUpcoming } = useGetMedia(
		ENDPOINTS.movies.upcoming
	);
	const { media: popular, isLoading: isLoadingPopular } = useGetMedia(
		ENDPOINTS.movies.popular
	);
	const { media: nowPlaying, isLoading: isLoadingNowPlaying } = useGetMedia(
		ENDPOINTS.movies.now_playing
	);

	return (
		<>
			<div className="min-h-svh">
				<HeroDisplay />
			</div>
			<CarouselsContainer>
				<MediaCarousel
					mediaList={upcoming}
					isLoading={isLoadingUpcoming}
					title="Upcoming Movies"
				/>
				<MediaCarousel
					mediaList={popular}
					isLoading={isLoadingPopular}
					title="Popular Movies"
				/>
				<MediaCarousel
					mediaList={topRated}
					isLoading={isLoadingTopRated}
					title="Top Rated Movies"
				/>
				<MediaCarousel
					mediaList={nowPlaying}
					isLoading={isLoadingNowPlaying}
					title="Now Playing"
				/>
			</CarouselsContainer>
		</>
	);
}
