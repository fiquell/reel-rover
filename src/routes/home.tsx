import { Anime, AnimeTopParams, AnimeType, TopClient } from '@tutkli/jikan-ts'
import { useEffect, useState } from 'react'
import AnimeCard from '../components/anime-card'

const Home = () => {
  const [animeList, setAnimeList] = useState<Anime[] | undefined>(undefined)

  useEffect(() => {
    const getTopAnime = async () => {
      const topClient = new TopClient()
      const searchParams: AnimeTopParams = {
        type: AnimeType.movie
      }
      const response = await topClient.getTopAnime(searchParams)
      setAnimeList(response.data)
    }
    getTopAnime()
  }, [])

  return (
    <div className='flex flex-wrap justify-center gap-2'>
      {animeList?.map((anime) => <AnimeCard anime={anime} />)}
    </div>
  )
}

export default Home
