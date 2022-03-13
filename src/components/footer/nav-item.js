import { StyledNavItem } from "./styles";

function NavItem({ children, href }) {
  return (
    <StyledNavItem>
      <a href={href}>{children}</a>
    </StyledNavItem>
  );
}

export default NavItem;
