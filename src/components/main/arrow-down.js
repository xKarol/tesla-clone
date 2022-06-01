import { motion } from "framer-motion";
import MainContext from "../../context/main-context";
import { useContext } from "react";
import { StyledArrow, StyledArrowButton } from "./styles";

function ArrowDown({ show }) {
  const { scrollRef } = useContext(MainContext);

  const handleClick = () => (scrollRef.scrollTop = window.innerHeight);

  return (
    <motion.div
      initial={{ opacity: 0, translateY: -25 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ delay: 2, duration: 0.8 }}
      style={{ visibility: show ? "visible" : "hidden" }}
    >
      <StyledArrowButton
        animate={{ translateY: [0, 5, 0, 3, 0] }}
        transition={{
          type: "spring",
          repeat: Infinity,
          duration: 1.2,
          repeatDelay: 1.5,
          delay: 2.5,
        }}
        onClick={handleClick}
      >
        <StyledArrow />
      </StyledArrowButton>
    </motion.div>
  );
}

export default ArrowDown;
