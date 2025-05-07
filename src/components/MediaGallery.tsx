import { Media } from "@/types/media";
import { MediaCard } from "./shared/MediaCard";

type MediaGallery = {
	mediaList: Media[];
};

export const MediaGallery = ({ mediaList }: MediaGallery) => {
	return (
		<section className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] 2xl:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 place-items-stretch">
			{mediaList.map((media) => (
				<MediaCard key={media.id} media={media}>
					<MediaCard.Poster />
					<div className="mt-1">
						<MediaCard.Title />
					</div>
				</MediaCard>
			))}
		</section>
	);
};
