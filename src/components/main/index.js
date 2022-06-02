import { useEffect, useRef, useState } from "react";
import MainContext from "../../context/main-context";
import Buttons from "./buttons";
import Heading from "./heading";
import MainPage from "./page";
import { StyledMain, StyledMainContent } from "./styles";
import Footer from "../footer";
import { pages } from "./data";
import ArrowDown from "./arrow-down";

function Main() {
  const [active, setActive] = useState(0);
  const scrollRef = useRef(null);
  const [ref, setRef] = useState(null);
  const [opacity, setOpacity] = useState(1);
  const lastPage = active === pages.length - 1;

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
        <Buttons buttonText={pages[active]?.buttons} />
        <ArrowDown show={active === 0} />
        {lastPage && <Footer />}
      </StyledMainContent>
      <StyledMain ref={scrollRef}>
        {pages.map((props, index) => (
          <MainPage key={props.id} index={index} images={props.images} />
        ))}
      </StyledMain>
    </MainContext.Provider>
  );
}

export default Main;
