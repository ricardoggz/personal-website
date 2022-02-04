import styled from "styled-components";

const ButtonWrapper = styled.a`
width:100%;
  background:var(--color-green-primary);
  border: 1px solid var(--color-light-primary);
  border-radius:2rem; 
  color:var(--color-light-primary);
  cursor:pointer;
  text-align:center;
  text-decoration:none;

  :hover {
      background:none;
      transition: all 300ms ease;
  }
`;

export { ButtonWrapper };
