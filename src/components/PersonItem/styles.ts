import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;

  span {
    margin-right: 10px;
  }

  button {
    background-color: #dc3545;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 4px;
  }
`;
