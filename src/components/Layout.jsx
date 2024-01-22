import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavBar } from './NavBar';
import styled from 'styled-components';

export const Layout = () => {
  return (
    <>
      <StyledHeader>
        <NavBar />
      </StyledHeader>

      <StyledOutletWrapper>
        <Outlet />
      </StyledOutletWrapper>
    </>
  );
};

export const StyledHeader = styled.header`
  display: flex;

  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  font-size: 1.1rem;
  background-color: #d08955;
  color: whitesmoke;
`;

export const StyledOutletWrapper = styled.div`
  padding: 0 15px;
`;
