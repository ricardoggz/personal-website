import styled from "styled-components";

const HeroWrapper = styled.section`
  width: 100%;
  height:90vh;
  background:var(--color-dark-primary);
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width:240px) and (max-width:880px) {
    height:80vh;
  }
`;

export { HeroWrapper };