import { StyledNavbarItem } from "./styles";

function NavbarItem({ id, href, children, type, onClick }) {
  return (
    <StyledNavbarItem id={id} type={type} onClick={onClick}>
      {!href?.length ? (
        <button id="nav-item">{children}</button>
      ) : (
        <a href={href.length ? href : "#"} id="nav-item">
          {children}
        </a>
      )}
    </StyledNavbarItem>
  );
}

export default NavbarItem;
