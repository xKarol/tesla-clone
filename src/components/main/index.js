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
  const [active, setActive] = useState({ index: 0 });
  const scrollRef = useRef(null);
  const [opacity, setOpacity] = useState(1);
  const { index: activeId, entry } = active;
  const lastPage = activeId === pages.length - 1;

  useEffect(() => {
    const ref = scrollRef?.current;
    if (!ref) return;

    const handleScroll = () => {
      const element = entry.target.parentElement.childNodes[activeId];
      const viewportHeight = window.innerHeight * 0.2;
      const scrollTop = ref.scrollTop;
      const elementOffsetTop = element.offsetTop;
      const elementHeight = element.offsetHeight * 0.2;
      const distance = scrollTop + viewportHeight - elementOffsetTop;
      let percentage = (distance / (viewportHeight + elementHeight)) * 2;
      if (percentage > 1) percentage = 1 - (percentage - 1);
      if (percentage < 0) percentage = 0;
      setOpacity(percentage);
    };

    ref.addEventListener("scroll", handleScroll);
    return () => ref.removeEventListener("scroll", handleScroll);
  }, [scrollRef, entry, activeId, setOpacity]);

  return (
    <MainContext.Provider value={{ setActive }}>
      <StyledMainContent style={{ opacity: opacity }}>
        <Heading
          heading={pages[activeId].heading}
          subheading={pages[activeId].subheading}
        />
        <Buttons buttonText={pages[activeId]?.buttons} />
        <ArrowDown show={activeId === 0} />
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
