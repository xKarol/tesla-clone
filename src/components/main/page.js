import { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import MainContext from "../../context/main-context";
import { StyledImage, StyledMainBox } from "./styles";

function MainPage({ image, index }) {
  const { ref, inView } = useInView({
    threshold: 0.5,
    trackVisibility: true,
    delay: 100,
  });
  const { setActive } = useContext(MainContext);

  useEffect(() => {
    if (inView) {
      setActive(index);
      console.log(index);
    }
  }, [inView, index, setActive]);

  return (
    <StyledMainBox ref={ref}>
      <StyledImage src={image.src} alt={image.alt} />
    </StyledMainBox>
  );
}

export default MainPage;
