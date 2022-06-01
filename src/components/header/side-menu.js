import {
  StyledCloseIcon,
  StyledSidebarContainer,
  StyledSideMenu,
  StyledSideMenuList,
} from "./styles";
import { headerLinks } from "../../config/header-links";
import NavbarItem from "./navbar-item";
import { AnimatePresence } from "framer-motion";

function SideMenu({ active, setActive }) {
  return (
    <AnimatePresence>
      {active && (
        <StyledSidebarContainer onClick={() => setActive(false)}>
          <StyledSideMenu
            onClick={(e) => e.stopPropagation()}
            initial={{ x: "calc(100vw - 150px)", opacity: 0 }}
            animate={{ x: "calc(100vw - 300px)", opacity: 1 }}
            exit={{ x: "calc(100vw - 150px)", opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <StyledCloseIcon onClick={() => setActive(false)} />
            <StyledSideMenuList>
              {headerLinks.map(({ name, href }) => (
                <NavbarItem key={name} href={href}>
                  {name}
                </NavbarItem>
              ))}
            </StyledSideMenuList>
          </StyledSideMenu>
        </StyledSidebarContainer>
      )}
    </AnimatePresence>
  );
}

export default SideMenu;
