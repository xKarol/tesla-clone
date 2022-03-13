import { StyledHeader, StyledNavbarContainer } from "./styles";
import Logo from "../logo";
import Navbar from "./navbar";
import NavbarItem from "./navbar-item";
import { useState } from "react";
import { GrClose } from "react-icons/gr";

function Header() {
  const [active, setActive] = useState(false);
  return (
    <StyledHeader>
      <Logo />
      <StyledNavbarContainer className={active ? "active" : ""}>
        <Navbar>
          <NavbarItem>Model S</NavbarItem>
          <NavbarItem>Model 3</NavbarItem>
          <NavbarItem>Model X</NavbarItem>
          <NavbarItem>Model Y</NavbarItem>
          <NavbarItem>Solar Roof</NavbarItem>
          <NavbarItem>Solar Panels</NavbarItem>
          <NavbarItem>Solar Panels</NavbarItem>
          <NavbarItem>Solar Panels</NavbarItem>
          <NavbarItem>Solar Panels</NavbarItem>
          <NavbarItem>Solar Panels</NavbarItem>
          <NavbarItem>Solar Panels</NavbarItem>
          <NavbarItem>Solar Panels</NavbarItem>
          <NavbarItem>Solar Panels</NavbarItem>
          <NavbarItem>Solar Panels</NavbarItem>
          <NavbarItem>Solar Panels</NavbarItem>
          <NavbarItem>Solar Panels</NavbarItem>
          <NavbarItem>Solar Panels</NavbarItem>
          <NavbarItem>Solar Panels</NavbarItem>
          <NavbarItem>Solar Panels</NavbarItem>
          <NavbarItem>Solar Panels</NavbarItem>
          <NavbarItem>Solar Panels</NavbarItem>
          <NavbarItem>Solar Panels</NavbarItem>
          <NavbarItem>Solar Panels</NavbarItem>
          <NavbarItem>Solar Panels</NavbarItem>
          <NavbarItem>Solar Panels</NavbarItem>
          <NavbarItem>Solar Panels</NavbarItem>
          <NavbarItem>Solar Panels</NavbarItem>
          <NavbarItem>Solar Panels</NavbarItem>
          <NavbarItem>Solar Panels</NavbarItem>
          <NavbarItem>Solar Panels</NavbarItem>
          <NavbarItem>Solar Panels</NavbarItem>
          <NavbarItem>Solar Panels</NavbarItem>
          <NavbarItem>Solar Panels</NavbarItem>
          <NavbarItem>Solar Panels</NavbarItem>
          <NavbarItem>Solar Panels</NavbarItem>
          <NavbarItem>Solar Panels</NavbarItem>
          <NavbarItem>Solar Panels</NavbarItem>
          <NavbarItem>Solar Panels</NavbarItem>
          <NavbarItem>Solar Panels</NavbarItem>
          <NavbarItem>Solar Panels</NavbarItem>
          <NavbarItem>Solar Panels</NavbarItem>
          <NavbarItem>Solar Panels</NavbarItem>
          <NavbarItem>Solar Panels</NavbarItem>
          <NavbarItem>Solar Panels</NavbarItem>
          <NavbarItem>Solar Panels</NavbarItem>
          <NavbarItem>Solar Panels</NavbarItem>
          <NavbarItem>Solar Panels</NavbarItem>
          <NavbarItem>Solar Panels</NavbarItem>
          <NavbarItem>Solar Panels</NavbarItem>
        </Navbar>
        <Navbar>
          <NavbarItem>Shop</NavbarItem>
          <NavbarItem>Account</NavbarItem>
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
