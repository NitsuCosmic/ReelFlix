import { MediaDetailsData } from "@/types/media"
import { useEffect, useState } from "react"
import { OPTIONS } from "../api/tmdb/config"
import { ENDPOINTS } from "../api/tmdb/endpoints"


export const useMovieDetails = (id: string | undefined) => {
  const [data, setData] = useState<MediaDetailsData | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getMedia = async () => {
      setIsLoading(true)
      setError(null)
      try {
        const [detailsRes, creditsRes, videosRes, imagesRes, similarRes, recommendatiosRes] = await Promise.all([
          fetch(`${ENDPOINTS.base_url}${ENDPOINTS.movies.details}/${id}`, OPTIONS),
          fetch(`${ENDPOINTS.base_url}${ENDPOINTS.movies.details}/${id}/credits`, OPTIONS),
          fetch(`${ENDPOINTS.base_url}${ENDPOINTS.movies.details}/${id}/videos`, OPTIONS),
          fetch(`${ENDPOINTS.base_url}${ENDPOINTS.movies.details}/${id}/images`, OPTIONS),
          fetch(`${ENDPOINTS.base_url}${ENDPOINTS.movies.details}/${id}/similar`, OPTIONS),
          fetch(`${ENDPOINTS.base_url}${ENDPOINTS.movies.details}/${id}/recommendations`, OPTIONS),
        ])

        const [details, credits, videos, images, similar, recommendations] = await Promise.all([
          detailsRes.json(),
          creditsRes.json(),
          videosRes.json(),
          imagesRes.json(),
          similarRes.json(),
          recommendatiosRes.json()
        ])
        setData({
          details,
          credits,
          videos,
          images,
          similar,
          recommendations
        })
      } catch (error) {
        setError("Failed to load movie data")
        console.error("Error fetching: " + error)
      } finally {
        setIsLoading(false)
      }
    }
    getMedia()
  }, [id])

  return { data, isLoading, error }
}
