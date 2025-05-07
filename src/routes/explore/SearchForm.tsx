import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { FormEvent, useState } from "react";

type SearchFormProps = {
	onSearch: (query: string) => void;
	isLoading: boolean;
};

export const SearchForm = ({ onSearch, isLoading }: SearchFormProps) => {
	const [query, setQuery] = useState<string>("");

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		if (!query.trim()) return;
		onSearch(query);
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="flex flex-col items-center gap-4 mb-10"
		>
			<div className="flex w-full max-w-2xl items-center gap-2">
				<Input
					type="text"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					placeholder="Search for movies or TV shows..."
					className=" text-neutral-100 lg:text-md placeholder:text-neutral-400"
				/>
				<Button
					type="submit"
					size="default"
					className="h-full cursor-pointer"
					disabled={isLoading}
				>
					{isLoading ? (
						<span className="flex items-center gap-2">
							<Search className="h-4 w-4 animate-pulse" />
							Searching...
						</span>
					) : (
						<span className="flex items-center gap-2">
							<Search className="h-4 w-4" />
							Search
						</span>
					)}
				</Button>
			</div>
		</form>
	);
};
