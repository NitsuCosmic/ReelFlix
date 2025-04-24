import { Media } from "@/types/media";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "../../ui/carousel";
import { HeroMediaCard } from "./HeroMediaCard";

type HeroCarouselProps = {
	media: Media[];
	currentIndex: number;
	setCurrentIndex: (index: number) => void;
};

export const HeroCarousel = ({
	media,
	currentIndex,
	setCurrentIndex,
}: HeroCarouselProps) => {
	return (
		<Carousel
			className="relative flex gap-2"
			opts={{ align: "start", loop: true }}
		>
			<CarouselContent className="flex -ml-0">
				{media.map((media, index) => (
					<CarouselItem
						key={media.id}
						className={`basis-1/3 md:basis-1/4 lg:basis-1/8 2xl:basis-1/10 p-0 mr-4 cursor-pointer`}
						onClick={() => setCurrentIndex(index)}
					>
						<HeroMediaCard media={media} isSelected={currentIndex === index} />
					</CarouselItem>
				))}
			</CarouselContent>
			<div className="hidden lg:flex">
				<CarouselPrevious className="cursor-pointer text-neutral-950" />
				<CarouselNext className="cursor-pointer text-neutral-950" />
			</div>
		</Carousel>
	);
};
