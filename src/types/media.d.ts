export interface MediaBase {
  id: number;
  title: string;
  name?: string;
  poster_path: string | null;
  overview: string;
  vote_average: number;
  backdrop_path: string | null;
  genre_ids: number[];
  media_type: "tv" | "movie";
  release_date?: string;
  original_title?: string;
  first_air_date?: string;
  original_name?: string;
}

export interface Movie extends MediaBase {
  release_date?: string;
  original_title?: string;
}

export interface TVShow extends MediaBase {
  first_air_date?: string;
  original_name?: string;
}

export type Media = Movie | TVShow;