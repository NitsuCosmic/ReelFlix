import { ENDPOINTS } from "@/api/tmdb/endpoints";
import { useGetMedia } from "@/api/tmdb/useGetMedia";
import { CarouselsContainer } from "@/components/CarouselsContainer";
import { HeroDisplay } from "@/components/home/hero/HeroDisplay";
import { MediaCarousel } from "@/components/MediaCarousel";

// Optional: Helper to format section titles
function formatTitle(key: string) {
	return key
		.replace(/([A-Z])/g, " $1")
		.replace(/^./, (str) => str.toUpperCase());
}

export function HomePage() {
	// ✅ Valid hook usage — top-level, no conditionals or loops
	const upcoming = useGetMedia(ENDPOINTS.movies.upcoming);
	const popular = useGetMedia(ENDPOINTS.movies.popular);
	const topRated = useGetMedia(ENDPOINTS.movies.top_rated);

	// ✅ Organize into array manually (no hook calls inside map)
	const mediaSections = [
		{ key: "upcoming", ...upcoming },
		{ key: "popular", ...popular },
		{ key: "topRated", ...topRated },
	];

	return (
		<>
			<div className="min-h-svh">
				<HeroDisplay />
			</div>
			<CarouselsContainer>
				{mediaSections.map(({ key, media, isLoading }) => (
					<MediaCarousel
						key={key}
						mediaList={media}
						isLoading={isLoading}
						title={formatTitle(key)}
					/>
				))}
			</CarouselsContainer>
		</>
	);
}
