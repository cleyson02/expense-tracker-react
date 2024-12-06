import styled from 'styled-components';

export const Container = styled.div`
  background-color: #FFF;
  box-shadow: 0px 0px 5px #CCC;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
  display: flex;
  flex-direction: column; /* Coloca os elementos em coluna */
  align-items: flex-start; /* Alinha à esquerda */
`;

export const InputLabel = styled.label`
  width: 100%;
  margin: 10px 0; /* Adiciona espaçamento entre os campos */
`;

export const InputTitle = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 100%; /* O input ocupa 100% da largura do seu container */
  max-width: 500px; /* Limita a largura do input */
  height: 30px;
  padding: 0 10px;
  border: 1px solid lightblue;
  border-radius: 5px;
  margin-left: auto; /* Centraliza o input dentro do seu container */
  margin-right: auto; /* Centraliza o input dentro do seu container */
  margin-bottom: 15px;
`;

export const Button = styled.button`
  width: 100%;
  height: 30px;
  padding: 0 5px;
  border: 1px solid lightblue;
  border-radius: 5px;
  background-color: lightblue;
  color: black;
  cursor: pointer;
  margin-top: 20px; /* Espaço entre o botão e a lista de pessoas */

  &:hover {
    background-color: blue;
    color: white;
  }
`;

export const ListContainer = styled.div`
  width: 100%;
  margin-top: 30px;
`;

export const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
