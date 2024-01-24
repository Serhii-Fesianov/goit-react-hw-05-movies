import styled from 'styled-components';

export const StyledWrapperMovie = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  background-color: bisque;
`;

export const Input = styled.input`
  border: solid 2px lightcoral;
  border-radius: 7px;
  padding: 8px 4px;
  box-shadow: 1px 2px 2px 1px;
  width: 275px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 15px;
`;

export const StyleButton = styled.button`
  border: solid 2px lightcoral;
  padding: 5px 7px;
  border-radius: 5px;
  box-shadow: 1px 2px 2px 1px;
  height: 35px;
  width: 115px;
  text-align: center;
  cursor: pointer;
  &:hover {
    background-color: darkorange;
  }
  &:active {
    background-color: darkorange;
  }
`;
