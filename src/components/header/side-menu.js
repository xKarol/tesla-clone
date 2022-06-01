import {
  StyledCloseIconButton,
  StyledSidebarContainer,
  StyledSideMenu,
  StyledSideMenuList,
} from "./styles";
import { headerLinks } from "../../config/header-links";
import NavbarItem from "./navbar-item";
import { AnimatePresence } from "framer-motion";
import { GrClose } from "react-icons/gr";

function SideMenu({ active, setActive }) {
  return (
    <AnimatePresence>
      {active && (
        <StyledSidebarContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
          onClick={() => setActive(false)}
        >
          <StyledSideMenu
            onClick={(e) => e.stopPropagation()}
            initial={{ x: "calc(100vw - 150px)", opacity: 0 }}
            animate={{ x: "calc(100vw - 300px)", opacity: 1 }}
            exit={{ x: "calc(100vw - 150px)", opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <StyledCloseIconButton onClick={() => setActive(false)}>
              <GrClose />
            </StyledCloseIconButton>
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
