import styled from "styled-components";

export const Input = styled.input`
  background: white;
  padding: 5px;
  color: black;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  width: 100%;

  :focus {
    outline: none;
  }
`;

export const Button = styled.button`
  background: white;
  padding: 5px;
  color: white;
  background-color: #19b8da;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  width: 40px;
  height: 34px;
  cursor: pointer;
`;
