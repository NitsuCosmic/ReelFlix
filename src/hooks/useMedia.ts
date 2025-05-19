import { OPTIONS } from "@/api/tmdb/config";
import { ENDPOINTS } from "@/api/tmdb/endpoints";
import { Media } from "@/types/media";
import { useEffect, useState } from "react";

export const useMedia = () => {
  const [mediaList, setMediaList] = useState<Media[]>([]);

  const fetchMedia = async () => {
    try {
      const response = await fetch(
        `${ENDPOINTS.base_url}${ENDPOINTS.trending.all.day}`,
        OPTIONS
      );
      const data = await response.json();
      setMediaList(data.results);
    } catch (err) {
      console.error("Failed to fetch media:", err);
    }
  };

  useEffect(() => {
    fetchMedia();
  }, []);

  return { mediaList };
};