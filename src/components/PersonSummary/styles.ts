import styled from 'styled-components';

export const Container = styled.div`
  background-color: #FFF;
  box-shadow: 0px 0px 5px #CCC;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 10px;
  margin-top: 20px;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Table = styled.table`
  width: 100%;
  background-color: #FFF;
  padding: 20px;
  box-shadow: 0px 0px 5px #CCC;
  border-radius: 10px;
  margin-top: 20px;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

export const TableHeadColumn = styled.th<{ width?: number }>`
  width: ${props => props.width ? `${props.width}px` : 'auto'};
  padding: 10px 0;
  text-align: left;
  font-weight: bold;
  border-bottom: 2px solid #CCC;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #EEE;
`;

export const TableData = styled.td`
  padding: 10px 0;
  text-align: left;
  padding-left: 20px;
`;

export const Info = styled.div<{ color?: string }>`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${props => props.color || 'black'};
  margin-top: 5px;
`;