import styled from "styled-components";

const AboutWrapper = styled.section`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: spacebetween;
  padding: 5rem 0;
  gap: 2rem;
  img {
    width: 30%;
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
