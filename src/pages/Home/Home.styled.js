import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  padding: 0 15px;
  flex-wrap: wrap;
  flex-direction: column;
`;

export const StyledMovies = styled.h1`
  color: lightslategray;
  font-size: calc((1vh+1vw) * 1.5);
  font-weight: bold;
  text-decoration: none;
  font-style: italic;
  text-align: center;
`;

export const StyledHome = styled.h1`
  color: lightslategray;
  font-size: calc((1vh+1vw) * 1.5);
  font-weight: bold;
  text-decoration: none;
  font-style: italic;
`;

export const StyledUlMovies = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
`;
