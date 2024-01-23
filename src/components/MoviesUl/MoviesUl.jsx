import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const MoviesUl = ({ movie }) => {
  const location = useLocation();
  return (
    <ul>
      {movie.length > 0 &&
        movie.map(film => (
          <li key={film.id}>
            <Link state={{ from: location }} to={`/movies/${film.id}`}>
              {film.original_title}
            </Link>
          </li>
        ))}
    </ul>
  );
};
