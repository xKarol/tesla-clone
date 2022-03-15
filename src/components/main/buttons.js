import Button from "./button";
import { StyledButtons } from "./styles";

function Buttons({ buttonText }) {
  return (
    <StyledButtons>
      <Button hide={!buttonText[0]}>{buttonText[0]}</Button>
      <Button hide={!buttonText[1]} second>
        {buttonText[1]}
      </Button>
    </StyledButtons>
  );
}

export default Buttons;
