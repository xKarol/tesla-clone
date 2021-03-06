import styled from "styled-components";
import { BluredButton } from "../../styles";
import { device } from "../../styles/breakpoints";
import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";

export const StyledMain = styled.main`
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

export const StyledMainBox = styled.section`
  position: relative;
  scroll-snap-align: start;
  width: 100%;
  height: 100vh;
  flex-shrink: 0;
`;

export const StyledHeadingBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.colors.black};
  text-align: center;
  margin-bottom: 50px;
`;

export const StyledHeading = styled(motion.h1)`
  font-size: 40px;
  font-weight: 500;
  pointer-events: initial;
  margin-bottom: 10px;
`;

export const StyledSubheading = styled(motion.p)`
  pointer-events: initial;
  font-size: 15px;
  font-weight: 400;
  padding: 0 20px;
  > a {
    position: relative;
    ::before {
      content: "";
      position: absolute;
      bottom: -3px;
      left: 0;
      right: 0;
      background-color: ${(props) => props.theme.colors.black};
      height: 1px;
      pointer-events: none;
    }
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  user-select: none;
`;

export const StyledButtons = styled.div`
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

export const StyledButton = styled(motion.button)`
  display: ${(props) => (props.hide ? "none" : "flex")};
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
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

export const StyledArrowButton = styled(motion.button)`
  display: flex;
  background: none;
  border: none;
  margin-bottom: 20px;
  margin-top: auto;
`;

export const StyledArrow = styled(FiChevronDown)`
  font-size: 25px;
  cursor: pointer;
  pointer-events: initial;
`;

export const StyledMainContent = styled.div`
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
  transition: opacity 50ms ease-in-out;
  @media ${device.lg} {
    padding-top: 50px;
  }
  @media ${device.xlg} {
    padding-top: 80px;
  }
`;
