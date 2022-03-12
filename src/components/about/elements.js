import styled from "styled-components";

const AboutWrapper = styled.section`
  height: 100%;
  padding: 5rem 0;
  p {
    color:var(--color-gray);
  }
  @media (min-width: 240px) and (max-width: 720px) {
    img {
      display: none;
    }
  }
`;
const AboutDescription = styled.div`
  text-align: justify;
  line-height: 2.5rem;
  width: 100%;

  .buttons {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
  }
  @media (min-width: 240px) and (max-width: 880px) {
    .buttons {
      flex-direction: column;
    }
  }
`;

export { AboutWrapper, AboutDescription };
