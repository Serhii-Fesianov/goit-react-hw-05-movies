import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ImgDetails = styled.img`
  width: 320px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
`;

export const Title = styled.h2`
  color: lightslategray;
  font-size: calc((1vh+1vw) * 1.5);
  font-weight: bold;
  text-decoration: none;
  font-style: italic;
`;

export const Info = styled.p`
  color: gray;
  font-size: calc((1vh+1vw) * 1.5);
  font-weight: bold;
  text-decoration: none;
  font-style: italic;
  font-weight: 500;
`;

export const SmallTitle = styled.h3`
  color: lightslategray;
  font-size: calc((1vh+1vw) * 1.5);
  font-weight: bold;
  text-decoration: none;
  font-style: italic;
`;

export const SmallHead = styled.h4`
  color: lightslategray;
  font-size: calc((1vh+1vw) * 1.5);
  font-weight: bold;
  text-decoration: none;
  font-style: italic;
`;

export const ListLink = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const StyledLinkMovies = styled(Link)`
  color: blue;
  font-size: calc((1vh+1vw) * 1.5);
  font-weight: bold;
  text-decoration: none;
  &.active {
    color: #5e5c5c;
  }
  &:hover:not(.active) {
    color: black;
  }
`;
