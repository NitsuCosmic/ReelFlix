import { HeroDisplay } from "./components/home/hero/HeroDisplay";
import { Navbar } from "./components/Navbar";

function App() {
	return (
		<div className="min-h-svh bg-neutral-950">
			<Navbar />
			<main className="max-w-[1920px] mx-auto">
				<HeroDisplay />
			</main>
		</div>
	);
}

export default App;
