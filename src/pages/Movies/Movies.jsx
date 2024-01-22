import { useState } from 'react';
import {
  Input,
  StyleButton,
  StyledForm,
  StyledWrapperMovie,
} from './Movies.styled';
import { searchMovies } from 'Services';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

export const Movies = () => {
  const [movie, setMovie] = useState({});
  const [searchParams, setSearchParams] = useSearchParams('');
  const [query, setQuery] = useState('');

  const handleSubmit = async event => {
    event.preventDefault();
    const { results } = await searchMovies(query);
    setMovie(results);
    setSearchParams(`query=${query}`);
  };
  const location = useLocation();

  return (
    <>
      <StyledWrapperMovie>
        <StyledForm onSubmit={handleSubmit}>
          <Input type="text" onChange={e => setQuery(e.target.value)} />
          <StyleButton type="submit">Search</StyleButton>
        </StyledForm>
      </StyledWrapperMovie>
      <ul>
        {movie.length > 0 &&
          movie.map(film => (
            <li key={film.id}>
              <Link state={{ from: location }} to={`/movies/${film.id}`}>
                {film.original_title}{' '}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};
