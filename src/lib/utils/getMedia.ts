import { MOVIE_GENRES, TV_GENRES } from "@/lib/constants/genres";

export const getMediaGenre = (mediaType: 'tv' | 'movie' | undefined, id: number): string => {
  const genreMap = mediaType === 'movie' ? MOVIE_GENRES : TV_GENRES;
  return genreMap[id] || 'Unknown';
};