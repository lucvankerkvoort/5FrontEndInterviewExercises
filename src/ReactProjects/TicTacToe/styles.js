import styled from "styled-components";

export const Tile = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Board = styled.div`
  margin: 50px auto;
  display: grid;
  height: 500px;
  width: 500px;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
`;
