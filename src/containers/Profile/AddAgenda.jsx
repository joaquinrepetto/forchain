import React, { useState } from "react";
import {
  SectionForm,
  ButtonAgenda,
  ContainerAgendaForm,
} from "./profileStyles";
import InputForm from "../../components/InputForm/InputForm";
import theme from "../../theme";
import SelectForm from "../../components/SelectForm/SelectForm";
import {
  startTimeOptions,
  endTimeOptions,
} from "../../utils/data/options/options";
import {
  StyledInput,
  StyledTextArea,
  DeleteText,
  ContainerDeleteEntry,
} from "../../containers/Profile/profileStyles";
import PurpleButton from "../../components/Button/PurpleButton";

const AddAgenda = () => {
  const [showAgendaForm, setShowAgendaForm] = useState(false);

  return (
    <SectionForm>
      <ButtonAgenda
        onClick={() => {
          setShowAgendaForm(!showAgendaForm);
        }}
      >
        Agregar agenda
      </ButtonAgenda>
      {showAgendaForm && (
        <ContainerAgendaForm>
          <ContainerDeleteEntry>
            <DeleteText>Eliminar entrada</DeleteText>
          </ContainerDeleteEntry>
          <InputForm
            labelColor={theme.colors.white}
            placeHolderColor={theme.colors.darkBlue}
            type="text"
            placeholder="Título"
          />

          <SelectForm
            labelColor={theme.colors.white}
            placeHolderColor={theme.colors.darkBlue}
            placeholder="Hora de inicio"
            options={startTimeOptions}
          />

          <SelectForm
            labelColor={theme.colors.white}
            placeHolderColor={theme.colors.darkBlue}
            placeholder="Hora de finalización"
            options={endTimeOptions}
          />

          <StyledInput placeholder="Agregar anfitrión" />
          <StyledTextArea placeholder="Descripción..." />

          <PurpleButton cancel={true}>
            Agregar artículo a la agenda
          </PurpleButton>
        </ContainerAgendaForm>
      )}
    </SectionForm>
  );
};

export default AddAgenda;
