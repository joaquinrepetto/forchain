import React, { useState } from "react";
import {
  SectionForm,
  SectionFormTitle,
  SpanTextModal,
  TextArea,
  TextAreaContainer,
  SpanTextArea,
} from "./profileStyles";

const DescriptionForm = () => {
  const [description, setDescription] = useState("");

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  return (
    <SectionForm>
      <SectionFormTitle>Descripción</SectionFormTitle>
      <SpanTextModal>
        Realiza una breve descripcion de tu evento. esta se vera en la parte
        superior del evento. (maximo 160 caracteres)
      </SpanTextModal>
      <TextAreaContainer>
        <TextArea
          onChange={handleDescription}
          value={description}
          maxLength="160"
        />
        <SpanTextArea>{description?.length} / 160</SpanTextArea>
      </TextAreaContainer>
    </SectionForm>
  );
};

export default DescriptionForm;
