import { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import MainContext from "../../context/main-context";
import { StyledImage, StyledMainBox } from "./styles";

function MainPage({ image, index }) {
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
    trackVisibility: true,
    delay: 100,
  });
  const { setActive, active, scrollRef, setOpacity } = useContext(MainContext);

  useEffect(() => {
    if (inView) {
      setActive(index);
    }
  }, [inView, index, setActive]);

  useEffect(() => {
    if (!scrollRef) return;

    const handleScroll = () => {
      const element = entry.target.parentElement.childNodes[active];
      const viewportHeight = window.innerHeight * 0.2;
      const scrollTop = scrollRef.scrollTop;
      const elementOffsetTop = element.offsetTop;
      const elementHeight = element.offsetHeight * 0.2;
      const distance = scrollTop + viewportHeight - elementOffsetTop;
      let percentage = (distance / (viewportHeight + elementHeight)) * 2;
      if (percentage > 1) percentage = 1 - (percentage - 1);
      setOpacity(percentage);
    };
    scrollRef.addEventListener("scroll", handleScroll);
    return () => scrollRef.removeEventListener("scroll", handleScroll);
  }, [scrollRef, entry, active, setOpacity]);

  return (
    <StyledMainBox ref={ref}>
      <StyledImage src={image.src} alt={image.alt} />
    </StyledMainBox>
  );
}

export default MainPage;
