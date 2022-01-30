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
    font-size:1.5rem;
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
`;
export { NavWrapper, NavTitles, NavList };
