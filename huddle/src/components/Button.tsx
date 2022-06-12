import { StyledButton } from "./styles/Button.styled";
import { BProps } from "./types/props";

const Button: React.FC<BProps> = ({ onClick, text, bg, color }) => {
  return (
    <StyledButton bg={bg} color={color} onClick={onClick}>
      {text}
    </StyledButton>
  );
};

export default Button;
