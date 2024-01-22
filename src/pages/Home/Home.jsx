import styled from 'styled-components';
import { getAllMovies } from 'Services';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getAllMovies().then(response => setMovies(response.results));
  }, []);

  console.log(movies);
  return (
    <>
      <StyledMovies>Tranding</StyledMovies>
      <StyledUlMovies>
        {movies.map(movie => (
          <StyledItemMovies key={movie.id}>
            <StyledLink to={'movies/' + movie.id.toString()}>
              {movie.title}
            </StyledLink>
          </StyledItemMovies>
        ))}
      </StyledUlMovies>
    </>
  );
};

export const StyledMovies = styled.h1`
  font-size: 25px;
  margin: 0;
`;

export const StyledHome = styled.h1`
  font-size: 25px;
  margin: 0;
`;

export const StyledUlMovies = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
`;

export const StyledItemMovies = styled.li`
  text-align: center;
`;

export const StyledLink = styled(Link)`
  margin: 0;
`;
