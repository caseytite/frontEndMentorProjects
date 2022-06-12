const updateCards = (setData, data, setAddingCard) => {
  const handleRemoveCard = (id) => {
    setData((prev) => [...prev.filter((item) => item.id !== id)]);
  };

  const handleAddCard = (title, body) => {
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
