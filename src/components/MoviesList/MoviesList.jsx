import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  StyledItemMovies,
  StyledLinkMovies,
  StyledListMovies,
} from './MoviesList.styled';

export const MoviesList = ({ movie }) => {
  const location = useLocation();
  return (
    <StyledListMovies>
      {movie.map(film => {
        return (
          <StyledItemMovies key={film.id}>
            <StyledLinkMovies
              state={{ from: location }}
              to={`/movies/${film.id}`}
            >
              {film.name || film.title}
            </StyledLinkMovies>
          </StyledItemMovies>
        );
      })}
    </StyledListMovies>
  );
};
