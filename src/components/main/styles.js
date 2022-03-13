import styled from "styled-components";
import { BluredButton } from "../../styles";
import { device } from "../../styles/breakpoints";

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  width: 100%;
  height: 100vh;
  width: 100%;
  min-height: 100%;
  overflow: auto;
  scroll-snap-type: y mandatory;
`;

const StyledMainBox = styled.section`
  position: relative;
  scroll-snap-align: start;
  width: 100%;
  min-height: 100%;
`;

const StyledHeadingBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.colors.black};
`;

const StyledHeading = styled.h1`
  font-size: 43px;
  font-weight: 600;
  pointer-events: initial;
`;

const StyledSubheading = styled.p`
  letter-spacing: 1px;
  pointer-events: initial;
  font-weight: 400;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledButtons = styled.div`
  margin-top: 300px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media ${device.sm} {
    flex-direction: row;
  }
`;

const StyledButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 25px;
  color: ${(props) =>
    props.second ? props.theme.colors.black : props.theme.colors.white};
  cursor: pointer;
  pointer-events: initial;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 14px;
  ${BluredButton};
  width: 100%;
  @media ${device.sm} {
    width: 250px;
  }
  &::before {
    background: ${(props) =>
      props.second ? "rgba(244, 244, 244, 0.45)" : "rgba(23, 26, 32, 0.8)"};
    border-radius: 25px;
  }
  &:first-child {
    margin-bottom: 15px;
    @media ${device.md} {
      margin-bottom: 0;
      margin-right: 20px;
    }
  }
`;

const StyledMainContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 60px);
  align-items: center;
  padding: 70px 50px;
  padding-right: 70px;
  padding-bottom: 0;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  pointer-events: none;
`;

export {
  StyledMain,
  StyledHeadingBox,
  StyledHeading,
  StyledSubheading,
  StyledMainBox,
  StyledImage,
  StyledButtons,
  StyledButton,
  StyledMainContent,
};
