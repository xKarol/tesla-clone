import NavItem from "./nav-item";
import { StyledFooter, StyledNavList } from "./styles";

function Footer() {
  return (
    <StyledFooter>
      <nav>
        <StyledNavList>
          <NavItem href="/about">Tesla Clone 2022</NavItem>
          <NavItem href="/legal">Privacy & Legal</NavItem>
          <NavItem smHide href="/contact">
            Contact
          </NavItem>
          <NavItem href="/careers">Careers</NavItem>
          <NavItem smHide href="/news">
            News
          </NavItem>
          <NavItem smHide href="/engage">
            Engage
          </NavItem>
          <NavItem smHide href="/locations">
            Locations
          </NavItem>
        </StyledNavList>
      </nav>
    </StyledFooter>
  );
}

export default Footer;
