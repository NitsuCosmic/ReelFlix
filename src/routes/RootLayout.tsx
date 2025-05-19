import { Navbar } from "@/components/Navbar";
import { Outlet } from "react-router";

export function RootLayout() {
	return (
		<div className="min-h-svh bg-gray-950">
			<Navbar />
			<main className="max-w-[1920px] mx-auto overflow-hidden">
				<Outlet />
			</main>
		</div>
	);
}
