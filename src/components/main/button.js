import { useAnimation } from "framer-motion";
import { StyledButton } from "./styles";
import { breakpoints } from "../../styles/breakpoints";
import { AppContext } from "../../context/app-context";
import { useContext, useEffect, useState } from "react";

function Button({ hide = false, second = false, children }) {
  const { width } = useContext(AppContext);
  const [disableAnim, setDisableAnim] = useState(false);
  const controls = useAnimation();

  const variants = {
    animation: { opacity: 1, translateY: 0 },
    initial: { opacity: 0, translateY: 25 },
    animationDesktop: { opacity: 1, translateX: 0 },
    initialDesktop: { opacity: 0, translateX: second ? 25 : -25 },
  };

  useEffect(() => {
    if (disableAnim) return;
    controls.start(width > breakpoints.md ? "animationDesktop" : "animation");
  }, [disableAnim, controls, width]);

  return (
    <StyledButton
      initial={width > breakpoints.md ? "initialDesktop" : "initial"}
      animate={controls}
      variants={variants}
      onAnimationComplete={() => setDisableAnim(true)}
      transition={{ delay: 1.1, duration: 0.6 }}
      hide={hide ? 1 : 0}
      second={second ? 1 : 0}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
