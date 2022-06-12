import { StyledCard } from "./styles/Card.styled";
import Button from "./Button";

import { CardType } from "./types/types";
interface OneCard {
  item: CardType;
  handleRemoveCard: (id: number) => void;
  darkMode: boolean;
  index: number;
}

const Card: React.FC<OneCard> = ({
  item,
  handleRemoveCard,
  darkMode,
  index,
}) => {
  const { id, title, body, image } = item;
  return (
    <>
      <StyledCard darkMode={darkMode} index={index}>
        <div>
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
        <div>
          <img src={`./images/${image}`} alt={"cards logo"} />
        </div>
      </StyledCard>
      <Button text={"Delete Card"} onClick={handleRemoveCard.bind(null, id)} />
    </>
  );
};

export default Card;
