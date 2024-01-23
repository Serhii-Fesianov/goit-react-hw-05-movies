import { getAllMovies } from 'Services';
import React, { useEffect, useState } from 'react';
import {
  StyledItemMovies,
  StyledLinkHome,
  StyledMovies,
  StyledUlMovies,
  Wrapper,
} from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getAllMovies().then(response => setMovies(response.results));
  }, []);

  console.log(movies);
  return (
    <Wrapper>
      <StyledMovies>Tranding</StyledMovies>
      <StyledUlMovies>
        {movies.map(movie => (
          <StyledItemMovies key={movie.id}>
            <StyledLinkHome to={'movies/' + movie.id.toString()}>
              {movie.title}
            </StyledLinkHome>
          </StyledItemMovies>
        ))}
      </StyledUlMovies>
    </Wrapper>
  );
};

export default Home;
