import { Media } from "@/types/media"
import { useEffect, useState } from "react"
import { OPTIONS } from "./config"
import { ENDPOINTS } from "./endpoints"


export const useGetMedia = (endpoint: string) => {
  const [media, setMedia] = useState<Media[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    const getMedia = async () => {
      setIsLoading(true)
      try {
        const response = await fetch(`${ENDPOINTS.base_url}${endpoint}`, OPTIONS)
        const data = await response.json()
        setMedia(data.results)
      } catch (error) {
        console.error("Error fetching: " + error)
      } finally {
        setIsLoading(false)
      }
    }
    getMedia()
  }, [endpoint])

  return { media, isLoading }
}
