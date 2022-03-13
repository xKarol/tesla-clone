import { StyledNavbarList } from "./styles";

function Navbar({ children }) {
  return (
    <nav>
      <StyledNavbarList>{children}</StyledNavbarList>
    </nav>
  );
}

export default Navbar;
