import { MediaCard } from "@/components/shared/MediaCard";
import { Media } from "@/types/media";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "../../ui/carousel";

type HeroCarouselProps = {
	mediaList: Media[];
	currentIndex: number;
	setCurrentIndex: (index: number) => void;
};

export const HeroCarousel = ({
	mediaList,
	currentIndex,
	setCurrentIndex,
}: HeroCarouselProps) => {
	const getCircularIndex = (
		current: number,
		delta: number,
		max: number
	): number => {
		return (current + delta + max) % max;
	};

	const handlePrev = () => {
		setCurrentIndex(getCircularIndex(currentIndex, -1, mediaList.length));
	};

	const handleNext = () => {
		setCurrentIndex(getCircularIndex(currentIndex, 1, mediaList.length));
	};

	return (
		<Carousel
			className="relative flex"
			opts={{
				align: "start",
				loop: true,
				skipSnaps: true,
			}}
		>
			<div className="hidden lg:flex">
				<div onClick={handlePrev}>
					<CarouselPrevious className="cursor-pointer text-neutral-950" />
				</div>
				<div onClick={handleNext}>
					<CarouselNext className="cursor-pointer text-neutral-950" />
				</div>
			</div>
			<CarouselContent className="flex gap-2 ml-0">
				{mediaList.map((media, index) => (
					<CarouselItem
						key={media.id}
						className={`basis-1/3 md:basis-1/4 lg:basis-1/8 2xl:basis-1/10 p-0 cursor-pointer border-2 border-transparent ${
							currentIndex === index ? "border-neutral-100" : ""
						} rounded-md overflow-hidden`}
						onClick={() => setCurrentIndex(index)}
					>
						<MediaCard media={media}>
							<MediaCard.Poster></MediaCard.Poster>
						</MediaCard>
					</CarouselItem>
				))}
			</CarouselContent>
		</Carousel>
	);
};
