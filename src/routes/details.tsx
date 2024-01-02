import { Anime, AnimeClient } from '@tutkli/jikan-ts'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {
  const { slug } = useParams()
  const [animeDetail, setAnimeDetail] = useState<Anime | undefined>(undefined)

  useEffect(() => {
    const getAnimeById = async () => {
      const animeClient = new AnimeClient()
      const response = await animeClient.getAnimeById(parseInt(slug!))
      setAnimeDetail(response.data)
    }
    getAnimeById()
  }, [slug])

  return (
    <div>
      <p>{animeDetail?.title}</p>
    </div>
  )
}

export default Details
