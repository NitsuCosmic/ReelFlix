import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import { RootLayout } from "./routes/RootLayout.tsx";
import { HomePage } from "./routes/home/HomePage.tsx";
import { MovieDetailsPage } from "./routes/movies/MovieDetailsPage.tsx";
import { MoviesPage } from "./routes/movies/MoviesPage.tsx";
import { SeriesDetailsPage } from "./routes/series/SeriesDetailsPage.tsx";
import { SeriesPage } from "./routes/series/SeriesPage.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route element={<RootLayout />}>
					{/* Index route */}
					<Route index element={<HomePage />} />

					{/* Movies routes */}
					<Route path="movies">
						<Route index element={<MoviesPage />} />
						<Route path=":id" element={<MovieDetailsPage />} />
					</Route>

					{/* Series routes */}
					<Route path="series">
						<Route index element={<SeriesPage />} />
						<Route path=":id" element={<SeriesDetailsPage />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	</StrictMode>
);
