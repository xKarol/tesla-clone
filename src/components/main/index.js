import { useEffect, useRef, useState } from "react";
import MainContext from "../../context/main-context";
import Buttons from "./buttons";
import Heading from "./heading";
import MainPage from "./page";
import Button from "./button";
import { StyledMain, StyledMainContent } from "./styles";
import Footer from "../footer";
import { pages } from "./data";
import ArrowDown from "./arrow-down";

function Main() {
  const [active, setActive] = useState(0);
  const scrollRef = useRef(null);
  const [ref, setRef] = useState(null);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => setRef(scrollRef.current), [scrollRef]);

  return (
    <MainContext.Provider
      value={{ active, setActive, setOpacity, scrollRef: ref }}
    >
      <StyledMainContent style={{ opacity: opacity }}>
        <Heading
          heading={pages[active].heading}
          subheading={pages[active].subheading}
        />
        <Buttons>
          {pages[active]?.buttons[0] && (
            <Button oneButton={!pages[active]?.buttons[1]}>
              {pages[active].buttons[0]}
            </Button>
          )}
          {pages[active]?.buttons[1] && (
            <Button second>{pages[active].buttons[1]}</Button>
          )}
        </Buttons>
        <ArrowDown
          style={{ visibility: active === 0 ? "visible" : "hidden" }}
        />
        {active === pages.length - 1 && <Footer />}
      </StyledMainContent>
      <StyledMain ref={scrollRef}>
        {pages.map((props, index) => (
          <MainPage key={props.id} index={index} image={props.image} />
        ))}
      </StyledMain>
    </MainContext.Provider>
  );
}

export default Main;
