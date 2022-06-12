import styled from "styled-components";

export const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px auto;
  width: 50%;
  input,
  textarea {
    margin: 10px 0;
    border-radius: 5px;
    border: 1px solid grey;
    padding: 10px;
  }
  input:focus,
  textarea:focus {
    outline: none;
  }
  textarea {
    height: 75px;
    resize: none;
  }
  button {
    margin-top: 10px;
    width: 50%;
    align-self: center;
  }
`;
