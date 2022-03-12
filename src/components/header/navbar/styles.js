import styled from "styled-components";

const StyledNavbarList = styled.ul`
  display: flex;
  font-size: 15px;
`;

const StyledNavbarItem = styled.li`
  cursor: pointer;
  padding: 5px 15px;
  transition: background-color 300ms ease-in-out;
  border-radius: 12px;
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    background: rgba(0, 0, 0, 0.05);
    background-filter: blur(10px);
  }
`;

export { StyledNavbarList, StyledNavbarItem };
