import styled from "styled-components";

const NavWrapper = styled.header`
  width: 100%;
  height: auto;
  background: var(--color-dark-primary);
  color: var(--color-light-primary);
  padding: 1rem 0;
`;

const NavTitles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    font-size: 1.5rem;
  }
`;

const NavList = styled.nav`
  ul li {
    list-style: none;
    display: inline;
  }
  ul li a {
    text-decoration: none;
    padding: 0 1rem;
    color: var(--color-light-primary);
  }

  ul li a:hover {
    text-decoration: underline;
  }
  input,
  label {
    display: none;
  }

  @media (min-width: 240px) and (max-width: 880px) {
    label {
      display: flex;
      font-size: 1.5rem;
    }

    ul {
      display: none;
      top: 3.2rem;
      right: 0;
      position: absolute;
      z-index: 1;
    }

    ul li {
      padding: 2rem 0;
      font-size: 1.5rem;
    }

    input: checked ~ul {
      width: 100%;
      height: 90vh;
      background: var(--color-dark-primary);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;
export { NavWrapper, NavTitles, NavList };
