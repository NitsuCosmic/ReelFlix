import { SearchIcon } from "lucide-react";
import { NavLink } from "react-router";

export const Navbar = () => {
	return (
		<header className="fixed top-0 left-0 right-0 max-w-[1920px] mx-auto flex justify-between items-center gap-4 font-raleway p-3 text-neutral-100 lg:h-16 lg:px-16 bg-gradient-to-b from-neutral-950 via-60% via-neutral-950/60 to-transparent z-50">
			<h2 className="z-10 font-bold text-xl">
				<NavLink to={"/"}>ReelFlix</NavLink>
			</h2>
			<nav className="hidden absolute inset-0 md:flex justify-center items-center">
				<ul className="flex gap-6 text-sm">
					<li>
						<NavLink to={"/"}>Home</NavLink>
					</li>
					<li>
						<NavLink to={"movies"}>Movies</NavLink>
					</li>
					<li>
						<NavLink to={"series"}>Series</NavLink>
					</li>
				</ul>
			</nav>
			<button
				className="cursor-pointer z-10
			"
			>
				<NavLink to={"explore"}>
					<SearchIcon />
				</NavLink>
			</button>
		</header>
	);
};
