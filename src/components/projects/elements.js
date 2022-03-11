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
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (min-width:240px) and (max-width:720px) {
    grid-template-columns:1fr;
  }
`;

const Card = styled.div`
  width: 100%;
  height: auto;
  box-shadow: 16px 18px 62px -15px rgba(0, 0, 0, 0.54);
  -webkit-box-shadow: 16px 18px 62px -15px rgba(0, 0, 0, 0.54);
  -moz-box-shadow: 16px 18px 62px -15px rgba(0, 0, 0, 0.54);
  border-radius: 5px;

  figure {
    width:100%;
    height:auto;
    display:flex;
    justify-content:center;
    background:var(--color-blue-primary);
    border-radius: 5px;
  }
  figure img {
    width:50%;
    height:100%;
    object-fit:contain;
    border-radius:50%;
    padding:1rem;
    filter: grayscale(100%);
  }

  div {
    padding: 1.5rem;
  }
  div > span {
    font-weight:700;
    font-size: 1.5rem;
  }
  div p {
    text-align:justify;
    padding:1rem 0;
    color:var(--color-gray);
    line-height:2rem;
  }
  .button_container {
    padding:0;
    display:flex;
    width:100%;
  }
`;

export { WrapperProject, GridCards, Card };
