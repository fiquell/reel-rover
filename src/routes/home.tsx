import { Anime, AnimeClient, AnimeSearchParams, AnimeType } from '@tutkli/jikan-ts'
import { useEffect, useState } from 'react'
import AnimeCard from '../components/anime-card'

const Home = () => {
  const [selectedAnimeType, setSelectedAnimeType] = useState<string>()
  const [animeList, setAnimeList] = useState<Anime[]>()

  useEffect(() => {
    const getAnimeSearch = async () => {
      const animeClient = new AnimeClient()
      const searchParams: AnimeSearchParams = {
        type: selectedAnimeType
      }
      const response = await animeClient.getAnimeSearch(searchParams)
      setAnimeList(response.data)
    }
    getAnimeSearch()
  }, [selectedAnimeType])

  return (
    <>
      <div className='mb-5'>
        <select
          value={selectedAnimeType}
          onChange={(event) => setSelectedAnimeType(event.target.value)}
          className='select select-bordered w-full max-w-32'>
          {Object.values(AnimeType).map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
      <div className='flex flex-wrap justify-center gap-2'>
        {animeList?.map((anime) => <AnimeCard key={anime.mal_id} anime={anime} />)}
      </div>
    </>
  )
}

export default Home
