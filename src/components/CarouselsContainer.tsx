import { ReactNode } from "react";

type CarouselContainerProps = {
	children: ReactNode;
};

export const CarouselsContainer = ({ children }: CarouselContainerProps) => {
	return (
		<div className="space-y-4 p-2 text-neutral-100 lg:p-16">{children}</div>
	);
};
