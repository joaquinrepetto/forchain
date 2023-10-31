import React from "react";
import { SectionForm, SectionFormTitle } from "./profileStyles";
import InputForm from "../../components/InputForm/InputForm";
import SelectForm from "../../components/SelectForm/SelectForm";

const BasicInformationForm = ({ typeOfEventOptions, categoriesOptions }) => {
  return (
    <SectionForm>
      <SectionFormTitle>Información básica</SectionFormTitle>
      <InputForm placeholder="Nombre del evento" type="text" />
      <SelectForm
        placeholder="Tipo de evento"
        type="text"
        options={typeOfEventOptions}
      />
      <SelectForm
        placeholder="Categorías"
        type="text"
        options={categoriesOptions}
      />
    </SectionForm>
  );
};

export default BasicInformationForm;
