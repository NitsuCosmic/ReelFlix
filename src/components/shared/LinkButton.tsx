import { ReactNode } from "react";

type LinkButtonProps = {
	variant: "primary" | "secondary";
	children: ReactNode;
};

export const LinkButton = ({ variant, children }: LinkButtonProps) => {
	const style =
		variant === "primary"
			? "flex items-center justify-center gap-2 cursor-pointer w-fit px-4 py-2 rounded-full bg-neutral-100 text-black font-semibold hover:bg-neutral-300 transition-colors"
			: "flex items-center justify-center gap-2 cursor-pointer w-fit px-4 py-2 rounded-full bg-neutral-100 text-black font-semibold hover:bg-neutral-300 transition-colors";

	return <button className={style}>{children}</button>;
};
