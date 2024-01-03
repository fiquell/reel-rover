import { Anime, AnimeClient } from '@tutkli/jikan-ts'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {
  const [anime, setAnime] = useState<Anime>()

  const { id } = useParams()

  useEffect(() => {
    const getAnimeById = async () => {
      const animeClient = new AnimeClient()
      const response = await animeClient.getAnimeById(parseInt(id!))
      setAnime(response.data)
    }
    getAnimeById()
  }, [id])

  return (
    <>
      <p>{anime?.title}</p>
    </>
  )
}

export default Details
