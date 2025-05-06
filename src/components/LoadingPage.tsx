import { Loader2Icon } from "lucide-react";

export const LoadingPage = () => {
	return (
		<div className="text-white w-full min-h-screen flex justify-center items-center">
			<div>
				<Loader2Icon className="animate-spin" />
			</div>
		</div>
	);
};
