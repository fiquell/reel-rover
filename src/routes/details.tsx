import { useEffect, useState } from 'react';
import { Anime, AnimeClient } from '@tutkli/jikan-ts';
import { useParams } from 'react-router-dom';

const Details = () => {
  const [anime, setAnime] = useState<Anime>();
  const { id } = useParams();

  useEffect(() => {
    const getAnimeById = async () => {
      const animeClient = new AnimeClient();
      const response = await animeClient.getAnimeById(parseInt(id!));
      setAnime(response.data);
    };
    getAnimeById();
  }, [id]);

  return (
    <div className='grid-cols-3'>
      <div className='flex gap-5 p-5 shadow-md rounded-md text-slate-200 border-solid border-2 border-sky-500'>
        {anime && anime.images ? (
          <img src={anime.images.webp?.image_url} alt={anime.title} />
        ) : null}

        <div>
          {anime ? (
            <>
              <div className='mb-2'>
                <h1 className='text-5xl font-semibold'>{anime.title}</h1>
              </div>
              <div>
                <p>Type: {anime.type}</p>
                <p>Episodes: {anime.episodes}</p>
                <p>Score: {anime.score}</p>
                <p>Genres: {anime.genres.map((genre) => genre.name).join(', ')}</p>
              </div>
            </>
          ) : null}

          <div className='flex gap-2 mt-5'>
            <button className='btn'>Add to Bookmark</button>
            <button className='btn'>Add to Favorites</button>
          </div>
        </div>
      </div>

      <div className='shadow-md rounded-md text-slate-200 p-10 mt-5 border-solid border-2 border-sky-500'>
        {anime ? (
          <p>
            <b className='text-2xl font-semibold'>Synopsis</b>
            <br />
            {anime.synopsis}
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default Details;
