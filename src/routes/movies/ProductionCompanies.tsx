import { TMDB_IMAGE_CONFIG } from "@/lib/constants/images";

export const ProductionCompanies = ({ companies }) => {
	if (companies.every((company) => company.logo_path === null)) return null;

	return (
		<section className="space-y-16 text-center py-6 lg:py-24">
			<h2 className="font-bold text-2xl lg:text-3xl 2xl:text-4xl">
				A PRODUCTION BY
			</h2>
			<div className="flex flex-wrap justify-center gap-4">
				{companies.map((company) =>
					company.logo_path ? (
						<div className="flex flex-col justify-center text-center space-y-8 w-1/3 lg:w-1/6 2xl:w-1/7 bg-white/20 p-4 aspect-square rounded-xl">
							<img
								src={`${TMDB_IMAGE_CONFIG.base_url}${TMDB_IMAGE_CONFIG.logo_sizes.original}${company.logo_path}`}
								alt={`${company.name} Logo`}
								className="aspect-[3/2] object-contain"
							/>
							<h2 className="text-center font-bold lg:text-xl">
								{company.name}
							</h2>
						</div>
					) : null
				)}
			</div>
		</section>
	);
};
