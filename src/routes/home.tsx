import { Anime, AnimeClient, AnimeRating, AnimeSearchParams, AnimeType } from '@tutkli/jikan-ts'
import { useEffect, useState } from 'react'
import AnimeCard from '../components/anime-card'
import AnimeDropdown from '../components/anime-dropdown'

const Home = () => {
  const [selectedAnimeType, setSelectedAnimeType] = useState<string>()
  const [selectedAnimeRating, setSelectedAnimeRating] = useState<string>()
  const [animeList, setAnimeList] = useState<Anime[]>()

  useEffect(() => {
    const getAnimeSearch = async () => {
      const animeClient = new AnimeClient()
      const searchParams: AnimeSearchParams = {
        type: selectedAnimeType,
        rating: selectedAnimeRating
      }
      const response = await animeClient.getAnimeSearch(searchParams)
      setAnimeList(response.data)
    }
    getAnimeSearch()
  }, [selectedAnimeType, selectedAnimeRating])

  return (
    <>
      <div className='mb-5 flex gap-2'>
        <AnimeDropdown
          options={Object.values(AnimeType)}
          placeholder='Select Anime Type'
          selectedOption={selectedAnimeType}
          setSelectedOption={(value) => setSelectedAnimeType(value)}
        />
        <AnimeDropdown
          options={Object.values(AnimeRating)}
          placeholder='Select Anime Rating'
          uppercaseOption={true}
          selectedOption={selectedAnimeRating?.toUpperCase()}
          setSelectedOption={(value) => setSelectedAnimeRating(value)}
        />
      </div>
      <div className='flex flex-wrap justify-center gap-2'>
        {animeList?.map((anime) => <AnimeCard key={anime.mal_id} anime={anime} />)}
      </div>
    </>
  )
}

export default Home
