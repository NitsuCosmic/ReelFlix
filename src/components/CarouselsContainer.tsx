import { ReactElement } from "react";

type CarouselContainerProps = {
	children: ReactElement[];
};

export const CarouselsContainer = ({ children }: CarouselContainerProps) => {
	return (
		<div className="space-y-6 p-2 text-neutral-100 lg:p-16">{children}</div>
	);
};
