import { StyledButton } from "./styles/Button.styled";

interface BProps {
  onClick?: () => void;
  text?: string;
  bg?: string;
  color?: string;
  type?: string;
}

const Button: React.FC<BProps> = ({ onClick, text, bg, color }) => {
  return (
    <StyledButton bg={bg} color={color} onClick={onClick}>
      {text}
    </StyledButton>
  );
};

export default Button;
