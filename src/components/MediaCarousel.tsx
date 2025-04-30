import { Media } from "@/types/media";
import { MediaCard } from "./MediaCard";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "./ui/carousel";
import { Skeleton } from "./ui/skeleton";
type MediaCarouselProps = {
	title: string;
	mediaList: Media[];
	isLoading: boolean;
};

export const MediaCarousel = ({
	title,
	mediaList,
	isLoading,
}: MediaCarouselProps) => {
	if (isLoading) return <CarouselSkeleton />;

	return (
		<div>
			<h3 className="text-xl mb-2 uppercase">{title || "No title"}</h3>
			<Carousel
				className="relative flex gap-2"
				opts={{
					align: "start",
					loop: true,
					skipSnaps: true,
					slidesToScroll: 2,
				}}
			>
				<CarouselContent className="flex -ml-0">
					{mediaList.map((media, index) => (
						<CarouselItem
							key={index}
							className={`basis-1/3 md:basis-1/4 lg:basis-1/5 p-0 mr-4 cursor-pointer`}
						>
							<MediaCard media={media} />
						</CarouselItem>
					))}
				</CarouselContent>
				<div className="hidden lg:flex">
					<CarouselPrevious className="cursor-pointer text-neutral-950" />
					<CarouselNext className="cursor-pointer text-neutral-950" />
				</div>
			</Carousel>
		</div>
	);
};

const CarouselSkeleton = () => (
	<div className="p-2 space-y-4 overflow-hidden">
		<Skeleton className="h-6 w-40 mb-4 bg-neutral-800" />
		<Carousel opts={{ align: "start" }}>
			<CarouselContent className="flex gap-2 -m-0">
				{[...Array(20)].map((_, i) => (
					<CarouselItem
						key={i}
						className={`basis-1/3 md:basis-1/4 lg:basis-1/7 p-0 mr-2 lg:mr-10 cursor-pointer`}
					>
						<Skeleton
							key={i}
							className=" h-42 w-32 rounded-lg lg:w-72 lg:h-46 bg-neutral-800"
						/>
					</CarouselItem>
				))}
			</CarouselContent>
		</Carousel>
	</div>
);
