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
  margin: 0 auto;
  margin-top: 40px;
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

export {
  StyledMain,
  StyledHeadingBox,
  StyledHeading,
  StyledSubheading,
  StyledMainBox,
  StyledImage,
};
