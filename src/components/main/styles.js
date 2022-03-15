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
  text-align: center;
  margin-bottom: 50px;
`;

const StyledHeading = styled.h1`
  font-size: 40px;
  font-weight: 500;
  pointer-events: initial;
  margin-bottom: 10px;
`;

const StyledSubheading = styled.p`
  pointer-events: initial;
  font-size: 15px;
  font-weight: 400;
  padding: 0 20px;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  user-select: none;
`;

const StyledButtons = styled.div`
  margin-top: auto;
  width: max-content;
  margin-bottom: 30px;
  padding: 0 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media ${device.sm} {
    flex-direction: row;
    margin-bottom: 60px;
  }
`;

const StyledButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 13px 25px;
  margin-left: ${(props) => (!props.second ? "auto" : "0")};
  color: ${(props) =>
    props.second ? props.theme.colors.black : props.theme.colors.white};
  cursor: pointer;
  pointer-events: initial;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 13px;
  ${BluredButton};
  width: 100%;
  min-width: 250px;
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
    @media ${device.sm} {
      margin-bottom: 0;
      margin-right: 20px;
    }
  }
`;

const StyledMainContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding-top: 4vw;
  position: fixed;
  top: 60px;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 10;
  pointer-events: none;
  transition: opacity: 200ms ease-in-out;
  @media ${device.lg} {
    padding-top: 50px;
  }
  @media ${device.xlg} {
    padding-top: 80px;
  }
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
