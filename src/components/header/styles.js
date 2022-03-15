import styled from "styled-components";
import { device } from "../../styles/breakpoints";
import { BluredButton } from "../../styles";

const StyledHeader = styled.header`
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

const StyledNavbarItem = styled.li`
  cursor: pointer;
  display: ${(props) => props.type === "MENU" && "none !important"};
  > a {
    padding: 8px 15px;
  }
  &:last-child {
    margin-right: 0;
  }
`;

const StyledNavbarList = styled.ul`
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
    @media ${device.lg} {
      display: block;
      &#menu > a::before {
        background: transparent;
        backdrop-filter: unset;
      }
    }
  }
`;

const StyledNavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  z-index: 200;
  > :first-child {
    margin-left: auto;
    margin-right: auto;
  }
  > #close {
    display: none;
  }
  &.active {
    overflow-y: auto;
    max-height: 100vh;
    justify-content: unset;
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    flex-direction: column;
    width: 300px;
    padding: 80px 30px;
    &::after {
      content: "";
      position: fixed;
      right: 0;
      bottom: 0;
      top: 0;
      width: 300px;
      background-color: ${(props) => props.theme.colors.white};
    }
    &::before {
      content: "";
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      background: rgba(0, 0, 0, 0.2);
      backdrop-filter: blur(5px);
      z-index: -1;
    }
    > #close {
      width: 35px;
      height: 35px;
      display: block;
      position: fixed;
      top: 30px;
      right: 50px;
      z-index: 110;
      cursor: pointer;
      border-radius: 50%;
      padding: 8px;
      transition: background-color 300ms ease-in-out;
      &:hover {
        background-color: rgba(244, 244, 244, 0.45);
      }
    }
    > :first-child {
      margin-left: 0;
      margin-right: 0;
    }
    ${StyledNavbarList} {
      flex-direction: column;
    }
    ${StyledNavbarItem} {
      display: block !important;
      z-index: 100;
      &#menu::before {
        display: none;
      }
      margin: 0;
      margin-bottom: 15px;
    }
  }
`;

const StyledSlider = styled.div`
  position: absolute;
  padding: 8px 15px;
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.05) !important;
  backdrop-filter: blur(8px);
  transition: all 300ms ease-in;
  opacity: ${(props) => (props.show ? 1 : 0)};
`;

export {
  StyledHeader,
  StyledNavbarContainer,
  StyledNavbarList,
  StyledNavbarItem,
  StyledSlider,
};
