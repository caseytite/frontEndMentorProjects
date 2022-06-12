import { StyledModal, StyledBackDrop } from "./styles/Modal.syled";
import { createPortal } from "react-dom";

interface MProps {
  message: string | boolean;
}
interface BDProps {
  closeModal: React.Dispatch<React.SetStateAction<string | boolean>>;
  children: JSX.Element;
}

export const Modal: React.FC<MProps> = ({ message }) => {
  const location = document.getElementById("modal") as HTMLDivElement;
  return createPortal(
    <StyledModal>
      <p>{message}</p>
    </StyledModal>,

    location
  );
};

export const BackDrop: React.FC<BDProps> = (props) => {
  return (
    <StyledBackDrop
      onMouseDownCapture={() =>
        props.closeModal((prev: string | boolean) => !prev)
      }
    >
      {props.children}
    </StyledBackDrop>
  );
};
