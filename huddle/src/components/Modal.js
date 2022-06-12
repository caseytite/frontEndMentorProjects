import { StyledModal, StyledBackDrop } from "./styles/Modal.syled";
import { createPortal } from "react-dom";

export const Modal = ({ message }) => {
  const location = document.getElementById("modal");
  return createPortal(
    <StyledModal>
      <p>{message}</p>
    </StyledModal>,

    location
  );
};

export const BackDrop = (props) => {
  return (
    <StyledBackDrop
      onMouseDownCapture={() => props.closeModal((prev) => !prev)}
    >
      {props.children}
    </StyledBackDrop>
  );
};
