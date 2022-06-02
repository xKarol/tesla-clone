import { StyledHeadingBox, StyledHeading, StyledSubheading } from "./styles";

function Heading({ heading, subheading }) {
  return (
    <StyledHeadingBox>
      {heading?.length && (
        <StyledHeading
          initial={{ opacity: 0, translateY: 25 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {heading}
        </StyledHeading>
      )}
      {subheading?.length && (
        <StyledSubheading
          initial={{ opacity: 0, translateY: 25 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          dangerouslySetInnerHTML={{ __html: subheading }}
        ></StyledSubheading>
      )}
    </StyledHeadingBox>
  );
}

export default Heading;
