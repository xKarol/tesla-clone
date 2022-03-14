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

function ArrowDown(props) {
  const { scrollRef } = useContext(MainContext);

  const handleClick = () => (scrollRef.scrollTop = window.innerHeight);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 1 }}
      style={{ marginTop: "auto", ...props.style }}
    >
      <motion.div
        animate={{ translateY: [5, 0, 5] }}
        transition={{
          repeat: Infinity,
          duration: 0.6,
        }}
      >
        <StyledArrow onClick={handleClick} />
      </motion.div>
    </motion.div>
  );
}

export default ArrowDown;
