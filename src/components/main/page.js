import { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { AppContext } from "../../context/app-context";
import MainContext from "../../context/main-context";
import { StyledImage, StyledMainBox } from "./styles";
import { breakpoints } from "../../styles/breakpoints";

function MainPage({ images, index }) {
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
    trackVisibility: true,
    delay: 100,
  });
  const { setActive } = useContext(MainContext);
  const { width } = useContext(AppContext);

  useEffect(() => {
    if (inView) {
      setActive({ index, entry });
    }
  }, [inView, index, setActive, entry]);

  return (
    <StyledMainBox ref={ref}>
      <StyledImage
        src={width <= breakpoints.sm ? images.mobile : images.desktop}
        alt={images.alt}
      />
    </StyledMainBox>
  );
}

export default MainPage;
