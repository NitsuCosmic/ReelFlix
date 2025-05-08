import { CastCard } from "@/routes/movies/CastCard";
import { Media } from "@/types/media";
import { MediaCard } from "./shared/MediaCard";

type MediaGallery = {
	mediaList: Media[];
};

export const MediaGallery = ({ mediaList }: MediaGallery) => {
	return (
		<section className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] 2xl:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
			{mediaList.map((media) =>
				media.media_type === "person" ? (
					<CastCard key={media.id} person={media} />
				) : (
					<MediaCard key={media.id} media={media}>
						<MediaCard.Poster />
						<div className="mt-1">
							<MediaCard.Title />
						</div>
					</MediaCard>
				)
			)}
		</section>
	);
};
