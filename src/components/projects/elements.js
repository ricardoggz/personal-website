import styled from "styled-components";

const WrapperProject = styled.section`
  width: 100%;
  height: auto;
  background: var(--color-light-secondary);
  padding: 5rem 0;
`;
const GridCards = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1fr);
  gap: 1rem;
`;

const Card = styled.figure`
  width: 100%;
  height: auto;
  box-shadow: 16px 18px 62px -15px rgba(0, 0, 0, 0.54);
  -webkit-box-shadow: 16px 18px 62px -15px rgba(0, 0, 0, 0.54);
  -moz-box-shadow: 16px 18px 62px -15px rgba(0, 0, 0, 0.54);
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    opacity: 0.95;
  }
  img:hover {
    opacity: 100;
    transition: all 300ms ease;
  }
`;

export { WrapperProject, GridCards, Card };
