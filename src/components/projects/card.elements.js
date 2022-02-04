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
    gap:3rem;
  }
`;

const CardWrapper = styled.div`
  background: var(--color-dark-secondary);
  border-radius: 5px;
  figure {
    width: 100%;
    height: 100%;
  }
  figure img {
    width: 100%;
    object-fit: contain;
    border-radius: 5px;
    opacity:0.7;

    :hover {
      opacity:1;
      transition: all 300ms ease;
    }
  }

  span {
    font-size: 1.8rem;
  }

  div {
    width:100%;
  }
`;

export { ProjectWrapper, CardsContainer, CardWrapper };
