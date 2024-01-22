import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavBar = () => {
  return (
    <StyledNav>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/movies">Movies</StyledLink>
    </StyledNav>
  );
};

export const StyledNav = styled.nav`
  display: flex;
  gap: 10px;
`;

export const StyledLink = styled(NavLink)`
  color: white;
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
