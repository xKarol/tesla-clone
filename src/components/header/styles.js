import styled from "styled-components";
import { device } from "../../styles/breakpoints";
import { BluredButton } from "../../styles";
import { motion } from "framer-motion";
import { GrClose } from "react-icons/gr";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-height: 30px;
  height: 30px;
  padding: 30px 20px;
  position: relative;
  overflow: hidden; // for slider
  @media ${device.sm} {
    padding-left: 40px;
    padding-right: 40px;
  }
  @media ${device.lg} {
    padding-left: 50px;
    padding-right: 50px;
  }
`;

export const StyledNavbarItem = styled.li`
  cursor: pointer;
  display: ${(props) => props.type === "MENU" && "none !important"};
  > a {
    padding: 8px 15px;
  }
  &:last-child {
    margin-right: 0;
  }
`;

export const StyledNavbarList = styled.ul`
  font-size: 15px;
  display: flex;
  > ${StyledNavbarItem} {
    display: none;
    &#menu {
      display: block;
      z-index: 1;
      > a {
        ${BluredButton};
      }
    }
    @media (min-width: 1100px) {
      display: block;
      &#menu > a::before {
        background: transparent;
        backdrop-filter: unset;
      }
    }
  }
`;

export const StyledNavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  z-index: 200;
  > :first-child {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const StyledSlider = styled.div`
  position: absolute;
  padding: 8px 15px;
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(8px);
  transition: all 300ms ease-in;
  opacity: ${(props) => (props.show ? 1 : 0)};
`;

export const StyledSideMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 100px;
  max-height: 100vh;
  padding: 10px 30px;
  overflow-y: auto;
  > * {
    margin-bottom: 20px;
    font-size: 15px;
    font-weight: 400;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      left: -5px;
      right: -5px;
      top: -8px;
      bottom: -8px;
      border-radius: 12px;
      background: rgba(0, 0, 0, 0.05);
      backdrop-filter: blur(8px);
      transition: all 200ms ease-in-out;
      opacity: 0;
      z-index: -1;
    }
    &:hover::before {
      opacity: 1;
    }
  }
  > :last-child {
    margin-bottom: 50px;
  }
`;

export const StyledSidebarContainer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
  z-index: 500;
`;

export const StyledSideMenu = styled(motion.div)`
  width: 300px;
  height: 100%;
  background: #fff;
  position: relative;
  display: flex;
`;

export const StyledCloseIcon = styled(GrClose)`
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
