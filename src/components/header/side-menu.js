import { StyledSideMenu, StyledSideMenuList } from "./styles";
import { GrClose } from "react-icons/gr";
import { headerLinks } from "../../config/header-links";
import NavbarItem from "./navbar-item";

function SideMenu({ setActive }) {
  return (
    <StyledSideMenu>
      <GrClose id="close" onClick={() => setActive(false)} />
      <StyledSideMenuList>
        {headerLinks.map(({ name, href }) => (
          <NavbarItem key={name} href={href}>
            {name}
          </NavbarItem>
        ))}
      </StyledSideMenuList>
    </StyledSideMenu>
  );
}

export default SideMenu;
