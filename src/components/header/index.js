import { StyledHeader, StyledNavbarContainer } from "./styles";
import Logo from "../logo";
import Navbar from "./navbar";
import NavbarItem from "./navbar-item";
import { useState } from "react";
import { GrClose } from "react-icons/gr";
import { headerLinks, linkTypes } from "../../config/header-links";

function Header() {
  const [active, setActive] = useState(false);
  return (
    <StyledHeader>
      <Logo />
      <StyledNavbarContainer className={active ? "active" : ""}>
        <Navbar>
          {headerLinks
            .filter((link) => link.type === linkTypes.CENTER)
            .map(({ name, href }) => (
              <NavbarItem key={name} href={href}>
                {name}
              </NavbarItem>
            ))}
        </Navbar>
        <Navbar>
          {headerLinks
            .filter((link) => link.type !== linkTypes.CENTER)
            .map(({ name, href, type }) => (
              <NavbarItem key={name} href={href} type={type}>
                {name}
              </NavbarItem>
            ))}
          <NavbarItem id="menu" onClick={() => setActive(!active)}>
            Menu
          </NavbarItem>
        </Navbar>
        <GrClose id="close" onClick={() => setActive(false)} />
      </StyledNavbarContainer>
    </StyledHeader>
  );
}

export default Header;
