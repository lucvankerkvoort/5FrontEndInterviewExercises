import styled from "styled-components";

export const Button = styled.button`
  background-color: ${({ isPressed }) => (isPressed ? "blue" : "purple")};
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Application = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
