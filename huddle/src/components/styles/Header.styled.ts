import styled from "styled-components";

interface SHeader {
  darkMode: boolean;
}

export const StyledHeader = styled.header<SHeader>`
  background-color: ${({ theme, darkMode }) =>
    darkMode ? "black" : theme.colors.header};
  padding: 40px 0;
  margin-bottom: 50px;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;

export const Logo = styled.img`
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 40px;
  }
`;

export const Image = styled.img`
  width: 375px;
  margin-left: 40px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 40px 0 30px;
  }
`;
