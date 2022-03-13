import styled, { css } from "styled-components";

const StyledLogo = styled.a`
  width: 120px;
`;

const BluredButton = css`
  position: relative;
  background: transparent;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background: rgba(244, 244, 244, 0.45);
    border-radius: 12px;
    backdrop-filter: blur(8px);
  }
`;

export { StyledLogo, BluredButton };
