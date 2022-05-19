import styled from "styled-components";

const NavWrapper = styled.header`
  width: 100%;
  background: var(--color-blue-primary);
  color: var(--color-light-primary);
  padding: 1rem 0;

  @media (min-width: 240px) and (max-width: 750px) {
    position: fixed;
  }
`;
const NavList = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    display: none;
  }

  @media (min-width: 240px) and (max-width: 750px) {
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      background: none;
      color: var(--color-ligth-primary);
      font-size: 1.5rem;
      border: none;
    }
  }
`;

const NavItems = styled.ul`
  display: flex;
  gap: 1rem;

  li {
    list-style: none;
  }

  li a {
    text-decoration: none;
    color: var(--color-light-primary);
  }

  @media (min-width: 240px) and (max-width: 780px) {
    background: var(--color-blue-primary);
    gap: 2rem;
    left: 0;
    right: 0;
    position: fixed;
    top: 3.5rem;
    width: 100%;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: 500ms all ease-in-out;
    transform: translateX(${({ open }) => (open ? "0" : "-100%")});

    li {
      width:90%;
      border-bottom:1px solid var(--color-gray);
      text-align:center;
      padding: 1rem 0;
    }
  }
`;
const Logo = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
  a {
    text-decoration: none;
    color: var(--color-light-primary);
  }
`;

export { NavWrapper, NavList, NavItems, Logo };
