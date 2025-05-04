import { TMDB_IMAGE_CONFIG } from "@/lib/constants/images";

export const CastCard = ({ person }) => {
	return (
		<div className="relative bg-white/20 h-full select-none">
			<img
				src={`${TMDB_IMAGE_CONFIG.base_url}${TMDB_IMAGE_CONFIG.profile_sizes.original}${person.profile_path}`}
				alt={person.name}
				title={person.name}
				loading="lazy"
			/>
			<div className="absolute bottom-0 left-0 w-full p-2 bg-gradient-to-b from-transparent via-black/60 to-black/80">
				<h2 className="line-clamp-1 font-semibold text-lg text-shadow-md/30">
					{person.character || "Unkown"}
				</h2>
				<h3 className="line-clamp-1 text-shadow-md/30">{person.name}</h3>
			</div>
		</div>
	);
};
