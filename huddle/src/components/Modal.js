import { StyledModal } from "./styles/Modal.syled";
import { createPortal } from "react-dom";
import Button from "./Button";

const Modal = ({ message, closeModal }) => {
  const location = document.getElementById("portal");
  return createPortal(
    <StyledModal>
      <p>{message}</p>
      <Button text={"Dismiss"} onClick={() => closeModal("")} />
    </StyledModal>,

    location
  );
};

export default Modal;
