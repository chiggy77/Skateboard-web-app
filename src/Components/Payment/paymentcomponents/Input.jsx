import styled from "styled-components";

const Input = styled.input`
  & {
    font-size: 1.2rem;
    border: none;
    border-bottom: 3px solid #dddddd;
    outline: none;
    padding: 0 0rem 0 2rem;
  }

  &:hover,
  &:focus {
    border-bottom: 3px solid #0e2a47;
  }
`;

export default Input;
