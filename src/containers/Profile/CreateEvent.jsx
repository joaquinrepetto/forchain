import React, { useState } from "react";
import Modal from "../../components/Modal/Modal";
import {
  TitleScreenContainer,
  TitleScreen,
} from "../../components/Global/globalStyles";
import {
  CreateEventContainer,
  CreateEventForm,
  ButtonsContainer,
  ContainerTitleArrow,
  IconArrow,
  IconArrowHidden,
} from "./profileStyles";
import {
  typeOfEventOptions,
  categoriesOptions,
  startTimeOptions,
  endTimeOptions,
  timeZoneOptions,
} from "../../utils/data/options/options";
import PurpleButton from "../../components/Button/PurpleButton";
import BasicInformationForm from "./BasicInformation";
import UbicationForm from "./UbicationForm";
import DateAndTimeForm from "./DateAndTimeForm";
import TagsForm from "./TagsForm";
import ArrowIconImg from "../../assets/imgs/arrow.svg";
import AddImagesForm from "./AddImagesForm";
import DescriptionForm from "./DescriptionForm";
import AddAgenda from "./AddAgenda";
import SuccessMessage from "../../components/SuccessMessage/SuccessMessage";

const CreateEvent = ({
  handleFirstModal,
  handleSecondModal,
  showSecondModal,
}) => {
  const [activeTab, setActiveTab] = useState("Lugar");
  const [tags, setTags] = useState(["Educación", "DesCi"]);
  const [inputValue, setInputValue] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleNavigateToProfile = () => {
    setShowSuccessModal(false);
    handleFirstModal();
  };

  const handleEventCreated = () => {
    setShowSuccessModal(true);
  };

  const handleAddTag = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      e.preventDefault();
      if (tags.length < 10) {
        setTags([...tags, inputValue.trim()]);
      }
      setInputValue("");
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags((prevTags) => prevTags.filter((tag) => tag !== tagToRemove));
  };

  const FormatTag = (tag) => {
    const maxChar = 7;
    if (tag.length > maxChar) {
      return tag.slice(0, maxChar) + "...";
    }
    return tag;
  };

  return (
    <>
      {showSuccessModal ? (
        <Modal handleCloseForm={handleFirstModal}>
          <SuccessMessage
            title="¡Felicitaciones!"
            subtitle="Tu evento ya está en línea"
            indication="Puedes editarlo en"
            buttonText="Mi perfil"
            acknowledgments="¡Gracias!"
            onClick={() => {
              handleNavigateToProfile();
            }}
          />
        </Modal>
      ) : (
        <>
          {showSecondModal ? (
            <Modal handleCloseForm={handleFirstModal}>
              <TitleScreenContainer>
                <ContainerTitleArrow>
                  <IconArrow
                    src={ArrowIconImg}
                    onClick={() => {
                      handleSecondModal();
                    }}
                  />
                  <TitleScreen>¡Crea tu evento!</TitleScreen>
                  <IconArrowHidden src={ArrowIconImg} />
                </ContainerTitleArrow>
              </TitleScreenContainer>
              <CreateEventContainer>
                <CreateEventForm
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  <AddImagesForm />
                  <DescriptionForm />
                  <AddAgenda />

                  <ButtonsContainer>
                    <PurpleButton
                      onClick={() => {
                        handleEventCreated();
                      }}
                    >
                      Publicar
                    </PurpleButton>
                    <PurpleButton
                      onClick={() => {
                        handleFirstModal();
                      }}
                      cancel={true}
                    >
                      Cancelar
                    </PurpleButton>
                  </ButtonsContainer>
                </CreateEventForm>
              </CreateEventContainer>
            </Modal>
          ) : (
            <Modal handleCloseForm={handleFirstModal}>
              <TitleScreenContainer>
                <TitleScreen>¡Crea tu evento!</TitleScreen>
              </TitleScreenContainer>
              <CreateEventContainer>
                <CreateEventForm
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  <BasicInformationForm
                    typeOfEventOptions={typeOfEventOptions}
                    categoriesOptions={categoriesOptions}
                  />
                  <UbicationForm
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                  />
                  <DateAndTimeForm
                    startTimeOptions={startTimeOptions}
                    endTimeOptions={endTimeOptions}
                    timeZoneOptions={timeZoneOptions}
                  />
                  <TagsForm
                    tags={tags}
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                    handleAddTag={handleAddTag}
                    handleRemoveTag={handleRemoveTag}
                    FormatTag={FormatTag}
                  />

                  <ButtonsContainer>
                    <PurpleButton
                      onClick={() => {
                        handleSecondModal();
                      }}
                    >
                      Guardar y continuar
                    </PurpleButton>
                    <PurpleButton
                      onClick={() => {
                        handleFirstModal();
                      }}
                      cancel={true}
                    >
                      Cancelar
                    </PurpleButton>
                  </ButtonsContainer>
                </CreateEventForm>
              </CreateEventContainer>
            </Modal>
          )}
        </>
      )}
    </>
  );
};

export default CreateEvent;
