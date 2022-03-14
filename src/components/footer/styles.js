import styled from "styled-components";
import { device } from "../../styles/breakpoints";

const StyledFooter = styled.footer`
  display: flex;
  margin-top: auto;
  margin-bottom: 10px;
  @media ${device.md} {
    margin-bottom: 30px;
  }
`;

const StyledNavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${device.md} {
    flex-direction: row;
  }
`;

const StyledNavItem = styled.li`
  display: ${(props) => props.smHide && "none"};
  margin-right: 15px;
  > a {
    font-size: 13px;
    pointer-events: initial;
  }
  &:last-child {
    margin-right: 0;
  }
`;

export { StyledFooter, StyledNavList, StyledNavItem };
