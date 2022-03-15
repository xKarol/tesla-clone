import { motion } from "framer-motion";
import { StyledButton } from "./styles";
import { breakpoints } from "../../styles/breakpoints";
import { AppContext } from "../../context/app-context";
import { useContext } from "react";

function Button({ second, oneButton, children }) {
  const { width } = useContext(AppContext);

  const variants = {
    animation: { opacity: 1, translateY: 0 },
    initial: { opacity: 0, translateY: 25 },
    animationDesktop: { opacity: 1, translateX: 0 },
    initialDesktop: { opacity: 0, translateX: second ? 25 : -25 },
  };

  return (
    <motion.div
      initial={width > breakpoints.md ? "initialDesktop" : "initial"}
      animate={width > breakpoints.md ? "animationDesktop" : "animation"}
      variants={variants}
      transition={{ delay: 1.9, duration: 0.6 }}
      style={{ width: "100%", display: "flex", marginTop: "auto" }}
    >
      <StyledButton second={!!second} oneButton={oneButton}>
        {children}
      </StyledButton>
    </motion.div>
  );
}

export default Button;
