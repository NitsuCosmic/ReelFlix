import { Card, CardContent } from "@/components/ui/card";
import { TMDB_IMAGE_CONFIG } from "@/lib/constants/images";
import { Clock } from "lucide-react";

export const EpisodeCard = ({ episode }) => {
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
		<Card className="p-4 bg-white/15 rounded-xl border-none h-full shadow-xl/50 overflow-auto shadow-none">
			<CardContent className="flex flex-col space-y-4 p-0 min-h-full">
				<div className="relative aspect-video bg-black/30 rounded-xl">
					<img
						src={`${TMDB_IMAGE_CONFIG.base_url}${TMDB_IMAGE_CONFIG.still_sizes.original}${episode.still_path}`}
						alt="Episode Image"
						className="rounded-2xl w-full h-full object-cover aspect-video"
					/>
					<div className="absolute inset-0 flex justify-end items-end p-2">
						{episode.runtime && (
							<span className="flex items-center gap-1 bg-black/80 text-neutral-100 font-medium py-1 px-2 rounded-md">
								<Clock className="w-[1.15rem] h-[1.15rem]" />
								{episode.runtime}m
							</span>
						)}
					</div>
				</div>
				<div>
					<h2 className="text-neutral-100 text-lg font-semibold">
						{episode.episode_number}. {episode.name}
					</h2>
					<p className="text-neutral-300 mt-2 text-pretty">
						{episode.overview || "No overview"}
					</p>
				</div>
				<span className="font-medium text-neutral-100 mt-auto">
					{formatMediaDate(episode.air_date)}
				</span>
			</CardContent>
		</Card>
	);
};
