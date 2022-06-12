import { useRef, useState } from "react";
import { StyledForm } from "./styles/Form.styled";
import Button from "./Button";
import { Modal, BackDrop } from "./Modal";
import { FProps } from "./types/props";

const Form: React.FC<FProps> = ({ handleAddCard }) => {
  const [error, setError] = useState<string | boolean>("");
  let titleEl = useRef<HTMLInputElement>(null);
  let descriptionEl = useRef<HTMLTextAreaElement>(null);

  const sendNewCard = () => {
    if (!titleEl.current?.value) {
      setError("Enter a Title!");
      return;
    }
    if (!descriptionEl.current?.value) {
      setError("Enter a Description!");
      return;
    }
    if (titleEl.current && descriptionEl.current) {
      handleAddCard(titleEl.current.value, descriptionEl.current.value);
      titleEl.current.value = "";
      descriptionEl.current.value = "";
      return;
    }
  };

  return (
    <StyledForm onSubmit={(e) => e.preventDefault()}>
      <label>Title</label>
      <input ref={titleEl} required />
      <label>Description</label>
      <textarea ref={descriptionEl} required />
      <Button
        bg="#ff0099"
        color="#fff"
        text={"Add"}
        onClick={sendNewCard}
        type="submit"
      />
      {error && (
        <BackDrop closeModal={setError}>
          <Modal message={error} />
        </BackDrop>
      )}
    </StyledForm>
  );
};

export default Form;
