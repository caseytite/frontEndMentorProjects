import { useRef, useState } from "react";
import { StyledForm } from "./styles/Form.styled";
import Button from "./Button";
import Modal from "./Modal";

const Form = ({ handleAddCard }) => {
  const [error, setError] = useState("");
  let titleEl = useRef("");
  let descriptionEl = useRef("");

  const sendNewCard = (e, title, description) => {
    e.preventDefault();

    if (!title) {
      setError("Enter a Title!");
      return;
    }
    if (!description) {
      setError("Enter a Description!");
      return;
    }

    handleAddCard(title, description);
    titleEl.current = "";
    descriptionEl.current = "";
    return;
  };

  return (
    <StyledForm>
      <label>Title</label>
      <input ref={titleEl} required />
      <label>Description</label>
      <textarea ref={descriptionEl} required />
      <Button
        bg="#ff0099"
        color="#fff"
        text={"Add"}
        onClick={(e) =>
          sendNewCard(e, titleEl.current.value, descriptionEl.current.value)
        }
      />
      {error && <Modal message={error} closeModal={setError} />}
    </StyledForm>
  );
};

export default Form;
