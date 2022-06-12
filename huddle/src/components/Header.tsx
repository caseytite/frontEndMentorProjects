import React from "react";
import { StyledHeader, Nav, Logo, Image } from "./styles/Header.styled";
import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";
import Button from "./Button";

interface HProps {
  darkMode: boolean;
  handleDarkMode: () => void;
}

const Header: React.FC<HProps> = ({ darkMode, handleDarkMode }) => {
  const lightLogo = "./images/logo_white.svg";
  const darkLogo = "./images/logo.svg";
  return (
    <StyledHeader darkMode={darkMode}>
      <Container>
        <Nav>
          <Logo src={`${darkMode ? lightLogo : darkLogo}`} />
          <Button
            onClick={handleDarkMode}
            text={`${darkMode ? "Light" : "Dark"}`}
          />
        </Nav>
        <Flex>
          <div>
            <h1>Build The Community Your Fans Will Love</h1>

            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>

            <Button bg="#ff0099" color="#fff" text={"Get Started For Free"} />
          </div>

          <Image src="./images/illustration-mockups.svg" alt="main logo" />
        </Flex>
      </Container>
    </StyledHeader>
  );
};

export default Header;
