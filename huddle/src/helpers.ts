import { CardType } from "./components/types/types";

const updateCards = (
  setData: React.Dispatch<React.SetStateAction<CardType[]>>,
  data: CardType[],
  setAddingCard: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const handleRemoveCard = (id: number) => {
    setData((prev) => [...prev.filter((item) => item.id !== id)]);
  };

  const handleAddCard = (title: string, body: string) => {
    const random = data[Math.floor(Math.random() * 3)];
    const newCard = {
      id: data.length + 1,
      title,
      body,
      image: random.image,
    };
    setData((prev) => [newCard, ...prev]);
    setAddingCard((prev) => !prev);
  };

  return { handleAddCard, handleRemoveCard };
};

export default updateCards;
