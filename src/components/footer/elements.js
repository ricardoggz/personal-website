import styled from "styled-components";

const FooterWrapper = styled.footer`
  width: 100%;
  background: var(--color-dark-secondary);
`;
const FooterList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 0;
  ul li {
    list-style: none;
    display: inline;
  }

  ul li a {
    text-decoration: none;
    padding: 1rem;
    color: var(--color-light-primary);
    font-size:1.5rem;
  }

  ul li a:hover {
    background: var(--color-light-primary);
    color: var(--color-dark-primary);
    transition: all 300ms ease;
    border-radius: 8px;
  }

  @media (min-width:240px) and (max-width:720px) {
    flex-direction:column;
    justify-content:center;
    ul li a:hover {

      background:none;
      color:var(--color-light-primary);
    }
`;

const Copyright = styled.div`
  width:100%;
  text-align:center;
  color:var(--color-light-secondary);
  background:var(--color-dark-primary);
  padding: 1rem 0;
 `;

export { FooterWrapper, FooterList, Copyright };
