import styled from "styled-components";

const AboutWrapper = styled.section`
  width: 100%;
  padding: 5rem 0;
  background: var(--color-dark-secondary);
  color: var(--color-light-primary);
  span {
    font-size: 1.8rem;
  }
`;

const AboutDescription = styled.div`
  padding-top: 3rem;
  line-height: 2.5rem;
  text-align: justify;
`;

const SkillsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  padding-top: 3rem;

  @media (min-width: 240px) and (max-width: 880px) {
    grid-template-columns: 1fr;
  }
`;

const SkillCard = styled.div`
  height: auto;
  background: var(--color-dark-primary);
  padding: 1rem;
  line-height: 2.5rem;
  ul li {
    list-style: none;
  }
`;

export { AboutWrapper, AboutDescription, SkillsWrapper, SkillCard };
