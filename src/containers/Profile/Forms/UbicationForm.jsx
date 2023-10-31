import React from "react";
import { SectionForm, SectionFormTitle } from "../profileStyles";
import CustomSwitch from "../../../components/Switch/CustomSwitch";
import InputForm from "../../../components/InputForm/InputForm";

const UbicationForm = ({ activeTab, setActiveTab }) => {
  return (
    <SectionForm>
      <SectionFormTitle>Ubicación</SectionFormTitle>
      <CustomSwitch
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabLabels={["Lugar", "Online"]}
      />
      {activeTab === "Lugar" ? (
        <InputForm placeholder="Ubicación" type="text" isLocation={true} />
      ) : null}
    </SectionForm>
  );
};

export default UbicationForm;
