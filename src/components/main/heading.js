import { StyledHeadingBox, StyledHeading, StyledSubheading } from "./styles";

function Heading({ heading, subheading }) {
  return (
    <StyledHeadingBox>
      <StyledHeading>{heading}</StyledHeading>
      <StyledSubheading>{subheading}</StyledSubheading>
    </StyledHeadingBox>
  );
}

export default Heading;
