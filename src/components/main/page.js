import { StyledImage, StyledMainBox } from "./styles";

function MainPage({ image }) {
  return (
    <StyledMainBox>
      <StyledImage src={image.src} alt={image.alt} />
    </StyledMainBox>
  );
}

export default MainPage;
