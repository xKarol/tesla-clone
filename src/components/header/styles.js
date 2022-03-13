import styled from "styled-components";
import { device } from "../../styles/breakpoints";
import { BluredButton } from "../../styles";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-height: 30px;
  height: 30px;
  padding: 30px 50px;
`;

const StyledNavbarItem = styled.li`
  cursor: pointer;
  padding: 5px 15px;
  transition: background-color 300ms ease-in-out;
  border-radius: 12px;
  display: ${(props) => props.onlyMenu && "none !important"};
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    background: rgba(0, 0, 0, 0.05) !important;
    background-filter: blur(10px);
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
      ${BluredButton};
    }
    @media ${device.lg} {
      display: block;
      &#menu::before {
        background: transparent;
      }
    }
  }
`;

const StyledNavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
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
      font-size: 18px;
      display: block;
      position: fixed;
      top: 30px;
      right: 50px;
      z-index: 110;
      cursor: pointer;
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

export {
  StyledHeader,
  StyledNavbarContainer,
  StyledNavbarList,
  StyledNavbarItem,
};
