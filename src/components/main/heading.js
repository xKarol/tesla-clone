import { StyledHeadingBox, StyledHeading, StyledSubheading } from "./styles";

function Heading({ heading, subheading }) {
  return (
    <StyledHeadingBox>
      {heading && <StyledHeading>{heading}</StyledHeading>}
      {subheading && <StyledSubheading>{subheading}</StyledSubheading>}
    </StyledHeadingBox>
  );
}

export default Heading;
