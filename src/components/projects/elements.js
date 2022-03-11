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

const Card = styled.div`
  width: 100%;
  height: auto;
  -webkit-box-shadow: -1px 2px 37px 5px rgba(0, 0, 0, 0.19);
  box-shadow: -1px 2px 37px 5px rgba(0, 0, 0, 0.19);
  border-radius: 8px;
  figure {
    width: 100%;
    height: auto;
  }
  figure img {
    object-fit: contain;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    opacity: 0.95;
  }

  figure > img:hover {
    opacity: 100;
    transition: all 300ms ease;
  }

  div {
    width: 100%;
    margin-top: 1rem;
    display: flex;
  }
`;

export { WrapperProject, GridCards, Card };
