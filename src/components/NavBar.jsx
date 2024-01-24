import React from 'react';
import { StyledLink, StyledNav } from './NavBar.styled';

export const NavBar = () => {
  return (
    <StyledNav>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/movies">Movies</StyledLink>
    </StyledNav>
  );
};
