import { FiChevronDown } from "react-icons/fi";
import styled from "styled-components";
import { motion } from "framer-motion";
import MainContext from "../../context/main-context";
import { useContext } from "react";

const StyledArrow = styled(FiChevronDown)`
  margin-top: auto;
  margin-bottom: 20px;
  font-size: 25px;
  cursor: pointer;
  pointer-events: initial;
`;

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
      <motion.div
        animate={{ translateY: [0, 5, 0, 3, 0] }}
        transition={{
          type: "spring",
          repeat: Infinity,
          duration: 1.2,
          repeatDelay: 1.5,
          delay: 2.5,
        }}
      >
        <StyledArrow onClick={handleClick} />
      </motion.div>
    </motion.div>
  );
}

export default ArrowDown;
