import { useRef, useState } from "react";
import MainContext from "../../context/main-context";
import Buttons from "./buttons";
import Heading from "./heading";
import MainPage from "./page";
import { StyledButton, StyledMain, StyledMainContent } from "./styles";
import Footer from "../footer";
import { pages } from "./data";
import { motion } from "framer-motion";
import ArrowDown from "./arrow-down";

function Main() {
  const [active, setActive] = useState(0);
  const scrollRef = useRef(null);
  const [opacity, setOpacity] = useState(1);

  return (
    <MainContext.Provider
      value={{ active, setActive, setOpacity, scrollRef: scrollRef.current }}
    >
      <StyledMainContent style={{ opacity: opacity }}>
        <Heading
          heading={pages[active].heading}
          subheading={pages[active].subheading}
        />
        <Buttons>
          {pages[active]?.buttons[0] && (
            <motion.div
              initial={{ opacity: 0, translateX: -25 }}
              animate={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                width: "100%",
                display: "flex",
                marginTop: "auto",
              }}
            >
              <StyledButton
                style={{ margin: active === pages.length - 1 && "auto" }}
              >
                {pages[active].buttons[0]}
              </StyledButton>
            </motion.div>
          )}
          {pages[active]?.buttons[1] && (
            <motion.div
              initial={{ opacity: 0, translateX: 25 }}
              animate={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 0.6 }}
              style={{ width: "100%", display: "flex", marginTop: "auto" }}
            >
              <StyledButton second>{pages[active].buttons[1]}</StyledButton>
            </motion.div>
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
