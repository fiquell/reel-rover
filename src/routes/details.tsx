import { useEffect, useState } from 'react';
import { Anime, AnimeClient } from '@tutkli/jikan-ts';
import { useParams } from 'react-router-dom';
import { Icon } from '@iconify/react'


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
    <div className='max-w-4xl m-auto'>
      <div className='flex gap-5 p-5 justify-center border-8 border-slate-700/100  rounded-sm'>
        {anime && anime.images ? (
          <img
            src={anime.images.webp?.image_url}
            alt={anime.title}
            className='rounded-sm'
          />
        ) : null}

        <div className='text-slate-300'>
          {anime ? (
            <>
              <div className='mb-2'>
                <h1 className='text-5xl t font-semibold'>{anime.title}</h1>
              </div>
              <div className='text-xl'>
                <p>Type: {anime.type}</p>
                <p>Episodes: {anime.episodes}</p>
                <p>Score: {anime.score}</p>
                <p>Genres: {anime.genres.map((genre) => genre.name).join(', ')}</p>
              </div>
            </>
          ) : null}

         <div className='flex gap-2 mt-5'>
            <button className='btn btn-neutral'>
        <Icon icon='material-symbols-light:bookmarks-outline' />
               Add to Bookmark
            </button>
            <button className='btn btn-neutral'>
        <Icon icon='fluent-mdl2:favorite-star' />
               Add to Favorites
            </button>
          </div>
        </div>
      </div>


      <div className='shadow-md  p-10 mt-5 border-solid border-2 border-gray-700 '>
        {anime ? (
          <p className='text-lg text-slate-400'>
            <b className='text-2xl text-white font-semibold leading-loose'>Synopsis</b>
            <br />
            {anime.synopsis}
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default Details;
