import { getAllMovies } from 'Services';
import React, { useEffect, useState } from 'react';

import { MoviesList } from 'components/MoviesList/MoviesList';
import { StyledMovies, Wrapper } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getAllMovies().then(response => setMovies(response.results));
  }, []);

  console.log(movies);
  return (
    <Wrapper>
      <StyledMovies>Tranding</StyledMovies>
      {movies.length > 0 ? (
        <MoviesList movie={movies} />
      ) : (
        <h2>Sorry any films not found</h2>
      )}
    </Wrapper>
  );
};

export default Home;
