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

const theme = {
  colors: {
    header: "#ebfbff",
    body: "white",
    footer: "#003333",
  },
  mobile: "768px",
};

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [data, setData] = useState(content);
  const [addingCard, setAddingCard] = useState(false);
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

  const cards = data.map((item, index) => (
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
      <GlobalStyles darkMode={darkMode} />
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
