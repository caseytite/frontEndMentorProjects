import { StyledModal, StyledBackDrop } from "./styles/Modal.syled";
import { createPortal } from "react-dom";
import { ModalProps, BackDropProps } from "./types/props";

export const Modal: React.FC<ModalProps> = ({ message }) => {
  const location = document.getElementById("modal") as HTMLDivElement;
  return createPortal(
    <StyledModal>
      <p>{message}</p>
    </StyledModal>,

    location
  );
};

export const BackDrop: React.FC<BackDropProps> = ({ children, closeModal }) => {
  return (
    <StyledBackDrop
      onMouseDownCapture={() => closeModal((prev: string | boolean) => !prev)}
    >
      {children}
    </StyledBackDrop>
  );
};
