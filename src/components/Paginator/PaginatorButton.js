import styled, { css } from "styled-components";

export const PaginatorButton = styled.button`
  background-color: transparent;
  width: 40px;
  height: 40px;
  color: #e2e8f0;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;

  svg {
    width: 50%;
  }

  ${(props) =>
    props.isLeft &&
    css`
      svg {
        transform: rotateZ(90deg);
      }
    `}
  ${(props) =>
    props.isRight &&
    css`
      svg {
        transform: rotateZ(-90deg);
      }
    `}
  ${(props) =>
    props.isSelected &&
    css`
      border: 1px solid #e2e8f0;
    `}

  :hover {
    border: 1px solid #e2e8f0;
  }
`;
