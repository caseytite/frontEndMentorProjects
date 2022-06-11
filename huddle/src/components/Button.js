import { StyledButton } from "./styles/Button.styled";
const Button = ({ onClick, text, bg, color }) => {
  return (
    <StyledButton bg={bg} color={color} onClick={onClick}>
      {text}
    </StyledButton>
  );
};

export default Button;
