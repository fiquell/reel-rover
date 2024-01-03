import { Anime, AnimeClient } from '@tutkli/jikan-ts'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {
  const [animeDetail, setAnimeDetail] = useState<Anime | undefined>(undefined)

  const { id } = useParams()

  useEffect(() => {
    const getAnimeById = async () => {
      const animeClient = new AnimeClient()
      const response = await animeClient.getAnimeById(parseInt(id!))
      setAnimeDetail(response.data)
    }
    getAnimeById()
  }, [id])

  return (
    <div>
      <p>{animeDetail?.title}</p>
    </div>
  )
}

export default Details
