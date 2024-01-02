import { Anime, AnimeTopParams, AnimeType, TopClient } from '@tutkli/jikan-ts'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

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
      {animeList?.map((anime) => (
        <Link
          key={anime.mal_id}
          to={`${anime.mal_id}`}
          className='h-auto w-64 rounded-md p-5 transition duration-300 ease-in-out hover:bg-neutral-700/50'>
          <img
            src={anime.images.webp?.image_url}
            alt={anime.title}
            className='mx-auto rounded-md'
          />
          <p className='mb-5 mt-2 text-lg font-bold'>{anime.title}</p>
          <div className='flex flex-wrap gap-1'>
            {anime.genres.map((genre) => (
              <div key={genre.mal_id} className='rounded-md bg-neutral-700/75 px-2'>
                <p>{genre.name}</p>
              </div>
            ))}
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Home
