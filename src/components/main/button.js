import { motion } from "framer-motion";
import { StyledButton } from "./styles";

function Button({ second, oneButton, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, translateX: second ? 25 : -25 }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 0.6 }}
      style={{ width: "100%", display: "flex", marginTop: "auto" }}
    >
      <StyledButton second={!!second} oneButton={oneButton}>
        {children}
      </StyledButton>
    </motion.div>
  );
}

export default Button;
