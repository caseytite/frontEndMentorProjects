import styled from "styled-components";

export const StyledModal = styled.div`
  position: fixed;
  display: flex;
  color: black;
  justify-content: center;
  top: 40%;
  left: 25%;
  width: 50%;
  background-color: white;
  padding: 1rem;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
`;

export const StyledBackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.75);
`;
