import styled from "styled-components";

const WrapperButton = styled.a`
  width: 100%;
  text-decoration: none;
  background: var(--color-blue-secondary);
  border: 1px solid var(--color-blue-secondary);
  color: var(--color-light-primary);
  padding: 0.5rem;
  border-radius: 5px;
  text-align:center;

  :hover {
    background: none;
    transition: all 300ms ease;
    color: var(--color-blue-primary);
  }
`;

export { WrapperButton };
