import React from "react";
import {
  FormText,
  HiddenCheckbox,
  SectionForm,
  SectionFormTitle,
  ShowTimeContainer,
  StyledCheckbox,
  StyledLabel,
} from "./profileStyles";
import InputForm from "../../components/InputForm/InputForm";
import SelectForm from "../../components/SelectForm/SelectForm";

const DateAndTimeForm = ({
  startTimeOptions,
  endTimeOptions,
  timeZoneOptions,
}) => {
  return (
    <SectionForm>
      <SectionFormTitle>Fecha y hora</SectionFormTitle>
      <InputForm placeholder="El evento comienza" type="date" />
      <SelectForm
        placeholder="Hora de inicio"
        type="time"
        options={startTimeOptions}
      />
      <InputForm placeholder="El evento termina" type="date" />
      <SelectForm
        placeholder="Hora de finalización"
        type="time"
        options={endTimeOptions}
      />
      <ShowTimeContainer>
        <StyledLabel>
          <HiddenCheckbox />
          <StyledCheckbox />
          <FormText>¿Mostrar hora de finalización del evento?</FormText>
        </StyledLabel>
      </ShowTimeContainer>
      <SelectForm placeholder="Zona horaria" options={timeZoneOptions} />
    </SectionForm>
  );
};

export default DateAndTimeForm;
