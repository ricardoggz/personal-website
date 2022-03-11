import styled from "styled-components";

const HeroWrapper = styled.section`
  width: 100%;
  background: var(--color-dark-primary);
  padding: 5rem 0;
  color: var(--color-light-primary);
`;
const HeroDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width:240px) and (max-width:880px){
    flex-direction:column;
    justify-content:center;
  }
`;
const HeroImage = styled.img`
  border-radius: 50%;
  width: 20%;
  @media (min-width:240px) and (max-width:880px){
    width:40%;
  }
`;
const HeroTitles = styled.div`
  padding: 0 2rem;
  span {
    font-size: 3.5rem;
    font-weight: 700;
  }
  p {
    font-weight: 700;
    font-size: 1.5rem;
  }
  @media (min-width:240px) and (max-width:880px){
    span{
      font-size:2rem;
    }
    padding-top:1rem; 
  }
`;

export { HeroWrapper, HeroImage, HeroDescription, HeroTitles };
