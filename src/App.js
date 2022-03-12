import Header from "./components/header";
import Main from "./components/main";
import Heading from "./components/main/heading";
import { StyledImage, StyledMainBox } from "./components/main/styles";

function App() {
  return (
    <>
      <Header />
      <Heading
        heading="Model Y"
        subheading="Order Online for Touchless Delivery"
      />
      <Main>
        <StyledMainBox>
          <StyledImage src="/images/model-3.jfif" alt="tesla car model 3" />
        </StyledMainBox>
        <StyledMainBox>
          <StyledImage src="/images/model-y.jfif" alt="tesla car model y" />
        </StyledMainBox>
        <StyledMainBox>
          <StyledImage src="/images/model-s.jfif" alt="tesla car model s" />
        </StyledMainBox>
        <StyledMainBox>
          <StyledImage src="/images/model-x.jfif" alt="tesla car model x" />
        </StyledMainBox>
        <StyledMainBox>
          <StyledImage
            src="/images/solar-panels.jfif"
            alt="tesla solar panels"
          />
        </StyledMainBox>
        <StyledMainBox>
          <StyledImage src="/images/solar-roof.jfif" alt="tesla solar roof" />
        </StyledMainBox>
        <StyledMainBox>
          <StyledImage src="/images/accessories.jfif" alt="tesla accessories" />
        </StyledMainBox>
      </Main>
    </>
  );
}

export default App;
