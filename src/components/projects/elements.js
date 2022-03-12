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
  }
  figure img {
    width:100%;
    height:100%;
    object-fit:contain;
  }

  div {
    width:100%;
    padding:1rem;
    
  }
  a {
    text-decoration:none;
  }
  a span {
    font-weight:700;
    font-size: 1.5rem;
    color:var(--color-dark-primary);
  }
  a  p {
    text-align:justify;
    padding-top:1rem;
    color:var(--color-gray);
    line-height:2rem;
  }
`;

export { WrapperProject, GridCards, Card };
