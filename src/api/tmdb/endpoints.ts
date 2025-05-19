export const ENDPOINTS = {
  base_url: "https://api.themoviedb.org/3/",
  discover: {
    movies: "discover/movie",
    series: "discover/tv"
  },
  trending: {
    all: {
      week: "trending/all/week",
      day: "trending/all/day"
    }
  },
  movies: {
    now_playing: "movie/now_playing",
    popular: "movie/popular",
    top_rated: "movie/top_rated",
    upcoming: "movie/upcoming",
    details: "movie",
  },
  series: {
    details: "tv"
  },
  search: {
    multi: "search/multi"
  },
}