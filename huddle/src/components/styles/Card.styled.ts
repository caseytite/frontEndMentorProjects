import styled from "styled-components";

interface SCType {
  darkMode: boolean;
  index: number;
}

export const StyledCard = styled.div<SCType>`
  display: flex;
  align-items: center;
  background-color: ${({ darkMode }) => (darkMode ? "black" : "#fff")};
  border: ${({ darkMode }) => (darkMode ? "1px solid white" : "")};
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 40px 0;
  padding: 60px;
  flex-direction: ${({ index }) => (index % 2 === 0 ? "row-reverse" : "row")};
  img {
    width: 80%;
  }
  & > div {
    flex: 1;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;
