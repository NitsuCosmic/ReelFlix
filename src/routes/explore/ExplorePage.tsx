import { OPTIONS } from "@/api/tmdb/config";
import { ENDPOINTS } from "@/api/tmdb/endpoints";
import { MediaGallery } from "@/components/MediaGallery";
import { LoaderCircleIcon } from "lucide-react";
import { useState } from "react";
import { SearchForm } from "./SearchForm";

export const ExplorePage = () => {
	const [query, setQuery] = useState<string>("");
	const [results, setResults] = useState([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);

	const handleSearch = async (searchQuery: string) => {
		if (!searchQuery.trim()) {
			setResults([]);
			return;
		}

		setQuery(searchQuery);
		setIsLoading(true);
		setError(null);

		try {
			const response = await fetch(
				`${ENDPOINTS.base_url}${
					ENDPOINTS.search.multi
				}?query=${encodeURIComponent(searchQuery)}`,
				OPTIONS
			);

			if (!response.ok) {
				throw new Error(`API request failed with status ${response.status}`);
			}

			const data = await response.json();
			setResults(data.results || null);
		} catch (err) {
			console.error("Error searching media:", err);
			setError(err.message);
		} finally {
			setIsLoading(false);
		}
	};

	console.log(results);

	return (
		<div className="min-h-screen bg-gray-950 font-raleway py-24 px-2">
			<div className="text-center mb-10">
				<h1 className="text-3xl 2xl:text-4xl font-bold mb-4 text-neutral-100">
					EXPLORE
				</h1>
				<p className="text-lg lg:text-xl text-neutral-400">
					Browse genres. Discover directors. Find award-winning titles. Discover
					movies and shows you didn't know you were looking for.
				</p>
			</div>

			<SearchForm onSearch={handleSearch} isLoading={isLoading} />

			{error && (
				<div className="bg-destructive/10 p-4 rounded-lg border border-destructive text-destructive max-w-2xl mx-auto text-center mt-10">
					{error}
				</div>
			)}

			{isLoading ? (
				<div className="flex justify-center py-16 text-neutral-100 text-center">
					<LoaderCircleIcon size={"50px"} className="animate-spin" />
				</div>
			) : results && results.length > 0 ? (
				<div className="space-y-2">
					<h3 className="font-semibold text-2xl text-neutral-100">
						Results for "{query}"
					</h3>
					<MediaGallery mediaList={results} />
				</div>
			) : query && !isLoading && results.length == 0 ? (
				<div className="text-center py-12 text-muted-foreground">
					No results found for "{query}"
				</div>
			) : null}
		</div>
	);
};
