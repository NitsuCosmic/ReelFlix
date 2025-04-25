import { HomePage } from "./components/home/HomePage";
import { Navbar } from "./components/Navbar";

function App() {
	return (
		<div className="min-h-svh bg-neutral-950">
			<Navbar />
			<main className="max-w-[1920px] mx-auto">
				<HomePage />
			</main>
		</div>
	);
}

export default App;
