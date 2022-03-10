import styled from "styled-components";

const NavWrapper = styled.header`
  width: 100%;
  background: var(--color-dark-primary);
  color: var(--color-light-primary);
  padding: 1rem 0;
`;
const NavList = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ul li {
    list-style: none;
    display: inline;
  }

  ul li a {
    text-decoration: none;
    padding: 1rem;
    color: var(--color-light-primary);
  }

  ul li a:hover {
    background: var(--color-light-primary);
    color: var(--color-blue-primary);
    transition: all 300ms ease;
    border-radius: 8px;
  }
`;
const Logo = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
  a {
    text-decoration:none;
    color:var(--color-light-primary);
  }
`;

export { NavWrapper, NavList, Logo };
