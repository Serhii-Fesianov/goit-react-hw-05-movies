import { getOneFilm } from 'Services';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export const SingleMovie = () => {
  const { moviesId } = useParams();

  const [film, setFilm] = useState(null);

  useEffect(() => {
    getOneFilm(moviesId)
      .then(response => setFilm(response))
      .catch(error => console.log(error));
  }, [moviesId]);

  return (
    <>
      {film && (
        <section>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
              alt={film.title}
            />
            <h2>{film.title}</h2>
            <p>Viewer rating:{film.vote_average}</p>
            <h3>Overview</h3>
            <p>{film.overview}</p>
            <h4>Genres</h4>
            <p>{film.genres.map(genre => genre.name).join(', ')}</p>
            <ul>
              <li>
                <Link>Cast</Link>
              </li>
              <li>
                <Link>Reviews</Link>
              </li>
            </ul>
          </div>
        </section>
      )}
    </>
  );
};
