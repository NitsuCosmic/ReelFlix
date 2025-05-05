import { CompanyCard } from "./CompanyCard";

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
						<CompanyCard key={company.id} company={company} />
					) : null
				)}
			</div>
		</section>
	);
};
