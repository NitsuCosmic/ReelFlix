import { Searchbar } from "./Searchbar";

export const Navbar = () => {
	return (
		<header className="fixed inset-0 max-w-[1920px] mx-auto flex justify-between items-center gap-4 font-raleway p-3 text-neutral-100 lg:h-16">
			<h2 className="z-10">
				<a href="#">ReelFlix</a>
			</h2>
			<nav className="hidden absolute inset-0 md:flex justify-center items-center">
				<ul className="flex gap-4">
					<li>
						<a href="#">Home</a>
					</li>
					<li>
						<a href="#">Movies</a>
					</li>
					<li>
						<a href="#">Series</a>
					</li>
					<li>
						<a href="#">Explore</a>
					</li>
					<li>
						<a href="#">Genres</a>
					</li>
				</ul>
			</nav>
			<Searchbar />
		</header>
	);
};
