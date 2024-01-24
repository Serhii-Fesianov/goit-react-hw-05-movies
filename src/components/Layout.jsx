import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { NavBar } from './NavBar';
import { StyledHeader, StyledOutletWrapper } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <StyledHeader>
        <NavBar />
      </StyledHeader>

      <StyledOutletWrapper>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </StyledOutletWrapper>
    </>
  );
};
