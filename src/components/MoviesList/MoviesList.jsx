import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const MoviesList = ({ movie }) => {
  const location = useLocation();
  return (
    <ul>
      {movie.map(film => (
        <li key={film.id}>
          <Link state={{ from: location }} to={`/movies/${film.id}`}>
            {film.original_title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
