import { useState } from "react";
import MainContext from "../../context/main-context";
import Buttons from "./buttons";
import Heading from "./heading";
import MainPage from "./page";
import { StyledButton, StyledMain, StyledMainContent } from "./styles";
import Footer from "../footer";
import { pages } from "./data";

function Main() {
  const [active, setActive] = useState(0);
  return (
    <MainContext.Provider value={{ active, setActive }}>
      <StyledMainContent>
        <Heading
          heading={pages[active].heading}
          subheading={pages[active].subheading}
        />
        <Buttons>
          {pages[active]?.buttons[0] && (
            <StyledButton>{pages[active].buttons[0]}</StyledButton>
          )}
          {pages[active]?.buttons[1] && (
            <StyledButton second>{pages[active].buttons[1]}</StyledButton>
          )}
        </Buttons>
        {active === pages.length - 1 && <Footer />}
      </StyledMainContent>

      <StyledMain>
        {pages.map((props, index) => (
          <MainPage key={props.id} index={index} image={props.image} />
        ))}
      </StyledMain>
    </MainContext.Provider>
  );
}

export default Main;
