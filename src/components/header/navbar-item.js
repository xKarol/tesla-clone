import { StyledNavbarItem } from "./styles";

function NavbarItem(props) {
  return <StyledNavbarItem {...props}>{props.children}</StyledNavbarItem>;
}

export default NavbarItem;
