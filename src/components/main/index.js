import { useRef, useState } from "react";
import MainContext from "../../context/main-context";
import Buttons from "./buttons";
import Heading from "./heading";
import MainPage from "./page";
import { StyledButton, StyledMain, StyledMainContent } from "./styles";
import Footer from "../footer";
import { pages } from "./data";
import { motion } from "framer-motion";

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
          <motion.div
            initial={{ opacity: 0, translateX: -25 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.6 }}
          >
            {pages[active]?.buttons[0] && (
              <StyledButton>{pages[active].buttons[0]}</StyledButton>
            )}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, translateX: 25 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.6 }}
          >
            {pages[active]?.buttons[1] && (
              <StyledButton second>{pages[active].buttons[1]}</StyledButton>
            )}
          </motion.div>
        </Buttons>
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
