import { StyledHeadingBox, StyledHeading, StyledSubheading } from "./styles";
import { motion } from "framer-motion";

function Heading({ heading, subheading }) {
  return (
    <StyledHeadingBox>
      <motion.div
        initial={{ opacity: 0, translateY: 25 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        {heading && <StyledHeading>{heading}</StyledHeading>}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, translateY: 25 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ delay: 1.9, duration: 0.6 }}
      >
        {subheading && <StyledSubheading>{subheading}</StyledSubheading>}
      </motion.div>
    </StyledHeadingBox>
  );
}

export default Heading;
