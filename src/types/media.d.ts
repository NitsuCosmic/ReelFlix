// src/types/media.d.ts

/* ================ CORE MEDIA TYPES ================ */
export interface Genre {
  id: number;
  name: string;
}

export interface ProductionCompany {
  id: number;
  name: string;
  logo_path: string | null;
  origin_country: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface Video {
  id: string;
  key: string;
  name: string;
  site: "YouTube" | "Vimeo";
  type: "Trailer" | "Teaser" | "Clip" | "Featurette";
  size: number;
  official: boolean;
}

export interface CastMember {
  id: number;
  name: string;
  character: string;
  profile_path: string | null;
  order: number;
}

export interface CrewMember {
  id: number;
  name: string;
  job: string;
  department: string;
  profile_path: string | null;
}

/* ================ MEDIA BASE ================ */
export interface MediaBase {
  id: number;
  title: string;
  name?: string; // For TV shows
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  genre_ids?: number[]; // For list views
  genres?: Genre[]; // For detail views
  popularity: number;
  vote_average: number;
  vote_count: number;
  media_type?: "movie" | "tv";
  original_language: string;
  origin_country?: string[];
  release_date?: string
  first_air_date?: string
  // Common optional fields
  adult?: boolean;
  tagline?: string;
  homepage?: string;
  imdb_id?: string;
}

/* ================ MOVIE SPECIFIC ================ */
export interface Movie extends MediaBase {
  release_date: string;
  original_title?: string;
  runtime?: number;
  budget?: number;
  revenue?: number;
  // Movie-specific relations
  belongs_to_collection?: {
    id: number;
    name: string;
    poster_path: string | null;
    backdrop_path: string | null;
  };
  // Extended details (optional)
  videos?: {
    results: Video[];
  };
  credits?: {
    cast: CastMember[];
    crew: CrewMember[];
  };
  production_companies?: ProductionCompany[];
  production_countries?: ProductionCountry[];
  spoken_languages?: SpokenLanguage[];
  status?: "Rumored" | "Planned" | "In Production" | "Post Production" | "Released" | "Canceled";
}

/* ================ TV SHOW SPECIFIC ================ */
export interface TVShow extends MediaBase {
  first_air_date: string;
  original_name?: string;
  episode_run_time?: number[];
  // TV-specific relations
  created_by?: {
    id: number;
    name: string;
    profile_path: string | null;
  }[];
  networks?: ProductionCompany[];
  seasons?: {
    air_date: string;
    episode_count: number;
    id: number;
    name: string;
    overview: string;
    poster_path: string | null;
    season_number: number;
  }[];
  // Extended details
  videos?: {
    results: Video[];
  };
  credits?: {
    cast: CastMember[];
    crew: CrewMember[];
  };
  status?: "Returning Series" | "Planned" | "In Production" | "Ended" | "Canceled";
}

/* ================ UNION TYPES ================ */
export type Media = Movie | TVShow;

/* ================ API RESPONSE TYPES ================ */
export interface PaginatedResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

/* ================ COMPONENT PROP TYPES ================ */
export interface MediaCardProps {
  media: Media;
  variant?: "poster" | "backdrop";
  onClick?: () => void;
}

export interface MediaCarouselProps {
  title: string;
  items: Media[];
  mediaType?: "movie" | "tv";
  isLoading?: boolean;
}

/* ================ HOOK RETURN TYPES ================ */
export interface MediaDetailsData {
  details: MovieDetailsResponse | TVDetailsResponse;
  credits: object;
  images: object;
  videos: Video[];
  similar?: Media[];
  recommendations?: Media[];
}