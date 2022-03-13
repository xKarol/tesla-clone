import NavItem from "./nav-item";
import { StyledFooter, StyledNavList } from "./styles";

function Footer() {
  return (
    <StyledFooter>
      <nav>
        <StyledNavList>
          <NavItem href="/about">Tesla Clone 2022</NavItem>
          <NavItem href="/legal">Privacy & Legal</NavItem>
          <NavItem href="/contact">Contact</NavItem>
          <NavItem href="/careers">Careers</NavItem>
          <NavItem href="/news">News</NavItem>
          <NavItem href="/engage">Engage</NavItem>
          <NavItem href="/locations">Locations</NavItem>
        </StyledNavList>
      </nav>
    </StyledFooter>
  );
}

export default Footer;
