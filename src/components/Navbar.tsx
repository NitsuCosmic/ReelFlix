import { Searchbar } from "./Searchbar";

export const Navbar = () => {
	return (
		<header className="fixed top-0 left-0 right-0 max-w-[1920px] mx-auto flex justify-between items-center gap-4 font-raleway p-3 text-neutral-100 lg:h-16 lg:px-16 bg-gradient-to-b from-neutral-950 via-60% via-neutral-950/60 to-transparent">
			<h2 className="z-10 font-bold text-xl">
				<a href="#">ReelFlix</a>
			</h2>
			<nav className="hidden absolute inset-0 md:flex justify-center items-center">
				<ul className="flex gap-6">
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
