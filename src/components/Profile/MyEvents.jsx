import React from "react";
import PurpleButton from "../Button/PurpleButton";
import {
  MyEventsContainer,
  EventLine,
  EventLineContainer,
  ContainerActionButton,
  ContainerBtns,
  MyEventsIcon,
} from "../../containers/Profile/profileStyles";
import { TitleH2 } from "../Global/globalStyles";
import {
  EventImgContainer,
  EventInfo,
  EventInfoContainer,
  EventInfoLocation,
  EventsContainer,
  Event,
  EventImg,
  EventInfoTitle,
} from "../../containers/Tickets/ticketsStyles";
import CreateEvent from "../../containers/Profile/CreateEvent";
import theme from "../../theme";
import PencilIcon from "../../assets/imgs/lapiz.png";
import TrashIcon from "../../assets/imgs/basura.png";

const MyEvents = ({
  handleFirstModal,
  showFirstModal,
  handleSecondModal,
  showSecondModal,
}) => {
  return (
    <>
      <MyEventsContainer>
        <PurpleButton onClick={() => handleFirstModal()}>
          Crear evento
        </PurpleButton>
        <EventLineContainer>
          <EventLine />
        </EventLineContainer>
        <TitleH2>Mis eventos</TitleH2>
        <EventsContainer>
          <Event>
            <EventImgContainer>
              <EventImg src="https://framerusercontent.com/images/SG9mqUGOp1NtHIpIEpN7d5yGt2E.png" />
            </EventImgContainer>
            <EventInfoContainer>
              <EventInfoTitle>SDCONF</EventInfoTitle>
              <EventInfo>Sábado 11 de Noviembre | 18.00 hs</EventInfo>
              <EventInfoLocation>La Plata</EventInfoLocation>
            </EventInfoContainer>
            <ContainerBtns>
              <ContainerActionButton bgcolor={theme.colors.purpleBorder}>
                <MyEventsIcon src={PencilIcon} alt="Lapiz" />
              </ContainerActionButton>
              <ContainerActionButton bgcolor={theme.colors.inactive}>
                <MyEventsIcon src={TrashIcon} alt="Basura" />
              </ContainerActionButton>
            </ContainerBtns>
          </Event>
        </EventsContainer>
      </MyEventsContainer>
      {showFirstModal && (
        <CreateEvent
          handleFirstModal={handleFirstModal}
          showFirstModal={showFirstModal}
          handleSecondModal={handleSecondModal}
          showSecondModal={showSecondModal}
        />
      )}
    </>
  );
};

export default MyEvents;
