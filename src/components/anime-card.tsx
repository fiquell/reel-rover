import { Anime } from '@tutkli/jikan-ts'
import { Link } from 'react-router-dom'

interface AnimeCardProps {
  anime: Anime
}

const AnimeCard = ({ anime }: AnimeCardProps) => {
  return (
    <Link
      to={`${anime.mal_id}`}
      className='card card-compact w-72 transition duration-300 ease-in-out hover:bg-base-content/10'>
      <figure className='px-4 pt-4'>
        <img src={anime.images.webp?.image_url} alt={anime.title} className='w-full rounded' />
      </figure>
      <div className='card-body'>
        <p className='card-title'>{anime.title}</p>
        <div className='card-actions'>
          {anime.genres.map((genre) => (
            <div key={genre.mal_id} className='badge badge-accent'>
              <p>{genre.name}</p>
            </div>
          ))}
        </div>
      </div>
    </Link>
  )
}

export default AnimeCard
