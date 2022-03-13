import styled from "styled-components";

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
`;

const StyledSubheading = styled.p`
  letter-spacing: 1px;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledButtons = styled.div`
  margin-top: 275px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const StyledButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) =>
    props.second ? "rgba(244, 244, 244, 0.65)" : "rgba(23, 26, 32, 0.8)"};
  backgdrop-filter: blur(8px);
  padding: 10px 25px;
  border-radius: 25px;
  color: ${(props) =>
    props.second ? props.theme.colors.black : props.theme.colors.white};
  width: 250px;
  cursor: pointer;
  &:first-child {
    margin-right: 20px;
  }
`;

const StyledMainContent = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 60px);
  align-items: center;
  padding-top: 35px;
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
