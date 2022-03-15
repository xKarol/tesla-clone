import { StyledNavbarItem } from "./styles";

function NavbarItem({ id, href, children, type, onClick }) {
  return (
    <StyledNavbarItem id={id} type={type} onClick={onClick}>
      <a href={href} id="nav-item">
        {children}
      </a>
    </StyledNavbarItem>
  );
}

export default NavbarItem;
