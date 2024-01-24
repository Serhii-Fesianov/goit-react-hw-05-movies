import { useEffect, useState } from 'react';
import {
  Input,
  StyleButton,
  StyledForm,
  StyledWrapperMovie,
} from './Movies.styled';
import { searchMovies } from 'Services';
import { useSearchParams } from 'react-router-dom';
import { MoviesList } from 'components/MoviesList/MoviesList';

const Movies = () => {
  const [movie, setMovie] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams('');

  useEffect(() => {
    const query = searchParams.get('query');
    if (!query) {
      return;
    }
    searchMovies(query).then(({ results }) => {
      setMovie(results);
    });
  }, [searchParams]);

  const handleSubmit = async event => {
    event.preventDefault();

    setSearchParams({ query: event.target.elements.query.value });
  };

  return (
    <>
      <StyledWrapperMovie>
        <StyledForm onSubmit={handleSubmit}>
          <Input type="text" name="query" />
          <StyleButton type="submit">Search</StyleButton>
        </StyledForm>
      </StyledWrapperMovie>
      <MoviesList movie={movie} />
    </>
  );
};

export default Movies;
