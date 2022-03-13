import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  margin-top: auto;
  margin-bottom: 30px;
`;

const StyledNavList = styled.ul`
  display: flex;
`;

const StyledNavItem = styled.li`
  margin-right: 15px;
  > a {
    font-size: 13px;
  }
  &:last-child {
    margin-right: 0;
  }
`;

export { StyledFooter, StyledNavList, StyledNavItem };
