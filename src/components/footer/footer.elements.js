import styled from "styled-components";

const FooterWrapper = styled.section`
background:var(--color-dark-secondary);
width:100%; 

color:var(--color-light-primary);
`;

const SocialContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items:center;
  padding 3rem 0;
  span {
    font-size:1.5rem;
  }

  @media (min-width:240px) and (max-width:880px) {
    flex-direction:column;
  }
`;

const SocialList = styled.div`
  ul li {
    display: inline;
  }
  ul li a {
    padding:0 1rem;
    color: var(--color-light-primary);
    text-decoration: none;
    font-size: 2rem;
  }
  ul li a :hover {
      color:var(--color-green-primary);
      transition: all 300ms ease;
  }

  @media (min-width:240px) and (max-width:880px) {
    ul {
      padding-top:3rem;
    }
    ul li a {
      font-size:1.5rem;
    }
  }
`;

const CopyRight=styled.div`
  width:100%;
  padding:1rem 0;
  text-align:center;
  background:var(--color-dark-primary);
  a {
    text-decoration:none;
    color:var(--color-green-primary);
  }
`;

export { FooterWrapper, SocialContainer, SocialList, CopyRight };
