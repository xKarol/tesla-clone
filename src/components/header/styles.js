import styled from "styled-components";
import { device } from "../../styles/breakpoints";
import { BluredButton } from "../../styles";
import { motion } from "framer-motion";

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
  > #nav-item {
    padding: 8px 15px;
    font-size: 1em;
  }
  &:last-child {
    margin-right: 0;
  }
`;

export const StyledNavbarList = styled.ul`
  display: flex;
  align-items: center;
  font-size: 15px;
  > ${StyledNavbarItem} {
    display: none;
    &#menu {
      display: block;
      z-index: 1;
      > #nav-item {
        background: none;
        border: none;
        cursor: pointer;
        font-family: inherit;
        font-weight: 500;
        ${BluredButton};
      }
    }
    @media (min-width: 1100px) {
      display: block;
      &#menu > #nav-item::before {
        background: transparent;
        backdrop-filter: unset;
      }
    }
  }
`;

export const StyledNavbarContainer = styled.div`
  display: flex;
  align-items: center;
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
  > li {
    font-size: 15px;
    font-weight: 400;
    position: relative;
    display: flex;
    margin-bottom: 10px;
    :last-child {
      margin-bottom: 50px;
    }
    > #nav-item {
      width: 100%;
      height: 100%;

      &::before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        border-radius: 12px;
        background: rgba(0, 0, 0, 0.05);
        backdrop-filter: blur(8px);
        transition: all 200ms ease-in-out;
        opacity: 0;
        z-index: -1;
      }
      &:hover::before,
      &:focus::before {
        opacity: 1;
      }
    }
  }
`;

export const StyledSidebarContainer = styled(motion.div)`
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

export const StyledSideMenu = styled(motion.nav)`
  width: 300px;
  height: 100%;
  background: #fff;
  position: relative;
  display: flex;
`;

export const StyledCloseIconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 20px;
  right: 30px;
  width: 35px;
  height: 35px;
  z-index: 110;
  cursor: pointer;
  border: none;
  background: none;
  border-radius: 50%;
  padding: 8px;
  transition: background-color 300ms ease-in-out;
  &:hover,
  &:focus {
    background-color: rgba(244, 244, 244, 0.45);
  }
`;
