import styled from "styled-components";

export const Scores = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Game = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  text-align: center;
`;

export const Options = styled.div`
  display: flex;
  justify-content: space-around;
  width: 50vw;
  margin: 5rem auto;
`;

export const Option = styled.button`
  height: 10rem;
  padding: 1rem;
  border: none;
  border-radius: 50%;
  transition: 0.5s;

  :disabled {
    background: black;
    border: 10px solid black;
  }

  :hover {
    box-shadow: 0px 0px 9px black;
  }
  :active {
    border: 4px solid green;
  }
  .selected {
    border: 4px solid yellow;
  }
`;
