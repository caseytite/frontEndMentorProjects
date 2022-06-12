import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Container } from "./components/styles/Container.styled";

import GlobalStyles from "./components/styles/Global";

import updateCards from "./helpers";

import Header from "./components/Header";
import Card from "./components/Card";
import Button from "./components/Button";
import Form from "./components/Form";

import content from "./content";

import { CardType, MTheme } from "./components/types/types";

const theme: MTheme = {
  colors: {
    header: "#ebfbff",
    body: "white",
    footer: "#003333",
  },
  mobile: "768px",
};

const App = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [data, setData] = useState<CardType[]>(content);
  const [addingCard, setAddingCard] = useState<boolean>(false);
  const { handleAddCard, handleRemoveCard } = updateCards(
    setData,
    data,
    setAddingCard
  );

  const handleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };
  const handleShowForm = () => {
    setAddingCard((prev) => !prev);
  };

  const cards = data.map<JSX.Element>((item: CardType, index: number) => (
    <Card
      key={item.id}
      index={index}
      item={item}
      handleRemoveCard={handleRemoveCard}
      darkMode={darkMode}
    />
  ));

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles darkMode={darkMode} body={theme.colors.body} />
      <Header darkMode={darkMode} handleDarkMode={handleDarkMode} />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          bg="#ff0099"
          color="#fff"
          text={`${addingCard ? "Close" : "Add a Card"}`}
          onClick={handleShowForm}
        />
      </div>
      {addingCard && <Form handleAddCard={handleAddCard} />}
      <Container>{cards}</Container>
    </ThemeProvider>
  );
};

export default App;
