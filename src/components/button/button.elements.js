import styled from "styled-components";

const ButtonWrapper = styled.a`
  background:var(--color-green-primary);
  border: 1px solid var(--color-light-primary);
  border-radius:2rem; 
  padding:0.5rem;
  color:var(--color-light-primary);
  font-size:1.5rem;
  cursor:pointer;
  text-align:center;
  text-decoration:none;

  :hover {
      background:none;
      transition: all 300ms ease;
  }
`;

export { ButtonWrapper };
