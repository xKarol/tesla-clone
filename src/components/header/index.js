import { StyledHeader } from "./styles";
import Logo from "../logo";
import Navbar from "./navbar";
import NavbarItem from "./navbar/navbar-item";

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <Navbar>
        <NavbarItem>Model S</NavbarItem>
        <NavbarItem>Model 3</NavbarItem>
        <NavbarItem>Model X</NavbarItem>
        <NavbarItem>Model Y</NavbarItem>
        <NavbarItem>Solar Roof</NavbarItem>
        <NavbarItem>Solar Panels</NavbarItem>
      </Navbar>
      <Navbar>
        <NavbarItem>Shop</NavbarItem>
        <NavbarItem>Account</NavbarItem>
        <NavbarItem>Menu</NavbarItem>
      </Navbar>
    </StyledHeader>
  );
}

export default Header;
