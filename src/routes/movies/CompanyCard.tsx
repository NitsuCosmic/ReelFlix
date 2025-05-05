import { TMDB_IMAGE_CONFIG } from "@/lib/constants/images";

export const CompanyCard = ({ company }) => {
	return (
		<div className="flex flex-col justify-center text-center space-y-8 w-1/3 lg:w-1/6 2xl:w-1/7 bg-white/20 p-4 aspect-square rounded-xl">
			<img
				src={`${TMDB_IMAGE_CONFIG.base_url}${TMDB_IMAGE_CONFIG.logo_sizes.original}${company.logo_path}`}
				alt={`${company.name} Logo`}
				className="aspect-[3/2] object-contain"
			/>
			<h2 className="text-center font-bold lg:text-xl">{company.name}</h2>
		</div>
	);
};
