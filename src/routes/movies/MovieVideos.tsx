import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

export const MovieVideos = ({ videos }) => {
	return (
		<div>
			<h2 className="text-2xl font-bold lg:text-3xl">Videos</h2>

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
					{videos.map((video) => (
						<CarouselItem
							key={video.id}
							className={`basis-1 md:basis-1/2 lg:basis-1/3 2xl:basis-1/4 p-0 mr-4 border-transparent rounded-md overflow-hidden`}
						>
							<div className="hidden lg:block lg:p-2 bg-white/10 rounded-xl select-none">
								<iframe
									src={`https://www.youtube.com/embed/${video.key}`}
									className="aspect-video w-full rounded-xl"
								></iframe>
								<h3 className="mt-2 font-semibold">{video.name}</h3>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
		</div>
	);
};
