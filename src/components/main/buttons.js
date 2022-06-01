import Button from "./button";
import { StyledButtons } from "./styles";

function Buttons({ buttonText }) {
  return (
    <StyledButtons>
      <Button hide={!buttonText[0]?.length}>{buttonText[0]}</Button>
      <Button hide={!buttonText[1]?.length} second>
        {buttonText[1]}
      </Button>
    </StyledButtons>
  );
}

export default Buttons;
