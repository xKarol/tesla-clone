import { StyledNavItem } from "./styles";

function NavItem(props) {
  return (
    <StyledNavItem {...props}>
      <a href={props.href}>{props.children}</a>
    </StyledNavItem>
  );
}

export default NavItem;
