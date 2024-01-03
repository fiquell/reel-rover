import { Anime } from '@tutkli/jikan-ts'
import { Link } from 'react-router-dom'

interface AnimeCardProps {
  anime: Anime
}

const AnimeCard: React.FC<AnimeCardProps> = ({ anime }) => {
  return (
    <Link
      key={anime.mal_id}
      to={`${anime.mal_id}`}
      className='h-auto w-64 rounded-md p-5 transition duration-300 ease-in-out hover:bg-neutral-700/50'>
      <img src={anime.images.webp?.image_url} alt={anime.title} className='mx-auto rounded-md' />
      <p className='mb-5 mt-2 text-lg font-bold'>{anime.title}</p>
      <div className='flex flex-wrap gap-1'>
        {anime.genres.map((genre) => (
          <div key={genre.mal_id} className='rounded-md bg-neutral-700/75 px-2'>
            <p>{genre.name}</p>
          </div>
        ))}
      </div>
    </Link>
  )
}

export default AnimeCard
