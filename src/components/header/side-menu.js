import { StyledSidebarContainer, StyledSideMenuList } from "./styles";
import { GrClose } from "react-icons/gr";
import { headerLinks } from "../../config/header-links";
import NavbarItem from "./navbar-item";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";

const StyledSideMenu = styled(motion.div)`
  width: 300px;
  height: 100%;
  background: #fff;
  position: relative;
  display: flex;
`;

const StyledCloseIcon = styled(GrClose)`
  position: absolute;
  top: 20px;
  right: 30px;
  width: 35px;
  height: 35px;
  display: block;
  z-index: 110;
  cursor: pointer;
  border-radius: 50%;
  padding: 8px;
  transition: background-color 300ms ease-in-out;
  &:hover {
    background-color: rgba(244, 244, 244, 0.45);
  }
`;

function SideMenu({ active, setActive }) {
  return (
    <AnimatePresence>
      {active && (
        <StyledSidebarContainer onClick={() => setActive(false)}>
          <StyledSideMenu
            onClick={(e) => e.stopPropagation()}
            initial={{ x: "100vw", opacity: 0 }}
            animate={{ x: "calc(100vw - 300px)", opacity: 1 }}
            exit={{ x: "100vw", opacity: 0 }}
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
