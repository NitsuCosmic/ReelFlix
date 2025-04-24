import { Search, X } from "lucide-react";
import { FormEvent, useState } from "react";
import { Input } from "./ui/input";

export const Searchbar = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		setIsOpen(false);
	};

	return (
		<>
			{isOpen ? (
				<form
					onSubmit={handleSubmit}
					className="flex items-center gap-2 z-10 absolute left-0 top-0 w-full p-3 bg-neutral-900 lg:bg-transparent lg:relative lg:w-64 lg:p-0"
				>
					<Input
						type="text"
						placeholder="Search movies..."
						className="bg-neutral-900 outline-none h-fit w-full p-2 lg:max-w-64 text-white"
						autoFocus
					/>
					<X className="cursor-pointer" onClick={() => setIsOpen(false)} />
				</form>
			) : (
				<button
					onClick={() => setIsOpen(true)}
					className="p-2 cursor-pointer rounded-full hover:bg-neutral-50/10 transition-colors z-10"
				>
					<Search />
				</button>
			)}
		</>
	);
};
