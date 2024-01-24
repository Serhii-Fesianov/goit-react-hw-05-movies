import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledListMovies = styled.ul`
  display: flex;
  list-style: none;
  flex-direction: column;
  padding: 0;
`;

export const StyledItemMovies = styled.li`
  margin: 8px auto;
`;

export const StyledLinkMovies = styled(Link)`
  text-align: center;
  text-decoration: none;
  font-size: 20px;
  color: navy;
  box-shadow: 1px 2px 2px 1px;
  border: 1px solid navy;
  border-radius: 5px;
  &:hover {
    color: green;
    background-color: whitesmoke;
  }
  &:active {
    color: green;
    background-color: whitesmoke;
  }
`;
