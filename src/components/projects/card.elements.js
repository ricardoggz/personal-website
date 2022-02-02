import styled from "styled-components";

const ProjectWrapper = styled.section`
  width: 100%;
  padding: 5rem 0;
  color: var(--color-light-primary);

  span {
    font-size: 1.8rem;
  }
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  padding-top: 5rem;

  @media (min-width: 240px) and (max-width: 880px) {
    grid-template-columns: 1fr;
  }
`;

const CardWrapper = styled.div`
  background: var(--color-dark-secondary);
  border-radius: 5px;
  figure {
    width: 100%;
    height: auto;
  }
  figure img {
    width: 100%;
    object-fit: contain;
  }

  span {
    font-size: 1.8rem;
  }

  div {
    padding: 1rem;
  }
`;

export { ProjectWrapper, CardsContainer, CardWrapper };
