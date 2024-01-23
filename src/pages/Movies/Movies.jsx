import { useState } from 'react';
import {
  Input,
  StyleButton,
  StyledForm,
  StyledWrapperMovie,
} from './Movies.styled';
import { searchMovies } from 'Services';
import { useSearchParams } from 'react-router-dom';
import { MoviesUl } from 'components/MoviesUl/MoviesUl';

const Movies = () => {
  const [movie, setMovie] = useState({});
  const [query, setQuery] = useSearchParams('');

  const handleSubmit = async event => {
    event.preventDefault();
    const { results } = await searchMovies(query);
    setMovie(results);
    setQuery(`query=${query}`);
  };

  return (
    <>
      <StyledWrapperMovie>
        <StyledForm onSubmit={handleSubmit}>
          <Input type="text" onChange={e => setQuery(e.target.value)} />
          <StyleButton type="submit">Search</StyleButton>
        </StyledForm>
      </StyledWrapperMovie>
      <MoviesUl movie={movie} />
    </>
  );
};

export default Movies;
