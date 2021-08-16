import styled, { css } from "styled-components";

export const HeaderBar = styled.nav`
  background: #1b263b;
  z-index: 1;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;

  ${(props) =>
    props.transparent &&
    css`
      position: absolute;
      background: transparent;
    `}
`;
