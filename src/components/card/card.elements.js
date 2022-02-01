import styled from "styled-components";

const CardWrapper = styled.div`
  width: 70%;
  height: auto;
  padding: 0.5rem;
  border-radius: 8px;
  background: var(--color-dark-secondary);
  color: var(--color-light-primary);

  @media (min-width: 240px) and (max-width: 880px) {
    width: 90%;
  }
`;

const CardText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .title {
    font-size: 5rem;
  }
  .subtitle {
    font-size: 2.5rem;
    color: var(--color-green-primary);
  }

  @media (min-width: 240px) and (max-width: 880px) {
    .title {
      font-size: 2rem;
    }
    .subtitle {
      font-size: 1.5rem;
    }
  }
`;
export { CardWrapper, CardText };
