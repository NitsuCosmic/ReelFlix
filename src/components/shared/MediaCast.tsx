import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { CastCard } from "../../routes/movies/CastCard";

type MovieCastProps = {
	credits: object;
};

export const MediaCast = ({ credits }: MovieCastProps) => {
	const directors = credits.cast.filter(
		(person) => person.known_for_department === "Directing"
	);

	return (
		<div>
			<h2 className="text-2xl font-bold lg:text-3xl">Cast</h2>
			<h3 className="line-clamp-1 mb-2">
				Directed by{" "}
				{directors.length > 0 ? (
					directors.map((director, index) => (
						<span key={director.id}>
							{director.name}
							{index < directors.length - 1 ? ", " : ""}
						</span>
					))
				) : (
					<span>Unknown</span>
				)}
			</h3>
			<Carousel
				className="relative flex"
				opts={{
					align: "start",
					skipSnaps: true,
				}}
			>
				<div className="hidden lg:flex">
					<CarouselPrevious className="cursor-pointer text-neutral-950" />
					<CarouselNext className="cursor-pointer text-neutral-950" />
				</div>
				<CarouselContent className="flex -ml-0">
					{credits.cast.map((person) => (
						<CarouselItem
							key={person.id}
							className={`basis-1/2 md:basis-1/3 lg:basis-1/6 2xl:basis-1/8 p-0 mr-4 border-transparent rounded-md overflow-hidden`}
						>
							<CastCard person={person} />
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
		</div>
	);
};
