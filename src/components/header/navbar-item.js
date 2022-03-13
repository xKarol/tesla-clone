import { StyledNavbarItem } from "./styles";

function NavbarItem(props) {
  return (
    <StyledNavbarItem {...props}>
      <a href={props.href}>{props.children}</a>
    </StyledNavbarItem>
  );
}

export default NavbarItem;
