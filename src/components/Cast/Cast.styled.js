import styled from 'styled-components';

export const SmallHead = styled.h4`
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

export const StyledListCast = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
`;

export const StyledItemCast = styled.li`
  width: 275px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid green;
  background-color: beige;
  border-radius: 8px;
  margin: 0 0 20px 0;
  box-shadow: 1px 2px 2px 1px;
`;
